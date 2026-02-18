
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-frost/90 backdrop-blur-xl shadow-sm border-b border-sage/30' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto w-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo_casta_intel.png"
            alt="SantaCasta logo"
            className="h-10 w-10 object-contain rounded-full ring-2 ring-sage/40 group-hover:ring-moss transition-all duration-300"
          />
          <span className="font-serif font-bold text-lg text-evergreen tracking-tight hidden sm:block">
            Santa<span className="text-moss">Casta</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-evergreen/70">
          <a href="#diagnostico" className="hover:text-moss transition-colors duration-200 relative group">
            Diagnóstico
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-honey group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
          <a href="#metodologia" className="hover:text-moss transition-colors duration-200 relative group">
            Metodología
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-honey group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
          <a href="#servicios" className="hover:text-moss transition-colors duration-200 relative group">
            Servicios
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-honey group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
        </nav>

        {/* CTA */}
        <button className="hidden md:flex items-center gap-2 bg-evergreen text-frost text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-moss transition-all duration-300 hover:shadow-moss hover:-translate-y-0.5 active:scale-95">
          Agendar Sesión
          <span className="material-symbols-outlined text-base">arrow_outward</span>
        </button>

        {/* Mobile menu icon */}
        <button className="md:hidden p-2 rounded-full hover:bg-sage/30 transition-colors text-evergreen">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
