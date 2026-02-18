
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
          <h2 className="text-xl font-bold tracking-tight text-text-main font-serif">SantaCasta</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-muted">
          <a href="#diagnostico" className="hover:text-primary transition-colors">Diagnóstico</a>
          <a href="#metodologia" className="hover:text-primary transition-colors">Metodología</a>
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
        </nav>
        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
