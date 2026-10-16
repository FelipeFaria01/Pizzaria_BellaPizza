import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contato" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Informações de Contato e Horários */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-black text-white! mb-4">Venha nos Visitar ou Peça Delivery</h2>
            <p className="text-neutral-400">Entregamos em até 8km de distância com embalagens térmicas exclusivas.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Endereço</h4>
                <p className="text-neutral-400">Rua das Pizzas, 123 - Centro, Rio de Janeiro - RJ</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Horário de Funcionamento</h4>
                <p className="text-neutral-400">Terça a Domingo: 18h00 às 23h30</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp / Pedidos</h4>
                <p className="text-neutral-400">(21) 90000-0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa Embed Fictício */}
        <div className="h-80 w-full bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 relative">
          <iframe
            title="Google Maps Location"
            className="w-full h-full grayscale contrast-125 opacity-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.206411302839!2d-43.172896!3d-22.9068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzI0LjYiUyA0M8KwMTAnMjIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}