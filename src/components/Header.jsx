import React, { useState } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900/95 backdrop-blur-md z-50 border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-wider text-amber-500 uppercase">
          Bella<span className="text-red-500">Pizza</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-neutral-300">
          <a href="#cardapio" className="hover:text-amber-500 transition-colors">Cardápio</a>
          <a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre Nós</a>
          <a href="#depoimentos" className="hover:text-amber-500 transition-colors">Avaliações</a>
          <a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a>
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-red-600/30"
          >
            <ShoppingBag size={18} />
            <span>Fazer Pedido</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-neutral-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-4">
          <a href="#cardapio" onClick={() => setIsOpen(false)} className="block py-2 text-neutral-300 font-medium">Cardápio</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="block py-2 text-neutral-300 font-medium">Sobre Nós</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block py-2 text-neutral-300 font-medium">Avaliações</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="block py-2 text-neutral-300 font-medium">Contato</a>
          <a
            href="https://wa.me/2190000000"
            className="flex justify-center items-center gap-2 bg-red-600 text-white w-full py-3 rounded-xl font-bold"
          >
            <ShoppingBag size={18} />
            <span>Fazer Pedido</span>
          </a>
        </div>
      )}
    </header>
  );
}