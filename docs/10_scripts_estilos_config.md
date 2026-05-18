# Scripts, Estilos Y Configuracion

## Scripts De Package

Archivo:

```txt
package.json
```

Comandos principales:

- `npm run dev`: servidor local de Astro.
- `npm run build`: build estatico.
- `npm test`: alias practico de build.
- `npm run check:content`: valida rutas publicas.
- `npm run check:workspace`: alias de `check:content`.
- `npm run preview`: preview local de salida build.

## Scripts Frontend

### `src/scripts/main.ts`

Importado por `BaseLayout.astro`. Gestiona interacciones globales genericas como botones de navegacion por selectores, toggle de tema y detalles interactivos.

Nota: la home actual tiene gran parte de su interaccion inline en `src/pages/index.astro`. Antes de tocar `main.ts`, revisa si el selector realmente pertenece al flujo activo.

### `src/scripts/simulador-parcial.ts`

Motor del simulador de `parcial-02`.

Contiene:

- `DATOS_PARCIAL_02`.
- 12 algoritmos de ordenamiento.
- instrumentacion de metricas.
- render de canvas y tabla.
- analisis final.

Consumido desde `src/pages/parciales/[slug].astro`.

### Scripts Legacy

- `src/scripts/tema.ts`: usa `data-tema` y `localStorage["tema"]`.
- `src/scripts/desplazamiento.ts`: navegacion de vistas antiguas.

Estos scripts no gobiernan el flujo principal actual.

## Estilos

### `src/styles/theme.css`

Define tokens globales:

- colores.
- fondos.
- bordes.
- sombras.
- tipografias.
- espaciados.
- radios.
- transiciones.
- tema claro en `[data-theme="light"]`.

Si agregas un token nuevo, debe existir en `:root` y en `[data-theme="light"]` cuando aplique.

### `src/styles/app.css`

Define base global y componentes compartidos:

- reset.
- tipografia.
- botones.
- cards.
- secciones de home.
- catalogos academicos.
- tablas.
- shells de paginas.

Hay CSS inline grande en paginas Astro academicas. Identifica si el estilo activo vive en `app.css` o en el bloque `<style>` de la pagina antes de editar.

## Configuracion

- `.nvmrc`: Node 20.
- `astro.config.mjs`: configuracion Astro.
- `vercel.json`: build en Vercel con salida `dist/`.
- `AGENTS.md`: guia operativa para cambios asistidos.

## Tema

El flujo activo usa:

- atributo `data-theme`.
- `localStorage["theme"]`.
- `BaseLayout.astro` para aplicar tema temprano.
- scripts inline de home y `main.ts` segun contexto.

El flujo legacy usa `data-tema` y `localStorage["tema"]`; no mezclar ambos sin migracion explicita.
