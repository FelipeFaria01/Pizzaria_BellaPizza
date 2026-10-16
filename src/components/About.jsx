import React from 'react';
import { Palette, Rocket, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0D0D0D] text-white relative overflow-hidden border-t border-[#1F1F1F]">
      {/* Luzes de Fundo (Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner de Destaque - Mensagem para Clientes */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0A0A] via-[#141414] to-[#1A0C08] border border-amber-500/30 shadow-2xl relative">
          <div className="absolute -top-3.5 left-8 bg-amber-500 text-neutral-950 font-black text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>Demonstração de Trabalho</span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-['Cinzel'] tracking-tight text-white! leading-snug">
              Transformamos Ideias em Sites de Qualidade
            </h2>
            <p className="text-neutral-300 text-base sm:text-xl font-medium leading-relaxed">
              Esse site é uma demonstração do que nossa empresa é capaz de desenvolver. 
              Ele mostra <span className="text-amber-400 font-bold">design</span> atraente, <span className="text-amber-400 font-bold">estrutura</span> organizada, <span className="text-amber-400 font-bold">otimização</span> rápida e todo o nosso <span className="text-amber-400 font-bold">profissionalismo</span> para valorizar o seu negócio.
            </p>
          </div>
        </div>

        {/* Grid de Benefícios em Linguagem Simples */}
        <div className="grid md:grid-cols-4 gap-6">
          
          <div className="bg-[#141414] border border-[#262626] p-6 rounded-2xl space-y-3 hover:border-red-600/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center font-bold">
              <Palette size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-white">Visual Moderno</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Um visual bonito e chamativo que passa confiança para o seu cliente e destaca sua marca da concorrência.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] p-6 rounded-2xl space-y-3 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <Rocket size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-white">Abertura Rápida</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Carregamento leve e rápido no celular ou computador, sem travamentos ou demoras ao abrir as páginas.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] p-6 rounded-2xl space-y-3 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-white">Fácil de Usar</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Navegação simples e intuitiva para que qualquer pessoa encontre as informações e peça sem complicação.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] p-6 rounded-2xl space-y-3 hover:border-red-600/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-white">Garantia de Qualidade</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Entregamos um site funcionando perfeitamente em todas as telas, pronto para atrair mais vendas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}