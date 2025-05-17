import { useState, useEffect } from 'react';
import { FaInfoCircle, FaBullseye, FaNetworkWired, FaLightbulb, FaBookOpen } from 'react-icons/fa';

const FloatingMenu = ({ onOpenRelationships, onOpenApplications, onOpenConclusion, onOpenDomainInfo, onOpenDomainPurpose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMenuVisible(true);
    } else {
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 300); // Tiempo de la animación
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (callback) => {
    setIsOpen(false);
    if (callback) callback();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Menú desplegable */}
      {menuVisible && (
        <div 
          className="absolute bottom-16 right-0 rounded-lg shadow-lg p-2 mb-2"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 0 15px rgba(236, 77, 88, 0.3)',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out'
          }}
        >
          <div className="flex flex-col space-y-2">
            <button 
              className="px-3 py-1.5 text-primary rounded-md transition-all text-sm flex items-center whitespace-nowrap"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 77, 88, 0.2)';
                e.currentTarget.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              onClick={() => handleButtonClick(onOpenDomainInfo)}
            >
              <FaInfoCircle className="mr-2" /> ¿Qué son los Dominios?
            </button>
            <button 
              className="px-3 py-1.5 text-primary rounded-md transition-all text-sm flex items-center whitespace-nowrap"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 77, 88, 0.2)';
                e.currentTarget.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              onClick={() => handleButtonClick(onOpenDomainPurpose)}
            >
              <FaBullseye className="mr-2" /> Propósito de los Dominios
            </button>
            <button 
              className="px-3 py-1.5 text-primary rounded-md transition-all text-sm flex items-center whitespace-nowrap"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 77, 88, 0.2)';
                e.currentTarget.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              onClick={() => handleButtonClick(onOpenRelationships)}
            >
              <FaNetworkWired className="mr-2" /> Cómo se relacionan
            </button>
            <button 
              className="px-3 py-1.5 text-primary rounded-md transition-all text-sm flex items-center whitespace-nowrap"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 77, 88, 0.2)';
                e.currentTarget.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              onClick={() => handleButtonClick(onOpenApplications)}
            >
              <FaLightbulb className="mr-2" /> Aplicaciones prácticas
            </button>
            <button 
              className="px-3 py-1.5 text-primary rounded-md transition-all text-sm flex items-center whitespace-nowrap"
              style={{
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 77, 88, 0.2)';
                e.currentTarget.style.transform = 'translateX(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              onClick={() => handleButtonClick(onOpenConclusion)}
            >
              <FaBookOpen className="mr-2" /> Conclusión
            </button>
          </div>
        </div>
      )}
      
      {/* Botón principal */}
      <button 
        className="w-12 h-12 bg-primary rounded-full text-light text-2xl shadow-lg transition-all"
        style={{
          boxShadow: '0 0 10px rgba(236, 77, 88, 0.5)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(236, 77, 88, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(236, 77, 88, 0.5)';
        }}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%', 
          height: '100%',
          lineHeight: '1',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          {isOpen ? '✕' : '+'}
        </span>
      </button>
    </div>
  );
};

export default FloatingMenu;