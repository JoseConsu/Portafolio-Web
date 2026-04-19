# AGENTS

## Entry points que importan
- Rutas productivas: `src/pages/index.astro`, `src/pages/programas-temporales/[slug].astro`, `src/pages/programas-temporales/catalogo.astro`, `src/pages/parciales/[slug].astro` y `src/pages/parciales/[slug]/[punto].astro`.
- `dist/` es salida de build, no fuente de verdad.

## Home: wiring fácil de romper
- `src/layouts/BaseLayout.astro` monta `src/styles/theme.css`, `src/styles/app.css` y `src/scripts/main.ts`.
- La interacción real de la home (nav, menú móvil, reveal, typewriter, validación de formulario y toggle de tema) vive inline en `src/pages/index.astro`; revisa ahí antes de tocar `main.ts`.
- Persistencia de tema partida: `BaseLayout.astro` lee `localStorage["theme"]` y `index.astro` usa `localStorage["jdc-theme"]`. Si ajustas tema, mantén ambos flujos consistentes.

## Showcase académico (fuente de verdad)
- Datos de programas: `src/programas-temporales/programas.ts`.
- Datos de parciales: `src/parciales/parciales.ts`.
- `src/pages/programas-temporales/[slug].astro` y `src/pages/parciales/[slug]/[punto].astro` leen `.txt` desde `public/` con `readFile` durante build; una ruta inválida rompe `astro build`.
- `getStaticPaths` de programas depende de `ordenProgramasTemporales`; conserva el patrón `programa-XX`.
- `programa-23` y `programa-30` tienen ramas especiales en `src/pages/programas-temporales/[slug].astro`.
- `parcial-02` tiene UI especial en `src/pages/parciales/[slug].astro` y lógica en `src/scripts/simulador-parcial.ts`.
- En `parcial-02`, los arreglos reales están en `DATOS_PARCIAL_02` de `src/scripts/simulador-parcial.ts`; los `arregloA/arregloB` vacíos en `src/parciales/parciales.ts` no gobiernan el simulador.
- Métricas de programas: `src/programas-temporales/metricas.generated.json` consumido por `src/programas-temporales/metricas.ts`; no existe script de generación en `package.json`.

## Comandos y verificación
- Usa Node 20 (`.nvmrc`; `engines.node >=20.x`).
- `npm run dev` inicia Astro.
- `npm run build` y `npm test` ejecutan lo mismo: `astro build`.
- `npm run check:content` (alias `check:workspace`) ejecuta `tools/validate-content-paths.mjs`.
- Corre `npm run check:content` tras tocar `public/`, `src/programas-temporales/programas.ts` o `src/parciales/parciales.ts`.
- Corre `npm run build` tras cambios de rutas, `getStaticPaths`, o vistas académicas que leen archivos en build.

## Assets: reglas de consistencia
- El validador hardcodea assets base (`public/imagenes/yo.jpg`, `public/cv.pdf`, `public/programas-temporales/uis-logo.svg`), 15 iconos, 30 códigos de programas, 30 imágenes de programas y 7 pares código/imagen de `parcial-01` (`tools/validate-content-paths.mjs`).
- Si agregas o renombras programas, parciales, iconos o media, actualiza datos, archivos físicos y validador en el mismo cambio.
- Mantén alineados `slug`, `enlaceExterno`, `rutaCodigo*`, `rutaImagen*` y archivos físicos.

## Estilos
- Tokens globales en `src/styles/theme.css`; cualquier token nuevo debe existir en `:root` y `[data-theme="light"]`.
- `src/styles/app.css` define base global, pero hay CSS inline grande en `index.astro` y rutas académicas; identifica primero el bloque activo antes de editar.
