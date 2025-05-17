import { useState, useEffect } from 'react';
import { FaCheck, FaPlay } from 'react-icons/fa';

const DomainPurposeModal = ({ onClose, fromMenu }) => {
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
        className="max-w-2xl bg-dark border-2 border-primary rounded-lg shadow-lg p-6 mx-4 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 400ms ease-out, transform 400ms ease-out',
          boxShadow: '0 0 15px rgba(236, 77, 88, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Propósito de los Dominios</h2>
        
        <p className="text-light mb-4 text-left">
          Los Dominios permiten abordar el aprendizaje de forma holística y significativa. Cada uno invita al estudiante a sumergirse en una dimensión diferente del desarrollo personal y técnico, donde no solo se adquieren habilidades, sino que se construye identidad, se consolidan hábitos y se fomenta una comunidad con propósito compartido.
        </p>
        
        <p className="text-light mb-6">
          Son, en esencia, portales de evolución: no se superan como niveles, sino que se exploran, se habitan, se cuestionan, y eventualmente se integran como parte del propio ser.
        </p>
        
        <div className="flex justify-center mt-4">
          <button 
            className="px-6 py-2 bg-primary text-light rounded-md hover:bg-opacity-80 transition-all flex items-center"
            onClick={handleClose}
          >
            {fromMenu ? (
              <>
                <FaCheck className="mr-2" /> Comprendo
              </>
            ) : (
              <>
                Comenzar <FaPlay className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainPurposeModal;