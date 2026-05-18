# Programas Temporales

## Fuente De Verdad

Archivo principal:

```txt
src/programas-temporales/programas.ts
```

Define:

- `ProgramaTemporal`.
- `SimuladorEstructura`.
- `configuracionesPersonalizadas`.
- `ordenProgramasTemporales`.
- `programasTemporales`.
- `programas`.
- `algoritmosPrograms`.
- `simuladorProgram`.

## Convencion De Slugs

Cada programa usa el patron:

```txt
programa-XX
```

Ejemplos:

- `programa-01`.
- `programa-23`.
- `programa-41`.

`ordenProgramasTemporales` controla que paginas se generan y que archivos espera el validador.

## Rutas

Catalogo completo:

```txt
src/pages/programas-temporales/catalogo.astro
```

Detalle individual:

```txt
src/pages/programas-temporales/[slug].astro
```

`[slug].astro` lee el codigo del programa con `readFile` durante build. Una ruta inexistente rompe `astro build`.

## Assets Requeridos

Por cada programa incluido en `ordenProgramasTemporales` deben existir:

```txt
public/programas-temporales/codigos/programa-XX.txt
public/proyectos-temporales/imagenes/programa-XX.svg
```

Tambien se usa:

```txt
public/programas-temporales/uis-logo.svg
```

## Categorias Actuales

- `programa-01` a `programa-30`: algoritmos y simuladores de ordenamiento.
- `programa-31` a `programa-39`: estructuras de datos con listas enlazadas/circulares.
- `programa-40` y `programa-41`: fundamentos de complejidad con ciclos `for`.

## Ramas Especiales

- `programa-23`: comparativa interactiva Merge Sort vs Quick Sort.
- `programa-30`: simulador visual general de algoritmos de ordenamiento.
- `programa-31` a `programa-39`: usan configuracion `simulador` para renderizar laboratorios de listas.

## Metricas

Archivos:

```txt
src/programas-temporales/metricas.generated.json
src/programas-temporales/metricas.ts
tools/programas-config.mjs
tools/generate-program-metrics.mjs
tools/apply-program-metrics.mjs
```

`metricas.generated.json` es consumido por `metricas.ts`. Los scripts de generacion existen en `tools/`, pero no estan expuestos como comandos npm.

## Checklist Para Agregar Programa

1. Agrega configuracion en `configuracionesPersonalizadas` si necesita titulo, descripcion, categoria, tags o simulador.
2. Agrega el numero a `ordenProgramasTemporales`.
3. Crea `public/programas-temporales/codigos/programa-XX.txt`.
4. Crea `public/proyectos-temporales/imagenes/programa-XX.svg`.
5. Corre `npm run check:content`.
6. Corre `npm run build`.
