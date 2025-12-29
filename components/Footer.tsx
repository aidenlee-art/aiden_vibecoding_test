import React from 'react';
import { Cpu, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
                <Cpu className="text-white" size={28} />
                <span className="font-display font-bold text-xl tracking-widest">FACTOMIND</span>
            </div>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Pioneering general-purpose robotics to eliminate repetitive labor and unlock human potential.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
             <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Explore</h4>
                <ul className="space-y-3 text-sm text-gray-400 font-light">
                    <li className="hover:text-white cursor-pointer transition-colors">Vision</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Technology</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Journal</li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Company</h4>
                <ul className="space-y-3 text-sm text-gray-400 font-light">
                    <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-400 font-light">
                    <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-xs text-gray-600">© 2025 Factomind Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Twitter size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Instagram size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Linkedin size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;