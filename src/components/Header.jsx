import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-40 bg-black/80 backdrop-blur-md border-b flex items-center justify-between border-gold-500/20 px-6 py-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold font-serif text-white tracking-widest uppercase">
          SHOOTERS
        </h1>
      </div>
      
      <nav className="hidden md:flex gap-8 items-center font-sans text-sm font-medium text-gray-300">
        <a href="#colecciones" className="hover:text-gold-500 transition-colors">Colecciones</a>
        <a href="#marcas" className="hover:text-gold-500 transition-colors">Marcas</a>
        <a href="#contacto" className="hover:text-gold-500 transition-colors">Contacto</a>
      </nav>

      <div className="flex items-center">
        <button className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-full font-medium transition-colors text-sm">
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">Envíos a Domicilio</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
