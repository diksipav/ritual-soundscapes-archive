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
      name: 'Ritual Tote Bag',
      price: 65,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      description: 'Hand-woven cotton tote with embossed Lowtide logo'
    },
    {
      id: '2',
      name: 'Essential Incense Set',
      price: 45,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop',
      description: 'Curated collection of natural incense for your rituals'
    },
    {
      id: '3',
      name: 'Meditation Journal',
      price: 35,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
      description: 'Handbound journal for capturing your journey'
    },
    {
      id: '4',
      name: 'Ritual Candle',
      price: 28,
      image: 'https://images.unsplash.com/photo-1602874801006-bc8061a8a062?w=400&h=400&fit=crop',
      description: 'Soy wax candle with natural botanical elements'
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
                  <Button
                    onClick={() => handlePurchase(product)}
                    className="btn-primary"
                  >
                    Add to Cart
                  </Button>
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
            <Button
              onClick={() => navigate('/login')}
              className="btn-primary"
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}