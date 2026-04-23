import React from 'react';
import { motion } from 'framer-motion';

const FragranceCard = ({ id, name, brand, image, fallbackImage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-gold-500/50 rounded-xl overflow-hidden transition-all duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
        <img 
          src={image || fallbackImage} 
          alt={`${name} de ${brand}`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />
        {/* Subtle dark gradient overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2">{brand}</span>
        <h3 className="text-xl font-serif text-white font-medium mb-6 leading-tight">{name}</h3>
        
        <div className="mt-auto">
          <a
            href={`https://wa.me/num?text=Hola, quiero consultar la disponibilidad de ${name} de ${brand}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold text-sm py-3 rounded-lg transition-colors"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FragranceCard;
