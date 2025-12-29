import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-black min-h-screen text-white selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Quote Section */}
        <section className="py-32 bg-white text-black px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-3xl md:text-5xl font-display leading-tight mb-8">
                    "Robots should give you back what matters most — time. Watch how our team came together to work on this mission."
                </p>
                <div className="flex items-center justify-center gap-4">
                     <div className="h-[1px] w-12 bg-black/20"></div>
                     <span className="text-sm font-mono uppercase tracking-widest text-black/60">Factomind Vision</span>
                     <div className="h-[1px] w-12 bg-black/20"></div>
                </div>
            </div>
        </section>

        <AIChat />
        
        {/* Pre-footer Call to Action */}
        <section className="py-40 relative overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900">
                <img 
                    src="https://picsum.photos/1920/1080?grayscale&blur=4" 
                    className="w-full h-full object-cover opacity-20" 
                    alt="Background"
                />
            </div>
            <div className="relative z-10 text-center px-6">
                 <h2 className="text-6xl md:text-9xl font-display font-bold text-white mb-8 tracking-tighter">
                    Designed for<br />real use.
                 </h2>
                 <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                    Secure your place in the future. The Founding Family beta program is now accepting applications.
                 </p>
                 <button className="bg-white text-black text-lg px-10 py-4 rounded-full font-medium hover:bg-facto-accent hover:scale-105 transition-all duration-300">
                    Apply to Beta
                 </button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;