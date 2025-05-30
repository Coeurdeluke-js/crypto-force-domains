import React, { useState, useEffect, useRef } from 'react';
import DomainModal from './DomainModal';
import DomainDetailModal from './DomainDetailModal';
import DomainInfoModal from './DomainInfoModal';
import DomainPurposeModal from './DomainPurposeModal';
import RelationshipsModal from './RelationshipsModal';
import ApplicationsModal from './ApplicationsModal';
import ConclusionModal from './ConclusionModal';
import ForceModal from './ForceModal';

const OrbitSystem = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showPurposeModal, setShowPurposeModal] = useState(false);
  const [showRelationshipsModal, setShowRelationshipsModal] = useState(false);
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [showConclusionModal, setShowConclusionModal] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  // Función para actualizar dimensiones con debounce para evitar recálculos excesivos
  useEffect(() => {
    let timeoutId = null;
    
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 150); // Debounce de 150ms
    }
    
    window.addEventListener('resize', handleResize);
    // Forzar un cálculo inicial después de que el componente se monte completamente
    const initialTimeout = setTimeout(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, []);

  // Calcular tamaños basados en el viewport con ajustes específicos por dispositivo
  const calculateLayout = () => {
    const screenWidth = dimensions.width;
    const screenHeight = dimensions.height;
    
    // Determinar si estamos en modo retrato o paisaje
    const isPortrait = screenHeight > screenWidth;
    
    // Usar un porcentaje del ancho de pantalla para dispositivos pequeños en modo retrato
    // y un valor fijo para pantallas más grandes
    let svgSize;
    let orbitRadiusRatio;
    let centerRadiusRatio;
    let domainRadiusRatio;
    
    if (isPortrait) {
      // Modo retrato (teléfonos)
      if (screenWidth <= 320) {
        // Dispositivos muy pequeños (iPhone SE antiguo)
        svgSize = screenWidth * 0.9;
        orbitRadiusRatio = 0.32; // Órbita más cercana al centro
        centerRadiusRatio = 0.15; // Centro más grande
        domainRadiusRatio = 0.08; // Dominios más pequeños
      } else if (screenWidth <= 375) {
        // iPhone SE nuevo, iPhone 8, etc.
        svgSize = screenWidth * 0.85;
        orbitRadiusRatio = 0.34;
        centerRadiusRatio = 0.14;
        domainRadiusRatio = 0.08;
      } else if (screenWidth <= 414) {
        // iPhone Plus, iPhone Max, etc.
        svgSize = screenWidth * 0.82;
        orbitRadiusRatio = 0.36;
        centerRadiusRatio = 0.13;
        domainRadiusRatio = 0.08;
      } else if (screenWidth <= 480) {
        // Dispositivos medianos
        svgSize = screenWidth * 0.8;
        orbitRadiusRatio = 0.38;
        centerRadiusRatio = 0.12;
        domainRadiusRatio = 0.08;
      } else {
        // Tablets y dispositivos grandes en modo retrato
        svgSize = Math.min(screenWidth * 0.75, 600);
        orbitRadiusRatio = 0.4;
        centerRadiusRatio = 0.11;
        domainRadiusRatio = 0.08;
      }
    } else {
      // Modo paisaje
      svgSize = Math.min(screenHeight * 0.75, 700);
      orbitRadiusRatio = 0.4;
      centerRadiusRatio = 0.11;
      domainRadiusRatio = 0.08;
    }
    
    // Asegurar que el SVG no sea más grande que el espacio disponible
    svgSize = Math.min(svgSize, screenWidth * 0.95, screenHeight * 0.8);
    
    // Calcular radios basados en el tamaño del SVG
    const centerRadius = svgSize * centerRadiusRatio;
    const orbitRadius = svgSize * orbitRadiusRatio;
    const domainRadius = svgSize * domainRadiusRatio;
    
    // Centro del SVG
    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    
    return {
      svgSize,
      centerRadius,
      orbitRadius,
      domainRadius,
      centerX,
      centerY,
      fontSize: Math.max(svgSize * 0.025, 12) // Tamaño de fuente mínimo 12px
    };
  };
  
  const layout = calculateLayout();
  
  // Definir dominios con sus ángulos
  const domains = [
    { name: "Usuarios", icon: "usuarios-icon.png", angle: 90 },
    { name: "Progresión", icon: "progresion-icon.png", angle: 45 },
    { name: "Bitácora", icon: "bitacora-icon.png", angle: 0 },
    { name: "Misiones", icon: "misiones-icon.png", angle: 315 },
    { name: "Comunidad / DAO", icon: "comunidad-icon.png", angle: 270 },
    { name: "Mentoría y Referencias", icon: "mentoria-icon.png", angle: 225 },
    { name: "Realidad", icon: "realidad-icon.png", angle: 180 },
    { name: "Tradición", icon: "tradicion-icon.png", angle: 135 },
    { name: "La Fuerza", icon: "", angle: null }
  ];
  
  // Calcular posición basada en ángulo con mayor precisión
  const calculatePosition = (angle) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: layout.centerX + layout.orbitRadius * Math.cos(radians),
      y: layout.centerY + layout.orbitRadius * Math.sin(radians)
    };
  };
  
  // Manejar clic en un dominio
  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };
  
  // Función para obtener la clase de pulso
  const getPulseClass = (index) => {
    const pulseClasses = ['pulse-1', 'pulse-2', 'pulse-3', 'pulse-4'];
    return pulseClasses[index % pulseClasses.length];
  };
  
  // Función para formatear el nombre del dominio para texto SVG
  const formatDomainName = (name) => {
    if (name === "Comunidad / DAO") {
      return "Comunidad";
    }
    if (name === "Mentoría y Referencias") {
      return "Mentoría";
    }
    return name;
  };
  
  // Renderizar el sistema orbital usando SVG
  return (
    <div 
      className="orbit-system-container flex justify-center items-center min-h-[70vh]"
      ref={containerRef}
    >
      <svg 
        ref={svgRef}
        width={layout.svgSize} 
        height={layout.svgSize} 
        viewBox={`0 0 ${layout.svgSize} ${layout.svgSize}`}
        className="orbit-svg"
        style={{ 
          margin: '0 auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '80vh'
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Círculo de órbita (opcional, para visualizar la órbita) */}
        <circle
          cx={layout.centerX}
          cy={layout.centerY}
          r={layout.orbitRadius}
          fill="none"
          stroke="#ec4d58"
          strokeWidth={0.5}
          strokeOpacity={0.3}
          strokeDasharray="2,2"
        />
        
        {/* Líneas de conexión */}
        {domains.map((domain, index) => {
          if (domain.name === "La Fuerza") return null;
          
          const position = calculatePosition(domain.angle);
          
          return (
            <line
              key={`line-${index}`}
              x1={layout.centerX}
              y1={layout.centerY}
              x2={position.x}
              y2={position.y}
              stroke="#ec4d58"
              strokeWidth={1}
              strokeOpacity={0.6}
            />
          );
        })}
        
        {/* Dominios (dibujarlos antes que La Fuerza para que queden detrás) */}
        {domains.map((domain, index) => {
          if (domain.name === "La Fuerza") return null;
          
          const position = calculatePosition(domain.angle);
          
          return (
            <g 
              key={`domain-${index}`}
              className={`domain-group ${getPulseClass(index)}`}
              onClick={() => handleDomainClick(domain)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={position.x}
                cy={position.y}
                r={layout.domainRadius}
                fill="#1a1a1a"
                stroke="#ec4d58"
                strokeWidth={1}
                className="domain-circle"
              />
              <text
                x={position.x}
                y={position.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={layout.fontSize}
                style={{ pointerEvents: 'none' }}
              >
                {formatDomainName(domain.name)}
              </text>
            </g>
          );
        })}
        
        {/* Círculo central (La Fuerza) - dibujado al final para que quede encima */}
        <g 
          className="force-group" 
          onClick={() => handleDomainClick(domains.find(d => d.name === "La Fuerza"))}
          style={{ cursor: 'pointer' }}
        >
          <circle
            cx={layout.centerX}
            cy={layout.centerY}
            r={layout.centerRadius}
            fill="#ec4d58"
            className="force-circle"
          />
          <text
            x={layout.centerX}
            y={layout.centerY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={layout.fontSize * 1.2}
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >
            La Fuerza
          </text>
        </g>
      </svg>
      
      {/* Botón de información */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-30">
        <button 
          className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-all"
          onClick={() => setShowInfoModal(true)}
          title="¿Qué son los Dominios?"
        >
          <span className="text-xl">?</span>
        </button>
      </div>
      
      {/* Modales */}
      {selectedDomain && (
        <DomainModal
          domain={selectedDomain}
          onClose={() => setSelectedDomain(null)}
          onMoreDetails={() => setShowDetailModal(true)}
        />
      )}
      
      {showDetailModal && selectedDomain && (
        <DomainDetailModal
          domain={selectedDomain}
          onClose={() => setShowDetailModal(false)}
        />
      )}
      
      {/* Otros modales */}
      {showInfoModal && <DomainInfoModal onClose={() => setShowInfoModal(false)} />}
      {showPurposeModal && <DomainPurposeModal onClose={() => setShowPurposeModal(false)} />}
      {showRelationshipsModal && <RelationshipsModal onClose={() => setShowRelationshipsModal(false)} />}
      {showApplicationsModal && <ApplicationsModal onClose={() => setShowApplicationsModal(false)} />}
      {showConclusionModal && <ConclusionModal onClose={() => setShowConclusionModal(false)} />}
    </div>
  );
};

export default OrbitSystem;