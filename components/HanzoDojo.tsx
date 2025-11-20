import React, { useState, useRef, useEffect } from 'react';
import { consultHanzo } from '../services/geminiService';
import { ChatMessage } from '../types';

const HanzoDojo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'hanzo', content: "I am retired. I make sushi now. But... speak your mind, warrior. Why have you come to Okinawa?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const hanzoReply = await consultHanzo(userMsg);

    setMessages(prev => [...prev, { role: 'hanzo', content: hanzoReply }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section className="w-full py-20 bg-kb-black text-white border-t-8 border-kb-yellow">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Visual Side */}
        <div className="flex flex-col justify-center items-center text-center md:text-left">
           <h2 className="text-5xl font-anton text-kb-yellow mb-4">HATTORI HANZO'S DOJO</h2>
           <p className="font-condensed text-gray-400 text-lg mb-8">
             Seek wisdom from the master swordsmith. Ask him about steel, destiny, or perhaps... vermin.
           </p>
           <div className="w-full aspect-video bg-gray-800 relative overflow-hidden border-4 border-gray-700 rounded-sm shadow-lg group">
              {/* Placeholder for Hanzo Scene */}
              <img 
                src="/936-800x600-grayscale.jpg" 
                alt="Hanzo Dojo" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-anton text-8xl text-kb-red opacity-20">STEEL</span>
              </div>
           </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-[#1a1a1a] border border-gray-700 p-4 rounded-lg flex flex-col h-[500px] shadow-2xl relative">
            {/* Decorative screws */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gray-500"></div>

            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto mb-4 space-y-4 p-2 scrollbar-thin scrollbar-thumb-kb-yellow scrollbar-track-gray-900"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-sm font-condensed text-lg ${
                    msg.role === 'user' 
                      ? 'bg-kb-yellow text-black border-l-4 border-black' 
                      : 'bg-gray-800 text-gray-200 border-r-4 border-kb-red'
                  }`}>
                    <p className="font-bold text-xs uppercase mb-1 opacity-50">{msg.role === 'user' ? 'The Bride' : 'Hanzo'}</p>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 p-3 rounded-sm border-r-4 border-kb-red">
                    <span className="animate-pulse font-condensed text-gray-400">Polishing the steel...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask the master..."
                className="flex-1 bg-black border border-gray-600 text-white font-condensed p-3 focus:outline-none focus:border-kb-yellow transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-kb-red hover:bg-red-700 text-white font-anton tracking-widest px-6 py-2 uppercase transition-colors disabled:opacity-50"
              >
                ASK
              </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HanzoDojo;