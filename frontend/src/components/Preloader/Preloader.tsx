import { Moon, Star, Sparkles } from 'lucide-react';
import "./styles.css"

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0a0a2a] to-[#03030f]">
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        </div>
        
        <div className="relative animate-float">
          <div className="relative">
            <Moon className="w-16 h-16 text-white/40" />
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-glow" />
          </div>
        </div>
        
        <div className="mt-8 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40"
              style={{
                animation: `bounce 1.4s ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
        
        <p className="mt-4 text-white/30 text-sm tracking-wider animate-pulse">
          Сканирую звёздную карту...
        </p>
        
        <div className="absolute -top-8 -right-8 animate-twinkle">
          <Star className="w-4 h-4 text-yellow-400/50 fill-yellow-400/30" />
        </div>
        <div className="absolute -bottom-8 -left-8 animate-twinkle delay-300">
          <Sparkles className="w-3 h-3 text-amber-400/50" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;