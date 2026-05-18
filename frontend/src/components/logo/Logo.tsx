import React, { useEffect, useState } from 'react';
import "./styles.css"

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = "lg",
  className = ''
}) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(prev => prev + 0.02), 50);
    return () => clearInterval(interval);
  }, []);

  const sizes = {
    sm: {
      container: 'w-20 h-20',
      moon: 72,
      text: 'text-xl',
      subtitle: 'text-[10px]',
      gap: 'gap-3'
    },
    md: {
      container: 'w-28 h-28',
      moon: 100,
      text: 'text-3xl',
      subtitle: 'text-xs',
      gap: 'gap-4'
    },
    lg: {
      container: 'w-36 h-36',
      moon: 130,
      text: 'text-5xl',
      subtitle: 'text-sm',
      gap: 'gap-5'
    }
  };

  const current = sizes[size];
  const moonGlow = 0.6 + Math.sin(time * 1.5) * 0.2;
  const starTwinkle = Math.sin(time * 2) * 0.3 + 0.7;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex items-center justify-center">
        <div 
          className="absolute rounded-full"
          style={{
            width: current.container,
            height: current.container,
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0) 70%)',
            opacity: moonGlow
          }}
        />
        
        <div className="absolute -top-5 -right-5 animate-pulse">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" fill="#fef08a" opacity={starTwinkle} />
          </svg>
        </div>
        
        <div className="absolute -bottom-4 -left-5" style={{ animation: 'spin 8s linear infinite' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" fill="#c084fc" opacity={starTwinkle * 0.6} />
          </svg>
        </div>
        
        <div className="absolute top-1 -right-8 animate-bounce">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.5 8.5L20 9L15 13.5L17 20L12 16L7 20L9 13.5L4 9L10.5 8.5L12 2Z" fill="#67e8f9" opacity={starTwinkle * 0.8} />
          </svg>
        </div>

        <div className="relative group">
          <svg
            width={current.moon}
            height={current.moon}
            viewBox="0 0 100 100"
            className="drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            style={{
              filter: `drop-shadow(0 0 ${15 * moonGlow}px rgba(255, 215, 0, ${0.4 * moonGlow}))`
            }}
          >
            <defs>
              <radialGradient id="moonGrad" cx="35%" cy="35%">
                <stop offset="0%" stopColor="#fff8dc" />
                <stop offset="40%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#a16207" />
              </radialGradient>
            </defs>
            
            <circle cx="50" cy="50" r="45" fill="url(#moonGrad)" />
            
            <circle cx="30" cy="30" r="8" fill="#1a1a3e" opacity="0.12" />
            <circle cx="65" cy="45" r="5" fill="#1a1a3e" opacity="0.1" />
            <circle cx="40" cy="70" r="6" fill="#1a1a3e" opacity="0.08" />
            <circle cx="75" cy="70" r="3" fill="#1a1a3e" opacity="0.06" />
            <circle cx="20" cy="60" r="4" fill="#1a1a3e" opacity="0.1" />
            
            <path d="M 50 8 Q 55 25 65 30 Q 55 35 58 50" stroke="#fff8dc" strokeWidth="1.5" fill="none" opacity="0.25" />
          </svg>
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
      
      <div className={`text-center ${current.gap}`}>
        <h1 
          className={`${current.text} font-black tracking-tight bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg`}
        >
          DreamScan
        </h1>
      </div>
    </div>
  );
};

export default Logo;
