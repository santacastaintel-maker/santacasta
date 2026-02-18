
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden bg-frost">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-honey/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-moss/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-evergreen/5 border border-sage/50 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-moss animate-pulse-slow" />
          <span className="font-mono text-xs font-medium text-moss uppercase tracking-widest">Agencia de Automatización IA</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif font-bold leading-[1.05] text-evergreen mb-6 animate-fade-in-up" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          Tu negocio en{' '}
          <span className="relative inline-block">
            <span className="text-shimmer">piloto automático</span>
          </span>
          <br />con IA estratégica
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-evergreen/60 leading-relaxed mb-12 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Diseñamos sistemas que trabajan mientras tú duermes. Más ingresos, menos caos, cero tareas repetitivas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button className="group flex items-center gap-3 bg-evergreen text-frost font-semibold text-base px-8 py-4 rounded-2xl shadow-evergreen hover:bg-moss transition-all duration-300 hover:-translate-y-1 active:scale-95 w-full sm:w-auto justify-center">
            Agendar Sesión Estratégica
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_outward</span>
          </button>
          <button className="flex items-center gap-2 text-evergreen/70 font-medium text-base px-6 py-4 rounded-2xl border border-sage hover:border-moss hover:text-moss transition-all duration-300 w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined text-xl">play_circle</span>
            Ver cómo funciona
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: 'verified', label: 'Auditoría gratuita 15 min' },
            { icon: 'bolt', label: 'Resultados en 30 días' },
            { icon: 'support_agent', label: 'Soporte continuo' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-evergreen/60">
              <span className="material-symbols-outlined text-moss text-lg">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute -inset-2 bg-gradient-to-r from-moss/20 via-honey/20 to-timber/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
          <div className="relative rounded-[2rem] overflow-hidden border border-sage/40 shadow-2xl aspect-[16/8] bg-evergreen">
            {/* Simulated dashboard */}
            <div className="absolute inset-0 bg-gradient-to-br from-evergreen via-evergreen/90 to-moss/80" />
            <div className="absolute inset-0 flex flex-col p-8 gap-4">
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-honey/70" />
                  <div className="w-3 h-3 rounded-full bg-moss/70" />
                </div>
                <div className="flex gap-3">
                  {['Dashboard', 'Leads', 'Automatizaciones'].map(t => (
                    <span key={t} className="text-[10px] font-mono text-frost/40 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { label: 'Leads Hoy', value: '47', delta: '+12%' },
                  { label: 'Conversión', value: '38%', delta: '+5%' },
                  { label: 'ROI', value: '3.2x', delta: '+0.4x' },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <p className="text-[10px] text-frost/40 font-mono uppercase tracking-wider mb-1">{m.label}</p>
                    <p className="text-xl font-serif font-bold text-frost">{m.value}</p>
                    <p className="text-[10px] text-moss font-medium">{m.delta}</p>
                  </div>
                ))}
              </div>
              {/* Chart placeholder */}
              <div className="flex-1 bg-white/5 rounded-xl border border-white/10 flex items-end px-4 pb-4 gap-2 overflow-hidden">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `rgba(115,150,66,${0.3 + i * 0.05})` }} />
                ))}
              </div>
            </div>
            {/* Overlay label */}
            <div className="absolute bottom-6 left-8">
              <span className="text-honey font-mono text-xs uppercase tracking-widest font-medium">Resultados Reales</span>
              <p className="text-frost text-2xl font-serif font-bold">+40% Conversión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
