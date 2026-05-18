# AGENTS

## Entry Points Que Importan

- Home: `src/pages/index.astro`.
- Layout activo: `src/layouts/BaseLayout.astro`.
- Programas temporales: `src/pages/programas-temporales/[slug].astro` y `src/pages/programas-temporales/catalogo.astro`.
- Parciales/proyecto final: `src/pages/parciales/[slug].astro` y `src/pages/parciales/[slug]/[punto].astro`.
- `dist/` es salida de build, no fuente de verdad.

## Home: Wiring Facil De Romper

- `src/layouts/BaseLayout.astro` monta `src/styles/theme.css`, `src/styles/app.css` y `src/scripts/main.ts`.
- La interaccion real de la home (nav, menu movil, reveal, typewriter, validacion de formulario y toggle de tema) vive principalmente inline en `src/pages/index.astro`; revisa ahi antes de tocar `main.ts`.
- El flujo activo de tema usa `data-theme` y `localStorage["theme"]`.
- Existen archivos legacy con `data-tema` y `localStorage["tema"]`; no mezclar ambos flujos sin migracion explicita.

## Showcase Academico

- Datos de programas: `src/programas-temporales/programas.ts`.
- Datos de parciales y proyecto final: `src/parciales/parciales.ts`.
- `src/pages/programas-temporales/[slug].astro` y `src/pages/parciales/[slug]/[punto].astro` leen `.txt` desde `public/` con `readFile` durante build; una ruta invalida rompe `astro build`.
- `getStaticPaths` de programas depende de `ordenProgramasTemporales`; conserva el patron `programa-XX`.
- `programa-23` y `programa-30` tienen ramas especiales en `src/pages/programas-temporales/[slug].astro`.
- `programa-31` a `programa-39` usan configuracion `simulador` para vistas de estructuras de datos.
- `parcial-02` tiene UI especial en `src/pages/parciales/[slug].astro` y logica en `src/scripts/simulador-parcial.ts`.
- En `parcial-02`, los arreglos reales estan en `DATOS_PARCIAL_02` de `src/scripts/simulador-parcial.ts`; los `arregloA/arregloB` vacios en `src/parciales/parciales.ts` no gobiernan el simulador.
- `proyecto-final` se modela dentro de `src/parciales/parciales.ts` y sus apps FIFO/FILO se renderizan en `src/pages/parciales/[slug]/[punto].astro`.
- Metricas de programas: `src/programas-temporales/metricas.generated.json` consumido por `src/programas-temporales/metricas.ts`; existen scripts en `tools/`, pero no estan expuestos en `package.json`.

## Comandos Y Verificacion

- Usa Node 20 (`.nvmrc`; `engines.node >=20.x`).
- `npm run dev` inicia Astro.
- `npm run build` y `npm test` ejecutan lo mismo: `astro build`.
- `npm run check:content` (alias `check:workspace`) ejecuta `tools/validate-content-paths.mjs`.
- Corre `npm run check:content` tras tocar `public/`, `src/programas-temporales/programas.ts` o `src/parciales/parciales.ts`.
- Corre `npm run build` tras cambios de rutas, `getStaticPaths`, o vistas academicas que leen archivos en build.

## Assets: Reglas De Consistencia

- El validador revisa assets base (`public/imagenes/yo.jpg`, `public/cv.pdf`, `public/programas-temporales/uis-logo.svg`), 15 iconos, codigos e imagenes derivados desde `ordenProgramasTemporales`, y rutas de parciales derivadas desde `src/parciales/parciales.ts`.
- Si agregas o renombras programas, parciales, iconos o media, actualiza datos, archivos fisicos y valida rutas en el mismo cambio.
- Mantén alineados `slug`, `enlaceExterno`, `rutaCodigo*`, `rutaImagen*` y archivos fisicos.
- Las imagenes de programas temporales viven en `public/proyectos-temporales/imagenes/`, aunque el nombre del directorio pueda confundir.

## Estilos

- Tokens globales en `src/styles/theme.css`; cualquier token nuevo debe existir en `:root` y `[data-theme="light"]` cuando aplique.
- `src/styles/app.css` define base global, pero hay CSS inline grande en `index.astro` y rutas academicas; identifica primero el bloque activo antes de editar.

## Documentacion

- Indice general: `README.md`.
- Vision y arquitectura: `docs/00_vision.md` y `docs/01_arquitectura.md`.
- Academia: `docs/06_showcase_academico.md`, `docs/07_programas_temporales.md`, `docs/08_parciales_y_proyecto_final.md`.
- Assets y mantenimiento: `docs/09_assets_publicos.md`, `docs/10_scripts_estilos_config.md`.
