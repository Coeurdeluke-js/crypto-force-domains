import { useState, useEffect } from 'react';

const ForceModal = ({ data, onClose }) => {
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
        className="relative max-w-md bg-dark border-2 border-primary rounded-lg shadow-lg p-6 mx-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 400ms ease-out, transform 400ms ease-out',
          boxShadow: '0 0 15px rgba(236, 77, 88, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-3 right-3 text-light hover:text-primary transition-colors text-xl font-bold"
          onClick={handleClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-primary text-center mb-4">{data.name}</h2>
        
        <p className="text-light mb-6">
          {data.description}
        </p>
        
        <div className="flex justify-center mt-4">
          <button 
            className="px-6 py-2 bg-primary text-light rounded-md hover:bg-opacity-80 transition-all"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForceModal;