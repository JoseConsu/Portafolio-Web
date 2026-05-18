# Assets Publicos

## Regla General

Todo lo que vive en `public/` se sirve desde la raiz web. Ejemplo:

```txt
public/icons/folder.svg -> /icons/folder.svg
```

## Estructura Principal

```txt
public/
├── cv.pdf
├── icons/
├── imagenes/
├── parciales/
├── programas-temporales/
└── proyectos-temporales/
```

## Assets Base

- `public/imagenes/yo.jpg`: foto principal.
- `public/cv.pdf`: hoja de vida.
- `public/programas-temporales/uis-logo.svg`: logo usado en vistas academicas.

## Iconos

Directorio:

```txt
public/icons/
```

Iconos validados:

- `bolt.svg`
- `briefcase.svg`
- `certificate.svg`
- `flask.svg`
- `folder.svg`
- `linux.svg`
- `mail.svg`
- `network.svg`
- `rocket.svg`
- `server.svg`
- `shield.svg`
- `study.svg`
- `theme.svg`
- `user.svg`
- `whatsapp.svg`

## Programas Temporales

Codigos:

```txt
public/programas-temporales/codigos/programa-XX.txt
```

Imagenes:

```txt
public/proyectos-temporales/imagenes/programa-XX.svg
```

Aunque el directorio se llama `proyectos-temporales`, esas imagenes pertenecen a los programas temporales.

## Parciales

Parcial 01:

```txt
public/parciales/parcial-01/codigos/punto-XX.txt
public/parciales/parcial-01/imagenes/punto-XX.svg
```

Las rutas se declaran en `src/parciales/parciales.ts` con `rutaCodigo` y `rutaImagen`.

## Validador

Archivo:

```txt
tools/validate-content-paths.mjs
```

Comando:

```bash
npm run check:content
```

Valida:

- assets base.
- iconos.
- logo UIS.
- codigos e imagenes de programas derivados desde `ordenProgramasTemporales`.
- codigos e imagenes de parciales derivados desde `src/parciales/parciales.ts`.

## Checklist De Assets

1. Usa rutas web absolutas que comiencen con `/` en datos.
2. Mantén nombres alineados con slugs.
3. Corre `npm run check:content` tras agregar, renombrar o borrar assets.
4. No uses `dist/` como fuente de assets.
