import { programas } from "../programas-temporales/programas";
import { parciales } from "../parciales/parciales";

export interface ExperienciaLaboral {
  empresa: string;
  cargo: string;
  periodo: string;
  detalle: string;
  tecnologias?: string[];
}

export interface Estudio {
  titulo: string;
  institucion: string;
  periodo?: string;
  detalle?: string;
}

export interface Certificacion {
  titulo: string;
  emisor: string;
  fecha?: string;
  detalle?: string;
  enlace?: string;
}

export interface Proyecto {
  titulo: string;
  categoria: string;
  descripcion: string;
  tecnologias: string[];
  enlaceDemo?: string;
  enlaceRepo?: string;
}

export interface SkillGroup {
  grupo: "dominadas" | "en proceso" | "por aprender";
  habilidades: string[];
}

export interface Perfil {
  nombre: string;
  enfoque: string;
  correo: string;
  whatsapp: string;
  linkedIn?: string;
  github?: string;
  rol?: string;
  foto?: string;
}

export interface SobreMi {
  perfilLaboral: string[];
  experienciaLaboral: ExperienciaLaboral[];
  estudios: Estudio[];
  certificaciones: Certificacion[];
}

export const perfil: Perfil & { rol?: string; foto?: string } = {
  nombre: "Jose David Consuegra Medina",
  enfoque: "Infraestructura · SecOps · Narrativa académica",
  correo: "mailto:josedconsuegram@gmail.com",
  whatsapp: "https://wa.me/573012052740",
  linkedIn: "https://www.linkedin.com/in/jose-david-consuegra-medina-00b14535b/?locale=en",
  github: "https://github.com/JoseConsu",
  rol: "Ingeniero de Sistemas",
  foto: "/imagenes/yo.jpg",
};

export const sobreMi: SobreMi = {
  perfilLaboral: [
    "Soy una persona disciplinada, curiosa y orientada al aprendizaje continuo. Destaco por resolver problemas con enfoque analítico, trabajar en equipo y mantener constancia en objetivos técnicos.",
    "Mi ruta de crecimiento profesional está enfocada en ciberseguridad e infraestructura, asumiendo progresivamente más responsabilidades y aportando en proyectos de seguridad y estabilidad tecnológica.",
    "Complemento los laboratorios universitarios con proyectos personales que documentan métricas, visualizaciones y comparativas para transferir conocimiento a otros estudiantes.",
  ],
  experienciaLaboral: [
    {
      empresa: "Laboratorios académicos UIS",
      cargo: "Desarrollador e investigador",
      periodo: "2023 – Presente",
      detalle:
        "Produzco laboratorios de análisis de algoritmos y sistemas con documentación exhaustiva. Cada entrega incluye código comentado, evidencias visuales y mediciones reproducibles.",
      tecnologias: ["Java", "Python", "Astro", "TypeScript"],
    },
    {
      empresa: "Mentorías y soporte TI",
      cargo: "Soporte técnico & SecOps",
      periodo: "2021 – 2023",
      detalle:
        "Acompañé proyectos personales y de aula brindando soporte en redes, endurecimiento de servidores Linux y despliegues multi-plataforma, asegurando continuidad operativa.",
      tecnologias: ["Linux", "Docker", "Redes", "Seguridad"],
    },
  ],
  estudios: [
    {
      titulo: "Ingeniería de Sistemas (en curso)",
      institucion: "Universidad Industrial de Santander (UIS)",
      periodo: "2020 – Presente",
      detalle: "Énfasis en estructuras de datos, redes, ciberseguridad e ingeniería de software.",
    },
  ],
  certificaciones: [
    {
      titulo: "Formaciones en curso",
      emisor: "Cisco Networking Academy",
      fecha: "2024",
      detalle: "Diplomados en redes, automatización y fundamentos de ciberseguridad.",
    },
    {
      titulo: "Laboratorios autodidactas",
      emisor: "Proyecto personal",
      detalle: "Colección de laboratorios documentados que miden tiempo, memoria y estabilidad de algoritmos.",
    },
  ],
};

export const proyectos: Proyecto[] = [
  {
    titulo: "Portafolio base",
    categoria: "Web / Storytelling",
    descripcion: "Sitio principal donde consolido identidad profesional, arquitectura Astro y despliegue continuo en Vercel.",
    tecnologias: ["Astro", "TypeScript", "CSS", "Vercel"],
    enlaceRepo: "https://github.com/Jose-d-c/Portafolio-Web",
  },
  {
    titulo: "Laboratorio de redes",
    categoria: "Infraestructura",
    descripcion: "Espacio de pruebas para direccionamiento, simulación de topologías y documentación técnica recurrente.",
    tecnologias: ["Packet Tracer", "Linux", "Bash", "Markdown"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    grupo: "dominadas",
    habilidades: ["Linux", "Redes", "Servidores", "HTML", "CSS", "Astro", "Git"],
  },
  {
    grupo: "en proceso",
    habilidades: ["TypeScript", "Docker", "Ciberseguridad", "Automatización"],
  },
  {
    grupo: "por aprender",
    habilidades: ["Kubernetes", "AWS", "Go"],
  },
];

export const metricas = {
  skillsActivas: skillGroups[0].habilidades.length + skillGroups[1].habilidades.length,
  proyectos: proyectos.length,
  piezasAcademicas: parciales.length + programas.length,
};
