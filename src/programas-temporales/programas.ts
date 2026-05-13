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
  simulador?: SimuladorEstructura;
};

export type SimuladorEstructura = {
  tipo: "lista-enlazada-simple" | "lista-enlazada-crud" | "lista-circular-crud";
  operacion?:
    | "insertar-vacia"
    | "insertar-inicio"
    | "insertar-final"
    | "insertar-posicion"
    | "eliminar-inicio"
    | "eliminar-final"
    | "eliminar-posicion";
  titulo: string;
  descripcion: string;
  etiquetaBoton: string;
  etiquetaAuto: string;
  listaInicial: number[];
  demoAcciones: Array<{
    operacion?:
      | "insertar-vacia"
      | "insertar-inicio"
      | "insertar-final"
      | "insertar-posicion"
      | "eliminar-inicio"
      | "eliminar-final"
      | "eliminar-posicion";
    valor?: number;
    posicion?: number;
    mensaje?: string;
  }>;
  accionesDisponibles?: Array<{
    valor: string;
    etiqueta: string;
  }>;
};

export type EsquemaPrograma = "algoritmos" | "estructuras";

type ConfiguracionPersonalizada = Pick<ProgramaTemporal, "titulo" | "descripcion" | "categoria" | "tags" | "simulador">;

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
    simulador: {
      tipo: "lista-enlazada-simple",
      operacion: "insertar-vacia",
      titulo: "Simulador visual: inserción en lista vacía",
      descripcion: "Crea el primer nodo y observa como inicio pasa de null a apuntar al nuevo elemento.",
      etiquetaBoton: "Insertar primer nodo",
      etiquetaAuto: "Auto demo",
      listaInicial: [],
      demoAcciones: [{ valor: 42, mensaje: "La lista estaba vacía, por eso inicio apunta al nuevo nodo 42." }],
    },
  },
  32: {
    titulo: "Insercion de datos al inicio de una lista enlazada simple en Java",
    descripcion:
      "Implementacion de lista enlazada simple que inserta nodos al inicio y muestra la evolucion de la lista en consola, ideal para comprender la reasignacion del puntero inicio.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Insercion"],
    simulador: {
      tipo: "lista-enlazada-simple",
      operacion: "insertar-inicio",
      titulo: "Simulador visual: insertar al inicio",
      descripcion: "Agrega un dato al frente de la lista y resalta como el puntero inicio cambia en cada paso.",
      etiquetaBoton: "Insertar al inicio",
      etiquetaAuto: "Auto demo",
      listaInicial: [],
      demoAcciones: [
        { valor: 42, mensaje: "42 entra primero y se convierte en la cabeza de la lista." },
        { valor: 50, mensaje: "50 se enlaza antes de 42." },
        { valor: 12, mensaje: "12 pasa a ser el nuevo inicio." },
        { valor: 32, mensaje: "32 queda al frente de toda la estructura." },
      ],
    },
  },
  33: {
    titulo: "Insercion al final de una lista enlazada simple en Java",
    descripcion:
      "Implementacion de lista enlazada simple que agrega nodos al final recorriendo desde inicio hasta el ultimo nodo para enlazar cada nuevo elemento en orden de llegada.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Insercion final"],
    simulador: {
      tipo: "lista-enlazada-simple",
      operacion: "insertar-final",
      titulo: "Simulador visual: insertar al final",
      descripcion: "Recorre la lista desde inicio hasta el ultimo nodo para anexar el nuevo elemento al final.",
      etiquetaBoton: "Insertar al final",
      etiquetaAuto: "Auto demo",
      listaInicial: [],
      demoAcciones: [
        { valor: 12, mensaje: "La lista estaba vacía, 12 se convierte en inicio." },
        { valor: 24, mensaje: "24 se enlaza al final de 12." },
        { valor: 10, mensaje: "10 queda al final de la lista." },
        { valor: 8, mensaje: "8 se agrega como ultimo nodo." },
        { valor: 42, mensaje: "42 cierra la secuencia al final." },
      ],
    },
  },
  34: {
    titulo: "Insercion en posicion deseada en lista enlazada simple en Java",
    descripcion:
      "Programa Java que inserta nodos en la posicion solicitada dentro de una lista enlazada simple, validando extremos, recorrido del puntero y ajuste de referencias.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Posicion deseada"],
    simulador: {
      tipo: "lista-enlazada-simple",
      operacion: "insertar-posicion",
      titulo: "Simulador visual: inserción en posición deseada",
      descripcion: "Inserta un valor en la posición elegida y muestra el recorrido del puntero hasta el punto correcto.",
      etiquetaBoton: "Insertar en posición",
      etiquetaAuto: "Auto demo",
      listaInicial: [10, 20, 40],
      demoAcciones: [
        { valor: 30, posicion: 3, mensaje: "30 se inserta entre 20 y 40." },
        { valor: 5, posicion: 1, mensaje: "5 entra al inicio porque la posición es 1." },
        { valor: 50, posicion: 20, mensaje: "La posición supera el tamaño, así que el nodo se agrega al final." },
      ],
    },
  },
  35: {
    titulo: "Eliminacion al inicio en lista enlazada simple en Java",
    descripcion:
      "Programa Java que elimina el primer nodo de una lista enlazada simple, mostrando el cambio del puntero inicio y el estado final de la estructura.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Eliminacion inicio"],
    simulador: {
      tipo: "lista-enlazada-simple",
      operacion: "eliminar-inicio",
      titulo: "Simulador visual: eliminación al inicio",
      descripcion: "Retira el primer nodo y hace que el segundo elemento pase a ser el nuevo inicio.",
      etiquetaBoton: "Eliminar primer nodo",
      etiquetaAuto: "Auto demo",
      listaInicial: [11, 22, 33, 44],
      demoAcciones: [
        { mensaje: "Se elimina el nodo 11 y 22 pasa a ser inicio." },
        { mensaje: "Se elimina el nodo 22 y 33 pasa a ser inicio." },
        { mensaje: "Se elimina el nodo 33 y 44 pasa a ser inicio." },
        { mensaje: "Se elimina el último nodo y la lista queda vacía." },
      ],
    },
  },
  36: {
    titulo: "Eliminacion en posicion deseada en lista enlazada simple en Java",
    descripcion:
      "Programa Java que elimina un nodo en la posicion elegida dentro de una lista enlazada simple, validando limites y reencadenando referencias.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "Eliminacion posicion"],
    simulador: {
      tipo: "lista-enlazada-simple",
      operacion: "eliminar-posicion",
      titulo: "Simulador visual: eliminación en posición deseada",
      descripcion: "Selecciona una posición y observa cómo el enlace del nodo anterior salta el elemento eliminado.",
      etiquetaBoton: "Eliminar en posición",
      etiquetaAuto: "Auto demo",
      listaInicial: [9, 18, 27, 36, 45],
      demoAcciones: [
        { posicion: 3, mensaje: "Se elimina el nodo de la posición 3." },
        { posicion: 1, mensaje: "La posición 1 elimina el inicio de la lista." },
        { posicion: 9, mensaje: "La posición supera el tamaño, no se realiza eliminación." },
      ],
    },
  },
  37: {
    titulo: "Lista enlazada CRUD en Java",
    descripcion:
      "Programa Java interactivo para crear una lista desde cero o precargada, agregar y eliminar nodos al inicio, al final y en posicion, con avisos si la posicion es invalida.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista enlazada", "CRUD"],
    simulador: {
      tipo: "lista-enlazada-crud",
      titulo: "Simulador visual CRUD de lista enlazada",
      descripcion:
        "Crea la lista desde cero o carga un ejemplo y luego agrega o elimina nodos al inicio, al final o en una posicion concreta.",
      etiquetaBoton: "Ejecutar operación",
      etiquetaAuto: "Auto demo",
      listaInicial: [15, 30, 45],
      accionesDisponibles: [
        { valor: "insertar-inicio", etiqueta: "Insertar al inicio" },
        { valor: "insertar-final", etiqueta: "Insertar al final" },
        { valor: "insertar-posicion", etiqueta: "Insertar en posición" },
        { valor: "eliminar-inicio", etiqueta: "Eliminar al inicio" },
        { valor: "eliminar-final", etiqueta: "Eliminar al final" },
        { valor: "eliminar-posicion", etiqueta: "Eliminar en posición" },
      ],
      demoAcciones: [
        { operacion: "insertar-inicio", valor: 10, mensaje: "10 se inserta al inicio." },
        { operacion: "insertar-final", valor: 60, mensaje: "60 se agrega al final." },
        { operacion: "insertar-posicion", valor: 25, posicion: 3, mensaje: "25 se inserta en la posición 3." },
        { operacion: "eliminar-inicio", mensaje: "Se elimina el primer nodo." },
        { operacion: "eliminar-final", mensaje: "Se elimina el último nodo." },
        { operacion: "eliminar-posicion", posicion: 2, mensaje: "Se elimina el nodo de la posición 2." },
      ],
    },
  },
  38: {
    titulo: "Lista circular simple CRUD en Java",
    descripcion:
      "Simulador visual para insertar y eliminar nodos al inicio, al final y en una posicion deseada, explicando como se mantiene el enlace circular entre el ultimo y el primer nodo.",
    categoria: "estructuras de datos",
    tags: ["Java", "Lista circular", "CRUD"],
    simulador: {
      tipo: "lista-circular-crud",
      titulo: "Simulador visual CRUD de lista circular",
      descripcion:
        "Inserta o elimina nodos y observa como el ultimo nodo vuelve a apuntar al inicio. Cada accion explica que referencias cambian y cuando una operacion no se puede realizar.",
      etiquetaBoton: "Ejecutar operación",
      etiquetaAuto: "Auto demo",
      listaInicial: [20, 40, 60],
      accionesDisponibles: [
        { valor: "insertar-inicio", etiqueta: "Insertar al inicio" },
        { valor: "insertar-final", etiqueta: "Insertar al final" },
        { valor: "insertar-posicion", etiqueta: "Insertar en posición" },
        { valor: "eliminar-inicio", etiqueta: "Eliminar al inicio" },
        { valor: "eliminar-final", etiqueta: "Eliminar al final" },
        { valor: "eliminar-posicion", etiqueta: "Eliminar en posición" },
      ],
      demoAcciones: [
        { operacion: "insertar-inicio", valor: 10, mensaje: "10 entra al inicio y el ultimo nodo ahora apunta al nuevo inicio." },
        { operacion: "insertar-final", valor: 80, mensaje: "80 se agrega al final y su siguiente vuelve a apuntar al nodo inicial." },
        { operacion: "insertar-posicion", valor: 50, posicion: 4, mensaje: "50 se inserta en la posición 4 conservando la vuelta circular." },
        { operacion: "eliminar-inicio", mensaje: "Se elimina el inicio y el ultimo nodo se reconecta con el nuevo primer nodo." },
        { operacion: "eliminar-final", mensaje: "Se elimina el ultimo nodo y el nuevo ultimo vuelve a apuntar al inicio." },
        { operacion: "eliminar-posicion", posicion: 3, mensaje: "Se elimina el nodo de la posición 3 y el enlace anterior salta directamente al siguiente." },
      ],
    },
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
  33,
  34,
  35,
  36,
  37,
  38,
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
    simulador: configuracion?.simulador,
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
