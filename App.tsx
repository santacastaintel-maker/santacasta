
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DiagnosticGrid from './components/DiagnosticGrid';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Proof from './components/Proof';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DiagnosticGrid />
        <Methodology />
        <Services />
        <Proof />
      </main>
      <Footer />
      
      {/* Interactive AI Widget */}
      <AIConsultant />

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-20 z-40 md:hidden pointer-events-none">
        <div className="pointer-events-auto w-full">
           <button className="w-full bg-bg-dark/95 backdrop-blur-md text-white font-bold py-4 px-6 rounded-full shadow-3xl border border-white/10 flex items-center justify-between group active:scale-95 transition-all">
            <span>Agendar Sesión</span>
            <div className="bg-primary text-bg-dark rounded-full p-1.5">
              <span className="material-symbols-outlined text-sm block font-bold">arrow_outward</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
