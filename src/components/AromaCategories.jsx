import React from 'react';
import { Leaf, Flame, Candy, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Amaderados', icon: Leaf, desc: 'Profundos y terrosos' },
  { name: 'Cítricos', icon: Flame, desc: 'Frescos y vibrantes' }, // Flame as abstract citrus energy, or standard sun
  { name: 'Dulces', icon: Candy, desc: 'Seductores y cálidos' },
  { name: 'Especiales', icon: Sparkles, desc: 'Nichos y árabes' },
];

const AromaCategories = () => {
  return (
    <section className="py-20 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-white font-medium mb-2">Encuentra tu Esencia</h2>
          <p className="text-gray-400 font-sans">Explora notas que conectan con tu personalidad.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.name} 
                className="flex flex-col items-center justify-center p-8 bg-black border border-white/5 hover:border-gold-500/30 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/5 group-hover:bg-gold-500/10 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-serif text-white mb-1 group-hover:text-gold-500 transition-colors">{cat.name}</h3>
                <p className="text-xs text-gray-500 text-center">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AromaCategories;
