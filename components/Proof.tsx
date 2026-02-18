
import React from 'react';
import { METRICS, TESTIMONIAL } from '../constants';

const Proof: React.FC = () => {
  return (
    <section className="px-6 py-24 bg-frost">
      <div className="max-w-5xl mx-auto">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '+300%', label: 'ROI Promedio', icon: 'trending_up' },
            { value: '24/7', label: 'Operatividad', icon: 'bolt' },
            { value: '15 min', label: 'Auditoría Gratis', icon: 'timer' },
            { value: '30 días', label: 'Primeros Resultados', icon: 'rocket_launch' },
          ].map((m, i) => (
            <div key={i} className="group p-6 bg-white rounded-3xl border-2 border-sage/30 hover:border-moss transition-all duration-300 hover:shadow-moss hover:-translate-y-1 text-center">
              <span className="material-symbols-outlined text-3xl text-moss mb-3 block group-hover:scale-110 transition-transform">{m.icon}</span>
              <p className="font-serif font-bold text-3xl text-evergreen">{m.value}</p>
              <p className="font-mono text-[11px] text-evergreen/40 uppercase tracking-widest mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative bg-evergreen rounded-[2.5rem] p-10 md:p-14 overflow-hidden">
          {/* Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-moss/30 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-honey/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            {/* Quote mark */}
            <span className="font-serif text-8xl text-honey/20 leading-none block mb-2 select-none">"</span>

            <p className="font-serif text-2xl md:text-3xl italic text-frost leading-relaxed mb-10 max-w-3xl">
              {TESTIMONIAL.quote}
            </p>

            <div className="flex items-center gap-5 pt-8 border-t border-white/10">
              <img
                src={TESTIMONIAL.avatar}
                alt={TESTIMONIAL.author}
                className="w-14 h-14 rounded-2xl object-cover ring-4 ring-honey/30"
              />
              <div>
                <p className="font-bold text-frost text-lg">{TESTIMONIAL.author}</p>
                <p className="text-frost/40 text-sm font-mono">{TESTIMONIAL.role}</p>
              </div>
              {/* Stars */}
              <div className="ml-auto hidden md:flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-honey text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
