import { useState } from 'react';
import DreamForm from './components/DeamForm/DeamForm';
import DreamInterpretation from './components/DreamInterpretation/DreamInterpretation';
import Preloader from './components/Preloader/Preloader';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [interpretation, setInterpretation] = useState<string | null>(null);

  const handleDreamSubmit = async (dreamDescription: string) => {
    setIsLoading(true);
    setInterpretation(null);
    
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const interpretations = [
      `«${dreamDescription}» — этот сон говорит о том, что вы находитесь в поиске новых смыслов. Звёзды указывают на скорые перемены, которые принесут гармонию в вашу жизнь. Прислушайтесь к внутреннему голосу в ближайшие три дня.`,
      `Ваше сновидение символизирует внутреннюю силу и потенциал. Вселенная посылает знак, что пришло время для важного решения, которое вы откладывали. Доверьтесь себе — звёзды на вашей стороне.`,
      `Этот сон — отражение ваших глубинных желаний. Луна в фазе роста говорит о том, что сейчас идеальное время для начинаний. То, что казалось недостижимым, постепенно становится реальностью.`,
      `Тени и свет в вашем сне указывают на баланс, который вы ищете. Звёзды шепчут, что ответы уже внутри вас. Просто остановитесь и прислушайтесь к тишине между мыслями.`,
      `Сновидение открывает дверь в новый этап вашей жизни. Символы, которые вы видели, — это ключи к пониманию себя. Ближайшая неделя принесёт важные откровения.`
    ];
    
    const randomIndex = Math.floor(Math.random() * interpretations.length);
    setInterpretation(interpretations[randomIndex]);
    
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader />}
      
      <div>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">

            
            <DreamForm onSubmit={handleDreamSubmit} isLoading={isLoading} />
            
            <DreamInterpretation interpretation={interpretation} />
          </div>
          
          <footer className="text-center py-6 text-white/10 text-xs tracking-wider">
            <p>© 2026 DreamScan — где сны обретают голос</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;