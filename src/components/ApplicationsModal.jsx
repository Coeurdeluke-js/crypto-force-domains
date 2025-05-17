import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const ApplicationsModal = ({ onClose, fromMenu = true }) => {
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
        
        <h2 className="text-2xl font-bold text-primary mb-4 text-center pr-6">Aplicaciones Prácticas</h2>
        
        <div className="text-left">
          <p className="text-light mb-4 text-left">
            El sistema de Dominios tiene múltiples aplicaciones prácticas en el contexto de Crypto Force:
          </p>
          
          <ul className="list-disc pl-5 mb-4 text-light text-left">
            <li className="mb-2"><span className="text-primary font-semibold">Diseño de experiencias formativas</span> - Los dominios sirven como marco para diseñar experiencias de aprendizaje holísticas que abarquen tanto aspectos técnicos como humanos.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Evaluación multidimensional</span> - Permiten evaluar el progreso del aprendiz no solo en términos de conocimientos, sino también de habilidades sociales, reflexión personal y aplicación práctica.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Personalización del aprendizaje</span> - Cada aprendiz puede enfocarse en los dominios que más resuenan con sus necesidades y objetivos personales.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Construcción de comunidad</span> - Los dominios fomentan la creación de una comunidad con propósito compartido, donde cada miembro aporta desde su unicidad.</li>
            <li className="mb-2"><span className="text-primary font-semibold">Desarrollo de herramientas digitales</span> - Cada dominio inspira el desarrollo de herramientas específicas que potencian la experiencia del aprendiz.</li>
          </ul>
          
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

export default ApplicationsModal;