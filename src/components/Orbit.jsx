import { useState, useRef, useEffect } from 'react';
import Domain from './Domain';

const Orbit = ({ domains, onDomainClick, onForceClick }) => {
  const [domainPositions, setDomainPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  // Efecto para el fade in
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calcular las posiciones de los dominios
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Punto central fijo basado en el contenedor
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      
      // Radio orbital ajustado según el dispositivo
      // Para móviles, usamos un radio más pequeño para asegurar visibilidad
      const minDimension = Math.min(containerRect.width, containerRect.height);
      
      // Ajuste de radio según tamaño de pantalla
      let radiusRatio = 0.42; // Valor por defecto para desktop
      
      if (isMobile) {
        if (windowSize.width <= 480) {
          radiusRatio = 0.32; // Pantallas muy pequeñas
        } else {
          radiusRatio = 0.36; // Tablets y móviles más grandes
        }
      }
      
      const radius = minDimension * radiusRatio;
      
      const positions = domains.map((_, index) => {
        // Calcular ángulo (empezando desde arriba y en sentido horario)
        const angle = ((index * 360 / domains.length) - 90) * (Math.PI / 180);
        
        // Tamaños responsivos para los dominios
        let domainSize;
        
        if (isMobile) {
          domainSize = windowSize.width <= 480 ? 4 : 4.5;
        } else {
          domainSize = windowSize.width <= 1024 ? 6 : 7;
        }
        
        const halfSize = domainSize / 2;
        
        // Calculamos la posición exacta para centrar el dominio en su punto orbital
        return {
          x: centerX + radius * Math.cos(angle) - (halfSize * 16),
          y: centerY + radius * Math.sin(angle) - (halfSize * 16),
          angle: angle
        };
      });
      
      setDomainPositions(positions);
    };
    
    calculatePositions();
    
    // Recalcular cuando cambie el tamaño de la ventana
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, [domains, isMobile, windowSize]);
  
  // Manejador de clic para los dominios
  const handleDomainClick = (domain) => {
    // Pasamos el dominio al manejador de clics
    onDomainClick(domain);
  };
  
  return (
    <div 
      className="orbit-container relative" 
      ref={containerRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        height: isMobile ? '80vh' : '70vh',
        width: '100%',
        maxWidth: isMobile ? '100%' : '800px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div className="orbit relative h-full w-full">
        {/* Dominios */}
        {domainPositions.map((position, index) => {
          const domain = domains[index];
          const pulseClass = `domain-pulse-${(index % 3) + 1}`;
          
          return (
            <Domain
              key={domain.name}
              domain={domain}
              position={{
                x: position.x,
                y: position.y
              }}
              onClick={() => handleDomainClick(domain)}
              pulseClass={pulseClass}
            />
          );
        })}
      </div>
      
      {/* La Fuerza - Centrada exactamente */}
      <div 
        className="center-force heartbeat"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          fontSize: isMobile ? '1rem' : '1.2rem',
          padding: isMobile ? '10px' : '15px',
          width: isMobile ? (windowSize.width <= 480 ? '70px' : '80px') : '120px',
          height: isMobile ? (windowSize.width <= 480 ? '70px' : '80px') : '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20
        }}
        onClick={onForceClick}
      >
        <span>La Fuerza</span>
      </div>
    </div>
  );
};

export default Orbit;