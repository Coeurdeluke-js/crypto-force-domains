import React, { useState } from 'react';

const Domain = ({ domain, position, onClick, pulseClass, size }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Función para manejar el texto de Comunidad/DAO
  const formatDomainName = (name) => {
    if (name === "Comunidad / DAO") {
      return (
        <>
          <div className="text-center">
            <div style={{ whiteSpace: 'nowrap' }}>Comunidad</div>
            <div style={{ whiteSpace: 'nowrap' }}>/ DAO</div>
          </div>
        </>
      );
    }
    
    if (name === "Mentoría y Referencias") {
      return (
        <>
          <div className="text-center">
            <div>Mentoría y</div>
            <div>Referencias</div>
          </div>
        </>
      );
    }
    
    return name;
  };

  // Manejador de clic con animación
  const handleClick = () => {
    setIsFlipped(true);
    
    // Después de un breve delay para que el usuario vea el nombre, abrir el modal
    setTimeout(() => {
      onClick();
      // Resetear el estado después de un tiempo para la próxima vez
      setTimeout(() => {
        setIsFlipped(false);
      }, 500);
    }, 800); // Delay suficiente para leer el nombre
  };

  // Calcular tamaño de fuente proporcional al tamaño del dominio
  const fontSize = size * 0.14; // 14% del tamaño del dominio

  return (
    <div
      className={`domain ${pulseClass} ${isFlipped ? 'flipped' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: '0 0 10px rgba(236, 77, 88, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        borderRadius: '50%'
      }}
      onClick={handleClick}
    >
      <div className="domain-icon" style={{ width: '100%', height: '100%' }}>
        {domain.icon && (
          <img 
            src={`/icons/${domain.icon}`} 
            alt={domain.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15%' }} 
          />
        )}
      </div>
      <div className="domain-name" style={{ width: '100%', height: '100%' }}>
        <div 
          className="domain-text" 
          style={{ 
            fontSize: `${fontSize}px`,
            fontWeight: 'bold',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.9)',
            padding: '0 4px'
          }}
        >
          {formatDomainName(domain.name)}
        </div>
      </div>
    </div>
  );
};

export default Domain;