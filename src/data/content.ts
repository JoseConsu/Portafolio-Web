import { programasTemporales } from "../programas-temporales/programas";
import { parciales } from "../parciales/parciales";

export const perfil = {
  nombre: "Jose David Consuegra Medina",
  rol: "Ingeniero de sistemas",
  enfoque:
    "Enfoque en ciberseguridad • gestión de redes • manejo y diseño de servidores y centros de datos",
  correo: "mailto:josedconsuegram@gmail.com",
  whatsapp: "https://wa.me/573012052740",
  foto: "/imagenes/yo.jpg",
};

export const sobreMi = {
  perfilLaboral: [
    "Soy una persona disciplinada, curiosa y orientada al aprendizaje continuo. Destaco por resolver problemas con enfoque analítico, trabajar en equipo y mantener constancia en objetivos técnicos.",
    "Mi ruta de crecimiento profesional está enfocada en ciberseguridad e infraestructura, asumiendo progresivamente más responsabilidades y aportando en proyectos de seguridad y estabilidad tecnológica.",
  ],
  estudios: [
    {
      titulo: "Ingeniería de Sistemas (en curso)",
      detalle: "Universidad Industrial de Santander (UIS).",
    },
  ],
  experienciaLaboral: [
    {
      titulo: "Sin experiencia laboral formal aún",
      detalle:
        "Perfil laboral orientado a soporte técnico, redes y ciberseguridad con experiencia en proyectos académicos y personales.",
    },
  ],
  certificaciones: [
    {
      titulo: "Certificaciones por definir",
      detalle: "Aquí se agregarán cursos, certificaciones y logros verificables.",
    },
  ],
};

export const proyectos = [
  {
    titulo: "Portafolio base",
    descripcion:
      "Proyecto principal para consolidar identidad profesional, arquitectura web y despliegue continuo en Vercel.",
    etiquetas: ["Astro", "UI", "Deploy"],
    categoria: "web",
  },
  {
    titulo: "Laboratorio de redes",
    descripcion:
      "Espacio de pruebas para prácticas de direccionamiento, simulación de topologías y documentación técnica.",
    etiquetas: ["Redes", "Práctica"],
    categoria: "infraestructura",
  },
];

export const proyectosTemporales = programasTemporales.map((programa) => ({
  id: programa.id,
  slug: programa.slug,
  titulo: programa.titulo,
  descripcion: programa.descripcion,
  enlace: programa.enlaceExterno,
}));


export const parcialesAcademicos = parciales.map((parcial) => ({
  id: parcial.id,
  slug: parcial.slug,
  titulo: parcial.titulo,
  descripcion: parcial.descripcion,
  enlace: parcial.enlaceExterno,
}));

export const habilidades = [
  { nombre: "Linux", estado: "Dominado", icono: "/icons/linux.svg", tono: "skill-linux", porcentaje: 92 },
  { nombre: "Redes", estado: "En proceso", icono: "/icons/network.svg", tono: "skill-redes", porcentaje: 48 },
  { nombre: "Servidores", estado: "En proceso", icono: "/icons/server.svg", tono: "skill-servidores", porcentaje: 36 },
  { nombre: "Ciberseguridad", estado: "Por aprender", icono: "/icons/shield.svg", tono: "skill-ciber", porcentaje: 4 },
];
