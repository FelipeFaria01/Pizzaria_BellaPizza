import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import LocationContact from './components/LocationContact';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased text-neutral-100">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About/>
        <LocationContact />
        <Testimonials/>
      </main>
      <footer className="bg-neutral-950 border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        <p>© 2026 BellaPizza - Desenvolvido por Felipe Rodrigo</p>
      </footer>
    </div>
  );
}