import React, { useState } from 'react';
import MenuCard from './MenuCard';

const MENU_ITEMS = [
  {
    id: 1,
    category: 'tradicionais',
    name: 'Margherita Especial',
    description: 'Molho artesanal, muçarela de búfala, manjericão fresco e azeite trufado.',
    price: 58.00,
    tag: 'Mais Pedida',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'especiais',
    name: 'Calabresa Artesanal',
    description: 'Calabresa moída, cebola roxa caramelizada, catupiry original e azeitonas pretas.',
    price: 64.00,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'doces',
    name: 'Nutella com Morango',
    description: 'Creme de Nutella abundante, morangos frescos e raspas de chocolate meio amargo.',
    price: 49.00,
    tag: 'Novidade',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredItems = activeCategory === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="cardapio" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Nosso Cardápio</h2>
          <p className="text-neutral-400">Pizzas preparadas diariamente com ingredientes selecionados.</p>
        </div>

        {/* Categorias */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          {['todos', 'tradicionais', 'especiais', 'doces'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold capitalize whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-neutral-950'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Itens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}