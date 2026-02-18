
import React, { useState, useRef, useEffect } from 'react';
import { getAIStrategyResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '¡Hola! Soy el asistente de estrategia de SantaCasta. ¿Cómo puedo ayudarte a automatizar tu negocio hoy?' }
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
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-[2.5rem] shadow-3xl border border-primary/10 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-bg-dark p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-bg-dark">robot_2</span>
              </div>
              <div>
                <p className="font-bold">Estratega IA</p>
                <p className="text-[10px] text-primary uppercase tracking-widest">Online Now</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-primary">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-bg-light text-text-main border border-primary/5 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-bg-light p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-primary/5 bg-bg-light/30">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre automatización..."
                className="w-full bg-white border border-primary/10 rounded-full py-3 px-6 pr-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 p-1.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-bg-dark text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border-4 border-primary/20 group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">robot_2</span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
