import React from 'react';
import { ArrowRight, Flame, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo - Copywriting */}
        <div className="space-y-6 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Flame size={14} /> Fermentação Natural & Forno a Lenha
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            A autêntica pizza <span className="text-amber-500">artesanal</span> na sua mesa.
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Massas leves com descanso de 48 horas, molho de tomate italiano artesanal e ingredientes selecionados de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#cardapio"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-600/25"
            >
              <span>Ver Cardápio</span>
              <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <Clock size={16} className="text-amber-500" /> Entrega média: 30-45 min
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem de Destaque */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl -z-10" />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
            alt="Pizza Artesanal saindo do forno"
            className="w-full max-w-md md:max-w-none rounded-3xl object-cover shadow-2xl border border-neutral-800"
          />
        </div>
      </div>
    </section>
  );
}