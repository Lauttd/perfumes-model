import React from 'react';
import FragranceCard from './FragranceCard';

const products = [
  {
    id: 1,
    name: "Sauvage Elixir",
    brand: "Dior",
    image: "https://images.unsplash.com/photo-1595188814981-d1c95350c3d4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Oud Wood",
    brand: "Tom Ford",
    image: "https://images.unsplash.com/photo-1595535567702-8e6f11da0c5c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Wood Sage & Sea Salt",
    brand: "Jo Malone",
    image: "https://images.unsplash.com/photo-1594035988087-fabfb953cd30?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Bleu de Chanel",
    brand: "Chanel",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Intense Oud (Nicho Árabe)",
    brand: "Lattafa / By K.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
  }
];

const FragranceGrid = () => {
  return (
    <section id="colecciones" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-white font-bold mb-4">Colección Destacada</h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <FragranceCard 
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            image={product.image}
            fallbackImage="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop"
          />
        ))}
      </div>
    </section>
  );
};

export default FragranceGrid;
