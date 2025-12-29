import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToRobot } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Greetings. I am FactoBot. How may I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || status === LoadingState.LOADING) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setStatus(LoadingState.LOADING);

    const responseText = await sendMessageToRobot(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setStatus(LoadingState.IDLE);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="technology" className="py-32 bg-gradient-to-b from-facto-dark to-black px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles size={16} className="text-facto-accent" />
            <span className="text-xs font-mono uppercase tracking-widest text-white">Powered by Gemini 2.5</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-4">From Imitation to Intuition</h2>
          <p className="text-gray-400 font-light text-lg">Interact with the Neural Engine driving FactoBot.</p>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-[600px] flex flex-col relative">
            {/* Header */}
            <div className="bg-black/40 p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-mono text-gray-300">SYSTEM: ONLINE</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">ID: FACTO-GEN1-ALPHA</span>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'model' && (
                            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 flex-shrink-0">
                                <Bot size={20} className="text-facto-accent" />
                            </div>
                        )}
                        
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm md:text-base leading-relaxed ${
                            msg.role === 'user' 
                                ? 'bg-white text-black rounded-tr-sm' 
                                : 'bg-neutral-800/80 text-gray-200 border border-white/5 rounded-tl-sm'
                        }`}>
                            {msg.text}
                        </div>

                        {msg.role === 'user' && (
                             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                <User size={20} className="text-black" />
                            </div>
                        )}
                    </div>
                ))}
                
                {status === LoadingState.LOADING && (
                    <div className="flex gap-4 justify-start">
                         <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
                            <Bot size={20} className="text-facto-accent" />
                        </div>
                        <div className="bg-neutral-800/80 p-4 rounded-2xl rounded-tl-sm border border-white/5 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                             <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                             <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-white/5">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask FactoBot about its capabilities..."
                        className="w-full bg-neutral-800/50 text-white placeholder-gray-500 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-1 focus:ring-white/20 border border-white/5 font-light"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={status === LoadingState.LOADING || !input.trim()}
                        className="absolute right-2 p-2 bg-white text-black rounded-full hover:bg-facto-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
                <div className="text-center mt-3">
                     <p className="text-[10px] text-gray-600 uppercase tracking-wider">AI responses may vary. FactoBot is in Beta.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;