import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Mostrar con fade in
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Ocultar después de 2.5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Esperar a que termine la animación antes de continuar
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className="fixed inset-0 bg-dark flex items-center justify-center z-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 800ms ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="flex flex-col items-center">
        {showLogo && (
          <img 
            src={logo} 
            alt="Crypto Force Logo" 
            className="w-96 h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default SplashScreen;