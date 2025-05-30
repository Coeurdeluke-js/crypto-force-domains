import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { forceInfo, domains } from '../data/domains';

const DomainDetailModal = ({ domain, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar con fade in
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  // Función para obtener la información detallada del dominio
  const getDomainInfo = () => {
    if (domain.name === "La Fuerza") {
      return forceInfo;
    }
    
    return domains.find(d => d.name === domain.name) || {};
  };

  const domainInfo = getDomainInfo();

  // Función para obtener el título del dominio
  const getDomainTitle = () => {
    if (domain.name === "La Fuerza") {
      return "La Fuerza (Centro)";
    }
    
    switch(domain.name) {
      case "Usuarios":
        return "Dominio de Usuarios (Identidad)";
      case "Progresión":
        return "Dominio de la Progresión (Camino del Aprendiz)";
      case "Bitácora":
        return "Dominio de la Bitácora (Reflexión y Testimonio)";
      case "Misiones":
        return "Dominio de las Misiones (Desafíos Significativos)";
      case "Comunidad / DAO":
        return "Dominio Comunidad/DAO (Gobierno y Participación)";
      case "Mentoría y Referencias":
        return "Dominio Mentoría y Referencias (Guía personal y transmisión)";
      case "Realidad":
        return "Dominio de la Realidad (Aplicación viva)";
      case "Tradición":
        return "Dominio de la Tradición (Memoria y Cultura)";
      default:
        return domain.name;
    }
  };

  // Renderizar las secciones según el dominio
  const renderSections = () => {
    if (domain.name === "La Fuerza") {
      return (
        <>
          <div className="mb-4 text-left">
            <h3 className="text-lg font-semibold text-primary mb-2">Significado</h3>
            <p className="text-light">{domainInfo.significado}</p>
          </div>
          <div className="mb-4 text-left">
            <h3 className="text-lg font-semibold text-primary mb-2">Vivencia</h3>
            <p className="text-light">{domainInfo.vivencia}</p>
          </div>
          <div className="mb-4 text-left">
            <h3 className="text-lg font-semibold text-primary mb-2">Relación</h3>
            <p className="text-light">{domainInfo.relacion}</p>
          </div>
          <div className="mb-4 text-left">
            <h3 className="text-lg font-semibold text-primary mb-2">Digitalmente</h3>
            <p className="text-light">{domainInfo.digitalmente}</p>
          </div>
        </>
      );
    }
    
    return (
      <>
        <div className="mb-4 text-left">
          <h3 className="text-lg font-semibold text-primary mb-2">Qué es</h3>
          <p className="text-light">{domainInfo.queEs}</p>
        </div>
        <div className="mb-4 text-left">
          <h3 className="text-lg font-semibold text-primary mb-2">Vivencia</h3>
          <p className="text-light">{domainInfo.vivencia}</p>
        </div>
        <div className="mb-4 text-left">
          <h3 className="text-lg font-semibold text-primary mb-2">Relaciones</h3>
          <ul className="list-disc pl-5">
            {domainInfo.relaciones && domainInfo.relaciones.map((rel, index) => (
              <li key={index} className="text-light mb-1">{rel}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4 text-left">
          <h3 className="text-lg font-semibold text-primary mb-2">Digitalmente</h3>
          <p className="text-light">{domainInfo.digitalmente}</p>
        </div>
      </>
    );
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-dark bg-opacity-80 backdrop-blur-sm"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 400ms ease-in-out'
      }}
      onClick={handleClose}
    >
      <div 
        className="max-w-2xl bg-dark border-2 border-primary rounded-lg shadow-lg p-6 mx-4 modal-content"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 400ms ease-out, transform 400ms ease-out',
          position: 'relative',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Se ha eliminado el botón X de cierre */}
        
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">
          {domain.icon && domain.name !== "Usuarios" && (
            <img 
              src={`./icons/${domain.icon}`} 
              alt={domain.name} 
              className="inline-block mr-2" 
              style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} 
            />
          )}
          <span>{getDomainTitle()}</span>
        </h2>
        
        {renderSections()}
        
        <div className="flex justify-center mt-6">
          <button 
            className="px-6 py-2 bg-primary text-light rounded-md hover:bg-opacity-80 transition-all flex items-center"
            onClick={handleClose}
          >
            <FaCheck className="mr-2" /> Comprendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainDetailModal;