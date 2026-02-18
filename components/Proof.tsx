
import React from 'react';
import { METRICS, TESTIMONIAL } from '../constants';

const Proof: React.FC = () => {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-8 mb-20 text-center border-b border-primary/10 pb-12">
        {METRICS.map((metric, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <p className="text-5xl font-black text-primary tracking-tight">{metric.value}</p>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-text-muted">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-primary/5">
        <span className="material-symbols-outlined text-7xl text-primary/10 absolute top-8 left-6">format_quote</span>
        <p className="text-2xl font-serif italic text-text-main relative z-10 mb-8 leading-relaxed">
          "{TESTIMONIAL.quote}"
        </p>
        <div className="flex items-center gap-4 pt-8 border-t border-primary/5">
          <img 
            src={TESTIMONIAL.avatar} 
            alt={TESTIMONIAL.author}
            className="w-14 h-14 rounded-2xl object-cover ring-4 ring-primary/10"
          />
          <div>
            <p className="font-bold text-lg text-text-main">{TESTIMONIAL.author}</p>
            <p className="text-sm text-text-muted font-medium">{TESTIMONIAL.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
