import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-um7iGBDc7AY8DNN3RjNrGdtc/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-100 md:scale-100 origin-center opacity-80"
          title="Factomind Robot 3D"
        ></iframe>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-24 px-6 max-w-7xl mx-auto pointer-events-none">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-mono text-facto-accent uppercase tracking-[0.2em]">Beta Launching Late 2025</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-medium text-white leading-[0.95] mb-6 tracking-tighter">
            Say hello to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">FactoBot.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed mb-8">
            Built for the modern world. FactoBot works 24/7 to elevate your lifestyle. 
            From household choreography to complex reasoning, experience the mundane made magic.
          </p>
          
          <div className="flex gap-4 pointer-events-auto">
             <button className="bg-facto-accent text-black px-8 py-3 rounded-full font-medium hover:bg-white transition-all duration-300 transform hover:scale-105">
              Join the Founding Family
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 backdrop-blur-md transition-all duration-300">
              Watch The Film
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;