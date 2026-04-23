import React from 'react';
import { ShieldCheck, Truck, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "100% Originales",
      desc: "Garantizamos la autenticidad en cada gota de nuestras fragancias."
    },
    {
      icon: Truck,
      title: "Envíos en el día",
      desc: "Servicio exclusivo de entrega rápida para toda Formosa Capital."
    },
    {
      icon: MessageSquareQuote,
      title: "Asesoramiento Personalizado",
      desc: "Te ayudamos a encontrar tu perfume ideal según tus gustos."
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="text-center flex flex-col items-center"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gold-500 blur-xl opacity-20 rounded-full"></div>
                <Icon className="w-12 h-12 text-gold-500 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 font-sans max-w-xs">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustSection;
