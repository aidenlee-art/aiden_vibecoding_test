import React from 'react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Works in the kitchen",
    description: "FactoBot can quietly and autonomously clear tables, load dishwashers, and handle delicate glassware. It learns your kitchen layout in minutes using V-SLAM technology.",
    image: "https://picsum.photos/800/600?grayscale&blur=2",
    align: 'left',
    badge: "Domestic Mastery"
  },
  {
    title: "Adapts to new homes",
    description: "Unlike previous generations, FactoBot generalizes across environments. It doesn't just execute code; it perceives context, allowing it to function in spaces it has never seen before.",
    image: "https://picsum.photos/800/601?grayscale&blur=2",
    align: 'right',
    badge: "Spatial Intelligence"
  },
  {
    title: "Always learning",
    description: "Powered by our proprietary Skill Library, FactoBot downloads new capabilities overnight. Today it folds laundry; tomorrow it might learn to brew the perfect espresso.",
    image: "https://picsum.photos/800/602?grayscale&blur=2",
    align: 'left',
    badge: "Neural Updates"
  }
];

const FeatureCard: React.FC<FeatureProps> = ({ title, description, image, align, badge }) => (
  <div className={`flex flex-col md:flex-row gap-12 items-center py-24 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2">
      <div className="relative group overflow-hidden rounded-2xl">
        <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="text-xs uppercase tracking-widest text-white font-mono">{badge}</span>
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
      </div>
    </div>
    
    <div className="w-full md:w-1/2 px-4 md:px-12">
      <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-lg leading-relaxed font-light">
        {description}
      </p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="capabilities" className="bg-facto-dark py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">Mundane made magic</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
                Powered by state-of-the-art AI models and an ever-expanding Skill Library, FactoBot doesn't just follow instructions—it anticipates needs.
            </p>
        </div>
        
        <div className="space-y-12">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;