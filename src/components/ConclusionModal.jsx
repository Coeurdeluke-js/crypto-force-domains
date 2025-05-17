import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const ConclusionModal = ({ onClose, fromMenu = true }) => {
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
        <button 
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={handleClose}
          style={{
            fontSize: '1rem',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(236, 77, 88, 0.2)',
            borderRadius: '50%',
            padding: '0'
          }}
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold text-primary mb-4 text-center pr-6">Conclusión</h2>
        
        <div className="text-left">
          <p className="text-light mb-4 text-left">
            Los Dominios de Crypto Force representan una visión integral del aprendizaje que reconoce la complejidad del ser humano y su proceso de crecimiento. No se trata simplemente de adquirir conocimientos, sino de transformarse a través de experiencias significativas que abarcan múltiples dimensiones.
          </p>
          
          <p className="text-light mb-4">
            Al navegar por estos dominios, el aprendiz no solo desarrolla habilidades técnicas en trading y criptomonedas, sino que también cultiva su capacidad de reflexión, colaboración, aplicación práctica y conexión con una tradición viva de conocimiento.
          </p>
          
          <p className="text-light mb-4">
            La metáfora orbital nos recuerda que, al igual que los planetas giran alrededor del sol, todos los dominios orbitan alrededor de un núcleo central —La Fuerza— que representa la energía vital que impulsa el aprendizaje y conecta todas las dimensiones de la experiencia.
          </p>
          
          <p className="text-light mb-4">
            En última instancia, los Dominios son una invitación a trascender la visión fragmentada del aprendizaje, reconociendo que el verdadero crecimiento ocurre cuando integramos conocimiento, práctica, reflexión y conexión humana.
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

export default ConclusionModal;