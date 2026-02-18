
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold text-primary-dark uppercase tracking-widest">Agencia de Automatización</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-text-main mb-6">
          Transforma tu eficiencia con <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">IA Estratégica</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl font-light">
          Incrementa tus ingresos y recupera tu tiempo automatizando lo aburrido. Diseñamos sistemas que trabajan mientras tú duermes.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button className="flex items-center justify-center h-16 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-1 active:scale-95">
            Agendar Sesión Estratégica
          </button>
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
            <span>Auditoría gratuita de 15 min</span>
          </div>
        </div>

        {/* Hero Visual Overlay */}
        <div className="mt-16 w-full relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl aspect-[16/9]">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbda38656ad7?auto=format&fit=crop&q=80&w=1200" 
              alt="Dashboard"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-left">
              <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">Resultados Reales</span>
              <p className="text-white text-3xl font-serif font-bold">+40% Conversión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
