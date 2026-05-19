import { useState, useRef, useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';
import Logo from './components/MoonLogo/Logo';
import DreamForm from './components/DeamForm/DeamForm';
import DreamInterpretation from './components/DreamInterpretation/DreamInterpretation';
import Preloader from './components/Preloader/Preloader';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import apiDreamService from './libs/api/api.dream.service';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [error, setError] = useState<null | string>(null);
  const interpretationRef = useRef<HTMLDivElement>(null);

  const handleDreamSubmit = async (dream: string) => {
    setError(null);
    setIsLoading(true);
    setInterpretation(null);
    
    await apiDreamService.dream(dream)
      .then((v) => {
        setInterpretation(v);
        setIsLoading(false);
      })
      .catch(e => {
        setInterpretation(null);
        setIsLoading(false);
        if (typeof e === "string") setError(e);
        else if (e?.message) setError(e.message);
        else setError("Произошла ошибка, попробуйте позже");
      });
  };

  useEffect(() => {
    if (interpretation && interpretationRef.current) {
      setTimeout(() => {
        interpretationRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [interpretation]);

  return (
    <>
      {isLoading && <Preloader />}
      
      <Background>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <Logo size="lg" />
            </div>
            
            <DreamForm onSubmit={handleDreamSubmit} isLoading={isLoading} />
            
            {error && (
              <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-6 animate-fadeIn">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 via-rose-500/30 to-red-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative bg-red-500/10 backdrop-blur-sm rounded-2xl border border-red-500/30 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                    
                    <div className="p-5 sm:p-6 flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-red-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-red-300 font-medium text-sm sm:text-base mb-1">
                          Ошибка расшифровки
                        </h4>
                        <p className="text-red-300/60 text-xs sm:text-sm">
                          {error}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => setError(null)}
                        className="text-red-400/50 hover:text-red-400 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={interpretationRef}>
              <DreamInterpretation interpretation={interpretation} />
            </div>
          </div>
          
          <Footer />
        </div>
      </Background>
    </>
  );
}

export default App;