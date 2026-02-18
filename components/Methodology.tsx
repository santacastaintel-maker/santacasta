
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Estrategia',
      desc: 'Analizamos tu negocio actual, identificamos fugas de dinero y diseñamos el plan de ataque.',
      active: true
    },
    {
      num: '02',
      title: 'Construcción',
      desc: 'Creamos tus activos digitales: Landing Pages de alta conversión y embudos de venta.'
    },
    {
      num: '03',
      title: 'Automatización',
      desc: 'Conectamos IA para gestionar leads, agendar citas y nutrir clientes 24/7.'
    }
  ];

  return (
    <section id="metodologia" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Nuestra Metodología</h2>
          <h3 className="text-4xl font-serif font-bold text-text-main leading-tight">El Camino a la Eficiencia</h3>
        </div>

        <div className="relative flex flex-col gap-12 ml-6 pl-10 border-l-2 border-primary/20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className={`absolute -left-[53px] top-0 w-8 h-8 rounded-full border-4 border-bg-light flex items-center justify-center shadow-lg transition-all duration-500 ${step.active ? 'bg-primary scale-110' : 'bg-white border-primary/30 group-hover:border-primary'}`}>
                {step.active && <span className="material-symbols-outlined text-white text-xs">done</span>}
              </div>
              <h4 className={`text-2xl font-bold mb-3 transition-colors ${step.active ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
                {step.num}. {step.title}
              </h4>
              <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
