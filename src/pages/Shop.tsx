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
      name: 'Wave Ritual Tee',
      price: 45,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'Organic cotton t-shirt with minimalist wave logo embroidery'
    },
    {
      id: '2',
      name: 'Lowtide Logo Tee',
      price: 42,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
      description: 'Classic black tee with subtle wave pattern print'
    },
    {
      id: '3',
      name: 'Ritual White Tee',
      price: 40,
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400&h=400&fit=crop',
      description: 'Premium white cotton with embossed wave logo'
    },
    {
      id: '4',
      name: 'Ocean Wave Tee',
      price: 48,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f8d2b?w=400&h=400&fit=crop',
      description: 'Oversized fit with hand-drawn wave graphic'
    }
  ];

  const handlePurchase = (product: Product) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to make a purchase.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    // Here you would integrate with payment processing
    toast({
      title: "Purchase initiated",
      description: `Added ${product.name} to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl text-foreground mb-6">Shop</h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated objects for your daily rituals. Each piece is selected to enhance your connection to the present moment.
          </p>
        </div>

        <div className="grid-elegant">
          {products.map((product) => (
            <div key={product.id} className="card-elegant group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display text-xl text-foreground">{product.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-medium text-lg text-foreground">${product.price}</span>
                  <button
                    onClick={() => handlePurchase(product)}
                    className="btn-animated-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!user && (
          <div className="text-center mt-16 p-8 border border-border rounded-sm bg-muted/20">
            <h3 className="font-display text-xl text-foreground mb-2">Sign in to purchase</h3>
            <p className="font-body text-muted-foreground mb-4">
              Create an account to complete your purchase and access exclusive products.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="btn-animated-primary"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}