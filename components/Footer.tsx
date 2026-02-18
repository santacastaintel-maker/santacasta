
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-20 bg-bg-dark text-white rounded-t-[3rem] mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-primary text-5xl animate-bounce">rocket_launch</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">¿Listo para escalar?</h2>
        <p className="text-white/60 text-lg">Hablemos de cómo la IA puede potenciar tu negocio hoy mismo.</p>
        
        <button className="w-full h-16 bg-primary hover:bg-primary-dark text-bg-dark font-bold text-xl rounded-2xl shadow-2xl shadow-primary/30 transition-all transform hover:-translate-y-1 active:scale-95">
          Agendar Auditoría Gratis
        </button>

        <div className="flex gap-10 mt-12 text-sm font-semibold tracking-wider uppercase">
          <a href="#" className="text-white/50 hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-white/50 hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="text-white/50 hover:text-primary transition-colors">Email</a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2024 SantaCasta. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
