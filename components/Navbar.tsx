import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
            <Cpu className="text-white group-hover:text-facto-accent transition-colors duration-300" size={28} />
            <span className="font-display font-bold text-xl tracking-widest text-white">FACTOMIND</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Vision', 'Technology', 'Capabilities', 'Careers'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-facto-accent hover:text-black transition-colors duration-300">
            Pre-order Gen 1
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 p-6 flex flex-col gap-6 h-screen">
           {['Vision', 'Technology', 'Capabilities', 'Careers'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-light text-white"
            >
              {item}
            </a>
          ))}
           <button className="bg-white text-black px-6 py-4 rounded-full font-bold text-lg mt-4">
            Pre-order Gen 1
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;