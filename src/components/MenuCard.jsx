import React from 'react';
import { Plus } from 'lucide-react';

export default function MenuCard({ item }) {
  const whatsappUrl = `https://wa.me/2190000000?text=Olá!%20Gostaria%20de%20pedir:%20${encodeURIComponent(item.name)}`;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col justify-between group">
      <div>
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.tag && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase">
              {item.tag}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">{item.description}</p>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between border-t border-neutral-800/50 mt-auto">
        <span className="text-2xl font-black text-amber-500">R$ {item.price.toFixed(2)}</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 bg-neutral-800 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
        >
          <Plus size={16} /> Pedir
        </a>
      </div>
    </div>
  );
}