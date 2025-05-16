const Domain = ({ domain, position, onClick, pulseClass }) => {
  const domainColors = {
    "Usuarios": "bg-usuarios",
    "Progresión": "bg-progresion",
    "Bitácora": "bg-bitacora",
    "Misiones": "bg-misiones",
    "Comunidad / DAO": "bg-comunidad",
    "Mentoría y Referencias": "bg-mentoria",
    "Realidad": "bg-realidad",
    "Tradición": "bg-tradicion"
  };

  const bgColor = domainColors[domain.name] || "bg-primary";

  return (
    <div 
      className={`domain ${bgColor} ${pulseClass}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      onClick={onClick}
    >
      <span>
        {domain.name}
      </span>
    </div>
  );
};

export default Domain;