
import { motion } from 'framer-motion';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'LOWTIDE RITUALS SWEATSHIRT',
      price: '€65',
      image: '/lovable-uploads/57090520-757f-44b7-9710-bff6b34ba393.png',
      description: 'Organic cotton sweatshirt with embroidered LOWTIDE RITUALS logo in mint green'
    },
    {
      id: 2,
      name: 'LOWTIDE RITUALS SWEATSHIRT',
      price: '€65',
      image: '/lovable-uploads/12078ba9-7f57-4cf9-b26c-f5bad90d4c67.png',
      description: 'Premium beige sweatshirt featuring LOWTIDE RITUALS MUSIC circular design'
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
    <div className="min-h-screen bg-background">
      {/* Hero Section with Mountain Background */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Epic Mountain Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1200&h=800&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-6 sm:mb-8 tracking-wider"
            variants={fadeInUpVariants}
          >
            JOIN THE TRIBE
          </motion.h1>
          <motion.p 
            className="font-body text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed tracking-wide"
            variants={fadeInUpVariants}
          >
            BECOME PART OF THE LOWTIDE RITUAL COMMUNITY WITH CAREFULLY CRAFTED ITEMS THAT EMBODY OUR PHILOSOPHY
          </motion.p>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6 tracking-wider">
              RITUAL WEAR
            </h2>
            <p className="font-body text-muted-foreground tracking-wide text-sm sm:text-base">
              PREMIUM APPAREL FOR THE CONSCIOUS LISTENER
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
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
                <div className="aspect-square bg-muted/20 rounded-sm mb-4 sm:mb-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-foreground group-hover:text-accent transition-colors duration-300 tracking-wide mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-medium text-lg sm:text-lg text-accent tracking-wider">
                      {product.price}
                    </span>
                    <motion.button 
                      className="btn-animated-secondary text-xs sm:text-sm tracking-widest"
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
        className="py-16 sm:py-32 px-4 sm:px-6 bg-muted/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-6xl text-foreground mb-6 sm:mb-8 tracking-wider"
            variants={fadeInUpVariants}
          >
            MORE COMING SOON
          </motion.h2>
          <motion.p 
            className="font-body text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed tracking-wide px-2"
            variants={fadeInUpVariants}
          >
            WE ARE CAREFULLY CURATING MORE ITEMS TO SUPPORT YOUR RITUAL PRACTICE. 
            SIGN UP FOR UPDATES TO BE THE FIRST TO KNOW WHEN NEW PRODUCTS LAUNCH.
          </motion.p>
          <motion.div variants={fadeInUpVariants}>
            <motion.button 
              className="btn-animated-primary tracking-widest text-sm sm:text-base"
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
