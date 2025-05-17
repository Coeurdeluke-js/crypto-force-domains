import React, { useState } from 'react';

const Domain = ({ domain, position, onClick, pulseClass }) => {
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

  return (
    <div
      className={`domain ${pulseClass} ${isFlipped ? 'flipped' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        boxShadow: '0 0 10px rgba(236, 77, 88, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: domain.name === "Comunidad / DAO" ? '0.85rem' : '0.9rem'
      }}
      onClick={handleClick}
    >
      <div className="domain-icon">
        {domain.icon && (
          <img 
            src={`/src/assets/icons/${domain.icon}`} 
            alt={domain.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        )}
      </div>
      <div className="domain-name">
        <div className="domain-text">
          {formatDomainName(domain.name)}
        </div>
      </div>
    </div>
  );
};

export default Domain;