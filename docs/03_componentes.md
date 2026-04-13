# Componentes (que hace cada uno)

## Activos (se usan en la pagina)
- `src/pages/index.astro`: home completa con portada, navegación superior y secciones apiladas.
- `src/pages/programas-temporales/catalogo.astro`: catálogo completo de laboratorios.
- `src/layouts/BaseLayout.astro`: layout base y bootstrap del cliente.
- `src/scripts/main.ts`: scroll suave, foco y sincronización de la navegación.
- `src/data/content.ts`: contenido profesional y listados renderizados.

## Secciones activas
- `Sobre mi`: perfil laboral, estudios, experiencia y certificaciones
- `Proyectos`: proyectos normales, programas temporales y parciales
- `Habilidades`: columnas por nivel de progreso
- Todas las secciones exponen `[data-section]` para que `main.ts` las sincronice con los botones `.nav-btn`.

## Material academico
- Programas temporales: metadata en `src/programas-temporales/programas.ts`
- Parciales: metadata en `src/parciales/parciales.ts`
- Ambos renderizan sus links desde la home y sus detalles desde rutas dinamicas en `src/pages`
- `programa-23` incluye comparativa y simulador visual; `programa-30` reserva el laboratorio grande.

## Reservados o legacy
Todo el código viejo vive en `src/legacy/` (componentes, datos, estilos). Permanece allí solo para referencia histórica; la home, catálogo y plantillas usan únicamente los módulos de `src/pages`, `src/data`, `src/styles` y `src/programas-temporales`. No agregar lógica nueva en `legacy/`.
