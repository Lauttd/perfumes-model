import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FragranceGrid from './components/FragranceGrid';
import AromaCategories from './components/AromaCategories';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden selection:bg-gold-500 selection:text-black">
      <Header />
      
      <main>
        <Hero />
        <AromaCategories />
        <FragranceGrid />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
