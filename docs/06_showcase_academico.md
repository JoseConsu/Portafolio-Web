# Showcase Academico

## Vision General

El showcase academico agrupa entregas de clase y laboratorios interactivos. Esta dividido en tres categorias principales:

- Programas temporales.
- Parciales.
- Proyecto final.

La home enlaza estas categorias desde `src/pages/index.astro`, usando datos derivados de `src/programas-temporales/programas.ts` y `src/parciales/parciales.ts`.

## Programas Temporales

Fuente de verdad:

```txt
src/programas-temporales/programas.ts
```

Paginas:

```txt
src/pages/programas-temporales/catalogo.astro
src/pages/programas-temporales/[slug].astro
```

Assets:

```txt
public/programas-temporales/codigos/programa-XX.txt
public/proyectos-temporales/imagenes/programa-XX.svg
```

Uso:

- `catalogo.astro` lista todos los programas.
- `[slug].astro` genera una pagina por programa.
- Los codigos `.txt` se leen en build.
- Las imagenes `.svg` se referencian desde los datos.

## Parciales

Fuente de verdad:

```txt
src/parciales/parciales.ts
```

Paginas:

```txt
src/pages/parciales/[slug].astro
src/pages/parciales/[slug]/[punto].astro
```

Assets de `parcial-01`:

```txt
public/parciales/parcial-01/codigos/*.txt
public/parciales/parcial-01/imagenes/*.svg
```

`parcial-02` es especial: la UI vive en `src/pages/parciales/[slug].astro`, pero los arreglos reales y algoritmos estan en `src/scripts/simulador-parcial.ts`.

## Proyecto Final

El proyecto final se modela como un parcial con `slug: "proyecto-final"` dentro de `src/parciales/parciales.ts`.

Apps actuales:

- `fifo-1`: turnero bancario.
- `fifo-2`: cola de impresion.
- `filo-1`: historial de acciones.
- `filo-2`: bandeja de procesos.

Cada app se renderiza en `src/pages/parciales/[slug]/[punto].astro` con una rama condicional propia.

## Flujo De Datos

```txt
src/data/content.ts
  -> importa programas y parciales
  -> src/pages/index.astro

src/programas-temporales/programas.ts
  -> catalogo de programas
  -> detalle de programa

src/parciales/parciales.ts
  -> catalogo de parcial/proyecto final
  -> detalle de punto/app
```

## Checklist Al Modificar Academia

- Actualiza la fuente de verdad correspondiente.
- Agrega o corrige assets en `public/`.
- Verifica rutas `slug`, `enlaceExterno`, `rutaCodigo` y `rutaImagen`.
- Corre `npm run check:content` si tocaste datos o assets publicos.
- Corre `npm run build` si tocaste rutas, vistas Astro o archivos leidos en build.
