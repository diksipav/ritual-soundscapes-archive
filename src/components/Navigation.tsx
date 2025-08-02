
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, Youtube } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');
  const location = useLocation();
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.7]);
  const logoY = useTransform(scrollY, [0, 200], [0, -10]);
  
  const showCompactLogo = useTransform(scrollY, [150, 300], [0, 1]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const toggleOverlay = () => setIsOverlayOpen(!isOverlayOpen);
  const closeOverlay = () => setIsOverlayOpen(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    closeOverlay();
  };

  const navLinks = [
    { href: '/archive', label: language === 'EN' ? 'ARCHIVE' : 'ARCHIVO' },
    { href: '/events', label: language === 'EN' ? 'EVENTS' : 'EVENTOS' },
    { href: '/rituals', label: language === 'EN' ? 'BODY AND MIND' : 'CUERPO Y MENTE' },
    { href: '/shop', label: language === 'EN' ? 'JOIN THE TRIBE' : 'ÚNETE A LA TRIBU' },
  ];

  const authLink = user 
    ? { href: '/account', label: language === 'EN' ? 'ACCOUNT' : 'CUENTA' }
    : { href: '/login', label: language === 'EN' ? 'LOG IN' : 'INICIAR SESIÓN' };

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Dynamic Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-40 p-6 ${className}`}
        style={{ 
          backgroundColor: `hsla(var(--background), ${headerOpacity.get()})`,
          backdropFilter: headerOpacity.get() > 0.1 ? 'blur(20px)' : 'none'
        }}
      >
        <div className="flex items-center justify-between">
          {/* Dynamic Logo - Always Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" onClick={closeOverlay}>
              <motion.div 
                className="font-display text-xl tracking-widest text-foreground hover:text-accent transition-colors duration-300"
                style={{ scale: logoScale, y: logoY }}
              >
                {/* Full Logo - visible at top */}
                <motion.div
                  style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
                  className="absolute inset-0 whitespace-nowrap text-center"
                >
                  <div>LOWTIDE</div>
                  <div>RITUAL</div>
                </motion.div>
                
                {/* Compact Logo - visible when scrolled */}
                <motion.span
                  style={{ opacity: showCompactLogo }}
                  className="text-xl font-bold tracking-widest"
                >
                  LTR
                </motion.span>
              </motion.div>
            </Link>
          </div>

          {/* Menu Button - Desktop */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <motion.button
              onClick={toggleOverlay}
              className="flex items-center gap-2 font-body text-sm text-foreground hover:text-accent transition-colors duration-300 tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOverlayOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOverlayOpen ? <X size={16} /> : <Menu size={16} />}
              </motion.div>
              <span>{language === 'EN' ? 'MENU' : 'MENÚ'}</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="flex items-center justify-around py-3 px-4">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-xs text-center transition-colors duration-300 tracking-wider ${
                location.pathname === link.href 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@LOWTIDERITUALMusic/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-center transition-colors duration-300 tracking-wider text-muted-foreground hover:text-foreground"
          >
            <Youtube size={16} className="mx-auto" />
          </a>
        </div>
      </nav>

      {/* Desktop Navigation Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div 
            className="fixed inset-0 z-50 nav-overlay hidden md:flex items-center justify-center"
            onClick={closeOverlay}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div 
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mb-16">
                <motion.ul 
                  className="space-y-12"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {navLinks.map((link) => (
                    <motion.li key={link.href} variants={itemVariants}>
                      <Link
                        to={link.href}
                        className="nav-link text-3xl font-display tracking-widest hover:scale-105 transition-all duration-300"
                        onClick={closeOverlay}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li variants={itemVariants}>
                    <a
                      href="https://www.youtube.com/@LOWTIDERITUALMusic/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-3xl font-display tracking-widest hover:scale-105 transition-all duration-300 flex items-center gap-4 justify-center"
                      onClick={closeOverlay}
                    >
                      <Youtube size={32} />
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    {user ? (
                      <div className="space-y-6">
                        <Link
                          to={authLink.href}
                          className="nav-link text-3xl font-display tracking-widest hover:scale-105 transition-all duration-300 block"
                          onClick={closeOverlay}
                        >
                          {authLink.label}
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="nav-link text-3xl font-display tracking-widest hover:scale-105 transition-all duration-300"
                        >
                          {language === 'EN' ? 'SIGN OUT' : 'CERRAR SESIÓN'}
                        </button>
                      </div>
                    ) : (
                      <Link
                        to={authLink.href}
                        className="nav-link text-3xl font-display tracking-widest hover:scale-105 transition-all duration-300"
                        onClick={closeOverlay}
                      >
                        {authLink.label}
                      </Link>
                    )}
                  </motion.li>
                </motion.ul>
              </nav>

              {/* Language Switcher */}
              <motion.div 
                className="flex items-center justify-center gap-6"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => setLanguage('EN')}
                  className={`font-body text-lg transition-colors duration-300 tracking-widest ${
                    language === 'EN' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  EN
                </motion.button>
                <span className="text-muted-foreground">|</span>
                <motion.button
                  onClick={() => setLanguage('ES')}
                  className={`font-body text-lg transition-colors duration-300 tracking-widest ${
                    language === 'ES' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ES
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
