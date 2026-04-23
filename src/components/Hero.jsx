import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background with abstract dark/gold gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1505] via-black to-black -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center z-10"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Fragancias que definen <span className="text-gold-500 italic block mt-2">tu estilo</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 font-sans mb-10 max-w-2xl mx-auto">
          Importados originales y lo mejor de la perfumería árabe en Formosa. Eleva tu presencia con aromas inolvidables.
        </p>

        <motion.a
          href="https://wa.me/num"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gold-500 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow"
        >
          Hacer un pedido por WhatsApp
        </motion.a>
      </motion.div>

      {/* Decorative gold elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
