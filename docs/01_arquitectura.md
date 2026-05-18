# Arquitectura

## Stack

- Astro 5 con salida estatica.
- TypeScript en datos, scripts y frontmatter.
- CSS global con tokens en `theme.css` y base visual en `app.css`.
- Node 20, declarado en `.nvmrc` y `package.json`.

## Flujo General

```txt
src/pages/index.astro
  -> src/layouts/BaseLayout.astro
  -> src/data/content.ts
  -> src/programas-temporales/programas.ts
  -> src/parciales/parciales.ts
  -> src/styles/theme.css + src/styles/app.css
  -> src/scripts/main.ts + scripts inline de pagina
```

`BaseLayout.astro` monta el documento HTML base, fuentes, tema inicial, estilos globales y `src/scripts/main.ts`. La home tiene interacciones inline propias para navegacion, menu movil, reveal, typewriter, formulario y tema.

## Rutas Activas

- `/`: `src/pages/index.astro`.
- `/programas-temporales/catalogo`: `src/pages/programas-temporales/catalogo.astro`.
- `/programas-temporales/programa-XX`: `src/pages/programas-temporales/[slug].astro`.
- `/parciales/parcial-01`: `src/pages/parciales/[slug].astro`.
- `/parciales/parcial-02`: `src/pages/parciales/[slug].astro` con UI especial.
- `/parciales/proyecto-final`: `src/pages/parciales/[slug].astro` como catalogo de apps.
- `/parciales/[slug]/[punto]`: `src/pages/parciales/[slug]/[punto].astro`.

## Generacion Estatica

Programas temporales usan `getStaticPaths()` desde `programasTemporales`:

```txt
src/programas-temporales/programas.ts
  -> src/pages/programas-temporales/[slug].astro
  -> public/programas-temporales/codigos/programa-XX.txt
  -> public/proyectos-temporales/imagenes/programa-XX.svg
```

Parciales usan `getStaticPaths()` desde `parciales`:

```txt
src/parciales/parciales.ts
  -> src/pages/parciales/[slug].astro
  -> src/pages/parciales/[slug]/[punto].astro
  -> public/parciales/parcial-01/codigos/*.txt
  -> public/parciales/parcial-01/imagenes/*.svg
```

## Bloques Especiales

- `programa-23`: comparativa interactiva Merge Sort vs Quick Sort.
- `programa-30`: simulador general de algoritmos de ordenamiento.
- `programa-31` a `programa-39`: simuladores de listas enlazadas y circulares.
- `parcial-02`: simulador de ordenamiento con datos y motor en `src/scripts/simulador-parcial.ts`.
- `proyecto-final`: apps FIFO/FILO renderizadas como ramas dentro de `src/pages/parciales/[slug]/[punto].astro`.

## Archivos Grandes Y Fragiles

- `src/pages/index.astro`: home y scripts inline.
- `src/pages/programas-temporales/[slug].astro`: codigo, metricas y simuladores especiales.
- `src/pages/parciales/[slug].astro`: catalogos, parcial 02 y proyecto final.
- `src/pages/parciales/[slug]/[punto].astro`: puntos de parciales y demos FIFO/FILO.

Antes de editar cualquiera de estos archivos, identifica la rama activa por slug o selector DOM para no romper otras vistas.

## Codigo Legacy

`src/legacy/`, `src/scripts/tema.ts`, `src/scripts/desplazamiento.ts` y `src/layouts/DisenoBase.astro` pertenecen a flujos anteriores. Pueden servir como referencia, pero las rutas productivas actuales viven en `src/pages`, `src/data`, `src/styles`, `src/programas-temporales` y `src/parciales`.
