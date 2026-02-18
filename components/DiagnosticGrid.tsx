
import React from 'react';
import { DIAGNOSTICS } from '../constants';

const DiagnosticGrid: React.FC = () => {
  return (
    <section id="diagnostico" className="px-6 py-24 bg-evergreen relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      {/* Accent blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-moss/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-14">
          <span className="font-mono text-xs text-honey uppercase tracking-[0.25em] font-medium">Diagnóstico</span>
          <h2 className="font-serif font-bold text-frost mt-3 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            ¿Te suena<br />
            <em className="not-italic text-honey">familiar?</em>
          </h2>
          <p className="text-frost/50 mt-4 max-w-md text-lg font-light">
            Identificamos los cuellos de botella que frenan tu crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DIAGNOSTICS.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-7 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-honey/30 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-mono text-6xl font-bold text-white/5 select-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-honey/15 text-honey mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-frost text-xl mb-2">{item.title}</h3>
              <p className="text-frost/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticGrid;
