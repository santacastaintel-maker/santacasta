
import React from 'react';
import { DIAGNOSTICS } from '../constants';

const DiagnosticGrid: React.FC = () => {
  return (
    <section id="diagnostico" className="px-6 py-20 bg-white border-y border-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Diagnóstico</h2>
          <h3 className="text-3xl font-serif font-bold text-text-main">¿Te suena familiar?</h3>
          <p className="text-text-muted mt-4">Identificamos los cuellos de botella que frenan tu crecimiento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DIAGNOSTICS.map((item, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-bg-light border border-primary/10 rounded-3xl hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${item.colorClass} mb-4 transform transition-transform group-hover:scale-110`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h4 className="font-bold text-text-main text-lg mb-1">{item.title}</h4>
              <p className="text-text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticGrid;
