import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    "Geendia", "GeeSchool", "ChickenMarket", "Omnitech Multimedia Center", "GeenEduc"
  ];

  return (
    <section className="py-12 border-t border-slate-800 bg-slate-900/30 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider">
          Ils collaborent avec nous
        </p>
      </div>
      
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee items-center">
          {/* Repeat the list to ensure smooth infinite scrolling */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="text-2xl md:text-3xl font-bold text-slate-700 hover:text-white transition-colors cursor-default mx-8 md:mx-16">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
