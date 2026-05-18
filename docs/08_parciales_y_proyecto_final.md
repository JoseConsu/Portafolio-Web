# Parciales Y Proyecto Final

## Fuente De Verdad

Archivo principal:

```txt
src/parciales/parciales.ts
```

Define:

- `PuntoParcial`.
- `Parcial`.
- `parciales`.
- `formatParcialIndex`.
- `totalPuntos`.
- `parcialesAcademicos`.

## Rutas

Catalogo de cada parcial o proyecto:

```txt
src/pages/parciales/[slug].astro
```

Detalle de punto o app:

```txt
src/pages/parciales/[slug]/[punto].astro
```

`[slug]/[punto].astro` genera rutas para puntos con `rutaCodigo` y para todos los puntos de `proyecto-final`.

## Parcial 01

Slug:

```txt
parcial-01
```

Contiene 7 puntos. Cada punto tiene codigo e imagen:

```txt
public/parciales/parcial-01/codigos/punto-01.txt
public/parciales/parcial-01/imagenes/punto-01.svg
```

La pagina de detalle lee el `.txt` en build y muestra la imagen referenciada por `rutaImagen`.

## Parcial 02

Slug:

```txt
parcial-02
```

Es un simulador interactivo de ordenamiento.

Archivos clave:

```txt
src/pages/parciales/[slug].astro
src/scripts/simulador-parcial.ts
```

Importante: los `arregloA` y `arregloB` vacios en `src/parciales/parciales.ts` no gobiernan el simulador. Los datos reales estan en `DATOS_PARCIAL_02` dentro de `src/scripts/simulador-parcial.ts`.

## Proyecto Final

Slug:

```txt
proyecto-final
```

Se modela como un `Parcial` con `tipoVista: "catalogo-apps"`.

Apps actuales:

- `fifo-1`: turnero bancario con cola FIFO.
- `fifo-2`: cola de impresion con cola FIFO.
- `filo-1`: historial de acciones con pila FILO.
- `filo-2`: bandeja de procesos con pila FILO.

Todas las apps del proyecto final viven como ramas condicionales en:

```txt
src/pages/parciales/[slug]/[punto].astro
```

## Estados De Apps

En `src/parciales/parciales.ts`, cada punto del proyecto final puede usar:

- `estado: "disponible"`.
- `estado: "proximamente"`.
- `tipoVista: "demo"`.
- `tipoVista: "placeholder"`.

El catalogo en `/parciales/proyecto-final` pinta tarjetas segun estos estados.

## Checklist Para Agregar App Al Proyecto Final

1. Agrega un punto nuevo dentro de `proyecto-final` en `src/parciales/parciales.ts`.
2. Define `id`, `slug`, `nombre`, `descripcion`, `estado` y `tipoVista`.
3. Agrega una condicion en `src/pages/parciales/[slug]/[punto].astro`.
4. Excluye la nueva app de `esPlaceholderProyectoFinal` si tiene demo propia.
5. Agrega markup, estilos y script con IDs unicos.
6. Corre `npm run build`.
