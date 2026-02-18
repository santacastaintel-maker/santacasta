
import React, { useState, useRef, useEffect } from 'react';
import { getAIStrategyResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '¡Hola! Soy el estratega IA de SantaCasta. ¿Cómo puedo ayudarte a automatizar tu negocio hoy?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    const aiResponse = await getAIStrategyResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-frost w-[350px] sm:w-[400px] h-[520px] rounded-[2rem] shadow-evergreen border border-sage/30 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-evergreen px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo_casta_intel.png" alt="SantaCasta" className="w-9 h-9 rounded-full object-contain ring-2 ring-honey/40" />
              <div>
                <p className="font-bold text-frost text-sm">Estratega IA</p>
                <p className="text-[10px] text-honey font-mono uppercase tracking-widest">● Online Now</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-frost/50 hover:text-honey transition-colors p-1">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar bg-frost">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${m.role === 'user'
                    ? 'bg-evergreen text-frost rounded-tr-none'
                    : 'bg-sage/30 text-evergreen border border-sage/50 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-sage/30 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <div key={i} className="w-2 h-2 bg-moss rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-sage/30 bg-white/50 backdrop-blur-sm">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre automatización..."
                className="w-full bg-white border-2 border-sage/40 rounded-full py-3 px-5 pr-12 focus:ring-2 focus:ring-moss/20 focus:border-moss transition-all text-sm outline-none text-evergreen placeholder:text-evergreen/30"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 p-2 bg-evergreen text-frost rounded-full hover:bg-moss transition-colors disabled:opacity-40 active:scale-90"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 bg-evergreen text-frost rounded-full shadow-evergreen flex items-center justify-center hover:scale-110 hover:bg-moss transition-all duration-300 border-4 border-honey/20 group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">robot_2</span>
          {/* Ping */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-honey rounded-full border-2 border-frost animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
