
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'RITUAL TOTE BAG',
      price: '€35',
      image: '/placeholder.svg',
      description: 'Organic cotton tote bag with embroidered LOWTIDE RITUAL logo'
    },
    {
      id: 2,
      name: 'MEDITATION CUSHION',
      price: '€85',
      image: '/placeholder.svg', 
      description: 'Hand-crafted meditation cushion filled with organic buckwheat hulls'
    },
    {
      id: 3,
      name: 'RITUAL CANDLE SET',
      price: '€45',
      image: '/placeholder.svg',
      description: 'Set of three soy candles with carefully selected essential oils'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUpVariants}>
            <ShoppingBag className="mx-auto mb-8 text-accent" size={64} />
          </motion.div>
          <motion.h1 
            className="font-display text-5xl md:text-7xl text-foreground mb-8 tracking-wider"
            variants={fadeInUpVariants}
          >
            RITUAL SHOP
          </motion.h1>
          <motion.p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide"
            variants={fadeInUpVariants}
          >
            CAREFULLY CURATED ITEMS TO ENHANCE YOUR MINDFUL LISTENING PRACTICE AND RITUAL EXPERIENCES
          </motion.p>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 tracking-wider">
              FEATURED ITEMS
            </h2>
            <p className="font-body text-muted-foreground tracking-wide">
              TOOLS AND ACCESSORIES FOR YOUR RITUAL PRACTICE
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="card-elegant group cursor-pointer"
                variants={fadeInUpVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-muted/20 rounded-sm mb-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300 tracking-wide mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-medium text-lg text-accent tracking-wider">
                      {product.price}
                    </span>
                    <motion.button 
                      className="btn-animated-secondary text-sm tracking-widest"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ADD TO CART
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section 
        className="py-32 px-6 bg-muted/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-foreground mb-8 tracking-wider"
            variants={fadeInUpVariants}
          >
            MORE COMING SOON
          </motion.h2>
          <motion.p 
            className="font-body text-lg text-muted-foreground mb-12 leading-relaxed tracking-wide"
            variants={fadeInUpVariants}
          >
            WE ARE CAREFULLY CURATING MORE ITEMS TO SUPPORT YOUR RITUAL PRACTICE. 
            SIGN UP FOR UPDATES TO BE THE FIRST TO KNOW WHEN NEW PRODUCTS LAUNCH.
          </motion.p>
          <motion.div variants={fadeInUpVariants}>
            <motion.button 
              className="btn-animated-primary tracking-widest"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              NOTIFY ME
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Shop;
