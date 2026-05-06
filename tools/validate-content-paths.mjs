import { access } from "node:fs/promises";
import { constants } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const failures = [];
const checked = [];

function extraerArrayAsignado(source, nombreConstante) {
  const inicioAsignacion = source.indexOf(`const ${nombreConstante}`);
  if (inicioAsignacion === -1) {
    return null;
  }

  const inicioArray = source.indexOf("[", inicioAsignacion);
  if (inicioArray === -1) {
    return null;
  }

  let profundidad = 0;
  let enString = null;
  let enComentarioLinea = false;
  let enComentarioBloque = false;

  for (let indice = inicioArray; indice < source.length; indice += 1) {
    const actual = source[indice];
    const siguiente = source[indice + 1];

    if (enComentarioLinea) {
      if (actual === "\n") {
        enComentarioLinea = false;
      }
      continue;
    }

    if (enComentarioBloque) {
      if (actual === "*" && siguiente === "/") {
        enComentarioBloque = false;
        indice += 1;
      }
      continue;
    }

    if (enString) {
      if (actual === "\\") {
        indice += 1;
        continue;
      }
      if (actual === enString) {
        enString = null;
      }
      continue;
    }

    if (actual === "/" && siguiente === "/") {
      enComentarioLinea = true;
      indice += 1;
      continue;
    }

    if (actual === "/" && siguiente === "*") {
      enComentarioBloque = true;
      indice += 1;
      continue;
    }

    if (actual === '"' || actual === "'" || actual === "`") {
      enString = actual;
      continue;
    }

    if (actual === "[") {
      profundidad += 1;
      continue;
    }

    if (actual === "]") {
      profundidad -= 1;
      if (profundidad === 0) {
        return source.slice(inicioArray, indice + 1);
      }
    }
  }

  return null;
}

function normalizarRutaPublica(ruta) {
  return `public/${ruta.replace(/^\//, "")}`;
}

async function ensureExists(relativePath, label) {
  const absolutePath = path.join(root, relativePath);
  checked.push(relativePath);

  try {
    await access(absolutePath, constants.F_OK);
  } catch {
    failures.push(`${label}: falta ${relativePath}`);
  }
}

async function validateBaseAssets() {
  await ensureExists("public/imagenes/yo.jpg", "foto principal");
  await ensureExists("public/cv.pdf", "cv");

  const icons = [
    "bolt.svg",
    "briefcase.svg",
    "certificate.svg",
    "flask.svg",
    "folder.svg",
    "linux.svg",
    "mail.svg",
    "network.svg",
    "rocket.svg",
    "server.svg",
    "shield.svg",
    "study.svg",
    "theme.svg",
    "user.svg",
    "whatsapp.svg",
  ];

  for (const icon of icons) {
    await ensureExists(`public/icons/${icon}`, "icono");
  }
}

async function validateProgramasTemporales() {
  await ensureExists("public/programas-temporales/uis-logo.svg", "logo UIS");

  const programasSource = await readFile(
    path.join(root, "src/programas-temporales/programas.ts"),
    "utf-8"
  );
  const bloqueOrden = extraerArrayAsignado(programasSource, "ordenProgramasTemporales");
  const indices = bloqueOrden
    ? [...bloqueOrden.matchAll(/\b\d+\b/g)].map((match) => Number.parseInt(match[0], 10))
    : [];

  for (const index of indices) {
    const suffix = String(index).padStart(2, "0");
    await ensureExists(`public/programas-temporales/codigos/programa-${suffix}.txt`, "codigo de programa temporal");
    await ensureExists(`public/proyectos-temporales/imagenes/programa-${suffix}.svg`, "imagen de programa temporal");
  }

  if (indices.length === 0) {
    failures.push("programas temporales: no se pudo derivar ordenProgramasTemporales desde src/programas-temporales/programas.ts");
  }
}

async function validateParciales() {
  const parcialesSource = await readFile(
    path.join(root, "src/parciales/parciales.ts"),
    "utf-8"
  );

  const rutasCodigo = [
    ...new Set(
      [...parcialesSource.matchAll(/\brutaCodigo\s*:\s*(["'`])([^"'`]+)\1/g)].map((match) => match[2])
    ),
  ];
  const rutasImagen = [
    ...new Set(
      [...parcialesSource.matchAll(/\brutaImagen\s*:\s*(["'`])([^"'`]+)\1/g)].map((match) => match[2])
    ),
  ];

  for (const rutaCodigo of rutasCodigo) {
    await ensureExists(normalizarRutaPublica(rutaCodigo), "codigo de parcial");
  }

  for (const rutaImagen of rutasImagen) {
    await ensureExists(normalizarRutaPublica(rutaImagen), "imagen de parcial");
  }

  if (rutasCodigo.length === 0 && rutasImagen.length === 0) {
    failures.push("parciales: no se pudieron derivar rutas desde src/parciales/parciales.ts");
  }
}

async function main() {
  await validateBaseAssets();
  await validateProgramasTemporales();
  await validateParciales();

  if (failures.length > 0) {
    console.error("Validacion fallida:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Validacion OK. Archivos verificados: ${checked.length}`);
}

await main();
