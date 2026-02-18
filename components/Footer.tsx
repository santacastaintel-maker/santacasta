
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-evergreen text-frost overflow-hidden">
      {/* Top blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-moss/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-honey/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <img
          src="/logo_casta_intel.png"
          alt="SantaCasta"
          className="w-16 h-16 object-contain rounded-full ring-2 ring-honey/30 animate-float"
        />

        {/* Headline */}
        <h2 className="font-serif font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          ¿Listo para escalar<br />
          <em className="not-italic text-honey">con IA?</em>
        </h2>
        <p className="text-frost/50 text-lg max-w-md font-light">
          Hablemos de cómo la IA puede potenciar tu negocio hoy mismo.
        </p>

        {/* CTA */}
        <button className="group flex items-center gap-3 bg-honey text-evergreen font-bold text-lg px-10 py-5 rounded-2xl shadow-honey hover:bg-amber-300 transition-all duration-300 hover:-translate-y-1 active:scale-95">
          Agendar Auditoría Gratis
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_outward</span>
        </button>

        {/* Social links */}
        <div className="flex gap-8 mt-8 text-sm font-semibold tracking-wider uppercase">
          {['LinkedIn', 'Instagram', 'Email'].map(link => (
            <a key={link} href="#" className="text-frost/30 hover:text-honey transition-colors duration-200">{link}</a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-frost/20 uppercase tracking-widest">
          <p>© 2026 SantaCasta. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-frost/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-frost/50 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
