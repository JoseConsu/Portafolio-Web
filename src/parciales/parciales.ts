const fechaHoy = new Date().toISOString().slice(0, 10);

export type PuntoParcial = {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  rutaCodigo?: string;
  rutaImagen?: string;
  valor?: number;
  arregloA?: number[];
  arregloB?: string[];
  estado?: "disponible" | "proximamente";
  tipoVista?: "detalle" | "demo" | "placeholder";
};

export type Parcial = {
  id: number;
  slug: string;
  titulo: string;
  materia: string;
  descripcion: string;
  enlaceExterno: string;
  puntos: PuntoParcial[];
  etiquetaHome?: string;
  ocultarPuntajeHome?: boolean;
  tipoVista?: "detalle" | "simulador" | "catalogo-apps";
};

export const parciales: Parcial[] = [
  {
    id: 1,
    slug: "parcial-01",
    titulo: "Parcial 01: Métricas de ordenamiento",
    materia: "Análisis de algoritmos",
    descripcion:
      "Evaluación práctica sobre seis algoritmos de ordenamiento midiendo tiempo, memoria y estabilidad en escenarios reales.",
    enlaceExterno: "/parciales/parcial-01",
    puntos: [
      {
        id: "punto-01",
        slug: "punto-01",
        nombre: "Punto 1: Comparacion de 6 algoritmos con arreglo de nombres",
        descripcion:
          "Implementar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion para comparar tiempo y numero de comparaciones en un gran arreglo de nombres.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-01.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-01.svg",
        valor: 25,
      },

      {
        id: "punto-02",
        slug: "punto-02",
        nombre: "Punto 2: Arreglos casi ordenados (nombres y numeros)",
        descripcion:
          "Ejecutar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion sobre dos arreglos casi ordenados para comparar tiempos en ambas situaciones.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-02.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-02.svg",
        valor: 20,
      },

      {
        id: "punto-03",
        slug: "punto-03",
        nombre: "Punto 3: Arreglos invertidos (nombres y numeros)",
        descripcion:
          "Comparar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion en arreglos invertidos para analizar rendimiento en este escenario.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-03.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-03.svg",
        valor: 20,
      },

      {
        id: "punto-04",
        slug: "punto-04",
        nombre: "Punto 4: Ordenamiento con valores repetidos",
        descripcion:
          "Evaluar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion en arreglos con alta repeticion para identificar el metodo mas adecuado.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-04.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-04.svg",
        valor: 15,
      },

      {
        id: "punto-05",
        slug: "punto-05",
        nombre: "Punto 5: Arreglos parcialmente ordenados",
        descripcion:
          "Comparar Burbuja Simple, Burbuja Mejorado, Quick Sort, Shell Sort, Seleccion Directa e Insercion en arreglos donde una mitad esta ordenada y la otra desordenada.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-05.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-05.svg",
        valor: 15,
      },

      {
        id: "punto-06",
        slug: "punto-06",
        nombre: "Punto 6: Serie histórica dólar 2022 (Colombia)",
        descripcion:
          "Evaluar los 6 algoritmos con la serie histórica 2022 de la divisa USD/COP para comparar comparaciones, tiempo y memoria, e identificar periodos de valor más alto y más bajo.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-06.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-06.svg",
        valor: 15,
      },

      {
        id: "punto-07",
        slug: "punto-07",
        nombre: "Punto 7: Repetición de nombres y ordenamientos de salida",
        descripcion:
          "Contar repeticiones de nombres en un arreglo generado y mostrar dos salidas: ordenada por nombre y ordenada por cantidad de repeticiones.",
        rutaCodigo: "/parciales/parcial-01/codigos/punto-07.txt",
        rutaImagen: "/parciales/parcial-01/imagenes/punto-07.svg",
        valor: 10,
      },
    ],
  },
  {
    id: 2,
    slug: "parcial-02",
    titulo: "Parcial 02: Simulador de ordenamiento",
    materia: "Análisis de algoritmos",
    descripcion:
      "Simulador interactivo con 5 escenarios de ordenamiento para comparar 12 algoritmos.",
    enlaceExterno: "/parciales/parcial-02",
    puntos: [
      {
        id: "punto-01",
        slug: "punto-01",
        nombre: "Punto 1: Arreglos totalmente desordenados",
        descripcion: "Arreglos sin ningún orden previo.",
        valor: 20,
        // ═══════════════════════════════════════════════════════════
        // DATOS DE ARREGLOS - REEMPLAZAR DESPUÉS DEL PROFESOR
        // ═══════════════════════════════════════════════════════════
        // arregloA: array de enteros (ej: [45, 12, 89, 3, 67, 23, 56, 9, 78, 34])
        // arregloB: array de strings (ej: ["zebra", "apple", "mango", "banana"])
        // ═══════════════════════════════════════════════════════════
        arregloA: [],
        arregloB: [],
      },
      {
        id: "punto-02",
        slug: "punto-02",
        nombre: "Punto 2: Arreglos casi ordenados",
        descripcion: "Arreglos con pocos elementos fuera de lugar.",
        valor: 20,
        // ═══════════════════════════════════════════════════════════
        // DATOS DE ARREGLOS - REEMPLAZAR DESPUÉS DEL PROFESOR
        // ═══════════════════════════════════════════════════════════
        // arregloA: array de enteros
        // arregloB: array de strings
        // ═══════════════════════════════════════════════════════════
        arregloA: [],
        arregloB: [],
      },
      {
        id: "punto-03",
        slug: "punto-03",
        nombre: "Punto 3: Arreglos ordenados invertidamente",
        descripcion: "Arreglos en orden inverso (mayor a menor).",
        valor: 20,
        // ═══════════════════════════════════════════════════════════
        // DATOS DE ARREGLOS - REEMPLAZAR DESPUÉS DEL PROFESOR
        // ═══════════════════════════════════════════════════════════
        // arregloA: array de enteros
        // arregloB: array de strings
        // ═══════════════════════════════════════════════════════════
        arregloA: [],
        arregloB: [],
      },
      {
        id: "punto-04",
        slug: "punto-04",
        nombre: "Punto 4: Arreglos con elementos repetidos",
        descripcion: "Arreglos con múltiples elementos duplicados.",
        valor: 20,
        // ═══════════════════════════════════════════════════════════
        // DATOS DE ARREGLOS - REEMPLAZAR DESPUÉS DEL PROFESOR
        // ═══════════════════════════════════════════════════════════
        // arregloA: array de enteros
        // arregloB: array de strings
        // ═══════════════════════════════════════════════════════════
        arregloA: [],
        arregloB: [],
      },
      {
        id: "punto-05",
        slug: "punto-05",
        nombre: "Punto 5: Arreglos mitad ordenados",
        descripcion: "Primera mitad ordenada, segunda mitad desordenada.",
        valor: 20,
        // ═══════════════════════════════════════════════════════════
        // DATOS DE ARREGLOS - REEMPLAZAR DESPUÉS DEL PROFESOR
        // ═══════════════════════════════════════════════════════════
        // arregloA: array de enteros
        // arregloB: array de strings
        // ═══════════════════════════════════════════════════════════
        arregloA: [],
        arregloB: [],
      },
    ],
  },
  {
    id: 3,
    slug: "proyecto-final",
    titulo: "Proyecto final",
    materia: "Estructuras de datos",
    descripcion:
      "Catálogo de aplicativos web que aplican estructuras lineales a escenarios reales, comenzando con un turnero bancario basado en colas FIFO.",
    enlaceExterno: "/parciales/proyecto-final",
    etiquetaHome: "Proyecto final",
    ocultarPuntajeHome: true,
    tipoVista: "catalogo-apps",
    puntos: [
      {
        id: "fifo-1",
        slug: "fifo-1",
        nombre: "FIFO 1: Turnero bancario",
        descripcion:
          "Aplicacion web que simula la atencion de clientes en un banco respetando el orden de llegada con una cola FIFO.",
        estado: "disponible",
        tipoVista: "demo",
      },
      {
        id: "fifo-2",
        slug: "fifo-2",
        nombre: "FIFO 2: Cola de impresion",
        descripcion:
          "Segundo aplicativo FIFO orientado a la administracion de trabajos enviados a una impresora compartida.",
        estado: "disponible",
        tipoVista: "demo",
      },
      {
        id: "filo-1",
        slug: "filo-1",
        nombre: "FILO 1: Historial de acciones",
        descripcion:
          "Aplicativo tipo pila para registrar y revertir acciones recientes dentro de una interfaz de usuario.",
        estado: "disponible",
        tipoVista: "demo",
      },
      {
        id: "filo-2",
        slug: "filo-2",
        nombre: "FILO 2: Bandeja de procesos",
        descripcion:
          "Aplicativo tipo pila enfocado en procesos de soporte donde la ultima solicitud preparada es la primera en resolverse.",
        estado: "disponible",
        tipoVista: "demo",
      },
    ],
  },
];

export function formatParcialIndex(id: string) {
  const match = id.match(/(\d{1,2})$/);
  const numero = match ? match[1] : id;
  return `Parcial #${numero.padStart(2, "0")}`;
}

export function totalPuntos(parcial: Parcial) {
  return parcial.puntos.reduce((acum, punto) => acum + (punto.valor ?? 0), 0);
}

export const parcialesAcademicos: Parcial[] = parciales.map((parcial) => ({ ...parcial }));
