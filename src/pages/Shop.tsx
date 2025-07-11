
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function Shop() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
  }, []);

  const products: Product[] = [
    {
      id: '1',
      name: 'WAVE RITUAL TEE',
      price: 45,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'ORGANIC COTTON T-SHIRT WITH MINIMALIST WAVE LOGO EMBROIDERY',
      category: 'T-SHIRTS'
    },
    {
      id: '2',
      name: 'LOWTIDE LOGO TEE',
      price: 42,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
      description: 'CLASSIC BLACK TEE WITH SUBTLE WAVE PATTERN PRINT',
      category: 'T-SHIRTS'
    },
    {
      id: '3',
      name: 'RITUAL WHITE TEE',
      price: 40,
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400&h=400&fit=crop',
      description: 'PREMIUM WHITE COTTON WITH EMBOSSED WAVE LOGO',
      category: 'T-SHIRTS'
    },
    {
      id: '4',
      name: 'OCEAN WAVE TEE',
      price: 48,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f8d2b?w=400&h=400&fit=crop',
      description: 'OVERSIZED FIT WITH HAND-DRAWN WAVE GRAPHIC',
      category: 'T-SHIRTS'
    },
    {
      id: '5',
      name: 'RITUAL HOODIE',
      price: 85,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      description: 'PREMIUM COTTON BLEND HOODIE WITH EMBROIDERED LOGO',
      category: 'HOODIES'
    },
    {
      id: '6',
      name: 'LOWTIDE HOODIE',
      price: 90,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      description: 'HEAVYWEIGHT FLEECE WITH MINIMALIST BRANDING',
      category: 'HOODIES'
    }
  ];

  const handlePurchase = (product: Product) => {
    if (!user) {
      toast({
        title: "SIGN IN REQUIRED",
        description: "Please sign in to make a purchase.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    toast({
      title: "PURCHASE INITIATED",
      description: `Added ${product.name} to your cart.`,
    });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner - Top Third */}
      <motion.section 
        className="relative h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Lifestyle Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.h1 
            className="font-display text-5xl md:text-8xl mb-6 tracking-widest"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            SHOP
          </motion.h1>
          <motion.p 
            className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            CAREFULLY CURATED OBJECTS FOR YOUR DAILY RITUALS. EACH PIECE IS SELECTED TO ENHANCE YOUR CONNECTION TO THE PRESENT MOMENT.
          </motion.p>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        className="py-32 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUpVariants}
          >
            <motion.h2 
              className="font-display text-4xl md:text-6xl text-foreground mb-8 tracking-widest"
              whileHover={{ 
                fontFamily: '"Crimson Text", serif',
                transition: { duration: 0.3 }
              }}
            >
              COLLECTION
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer"
                variants={fadeInUpVariants}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <motion.div 
                    className="aspect-square overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                  
                  <div className="p-8 space-y-4">
                    <div className="space-y-2">
                      <p className="font-body text-xs text-muted-foreground tracking-widest">
                        {product.category}
                      </p>
                      <h3 className="font-display text-xl text-foreground tracking-wide">
                        {product.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed tracking-wide">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="font-body-medium text-xl text-foreground tracking-wider">
                        ${product.price}
                      </span>
                      <motion.button
                        onClick={() => handlePurchase(product)}
                        className="btn-animated-primary tracking-widest text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        ADD TO CART
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {!user && (
            <motion.div 
              className="text-center mt-20 p-12 border border-border rounded-sm bg-muted/20"
              variants={fadeInUpVariants}
            >
              <h3 className="font-display text-2xl text-foreground mb-4 tracking-wider">
                SIGN IN TO PURCHASE
              </h3>
              <p className="font-body text-muted-foreground mb-8 tracking-wide">
                CREATE AN ACCOUNT TO COMPLETE YOUR PURCHASE AND ACCESS EXCLUSIVE PRODUCTS.
              </p>
              <motion.button
                onClick={() => navigate('/login')}
                className="btn-animated-primary tracking-widest"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                SIGN IN
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
