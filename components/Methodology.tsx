
import React, { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Estrategia',
    desc: 'Analizamos tu negocio actual, identificamos fugas de dinero y diseñamos el plan de ataque.',
    icon: 'target',
    color: 'bg-honey/20 text-timber border-honey/30',
    active: true,
  },
  {
    num: '02',
    title: 'Construcción',
    desc: 'Creamos tus activos digitales: Landing Pages de alta conversión y embudos de venta.',
    icon: 'build',
    color: 'bg-sage/20 text-moss border-sage/30',
  },
  {
    num: '03',
    title: 'Automatización',
    desc: 'Conectamos IA para gestionar leads, agendar citas y nutrir clientes 24/7.',
    icon: 'smart_toy',
    color: 'bg-moss/20 text-moss border-moss/30',
  },
];

const Methodology: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="metodologia" className="px-6 py-24 bg-frost">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs text-moss uppercase tracking-[0.25em] font-medium">Nuestra Metodología</span>
          <h2 className="font-serif font-bold text-evergreen mt-3 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            El camino a la<br />
            <em className="not-italic text-moss">eficiencia total</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`text-left p-7 rounded-3xl border-2 transition-all duration-400 group ${active === idx ? `${step.color} shadow-lg scale-[1.02]` : 'bg-white border-sage/30 hover:border-sage'}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`font-mono text-xs font-bold uppercase tracking-widest ${active === idx ? 'text-current opacity-70' : 'text-evergreen/30'}`}>
                  {step.num}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${active === idx ? 'bg-current/10' : 'bg-sage/20'}`}>
                  <span className={`material-symbols-outlined text-xl ${active === idx ? 'text-current' : 'text-moss'}`}>{step.icon}</span>
                </div>
              </div>
              <h3 className={`font-serif font-bold text-2xl mb-3 ${active === idx ? 'text-current' : 'text-evergreen'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${active === idx ? 'text-current/70' : 'text-evergreen/50'}`}>
                {step.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
