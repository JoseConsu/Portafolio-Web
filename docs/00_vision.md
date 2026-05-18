# Vision Del Proyecto

## Proposito

Este repositorio contiene el portafolio web personal y academico de Jose David Consuegra Medina. El sitio no es solo una landing profesional: tambien funciona como vitrina de laboratorios, parciales y aplicativos interactivos de estructuras de datos y analisis algoritmico.

## Alcance Actual

- Home profesional con perfil, trayectoria, habilidades, proyectos, academia y contacto.
- Catalogo de programas temporales con codigo, imagenes, metricas y simuladores especiales.
- Parciales academicos con puntos, evidencias y simulador de ordenamiento.
- Proyecto final con aplicativos web FIFO/FILO orientados a casos reales.

## Objetivos De Mantenimiento

- Conservar fuentes de verdad claras para datos y rutas.
- Evitar duplicar informacion entre paginas y assets.
- Mantener build estatico reproducible con `astro build`.
- Documentar rutas fragiles antes de refactorizar archivos grandes.
- Validar assets publicos antes de publicar.

## Categorias Principales

- Profesional: contenido de home en `src/data/content.ts` y `src/pages/index.astro`.
- Programas temporales: datos en `src/programas-temporales/programas.ts`, paginas en `src/pages/programas-temporales/` y assets en `public/programas-temporales` + `public/proyectos-temporales`.
- Parciales: datos en `src/parciales/parciales.ts`, paginas en `src/pages/parciales/` y assets en `public/parciales`.
- Proyecto final: se modela dentro de `src/parciales/parciales.ts` como `proyecto-final` y se renderiza en `src/pages/parciales/[slug]/[punto].astro`.

## Fuentes De Verdad

- `src/data/content.ts`: perfil, sobre mi, proyectos, habilidades y listados derivados para la home.
- `src/programas-temporales/programas.ts`: programas, slugs, categorias, tags y simuladores de programas temporales.
- `src/parciales/parciales.ts`: parciales, puntos y apps del proyecto final.
- `src/scripts/simulador-parcial.ts`: datos reales y motor del simulador de `parcial-02`.
- `public/`: archivos servidos directamente por las rutas web.

## Fuera De Alcance Como Fuente

- `dist/` es salida generada de build.
- `src/legacy/` es referencia historica, no flujo activo principal.
- `node_modules/` es dependencia instalada.
