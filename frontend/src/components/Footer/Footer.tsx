import React from 'react';
import { Sparkles, Heart, Code, Moon, Star, Link, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-auto py-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
            <a
              href="https://okmic.github.io/cv-ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-white/90 transition-all duration-300 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
            >
              <User className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
              <span className="font-medium">Михаил</span>
              <span className="text-white/30">/</span>
              <Code className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="https://github.com/okmic"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:text-white/90 transition-all duration-300 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
            >
              <Link className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
              <span className="font-mono text-sm">okmic</span>
            </a>
            
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-300/60" />
              <span className="tracking-wide text-white/70 font-medium">MicoNext</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20" />
            <div className="flex items-center gap-2 text-white/40 text-xs tracking-wider">
              <Moon className="w-3 h-3" />
              <span>© 2026 DreamScan</span>
              <Star className="w-2.5 h-2.5 fill-white/20" />
              <span className="font-light">— где сны обретают голос</span>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>
          
          <div className="flex items-center gap-2 text-white/25 text-[10px] tracking-wider">
            <Heart className="w-3 h-3 text-rose-400/40" />
            <span>crafted with lunar magic</span>
            <span>by</span>
            <a
              href="https://okmic.github.io/cv-ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-all duration-300 border-b border-white/20 hover:border-white/50 font-medium"
            >
              ohmic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;