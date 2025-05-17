import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Orbit from './components/Orbit';
import DomainModal from './components/DomainModal';
import DomainInfoModal from './components/DomainInfoModal';
import DomainPurposeModal from './components/DomainPurposeModal';
import FloatingMenu from './components/FloatingMenu';
import RelationshipsModal from './components/RelationshipsModal';
import ApplicationsModal from './components/ApplicationsModal';
import ConclusionModal from './components/ConclusionModal';
import DomainDetailModal from './components/DomainDetailModal';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showDomainInfo, setShowDomainInfo] = useState(false);
  const [showDomainPurpose, setShowDomainPurpose] = useState(false);
  const [showOrbit, setShowOrbit] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [showRelationships, setShowRelationships] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [showConclusion, setShowConclusion] = useState(false);
  const [fromMenu, setFromMenu] = useState(false);
  const [initialSequenceComplete, setInitialSequenceComplete] = useState(false);
  const [showDomainDetail, setShowDomainDetail] = useState(false);
  const [selectedDetailDomain, setSelectedDetailDomain] = useState(null);

  // Definición de los dominios
  const domains = [
    { name: "Usuarios", icon: "usuarios-icon.png" },
    { name: "Progresión", icon: "progresion-icon.png" },
    { name: "Bitácora", icon: "bitacora-icon.png" },
    { name: "Misiones", icon: "misiones-icon.png" },
    { name: "Comunidad / DAO", icon: "comunidad-icon.png" },
    { name: "Mentoría y Referencias", icon: "mentoria-icon.png" },
    { name: "Realidad", icon: "realidad-icon.png" },
    { name: "Tradición", icon: "tradicion-icon.png" }
  ];

  // Función para manejar el clic en un dominio
  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };

  // Función para manejar el clic en "La Fuerza"
  const handleForceClick = () => {
    setSelectedDomain({
      name: "La Fuerza",
      icon: "🌀",
      description: "Núcleo vital, lo que une todo. Es la energía que circula entre los dominios y activa el crecimiento del aprendiz. Representa la conexión entre el mundo interior y exterior, entre lo simbólico y lo real."
    });
  };

  // Función para mostrar más detalles de un dominio
  const handleShowMoreDetails = () => {
    setSelectedDetailDomain(selectedDomain);
    setSelectedDomain(null);
    setShowDomainDetail(true);
  };

  // Mostrar el modal de información después del splash
  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => {
        setShowDomainInfo(true);
        setFromMenu(false);
      }, 500);
    }
  }, [showSplash]);

  // Cerrar el modal de información
  const handleInfoClose = () => {
    setShowDomainInfo(false);
    // Solo si es la primera vez que se muestra (después del splash)
    if (!initialSequenceComplete) {
      setTimeout(() => {
        setShowDomainPurpose(true);
      }, 500);
    }
  };

  // Cerrar el modal de propósito y mostrar la órbita
  const handlePurposeClose = () => {
    setShowDomainPurpose(false);
    // Solo si es la primera vez que se muestra (después del modal de info)
    if (!initialSequenceComplete) {
      setTimeout(() => {
        setShowOrbit(true);
        setInitialSequenceComplete(true);
      }, 500);
    }
  };

  // Función para abrir el modal de información de dominios desde el menú
  const handleOpenDomainInfo = () => {
    setFromMenu(true);
    setShowDomainInfo(true);
  };

  // Función para abrir el modal de propósito de dominios desde el menú
  const handleOpenDomainPurpose = () => {
    setFromMenu(true);
    setShowDomainPurpose(true);
  };

  return (
    <div className="min-h-screen bg-dark text-light overflow-hidden">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      
      <div style={{ display: initialSequenceComplete ? 'block' : 'none' }}>
        <header className="py-6 text-center">
          <h1 className="text-4xl font-bold text-primary">Crypto Force - Trading Team</h1>
          <p className="text-xl mt-2">Criptomonedas e Inversiones</p>
        </header>
        
        <main className="container mx-auto px-4 pb-8 flex flex-col items-center justify-center">
          {showOrbit && (
            <Orbit 
              domains={domains} 
              onDomainClick={handleDomainClick} 
              onForceClick={handleForceClick}
            />
          )}
        </main>
        
        <footer className="text-center py-2 text-sm text-gray-400 relative mt-auto">
          Crypto Force © 2025 - Trading Team | Dominios: Los bloques fundacionales del sistema
        </footer>
      </div>
      
      {/* Modales */}
      {showDomainInfo && <DomainInfoModal onClose={handleInfoClose} fromMenu={fromMenu} />}
      {showDomainPurpose && <DomainPurposeModal onClose={handlePurposeClose} fromMenu={fromMenu} />}
      {selectedDomain && (
        <DomainModal 
          domain={selectedDomain} 
          onClose={() => setSelectedDomain(null)}
          onMoreDetails={handleShowMoreDetails}
        />
      )}
      {showDomainDetail && selectedDetailDomain && (
        <DomainDetailModal 
          domain={selectedDetailDomain} 
          onClose={() => {
            setShowDomainDetail(false);
            setSelectedDetailDomain(null);
          }}
        />
      )}
      
      {/* Modales adicionales */}
      {showRelationships && <RelationshipsModal onClose={() => setShowRelationships(false)} />}
      {showApplications && <ApplicationsModal onClose={() => setShowApplications(false)} />}
      {showConclusion && <ConclusionModal onClose={() => setShowConclusion(false)} />}
      
      {/* Menú flotante con nuevas opciones - Solo visible cuando se muestra la órbita */}
      {showOrbit && (
        <FloatingMenu 
          onOpenDomainInfo={handleOpenDomainInfo}
          onOpenDomainPurpose={handleOpenDomainPurpose}
          onOpenRelationships={() => setShowRelationships(true)}
          onOpenApplications={() => setShowApplications(true)}
          onOpenConclusion={() => setShowConclusion(true)}
        />
      )}
    </div>
  );
}

export default App;
