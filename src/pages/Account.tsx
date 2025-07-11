import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

export default function Account() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        navigate('/login');
        return;
      }
      setUser(session.user);
      setIsLoading(false);
    };

    getUser();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      navigate('/');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-body text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl text-foreground mb-4">Account</h1>
          <p className="font-body text-muted-foreground">Manage your Lowtide Ritual experience</p>
        </div>

        <div className="card-elegant mb-8">
          <h2 className="font-display text-xl text-foreground mb-4">Profile Information</h2>
          <div className="space-y-3">
            <div>
              <span className="font-body-medium text-sm text-muted-foreground">Email</span>
              <p className="font-body text-foreground">{user?.email}</p>
            </div>
            <div>
              <span className="font-body-medium text-sm text-muted-foreground">Member Since</span>
              <p className="font-body text-foreground">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <div className="card-elegant mb-8">
          <h2 className="font-display text-xl text-foreground mb-4">Order History</h2>
          <p className="font-body text-muted-foreground">
            Your purchase history will appear here once you make your first order.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="btn-secondary"
          >
            Back to Home
          </Button>
          <Button
            onClick={handleSignOut}
            variant="destructive"
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}