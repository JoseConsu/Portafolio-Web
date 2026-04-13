# Estilos y tema (como modificar sin romper)

## Variables base
Archivo activo: `src/styles/theme.css`

Ahi se define:
- fondo, texto, panel, borde
- acentos primario y secundario
- glow, focus ring y sombras
- superficies para tema oscuro y claro

## Fondo editorial
Archivo activo: `src/styles/app.css`
- `body` aplica gradientes sutiles y una textura diagonal para dar profundidad.
- `.hero-grid-lines` dibuja el patrón cuadriculado del hero principal.
- Las tarjetas (`.program-card`, `.ds-card`, `.tarjeta-punto`) comparten bordes redondeados (`var(--r-2xl)`) y sombras `var(--sh-card)`.

Si necesitas un look más minimalista, baja la opacidad de `body::before` o elimina la textura en `.hero-grid-lines`.

## Tipografias activas
- display: `Playfair Display`
- cuerpo: `Outfit`
- mono: `JetBrains Mono`

Estas fuentes se cargan en `src/layouts/BaseLayout.astro`. Usa las variables `var(--ff-display)`, `var(--ff-body)` y `var(--ff-mono)` en lugar de declarar familias manualmente.
