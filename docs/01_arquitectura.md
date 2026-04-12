# Arquitectura (como esta armado)

## Tecnologia
Astro + TypeScript + CSS.

## Flujo general
- `src/pages/index.astro` renderiza la home activa.
- `src/layouts/BaseLayout.astro` monta tipografias, tema inicial y script cliente.
- `src/data/content.ts` centraliza perfil, sobre mi, proyectos, habilidades y listados derivados.

## Navegacion por secciones
- La home ya no es un switch de vistas, sino un `nav` superior (`.app-nav`) que hace scroll suave hacia cada `section[data-section]`.
- `src/scripts/main.ts` escucha clicks, atajos de teclado (flechas, Home/End) y usa `IntersectionObserver` para actualizar `.nav-btn.active` y `aria-current`.

## Tema claro/oscuro
- Variables en `src/styles/theme.css`
- Preferencia e interaccion en `src/scripts/main.ts` (usa `localStorage`)

## Donde se editan los datos
- Home y contenido profesional: `src/data/content.ts`
- Programas temporales: `src/programas-temporales/programas.ts`
- Parciales: `src/parciales/parciales.ts`

## Rutas activas
- Home: `src/pages/index.astro`
- Programas temporales: `src/pages/programas-temporales/[slug].astro`
- Parciales: `src/pages/parciales/[slug].astro`
- Puntos de parcial: `src/pages/parciales/[slug]/[punto].astro`

## Bloques especiales
- `programa-23` tiene dos capas: comparativa Merge vs Quick y el nuevo simulador (`.simulator-lab`).
- `programa-30` está reservado para el laboratorio completo (se renderiza con `esSimuladorOrdenamientos`).

## Nota sobre codigo legacy
Existen rutas antiguas en `src/datos`, `src/estilos`, `src/componentes` y scripts separados para desplazamiento/tema. No son la fuente principal de verdad para la home actual.
