import { useState, useRef, useEffect } from 'react';
import Domain from './Domain';

const Orbit = ({ domains, onDomainClick, onForceClick }) => {
  const [domainPositions, setDomainPositions] = useState([]);
  const containerRef = useRef(null);
  
  // Calcular las posiciones de los dominios cuando el componente se monta o cambia de tamaño
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;
      
      // Ajustar el radio para que coincida con la imagen de referencia
      const radius = Math.min(centerX, centerY) * 0.75;
      
      const positions = domains.map((_, index) => {
        // Calcular ángulo (empezando desde arriba y en sentido horario)
        const angle = ((index * 360 / domains.length) - 90) * (Math.PI / 180);
        
        // Calcular posición
        const domainSize = window.innerWidth <= 480 ? 14 : window.innerWidth <= 768 ? 16 : 24;
        return {
          x: centerX + radius * Math.cos(angle) - domainSize,
          y: centerY + radius * Math.sin(angle) - domainSize,
          angle: angle
        };
      });
      
      setDomainPositions(positions);
    };
    
    calculatePositions();
    
    // Recalcular cuando cambie el tamaño de la ventana
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, [domains]);
  
  // Renderizar líneas desde el centro a cada dominio
  const renderCenterLines = () => {
    if (!containerRef.current || domainPositions.length === 0) return null;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    return domainPositions.map((pos, index) => {
      // Calcular desde el borde del círculo central
      const centerRadius = window.innerWidth <= 480 ? 10 : window.innerWidth <= 768 ? 12 : 16;
      const domainRadius = window.innerWidth <= 480 ? 7 : window.innerWidth <= 768 ? 8 : 12;
      
      const dx = pos.x + domainRadius - centerX;
      const dy = pos.y + domainRadius - centerY;
      const angle = Math.atan2(dy, dx);
      
      const startX = centerX + centerRadius * Math.cos(angle);
      const startY = centerY + centerRadius * Math.sin(angle);
      
      const endX = pos.x + domainRadius;
      const endY = pos.y + domainRadius;
      
      const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      
      return (
        <div
          key={`center-line-${index}`}
          className="connection-line force"
          style={{
            width: `${length}px`,
            left: `${startX}px`,
            top: `${startY}px`,
            transform: `rotate(${angle * (180 / Math.PI)}deg)`,
            opacity: 0.5 + (Math.sin(Date.now() * 0.001 + index) + 1) * 0.25
          }}
        />
      );
    });
  };
  
  // Renderizar líneas entre dominios adyacentes
  const renderOuterLines = () => {
    if (domainPositions.length < 2) return null;
    
    return domainPositions.map((pos, index) => {
      const nextIndex = (index + 1) % domainPositions.length;
      const nextPos = domainPositions[nextIndex];
      
      const domainRadius = window.innerWidth <= 480 ? 7 : window.innerWidth <= 768 ? 8 : 12;
      
      const startX = pos.x + domainRadius;
      const startY = pos.y + domainRadius;
      const endX = nextPos.x + domainRadius;
      const endY = nextPos.y + domainRadius;
      
      const angle = Math.atan2(endY - startY, endX - startX);
      const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      
      return (
        <div
          key={`outer-line-${index}`}
          className="connection-line outer"
          style={{
            width: `${length}px`,
            left: `${startX}px`,
            top: `${startY}px`,
            transform: `rotate(${angle * (180 / Math.PI)}deg)`,
            opacity: 0.3 + (Math.sin(Date.now() * 0.0008 + index * 0.5) + 1) * 0.15
          }}
        />
      );
    });
  };
  
  return (
    <div className="orbit-container" ref={containerRef}>
      <div className="orbit">
        {/* Líneas de conexión */}
        {renderCenterLines()}
        {renderOuterLines()}
        
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
              onClick={() => onDomainClick(domain)}
              pulseClass={pulseClass}
            />
          );
        })}
      </div>
      
      <div 
        className="center-force"
        onClick={onForceClick}
      >
        <span>La Fuerza</span>
      </div>
    </div>
  );
};

export default Orbit;