
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
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
      name: 'LOWTIDE RITUAL TEE',
      price: 45,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'ORGANIC COTTON T-SHIRT WITH MINIMALIST WAVE LOGO EMBROIDERY'
    },
    {
      id: '2',
      name: 'RITUAL FREQUENCIES TEE',
      price: 42,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
      description: 'CLASSIC BLACK TEE WITH SUBTLE WAVE PATTERN PRINT'
    },
    {
      id: '3',
      name: 'OCEAN RITUAL WHITE TEE',
      price: 40,
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400&h=400&fit=crop',
      description: 'PREMIUM WHITE COTTON WITH EMBOSSED WAVE LOGO'
    },
    {
      id: '4',
      name: 'COASTAL MEDITATION TEE',
      price: 48,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f8d2b?w=400&h=400&fit=crop',
      description: 'OVERSIZED FIT WITH HAND-DRAWN WAVE GRAPHIC'
    },
    {
      id: '5',
      name: 'SUNSET SESSIONS HOODIE',
      price: 75,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      description: 'PREMIUM HOODIE WITH GRADIENT SUNSET DESIGN'
    },
    {
      id: '6',
      name: 'RITUAL TANK TOP',
      price: 35,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop',
      description: 'BREATHABLE TANK WITH MINIMALIST LOGO PLACEMENT'
    }
  ];

  const handlePurchase = (product: Product) => {
    if (!user) {
      toast({
        title: "SIGN IN REQUIRED",
        description: "PLEASE SIGN IN TO MAKE A PURCHASE.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    toast({
      title: "PURCHASE INITIATED",
      description: `ADDED ${product.name} TO YOUR CART.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - More elegant with epic landscape */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&h=1080&fit=crop"
          alt="Epic landscape with car - lifestyle inspiration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-sm text-sm font-body-medium tracking-wider animate-fade-in">
              NOW LIVE
            </div>
            <h1 className="font-display text-6xl md:text-8xl mb-8 tracking-wide animate-fade-in delay-300">RITUAL WEAR</h1>
            <p className="font-body text-xl md:text-2xl animate-fade-in delay-500 leading-relaxed max-w-3xl mx-auto">
              CAREFULLY CURATED OBJECTS FOR YOUR DAILY RITUALS. EACH PIECE IS SELECTED TO ENHANCE YOUR CONNECTION TO THE PRESENT MOMENT.
            </p>
            <div className="animate-fade-in delay-700">
              <button className="inline-flex items-center justify-center px-8 py-4 font-body-medium text-sm bg-white text-black rounded-sm shadow-sm transition-all duration-300 hover:bg-white/90 hover:scale-105 uppercase tracking-wide">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 tracking-wide">COLLECTION</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              ESSENTIAL PIECES FOR THE MODERN RITUALIST
            </p>
          </div>

          <div className="grid-elegant">
            {products.map((product, index) => (
              <div key={product.id} className="card-elegant group cursor-pointer scroll-fade-in transform transition-all duration-700 hover:scale-105" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden rounded-sm mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-foreground uppercase tracking-wider">{product.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-body-medium text-xl text-foreground">${product.price}</span>
                    <button
                      onClick={() => handlePurchase(product)}
                      className="inline-flex items-center justify-center px-6 py-3 font-body-medium text-sm text-primary-foreground bg-primary rounded-sm shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 uppercase tracking-wide"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!user && (
        <section className="py-20 px-6 bg-muted/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl text-foreground mb-4 tracking-wide">JOIN THE RITUAL</h3>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              CREATE AN ACCOUNT TO COMPLETE YOUR PURCHASE AND ACCESS EXCLUSIVE PRODUCTS.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="inline-flex items-center justify-center px-8 py-3 font-body-medium text-sm text-primary-foreground bg-primary rounded-sm shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-105 uppercase tracking-wide"
            >
              SIGN IN
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
