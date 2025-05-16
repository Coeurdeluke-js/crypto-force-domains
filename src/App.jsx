import { useState } from 'react';
import Orbit from './components/Orbit';
import DomainModal from './components/DomainModal';
import SplashScreen from './components/SplashScreen';
import { domains, forceInfo } from './data/domains';

function App() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showForceInfo, setShowForceInfo] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
    setShowModal(true);
  };

  const handleForceClick = () => {
    setSelectedDomain(forceInfo);
    setShowForceInfo(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedDomain(null);
      setShowForceInfo(false);
    }, 300);
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-dark text-light p-4 font-inter">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      
      <div className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-primary">Crypto Force - Trading Team</h1>
          <p className="text-xl text-light opacity-80">Criptomonedas e Inversiones</p>
        </header>

        <Orbit 
          domains={domains} 
          onDomainClick={handleDomainClick} 
          onForceClick={handleForceClick}
        />

        {showModal && selectedDomain && (
          <DomainModal 
            domain={selectedDomain} 
            onClose={closeModal} 
            isForce={showForceInfo}
          />
        )}

        <footer className="text-center mt-8 text-light opacity-50 text-sm">
          <p>Crypto Force © 2023 - Trading Team</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
