
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="px-6 py-24 bg-sage/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs text-moss uppercase tracking-[0.25em] font-medium">Servicios</span>
          <h2 className="font-serif font-bold text-evergreen mt-3 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Escalables según<br />
            <em className="not-italic text-timber">tu etapa</em>
          </h2>
          <p className="text-evergreen/50 mt-4 max-w-md text-lg font-light">
            Desde tu primera landing hasta un ecosistema IA completo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative group flex flex-col gap-6 p-8 rounded-3xl border-2 transition-all duration-400 hover:-translate-y-2 cursor-default overflow-hidden
                ${service.isPopular
                  ? 'bg-evergreen border-moss text-frost shadow-evergreen'
                  : 'bg-frost border-sage/50 text-evergreen hover:border-moss hover:shadow-moss'
                }`}
            >
              {service.isPopular && (
                <div className="absolute top-5 right-5 bg-honey text-evergreen text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                  ★ Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
                ${service.isPopular ? 'bg-moss/30 text-honey' : 'bg-sage/40 text-moss'}`}>
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>

              {/* Text */}
              <div>
                <h3 className={`font-serif font-bold text-2xl mb-1 ${service.isPopular ? 'text-frost' : 'text-evergreen'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm ${service.isPopular ? 'text-frost/50' : 'text-evergreen/50'}`}>
                  {service.subtitle}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 text-sm ${service.isPopular ? 'text-frost/80' : 'text-evergreen/70'}`}>
                    <span className={`material-symbols-outlined text-lg flex-shrink-0 ${service.isPopular ? 'text-honey' : 'text-moss'}`}>
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`mt-4 w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-300 active:scale-95
                ${service.isPopular
                  ? 'bg-honey text-evergreen hover:bg-amber-300'
                  : 'bg-evergreen/10 text-evergreen hover:bg-evergreen hover:text-frost'
                }`}>
                Comenzar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
