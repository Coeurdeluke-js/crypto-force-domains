import { useState, useEffect } from 'react';

const DomainModal = ({ domain, onClose, isForce = false }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const domainColors = {
    "Usuarios": "text-usuarios",
    "Progresión": "text-progresion",
    "Bitácora": "text-bitacora",
    "Misiones": "text-misiones",
    "Comunidad / DAO": "text-comunidad",
    "Mentoría y Referencias": "text-mentoria",
    "Realidad": "text-realidad",
    "Tradición": "text-tradicion",
    "La Fuerza": "text-force"
  };

  const textColor = domainColors[domain.name] || "text-primary";

  return (
    <div className={`modal ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full bg-${domain.name === 'La Fuerza' ? 'force' : domain.name.toLowerCase().replace(' / ', '-').replace(' y ', '-')} mr-3`}></div>
          <h2 className={`text-2xl font-bold ${textColor}`}>{domain.name}</h2>
        </div>
        
        {isForce ? (
          <div>
            <p className="text-light mb-4">{domain.significado}</p>
            
            <div className={showDetails ? "" : "hidden"}>
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Vivencia</h3>
              <p className="text-light mb-3">{domain.vivencia}</p>
              
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Relación</h3>
              <p className="text-light mb-3">{domain.relacion}</p>
              
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Digitalmente</h3>
              <p className="text-light mb-3">{domain.digitalmente}</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-light mb-4">{domain.desc}</p>
            
            <div className={showDetails ? "" : "hidden"}>
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Qué es</h3>
              <p className="text-light mb-3">{domain.queEs}</p>
              
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Vivencia</h3>
              <p className="text-light mb-3">{domain.vivencia}</p>
              
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Relaciones</h3>
              <ul className="list-disc pl-5 text-light mb-3">
                {domain.relaciones.map((rel, index) => (
                  <li key={index}>{rel}</li>
                ))}
              </ul>
              
              <h3 className="font-bold text-lg mt-4 mb-2 text-primary">Digitalmente</h3>
              <p className="text-light mb-3">{domain.digitalmente}</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <button 
            className="px-4 py-2 bg-primary text-light rounded hover:bg-opacity-80 transition-all"
            onClick={toggleDetails}
          >
            {showDetails ? "Menos detalles" : "Más detalles"}
          </button>
          
          <button 
            className="px-4 py-2 bg-dark text-light border border-primary rounded hover:bg-primary hover:bg-opacity-20 transition-all"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainModal;