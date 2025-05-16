import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const SplashScreen = ({ onFinish }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Mostrar el splash screen por 2.5 segundos
    const timer = setTimeout(() => {
      setIsClosing(true);
      
      // Esperar a que termine la animación de fade out
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); // 500ms para la animación de fade out
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 bg-dark flex items-center justify-center z-50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
      <div className="flex flex-col items-center">
        <img 
          src={logo} 
          alt="Crypto Force Logo" 
          className="w-64 h-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-primary mb-2 font-inter">Crypto Force</h1>
        <p className="text-light text-xl font-inter">Trading Team | Criptomonedas e Inversiones</p>
      </div>
    </div>
  );
};

export default SplashScreen;