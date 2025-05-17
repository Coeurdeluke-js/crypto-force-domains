import { useState, useEffect } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const DomainInfoModal = ({ onClose, fromMenu }) => {
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
        className="max-w-2xl bg-dark border-2 border-primary rounded-lg shadow-lg p-6 mx-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 400ms ease-out, transform 400ms ease-out',
          boxShadow: '0 0 20px rgba(236, 77, 88, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">¿Qué son los Dominios de Crypto Force?</h2>
        
        <p className="text-light mb-4 text-left">
          En el universo de Crypto Force, los Dominios representan las grandes áreas o pilares que componen la experiencia formativa integral del aprendiz. Son estructuras dinámicas e interconectadas que, al igual que planetas orbitando un núcleo central —La Fuerza—, brindan sentido, dirección y propósito al camino de cada miembro dentro de la academia.
        </p>
        
        <p className="text-light mb-6">
          No se trata simplemente de secciones temáticas o módulos educativos. Cada Dominio actúa como un ecosistema vivo con su propia energía, su propósito pedagógico y su potencial transformador. En conjunto, forman un mapa de navegación diseñado para fomentar la autonomía, la conciencia, la conexión humana y la aplicación práctica del conocimiento en el mundo real.
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
                Continuar <FaArrowRight className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainInfoModal;