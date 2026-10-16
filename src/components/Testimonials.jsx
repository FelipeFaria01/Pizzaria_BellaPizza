import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Carlos Eduardo',
    role: 'Cliente Frequente',
    comment: 'A melhor pizza que já comi na região! A massa é incrivelmente leve e o atendimento pelo site foi super rápido.',
    stars: 5,
    tag: 'Compra Verificada',
  },
  {
    id: 2,
    name: 'Mariana Lima',
    role: 'Cliente Delivery',
    comment: 'Chegou quentinha e dentro do prazo. A pizza de Margherita Especial é simplesmente sensacional!',
    stars: 5,
    tag: 'Pedido via WhatsApp',
  },
  {
    id: 3,
    name: 'Roberto Souza',
    role: 'Cliente Local',
    comment: 'Lugar aconchegante e pizzas com ingredientes visivelmente de alta qualidade. Recomendo de olhos fechados!',
    stars: 5,
    tag: 'Cliente do Salão',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-[#1F1F1F]">
      {/* Luz de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
            <Star size={14} className="fill-amber-400" />
            <span>Satisfação Garantida</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-['Cinzel'] tracking-tight text-white">
            O que nossos clientes dizem
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            A opinião de quem já experimentou e aprovou o nosso sabor.
          </p>
        </div>

        {/* Métrica Geral de Avaliações */}
        <div className="mb-12 p-6 rounded-2xl bg-[#141414] border border-[#262626] max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-black text-amber-400 font-sans">4.9</span>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 font-medium">Baseado em +1.200 avaliações de clientes</span>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-[#262626] hidden sm:block" />

          <div className="text-xs text-neutral-300 space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 font-bold text-amber-400">
              <CheckCircle2 size={16} />
              <span>99.4% de Aprovação</span>
            </div>
            <p className="text-neutral-400">Entregas no prazo e pizzas quentinhas</p>
          </div>
        </div>

        {/* Cards de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#141414] border border-[#262626] hover:border-amber-500/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl relative group"
            >
              <Quote size={40} className="text-amber-500/20 absolute top-6 right-6 group-hover:text-amber-500/30 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Estrelas */}
                <div className="flex text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400" />
                  ))}
                </div>

                {/* Comentário */}
                <p className="text-neutral-300 text-sm leading-relaxed font-normal italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Autor */}
              <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-base">{review.name}</h4>
                  <span className="text-xs text-neutral-400">{review.role}</span>
                </div>

                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-full font-semibold">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}