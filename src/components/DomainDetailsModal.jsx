import { useState, useEffect } from 'react';

const DomainDetailsModal = ({ domain, onClose }) => {
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

  // Función para obtener los detalles completos según el dominio
  const getDomainDetails = (name) => {
    const details = {
      "Usuarios": {
        title: "Dominio de Usuarios (Identidad)",
        sections: [
          { subtitle: "Qué es", content: "Base del ser en el sistema. Incluye el perfil, el rol, el nivel, los permisos y la historia personal del aprendiz." },
          { subtitle: "Vivencia", content: "El usuario encarna su camino mediante su avatar, sus insignias, sus avances y su rol dinámico en la comunidad." },
          { subtitle: "Relaciones", content: "Influye en Progresión (qué puede aprender). Condiciona su rol en Mentoría y en DAO. Se retroalimenta con Bitácora y Tradición." },
          { subtitle: "Digitalmente", content: "Perfil expandible, configurable, con evolución dinámica (tipo RPG). El sistema reconoce y adapta su entorno según su identidad." }
        ]
      },
      "Progresión": {
        title: "Dominio de la Progresión (Camino del Aprendiz)",
        sections: [
          { subtitle: "Qué es", content: "El mapa de crecimiento. Define los criterios, logros y desafíos necesarios para avanzar entre rangos." },
          { subtitle: "Vivencia", content: "El aprendiz transita un camino personalizado, donde cada avance refleja cambios reales en sus habilidades y entendimiento." },
          { subtitle: "Relaciones", content: "Se mide en Misiones, se registra en Bitácora. Puede ser guiado vía Mentoría. Valido frente a la Realidad." },
          { subtitle: "Digitalmente", content: "Sistema de niveles, hitos y tracks de aprendizaje. Interfaz visual tipo \"camino del héroe\", con feedback claro." }
        ]
      },
      "Bitácora": {
        title: "Dominio de la Bitácora (Reflexión y Testimonio)",
        sections: [
          { subtitle: "Qué es", content: "Diario interactivo y profundo del aprendiz. Espacio para documentar vivencias, errores, decisiones y aprendizajes." },
          { subtitle: "Vivencia", content: "Aquí el aprendiz procesa internamente sus experiencias, detecta patrones y toma conciencia." },
          { subtitle: "Relaciones", content: "Se enriquece con cada Misión y experiencia real. Es insumo clave en la Mentoría. Refleja evolución en la Tradición personal." },
          { subtitle: "Digitalmente", content: "Cuaderno de bitácora multimedia, editable, privado o compartible. Validaciones por mentores, comentarios, citas, IA de acompañamiento." }
        ]
      },
      "Misiones": {
        title: "Dominio de las Misiones (Desafíos Significativos)",
        sections: [
          { subtitle: "Qué es", content: "Acciones prácticas, optativas y alineadas con la etapa del aprendiz." },
          { subtitle: "Vivencia", content: "A través de las misiones, se baja a tierra lo aprendido: inversiones simuladas o reales, tareas de análisis, enseñanzas a otros, etc." },
          { subtitle: "Relaciones", content: "Fortalece la Progresión. Nutre la Bitácora. Incide en la Realidad y puede tener impacto en la Comunidad." },
          { subtitle: "Digitalmente", content: "Misiones gamificadas, integradas con APIs reales (mercados, redes, herramientas). Progreso visual, recompensas, feedback." }
        ]
      },
      "Comunidad / DAO": {
        title: "Dominio Comunidad/DAO (Gobierno y Participación)",
        sections: [
          { subtitle: "Qué es", content: "Espacio social y político del sistema. Es donde se propone, vota, construye y valida el camino común." },
          { subtitle: "Vivencia", content: "El aprendiz no solo aprende: construye. Participa en decisiones reales, colabora, co-crea normas o contenidos." },
          { subtitle: "Relaciones", content: "Aumenta su influencia según su Usuario/Rol y Progresión. Afecta la Tradición institucional. Necesita comprensión de la Realidad." },
          { subtitle: "Digitalmente", content: "Gobernanza simbólica o real mediante contratos inteligentes, votaciones, propuestas. Participación visible." }
        ]
      },
      "Mentoría y Referencias": {
        title: "Dominio Mentoría y Referencias (Guía personal y transmisión)",
        sections: [
          { subtitle: "Qué es", content: "Acompañamiento uno a uno y sugerencias personalizadas. Mentores como referentes, no como instructores." },
          { subtitle: "Vivencia", content: "El aprendiz recibe guía personalizada, comparte reflexiones profundas y referencias clave (libros, ideas, decisiones)." },
          { subtitle: "Relaciones", content: "Se alimenta de la Bitácora y la Progresión. Aporta a la Tradición como cultura viva. El mentor orienta en el contacto con la Realidad." },
          { subtitle: "Digitalmente", content: "Sistema de agendamiento, match mentor-aprendiz, espacios de reunión 1:1, sugerencias automáticas de referencias y citas." }
        ]
      },
      "Realidad": {
        title: "Dominio de la Realidad (Aplicación viva)",
        sections: [
          { subtitle: "Qué es", content: "Punto de contacto entre lo aprendido y el mundo." },
          { subtitle: "Vivencia", content: "El aprendiz actúa sobre su realidad personal, financiera y profesional, con decisiones reales y consecuencias." },
          { subtitle: "Relaciones", content: "Exige integración de todos los dominios. Es validación última de La Fuerza. Se refleja en la Bitácora, DAO y Mentoría." },
          { subtitle: "Digitalmente", content: "Espacios para registrar decisiones reales, vinculación con plataformas externas, foros de casos reales, feedback entre pares." }
        ]
      },
      "Tradición": {
        title: "Dominio de la Tradición (Memoria y Cultura)",
        sections: [
          { subtitle: "Qué es", content: "Archivo vivo de lo aprendido por generaciones anteriores. Incluye valores, errores pasados, leyendas internas, reglas compartidas." },
          { subtitle: "Vivencia", content: "El aprendiz entra en una corriente histórica, no camina solo: es heredero y también fundador." },
          { subtitle: "Relaciones", content: "Inspira las Misiones y da sentido a la Progresión. Aporta profundidad a la Bitácora. Influye en la DAO y las Mentorías." },
          { subtitle: "Digitalmente", content: "Biblioteca multimedia, archivo histórico de usuarios, timeline del proyecto, relatos de evolución. Memoria accesible." }
        ]
      },
      "La Fuerza": {
        title: "La Fuerza (Centro)",
        sections: [
          { subtitle: "Significado", content: "Núcleo vital, lo que une todo. Es la energía que circula entre los dominios y activa el crecimiento del aprendiz. Representa la conexión entre el mundo interior y exterior, entre lo simbólico y lo real." },
          { subtitle: "Vivencia", content: "Se manifiesta cuando todos los dominios están en equilibrio dinámico. Se experimenta como claridad, poder, sentido y enfoque." },
          { subtitle: "Relación", content: "Cada dominio alimenta y es alimentado por La Fuerza. Es principio y fin, contenedor y contenido." },
          { subtitle: "Digitalmente", content: "Puede visualizarse como un medidor o centro de energía que se activa cuando hay progresos interconectados." }
        ]
      }
    };
    
    return details[name] || {
      title: domain.name,
      sections: [
        { subtitle: "Descripción", content: domain.description || "No hay información detallada disponible para este dominio." }
      ]
    };
  };

  // Función para obtener la ruta de la imagen según el dominio
  const getDomainImage = (name) => {
    switch (name) {
      case "Usuarios":
        return "usuarios-icon.png";
      case "Progresión":
        return "progresion-icon.png";
      case "Bitácora":
        return "bitacora-icon.png";
      case "Misiones":
        return "misiones-icon.png";
      case "Comunidad / DAO":
        return "comunidad-icon.png";
      case "Mentoría y Referencias":
        return "mentoria-icon.png";
      case "Realidad":
        return "realidad-icon.png";
      case "Tradición":
        return "tradicion-icon.png";
      case "La Fuerza":
        return "fuerza-icon.png";
      default:
        return "";
    }
  };

  const details = getDomainDetails(domain.name);

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
        className="relative max-w-2xl bg-dark border-2 border-primary rounded-lg shadow-lg p-6 mx-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 400ms ease-out, transform 400ms ease-out',
          boxShadow: '0 0 15px rgba(236, 77, 88, 0.3)',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar en la esquina superior derecha */}
        <button 
          className="absolute top-3 right-3 text-light hover:text-primary transition-colors text-xl font-bold"
          onClick={handleClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-primary text-center mb-4">
          {details.title}
          <img 
            src={`/src/assets/icons/${getDomainImage(domain.name)}`} 
            alt={domain.name} 
            className="inline-block ml-2" 
            style={{ width: '24px', height: '24px' }} 
          />
        </h2>
        
        {details.sections.map((section, index) => (
          <div key={index} className="mb-4 text-left">
            <h3 className="text-lg font-semibold text-primary mb-2">{section.subtitle}</h3>
            <p className="text-light">{section.content}</p>
          </div>
        ))}
        
        <div className="flex justify-center mt-6">
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

export default DomainDetailsModal;