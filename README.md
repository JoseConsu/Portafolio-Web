# Portafolio Web

Portafolio personal construido con Astro. El sitio combina una home profesional con un showcase academico de programas temporales, parciales y aplicativos del proyecto final.

## Stack

- Astro 5
- TypeScript y JavaScript en paginas Astro
- CSS global con tokens de tema
- Node 20

## Comandos

```bash
nvm use
npm install
npm run dev
npm run check:content
npm run build
```

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run check:content`: valida que existan assets y archivos publicos referenciados por datos academicos.
- `npm run build`: genera el sitio estatico en `dist/`.
- `npm test`: ejecuta lo mismo que `npm run build`.

## Mapa Rapido

- `src/pages/index.astro`: home principal.
- `src/layouts/BaseLayout.astro`: layout global activo.
- `src/data/content.ts`: perfil, contenido profesional y listados de home.
- `src/programas-temporales/programas.ts`: fuente de verdad de programas temporales.
- `src/parciales/parciales.ts`: fuente de verdad de parciales y proyecto final.
- `src/scripts/simulador-parcial.ts`: datos y motor del simulador de `parcial-02`.
- `src/styles/theme.css`: tokens de tema.
- `src/styles/app.css`: estilos globales compartidos.
- `public/`: assets servidos directamente por Astro.
- `tools/validate-content-paths.mjs`: validador de rutas publicas.
- `dist/`: salida generada de build, no fuente de verdad.

## Documentacion

- `docs/00_vision.md`: vision y alcance del proyecto.
- `docs/01_arquitectura.md`: arquitectura y flujo de datos.
- `docs/06_showcase_academico.md`: organizacion academica general.
- `docs/07_programas_temporales.md`: programas temporales y convenciones.
- `docs/08_parciales_y_proyecto_final.md`: parciales y apps FIFO/FILO.
- `docs/09_assets_publicos.md`: assets publicos y validacion.
- `docs/10_scripts_estilos_config.md`: scripts, estilos y configuracion.

## Regla Principal

Edita datos en las fuentes de verdad (`src/data`, `src/programas-temporales`, `src/parciales`) y assets en `public/`. No edites `dist/` manualmente.
