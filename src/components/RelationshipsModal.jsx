import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const RelationshipsModal = ({ onClose, fromMenu = true }) => {
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
        {/* Eliminamos el botón de cierre */}
        
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Cómo se relacionan los Dominios</h2>
        
        <div className="text-left">
          <p className="text-light mb-4 text-left">
            Los dominios no son compartimentos estancos, sino ecosistemas interconectados que se nutren mutuamente. Cada dominio tiene relaciones específicas con los demás:
          </p>
          
          <ul className="list-disc pl-5 mb-4 text-light text-left">
            <li className="mb-2"><span className="text-primary font-semibold">Usuarios</span> - Es la puerta de entrada al sistema. Se conecta con todos los demás dominios, especialmente con Comunidad y Progresión.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Progresión</span> - Se nutre de Misiones y Bitácora, alimenta a Mentoría.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Bitácora</span> - Se alimenta de Misiones y Realidad, nutre a Progresión y Tradición.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Misiones</span> - Fortalece la Progresión. Nutre la Bitácora. Incide en la Realidad.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Comunidad</span> - Se conecta con Usuarios y Realidad, influye en Tradición.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Mentoría</span> - Se alimenta de Bitácora y Progresión. Aporta a Tradición. Orienta en Realidad.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Realidad</span> - Influye en Bitácora y Comunidad, es influenciada por Misiones.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Tradición</span> - Se nutre de Bitácora y Mentoría, influye en Comunidad.</li>
          </ul>
          
          <p className="text-light mb-4">
            En el centro, <span className="text-primary font-semibold">La Fuerza</span> actúa como el núcleo energético que conecta todos los dominios, facilitando el flujo de experiencias y aprendizajes entre ellos.
          </p>
        </div>
        
        <div className="flex justify-center mt-4">
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

export default RelationshipsModal;