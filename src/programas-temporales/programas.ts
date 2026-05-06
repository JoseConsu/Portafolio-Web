export type ProgramaTemporal = {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  enlaceExterno: string;
  rutaCodigoPlantilla: string;
  rutaImagenPlantilla: string;
  categoria?: string;
  tags?: string[];
};

export type EsquemaPrograma = "algoritmos" | "estructuras";

type ConfiguracionPersonalizada = Pick<ProgramaTemporal, "titulo" | "descripcion" | "categoria" | "tags">;

const configuracionesPersonalizadas: Record<number, ConfiguracionPersonalizada> = {
  1: {
    titulo: "Ordenamiento Burbuja simple en C++ (String)",
    descripcion:
      "Implementacion de burbuja en C++ usando 10 palabras. Incluye trazabilidad del algoritmo, comparaciones paso a paso y salida final ordenada alfabeticamente.",
    categoria: "ordenamiento",
    tags: ["C++", "Bubble", "Strings"],
  },
  2: {
    titulo: "Ordenamiento Burbuja simple en Python (int)",
    descripcion:
      "Implementacion de burbuja en Python con 10 numeros enteros. Muestra el arreglo inicial, las pasadas y el resultado final en orden ascendente.",
    categoria: "ordenamiento",
    tags: ["Python", "Bubble", "Enteros"],
  },
  3: {
    titulo: "Actividad: Ordenamiento Burbuja Simple en Java (int)",
    descripcion:
      "Programa en Java con 10 enteros para practicar el ordenamiento burbuja clasico, con comentarios detallados para explicar cada bloque de codigo.",
    categoria: "ordenamiento",
    tags: ["Java", "Bubble"],
  },
  4: {
    titulo: "Actividad: Ordenamiento Burbuja Simple en Java (String)",
    descripcion:
      "Programa en Java con 10 cadenas para reforzar comparacion lexicografica en burbuja, incluyendo explicacion comentada y evidencia de salida.",
    categoria: "ordenamiento",
    tags: ["Java", "Bubble", "Strings"],
  },
  5: {
    titulo: "Actividad: Burbuja mejorado en Java (arreglo de enteros)",
    descripcion:
      "Ordenamiento burbuja mejorado en Java usando arrays de enteros, con bandera de corte temprano y comentarios detallados para cada bloque.",
    categoria: "ordenamiento",
    tags: ["Java", "Optimización"],
  },
  6: {
    titulo: "Actividad: Burbuja mejorado en Java (String)",
    descripcion:
      "Version de burbuja mejorado para cadenas en Java, explicando compareTo, intercambio y optimizacion cuando no hay cambios en una pasada.",
    categoria: "ordenamiento",
    tags: ["Java", "Strings"],
  },
  7: {
    titulo: "Actividad: Quicksort en Java (enteros)",
    descripcion:
      "Implementacion de Quicksort con enteros en Java, incluyendo comentarios explicativos sobre particionado, pivote e invocaciones recursivas.",
  },
  8: {
    titulo: "Actividad: Quicksort en Java (String)",
    descripcion:
      "Implementacion de Quicksort para arreglos de String en Java, con comparacion lexicografica y comentarios detallados paso a paso.",
  },
  9: {
    titulo: "Actividad: Shell Sort en Java (int)",
    descripcion:
      "Programa en Java que ordena un arreglo de enteros con Shell Sort, mostrando el vector original, los gaps utilizados y el resultado final ascendente.",
  },
  10: {
    titulo: "Actividad: Shell Sort en Java (String)",
    descripcion:
      "Implementacion de Shell Sort para cadenas en Java usando compareTo, con comentarios sobre el desplazamiento por gap y salida alfabetica.",
  },
  11: {
    titulo: "Actividad: Seleccion en Java (int)",
    descripcion:
      "Ordenamiento por seleccion en Java para enteros, identificando el minimo por iteracion y realizando intercambios controlados hasta ordenar todo el arreglo.",
  },
  12: {
    titulo: "Actividad: Seleccion en Java (String)",
    descripcion:
      "Version de seleccion para arreglos de String en Java, comparando lexicograficamente para elegir el menor elemento de cada pasada.",
  },
  13: {
    titulo: "Actividad interactiva: Tiempo de ejecucion de todos los algoritmos",
    descripcion:
      "Programa Java interactivo que compara tiempos de Burbuja, Burbuja mejorado, Quicksort, Shell Sort y Seleccion en escenarios de datos bajos, medios y altos, mostrando trazas paso a paso.",
  },
  14: {
    titulo: "Actividad interactiva: Uso de memoria de todos los algoritmos",
    descripcion:
      "Programa Java interactivo que estima memoria de Burbuja, Burbuja mejorado, Quicksort, Shell Sort y Seleccion en escenarios bajos, medios y altos, con trazas de consumo por pasos.",
  },
  15: {
    titulo: "Actividad: Insercion en Java (int)",
    descripcion:
      "Ordenamiento por insercion en Java con enteros, mostrando como se desplazan elementos a la derecha para insertar la clave en su posicion correcta.",
  },
  16: {
    titulo: "Actividad: Insercion en Java (String)",
    descripcion:
      "Version de insercion para cadenas en Java con compareTo, reforzando insercion alfabetica y recorrido de la zona ya ordenada.",
  },
  17: {
    titulo: "Programa temporal 17: Metricas de ordenamiento en 3 escenarios",
    descripcion:
      "Programa Java que mide iteraciones, comparaciones e intercambios/desplazamientos en Burbuja, Burbuja mejorado, QuickSort, ShellSort, Seleccion e Insercion para datos pequenos, moderados y grandes.",
  },
  18: {
    titulo: "Programa temporal 18: Shaker Sort con tiempo, memoria y metricas",
    descripcion:
      "Programa Java con Shaker Sort sobre enteros en cantidades pequenas, medianas y grandes, evaluando arreglos desordenados, casi ordenados e invertidos, con tiempo, memoria, comparaciones e intercambios.",
  },
  19: {
    titulo: "Programa temporal 19: Shaker Sort String con tiempo, memoria y metricas",
    descripcion:
      "Programa Java con Shaker Sort sobre cadenas en cantidades pequenas, medianas y grandes, evaluando arreglos desordenados, casi ordenados e invertidos, con tiempo, memoria, comparaciones e intercambios.",
  },
  20: {
    titulo: "Programa temporal 20: Radix Sort en Java comentado",
    descripcion:
      "Implementacion de Radix Sort para enteros positivos en Java, completando los comentarios del ejercicio para explicar encontrarMaximo, las pasadas por digito y el uso de Counting Sort estable.",
  },
  21: {
    titulo: "Programa temporal 21: Merge Sort con enteros y metricas completas",
    descripcion:
      "Programa Java con Merge Sort sobre arreglos de enteros en tamanos 10, 50 y 200, evaluando casos totalmente desorganizados, parcialmente organizados e invertidos con tiempo, memoria, comparaciones y movimientos.",
  },
  22: {
    titulo: "Programa temporal 22: Merge Sort con nombres y metricas completas",
    descripcion:
      "Programa Java con Merge Sort sobre arreglos de nombres en tamanos 10, 50 y 200, evaluando casos totalmente desorganizados, parcialmente organizados e invertidos con tiempo, memoria, comparaciones y movimientos.",
  },
  23: {
    titulo: "Programa temporal 23: Comparativa interactiva Merge Sort vs Quick Sort",
    descripcion:
      "Comparativa visual e interactiva entre Merge Sort y Quick Sort con accesos directos a sus implementaciones, tablas dinamicas por tamano/tipo/escenario, definiciones detalladas y grafica de tiempo de ejecucion basada en Big-O.",
    categoria: "comparativa",
  },
  24: {
    titulo: "Programa temporal 24: Heap Sort con enteros y metricas completas",
    descripcion:
      "Programa Java con Heap Sort para enteros en tamanos 10, 50 y 200, evaluando casos totalmente desorganizados, parcialmente organizados e invertidos con tiempo, memoria, comparaciones, intercambios e iteraciones.",
  },
  25: {
    titulo: "Programa temporal 25: Heap Sort con strings y metricas completas",
    descripcion:
      "Programa Java con Heap Sort para nombres en tamanos 10, 50 y 200, evaluando casos totalmente desorganizados, parcialmente organizados e invertidos con tiempo, memoria, comparaciones, intercambios e iteraciones.",
  },
  26: {
    titulo: "Programa temporal 26: Bucket Sort con enteros y metricas completas",
    descripcion:
      "Programa Java con Bucket Sort para enteros en tamanos 10, 50 y 200, evaluando casos desorganizados, parcialmente organizados e invertidos con tiempo, memoria, comparaciones, movimientos e iteraciones.",
  },
  27: {
    titulo: "Programa temporal 27: Bucket Sort con strings y metricas completas",
    descripcion:
      "Programa Java con Bucket Sort para cadenas en tamanos 10, 50 y 200, evaluando casos desorganizados, parcialmente organizados e invertidos con tiempo, memoria, comparaciones, movimientos e iteraciones.",
  },
  28: {
    titulo: "Programa temporal 28: Búsqueda Binaria en Java",
    descripcion:
      "Se utiliza cuando el vector está previamente ordenado y reduce exponencialmente el número de iteraciones necesarias; por ejemplo, en 50.000.000 de elementos requiere como máximo 26 comparaciones en el peor caso.",
  },
  29: {
    titulo: "Programa temporal 29: Counting Sort en Java (int)",
    descripcion:
      "Implementacion de Counting Sort con enteros no negativos, incluyendo trazas en consola y explicacion por pasos sobre conteo, acumulacion y construccion estable del arreglo ordenado.",
    categoria: "ordenamiento",
  },
  30: {
    titulo: "Simulador interactivo de algoritmos de ordenamiento",
    descripcion:
      "Laboratorio visual que anima en tiempo real 12 algoritmos de ordenamiento con métricas de tiempo, memoria y estabilidad configurables.",
    categoria: "simulador",
    tags: ["Visual", "Interactivo", "Comparativa"],
  },
  31: {
    titulo: "Insercion en lista vacia con lista enlazada simple en Java",
    descripcion:
      "Programa base de estructuras de datos que muestra la insercion del primer nodo en una lista enlazada vacia, con recorrido visual del puntero inicio, estado null y salida explicada en consola.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Nodos"],
  },
  32: {
    titulo: "Insercion de datos al inicio de una lista enlazada simple en Java",
    descripcion:
      "Implementacion de lista enlazada simple que inserta nodos al inicio y muestra la evolucion de la lista en consola, ideal para comprender la reasignacion del puntero inicio.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Insercion"],
  },
};

const ordenProgramasTemporales = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
];

const construirTituloProgramaTemporal = (numero: number, tituloBase?: string) => {
  const numeroFormateado = numero.toString().padStart(2, "0");
  const prefijo = `Programa temporal ${numeroFormateado}:`;

  if (!tituloBase) {
    return `${prefijo} Programa ${numeroFormateado}`;
  }

  const tituloNormalizado = tituloBase.trim();
  const expresionTituloActual = new RegExp(`^Programa temporal\\s+0?${numero}\\s*:`, "i");

  if (expresionTituloActual.test(tituloNormalizado)) {
    return tituloNormalizado.replace(expresionTituloActual, prefijo);
  }

  return `${prefijo} ${tituloNormalizado}`;
};

const obtenerEsquemaPrograma = (numero: number): EsquemaPrograma => (numero >= 31 ? "estructuras" : "algoritmos");

export const programasTemporales: ProgramaTemporal[] = ordenProgramasTemporales.map((numero, indice) => {
  const idFuente = numero.toString().padStart(2, "0");
  const configuracion = configuracionesPersonalizadas[numero];
  const esEstructuras = numero >= 31;
  const categoriaPorDefecto = esEstructuras ? "estructuras de datos" : undefined;
  const tagsPorDefecto = esEstructuras ? ["Estructuras", "Java"] : undefined;

  return {
    id: indice + 1,
    slug: `programa-${idFuente}`,
    titulo: construirTituloProgramaTemporal(numero, configuracion?.titulo),
    descripcion:
      configuracion?.descripcion ??
      "Plantilla temporal para agregar analisis, pseudocodigo, pruebas y evidencia visual del programa.",
    enlaceExterno: `/programas-temporales/programa-${idFuente}`,
    rutaCodigoPlantilla: `/programas-temporales/codigos/programa-${idFuente}.txt`,
    rutaImagenPlantilla: `/proyectos-temporales/imagenes/programa-${idFuente}.svg`,
    categoria: configuracion?.categoria ?? categoriaPorDefecto,
    tags: configuracion?.tags ?? tagsPorDefecto,
  };
});

export type ProgramaResumen = {
  id: string;
  titulo: string;
  descripcion: string;
  enlaceExterno: string;
  esquema: EsquemaPrograma;
  categoria?: string;
  tags?: string[];
};

export function formatIndex(id: string) {
  const match = id.match(/(\d{1,2})$/);
  const numero = match ? match[1] : "00";
  return `#${numero.padStart(2, "0")}`;
}

export const programas: ProgramaResumen[] = programasTemporales.map((programa) => {
  const numero = Number(programa.slug.split("-").pop() ?? "0");

  return {
    id: programa.slug,
    titulo: programa.titulo,
    descripcion: programa.descripcion,
    enlaceExterno: programa.enlaceExterno,
    esquema: obtenerEsquemaPrograma(numero),
    categoria: programa.categoria,
    tags: programa.tags,
  };
});

export const algoritmosPrograms = programas
  .filter((programa) => programa.id !== "programa-30")
  .slice(0, 6);

export const simuladorProgram = programas.find((programa) => programa.id === "programa-30") ?? programas[0];
