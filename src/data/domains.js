export const forceInfo = {
  name: "La Fuerza",
  significado: "Núcleo vital, lo que une todo. Es la energía que circula entre los dominios y activa el crecimiento del aprendiz. Representa la conexión entre el mundo interior y exterior, entre lo simbólico y lo real.",
  vivencia: "Se manifiesta cuando todos los dominios están en equilibrio dinámico. Se experimenta como claridad, poder, sentido y enfoque.",
  relacion: "Cada dominio alimenta y es alimentado por La Fuerza. Es principio y fin, contenedor y contenido.",
  digitalmente: "Puede visualizarse como un medidor o centro de energía que se activa cuando hay progresos interconectados."
};

export const domains = [
  {
    name: "Usuarios",
    desc: "Gestión de identidades, roles y permisos.",
    queEs: "Base del ser en el sistema. Incluye el perfil, el rol, el nivel, los permisos y la historia personal del aprendiz.",
    vivencia: "El usuario encarna su camino mediante su avatar, sus insignias, sus avances y su rol dinámico en la comunidad.",
    relaciones: [
      "Influye en Progresión (qué puede aprender).",
      "Condiciona su rol en Mentoría y en DAO.",
      "Se retroalimenta con Bitácora y Tradición."
    ],
    digitalmente: "Perfil expandible, configurable, con evolución dinámica (tipo RPG). El sistema reconoce y adapta su entorno según su identidad."
  },
  {
    name: "Progresión",
    desc: "Desarrollo y evolución del aprendiz.",
    queEs: "El mapa de crecimiento. Define los criterios, logros y desafíos necesarios para avanzar entre rangos.",
    vivencia: "El aprendiz transita un camino personalizado, donde cada avance refleja cambios reales en sus habilidades y entendimiento.",
    relaciones: [
      "Se mide en Misiones, se registra en Bitácora.",
      "Puede ser guiado vía Mentoría.",
      "Valido frente a la Realidad."
    ],
    digitalmente: "Sistema de niveles, hitos y tracks de aprendizaje. Interfaz visual tipo \"camino del héroe\", con feedback claro."
  },
  {
    name: "Bitácora",
    desc: "Registro reflexivo validado por mentores.",
    queEs: "Diario interactivo y profundo del aprendiz. Espacio para documentar vivencias, errores, decisiones y aprendizajes.",
    vivencia: "Aquí el aprendiz procesa internamente sus experiencias, detecta patrones y toma conciencia.",
    relaciones: [
      "Se enriquece con cada Misión y experiencia real.",
      "Es insumo clave en la Mentoría.",
      "Refleja evolución en la Tradición personal."
    ],
    digitalmente: "Cuaderno de bitácora multimedia, editable, privado o compartible. Validaciones por mentores, comentarios, citas, IA de acompañamiento."
  },
  {
    name: "Misiones",
    desc: "Desafíos opcionales con recompensas.",
    queEs: "Acciones prácticas, optativas y alineadas con la etapa del aprendiz.",
    vivencia: "A través de las misiones, se baja a tierra lo aprendido: inversiones simuladas o reales, tareas de análisis, enseñanzas a otros, etc.",
    relaciones: [
      "Fortalece la Progresión.",
      "Nutre la Bitácora.",
      "Incide en la Realidad y puede tener impacto en la Comunidad."
    ],
    digitalmente: "Misiones gamificadas, integradas con APIs reales (mercados, redes, herramientas). Progreso visual, recompensas, feedback."
  },
  {
    name: "Comunidad / DAO",
    desc: "Participación en decisiones y propuestas.",
    queEs: "Espacio social y político del sistema. Es donde se propone, vota, construye y valida el camino común.",
    vivencia: "El aprendiz no solo aprende: construye. Participa en decisiones reales, colabora, co-crea normas o contenidos.",
    relaciones: [
      "Aumenta su influencia según su Usuario/Rol y Progresión.",
      "Afecta la Tradición institucional.",
      "Necesita comprensión de la Realidad."
    ],
    digitalmente: "Gobernanza simbólica o real mediante contratos inteligentes, votaciones, propuestas. Participación visible."
  },
  {
    name: "Mentoría y Referencias",
    desc: "Intercambio humano y técnico en 1:1.",
    queEs: "Acompañamiento uno a uno y sugerencias personalizadas. Mentores como referentes, no como instructores.",
    vivencia: "El aprendiz recibe guía personalizada, comparte reflexiones profundas y referencias clave (libros, ideas, decisiones).",
    relaciones: [
      "Se alimenta de la Bitácora y la Progresión.",
      "Aporta a la Tradición como cultura viva.",
      "El mentor orienta en el contacto con la Realidad."
    ],
    digitalmente: "Sistema de agendamiento, match mentor-aprendiz, espacios de reunión 1:1, sugerencias automáticas de referencias y citas."
  },
  {
    name: "Realidad",
    desc: "Aplicación práctica del conocimiento.",
    queEs: "Punto de contacto entre lo aprendido y el mundo.",
    vivencia: "El aprendiz actúa sobre su realidad personal, financiera y profesional, con decisiones reales y consecuencias.",
    relaciones: [
      "Exige integración de todos los dominios.",
      "Es validación última de La Fuerza.",
      "Se refleja en la Bitácora, DAO y Mentoría."
    ],
    digitalmente: "Espacios para registrar decisiones reales, vinculación con plataformas externas, foros de casos reales, feedback entre pares."
  },
  {
    name: "Tradición",
    desc: "Respeto por el legado de conocimiento.",
    queEs: "Archivo vivo de lo aprendido por generaciones anteriores. Incluye valores, errores pasados, leyendas internas, reglas compartidas.",
    vivencia: "El aprendiz entra en una corriente histórica, no camina solo: es heredero y también fundador.",
    relaciones: [
      "Inspira las Misiones y da sentido a la Progresión.",
      "Aporta profundidad a la Bitácora.",
      "Influye en la DAO y las Mentorías."
    ],
    digitalmente: "Biblioteca multimedia, archivo histórico de usuarios, timeline del proyecto, relatos de evolución. Memoria accesible."
  }
];