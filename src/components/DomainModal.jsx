import { useState, useEffect } from 'react';

const DomainModal = ({ domain, onClose, onMoreDetails }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar con fade in
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  // Función para obtener la descripción del dominio
  const getDomainContent = () => {
    switch(domain.name) {
      case "Usuarios":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2">🧍</span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Usuarios
            </h2>
            <p className="text-light mb-4 text-left">
              Representa la base identitaria. Aquí se definen los roles, los permisos y la estructura del viaje del aprendiz. Es el punto de partida desde el cual cada miembro comienza a trazar su trayectoria dentro del sistema.
            </p>
            <p className="text-primary italic text-center mb-4">
              "El nombre que eliges y el rol que ocupas configuran tu destino en la galaxia del conocimiento."
            </p>
          </>
        );
      case "Progresión":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Progresión
            </h2>
            <p className="text-light mb-4 text-left">
              Es el Dominio donde se manifiesta el crecimiento medible, pero también la evolución sutil del ser. Aquí se reflejan los avances, los hitos superados y la madurez alcanzada en el proceso.
            </p>
            <p className="text-primary italic text-center mb-4">
              "Todo camino tiene marcas invisibles que solo el caminante reconoce al mirar atrás."
            </p>
          </>
        );
      case "Bitácora":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Bitácora
            </h2>
            <p className="text-light mb-4 text-left">
              Una herramienta de registro reflexivo y validación por parte de mentores. Es un espacio íntimo de escritura y evaluación que promueve la conciencia de proceso, la autorregulación y el diálogo interno.
            </p>
            <p className="text-primary italic text-center mb-4">
              "La verdadera maestría nace en el diálogo honesto entre el aprendiz y su sombra."
            </p>
          </>
        );
      case "Misiones":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Misiones
            </h2>
            <p className="text-light mb-4 text-left">
              Son desafíos voluntarios con recompensas simbólicas o funcionales. Fomentan la exploración de nuevas habilidades, el juego como vía de aprendizaje y el compromiso con objetivos personales.
            </p>
            <p className="text-primary italic text-center mb-4">
              "Las misiones no se imponen. Se eligen. Y al aceptarlas, el aprendiz revela su voluntad de trascender."
            </p>
          </>
        );
      case "Comunidad / DAO":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Comunidad / DAO
            </h2>
            <p className="text-light mb-4 text-left">
              La dimensión colectiva del sistema. Aquí se participa en votaciones, propuestas y construcción de futuro común. Es donde la inteligencia colectiva y la gobernanza descentralizada cobran vida.
            </p>
            <p className="text-primary italic text-center mb-4">
              "En la red de conexiones auténticas, el individuo se fortalece y el sistema florece."
            </p>
          </>
        );
      case "Mentoría y Referencias":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Mentoría y Referencias
            </h2>
            <p className="text-light mb-4 text-left">
              Espacio de encuentro uno a uno con mentores, guías y compañeros más experimentados. También incluye recomendaciones de libros, cursos y material clave.
            </p>
            <p className="text-primary italic text-center mb-4">
              "Todo gran viaje se enriquece con faros que iluminan el horizonte."
            </p>
          </>
        );
      case "Realidad":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Realidad
            </h2>
            <p className="text-light mb-4 text-left">
              Aquí es donde el conocimiento se aplica y se contrasta con el mundo real: proyectos, iniciativas, prácticas, colaboraciones externas. Este dominio conecta la teoría con la acción concreta.
            </p>
            <p className="text-primary italic text-center mb-4">
              "Saber sin hacer es como ver sin tocar: una verdad incompleta."
            </p>
          </>
        );
      case "Tradición":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              Tradición
            </h2>
            <p className="text-light mb-4 text-left">
              Hace referencia al legado, a los fundamentos que sustentan todo el sistema. Es el vínculo con la sabiduría ancestral, con los principios que trascienden modas y tecnologías.
            </p>
            <p className="text-primary italic text-center mb-4">
              "No hay innovación que no esté cimentada sobre la solidez de un linaje."
            </p>
          </>
        );
      case "La Fuerza":
        return (
          <>
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              <span className="mr-2"></span>
              {domain.icon && (
                <img 
                  src={`/src/assets/icons/${domain.icon}`} 
                  alt={domain.name} 
                  className="inline-block mr-3" 
                  style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} 
                />
              )}
              El Núcleo: La Fuerza
            </h2>
            <p className="text-light mb-4 text-left">
              En el centro de todos los dominios está La Fuerza, símbolo del poder interior que impulsa el aprendizaje consciente. No es un dominio más, sino la energía que da vida a todos ellos. Representa la voluntad, el propósito y la conexión profunda entre los estudiantes, los mentores y la visión fundacional del proyecto.
            </p>
          </>
        );
      default:
        return <p className="text-light mb-4">Información no disponible para este dominio.</p>;
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
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
        <button 
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={handleClose}
        >
          ✕
        </button>
        
        {getDomainContent()}
        
        <div className="flex justify-center mt-4">
          <button 
            className="px-6 py-2 bg-primary text-light rounded-md hover:bg-opacity-80 transition-all"
            onClick={() => {
              if (onMoreDetails) onMoreDetails();
            }}
          >
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainModal;