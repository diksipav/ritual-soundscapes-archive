import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
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

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
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
    { href: '/live', label: language === 'EN' ? 'LIVE' : 'EN VIVO' },
    { href: '/archive', label: language === 'EN' ? 'ARCHIVE' : 'ARCHIVO' },
    { href: '/events', label: language === 'EN' ? 'EVENTS' : 'EVENTOS' },
    { href: '/rituals', label: language === 'EN' ? 'RITUALS' : 'RITUALES' },
    { href: '/shop', label: language === 'EN' ? 'SHOP' : 'TIENDA' },
  ];

  const authLink = user 
    ? { href: '/account', label: language === 'EN' ? 'ACCOUNT' : 'CUENTA' }
    : { href: '/login', label: language === 'EN' ? 'LOG IN' : 'INICIAR SESIÓN' };

  return (
    <>
      {/* Desktop Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 p-6 ${className}`}>
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-display text-xl tracking-wide text-foreground hover:text-accent transition-colors duration-300"
            onClick={closeOverlay}
          >
            LOWTIDE RITUAL
          </Link>
          
          <button
            onClick={toggleOverlay}
            className="hidden md:flex items-center gap-2 font-body text-sm text-foreground hover:text-accent transition-colors duration-300"
          >
            {isOverlayOpen ? <X size={16} /> : <Menu size={16} />}
            <span>{language === 'EN' ? 'MENU' : 'MENÚ'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="flex items-center justify-around py-3 px-4">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-xs text-center transition-colors duration-300 ${
                location.pathname === link.href 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Desktop Navigation Overlay */}
      {isOverlayOpen && (
        <div 
          className="fixed inset-0 z-50 nav-overlay hidden md:flex items-center justify-center"
          onClick={closeOverlay}
        >
          <div 
            className="text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mb-12">
              <ul className="space-y-8">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.href}
                    className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link
                      to={link.href}
                      className="nav-link"
                      onClick={closeOverlay}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li 
                  className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${navLinks.length * 0.1}s` }}
                >
                  {user ? (
                    <div className="space-y-4">
                      <Link
                        to={authLink.href}
                        className="nav-link block"
                        onClick={closeOverlay}
                      >
                        {authLink.label}
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="nav-link"
                      >
                        {language === 'EN' ? 'SIGN OUT' : 'CERRAR SESIÓN'}
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={authLink.href}
                      className="nav-link"
                      onClick={closeOverlay}
                    >
                      {authLink.label}
                    </Link>
                  )}
                </li>
              </ul>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setLanguage('EN')}
                className={`font-body text-sm transition-colors duration-300 ${
                  language === 'EN' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => setLanguage('ES')}
                className={`font-body text-sm transition-colors duration-300 ${
                  language === 'ES' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}