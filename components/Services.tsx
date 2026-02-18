
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-bg-dark text-white rounded-[3rem] mx-4 shadow-3xl overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#11d452 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="px-8 md:px-12 mb-10 relative z-10">
        <h3 className="text-3xl font-serif font-bold mb-2">Nuestros Servicios</h3>
        <p className="text-white/60">Escalables según la etapa de tu negocio.</p>
      </div>

      <div className="flex overflow-x-auto gap-6 px-8 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory relative z-10">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className={`min-w-[300px] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-md border p-8 rounded-[2.5rem] flex flex-col gap-6 transition-all duration-300 hover:bg-white/10 ${service.isPopular ? 'border-primary/50 ring-1 ring-primary/20 scale-105' : 'border-white/10'}`}
          >
            {service.isPopular && (
              <div className="self-start bg-primary text-bg-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Recomendado</div>
            )}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${service.isPopular ? 'bg-primary text-bg-dark' : 'bg-primary/20 text-primary'}`}>
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold">{service.title}</h4>
              <p className="text-sm text-white/50 mt-1">{service.subtitle}</p>
            </div>
            <ul className="space-y-4 mt-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
