import Background from './components/Background/Background';
import Logo from './components/logo/Logo';

function App() {
  return (
    <Background>
      <div className="min-h-screen flex flex-col items-center justify-start p-4">
        <Logo size="lg" className='mt-[3em]' />
        
        <div className="mt-12 w-full max-w-md">
          {/* Здесь будет форма и остальной контент */}
        </div>
      </div>
    </Background>
  );
}

export default App;