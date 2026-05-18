import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, Feather, Compass, Gem } from 'lucide-react';
import "./styles.css"

interface DreamFormProps {
  onSubmit: (description: string) => void;
  isLoading?: boolean;
}

const DreamForm: React.FC<DreamFormProps> = ({ onSubmit, isLoading = false }) => {
  const [description, setDescription] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCharCount(description.length);
  }, [description]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim() && !isLoading) {
      onSubmit(description);
    }
  };

  const getCharacterMessage = () => {
    if (charCount === 0) return '✧ опишите свой сон ✧';
    if (charCount < 20) return '🌙 расскажите подробнее...';
    if (charCount < 100) return '⭐ звёзды уже начинают мерцать';
    if (charCount < 300) return '✨ магия собирается вокруг';
    return '🔮 сон готов к расшифровке';
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative group">
          <div 
            className={`absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-xl transition-all duration-700 ${
              isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
            }`} 
          />
          
          <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-white/40 text-sm">
                <Feather className="w-4 h-4" />
                <span>Запишите сновидение</span>
                <Compass className="w-4 h-4 ml-auto" />
              </div>
              
              <textarea
                ref={textareaRef}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Сегодня ночью мне приснилось, что я стоял на вершине горы, а звёзды шептали мне тайны мироздания..."
                rows={6}
                className="w-full bg-transparent text-white placeholder-white/20 resize-none focus:outline-none text-base sm:text-lg leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif"
                }}
                disabled={isLoading}
              />
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                <div className="text-white/30 text-xs sm:text-sm flex items-center gap-2">
                  <Gem className="w-3 h-3" />
                  <span className="font-light tracking-wide">{getCharacterMessage()}</span>
                </div>
                
                <div className="text-white/20 text-xs font-mono">
                  {charCount}/500
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={!description.trim() || isLoading}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative cursor-pointer"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative px-10 sm:px-14 py-4 sm:py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative flex items-center gap-3 text-white font-medium text-base sm:text-lg">
                {isLoading ? (
                  <>
                    <div className="relative">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <div className="absolute inset-0 w-5 h-5 border-2 border-white/20 rounded-full animate-ping" />
                    </div>
                    <span>Сканирую звёздную карту...</span>
                  </>
                ) : (
                  <>
                    <Zap className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
                    <span>Открыть тайну сна</span>
                    <Sparkles className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                  </>
                )}
              </span>
            </div>
          </button>
        </div>

        <div className="text-center pt-8">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 h-1 rounded-full bg-white/20"
                  style={{ animation: `pulseStar 1.5s ${i * 0.2}s infinite` }}
                />
              ))}
            </div>
            <p className="text-white/30 text-xs sm:text-sm tracking-wider font-light">
              ✦ ПОД ЗАЩИТОЙ ЛУННОГО СВЕТА ✦
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DreamForm;
