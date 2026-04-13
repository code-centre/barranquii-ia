"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/useTranslation";
import WhatsAppFloatButton from "@/app/components/WhatsAppFloatButton";
import ContactDudasAddress from "@/app/components/ContactDudasAddress";

const LOGOS = [
  { src: "/logos/barranqui-ia.png", label: "Barranqui-IA" },
  { src: "/images/sponsors/fca.webp", label: "Fundación Código Abierto" },
  { src: "/images/sponsors/caribe-ventures.png", label: "Caribe Ventures" },
  { src: "/logos/gdg-logo-blanco.png", label: "Google Developer Groups" },
  { src: "/logos/costa-digital.png", label: "Costa Digital" },
];

const FLYERS = [
  { src: "/flyers/general.jpg", label: "Flyer general" },
  { src: "/flyers/fca.jpg", label: "Flyer Fundación Código Abierto" },
  { src: "/flyers/caribe-ventures.jpg", label: "Flyer Caribe Ventures" },
  { src: "/flyers/gdg.jpg", label: "Flyer Google Developer Groups" },
];

const PHOTO_IDS = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12] as const;
const PHOTOS = PHOTO_IDS.map((n) => ({
  src: `/FOTOSBARRANQUI-IA/${n}.webp`,
  label: `Foto ${n}`,
}));

const KEY_STATS = [
  { value: "450", label: "Participantes esperados en el hackatón" },
  { value: "300", label: "Asistentes adicionales a talleres gratuitos" },
  { value: "+$20M COP", label: "En premios totales" },
  { value: "48 h", label: "De desarrollo continuo" },
  { value: "40", label: "Mentores especializados" },
  { value: "8", label: "Talleristas Build with AI" },
  { value: "4", label: "Verticales temáticas" },
  { value: "3ra", label: "Edición consecutiva" },
];

const TRAJECTORY = [
  {
    year: "2024 — 1ra Edición",
    points: [
      "150 participantes",
      "Convocatoria local",
      "Primer hackatón de IA del Caribe colombiano",
    ],
  },
  {
    year: "2025 — 2da Edición",
    points: ["200 participantes", "Convocatoria regional", "Consolidación del ecosistema"],
  },
  {
    year: "2026 — 3ra Edición",
    points: [
      "450+ participantes",
      "Convocatoria nacional",
      "Talleres Build with AI",
      "+$20M COP en premios",
    ],
  },
];

const SPONSORS_TABLE = [
  { name: "EPAM", role: "Patrocinador principal" },
  { name: "Google (Build with AI)", role: "Patrocinador de talleres prácticos" },
  { name: "Cooweb", role: "Patrocinador" },
  { name: "Ciudad Inmersiva", role: "Aliado estratégico" },
  { name: "Tech Centre", role: "Aliado estratégico" },
];

const NAV_LINKS = [
  { href: "#resumen-ejecutivo", label: "Resumen" },
  { href: "#cifras-clave", label: "Cifras y trayectoria" },
  { href: "#premios", label: "Premios y verticales" },
  { href: "#build-with-ai", label: "Talleres y casos" },
  { href: "#organizadores", label: "Organizadores" },
  { href: "#fundadores", label: "Fundadores" },
  { href: "#comunicado-prensa", label: "Comunicado" },
  { href: "#recursos-descargables", label: "Descargas" },
  { href: "#contacto-dudas", label: "Dudas" },
  { href: "#contacto-prensa", label: "Contacto" },
];

function fileName(path: string) {
  return path.split("/").pop() ?? "download";
}

type Asset = { src: string; label: string };

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <header id={id} className="mb-8 scroll-mt-28">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
    </header>
  );
}

function AssetCard({
  asset,
  t,
}: {
  asset: Asset;
  t: (k: string, v?: Record<string, string>) => string;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/[0.08]">
      <div className="relative aspect-[3/2] w-full bg-black/30">
        <Image
          src={asset.src}
          alt={asset.label}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <p className="truncate text-sm text-gray-300">{asset.label}</p>
        <a
          href={asset.src}
          download={fileName(asset.src)}
          className="shrink-0 rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          aria-label={t("pressKit.ariaDownloadFile", { name: asset.label })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

function CategorySection({
  title,
  count,
  assets,
  onDownloadAll,
  t,
}: {
  title: string;
  count: number;
  assets: Asset[];
  onDownloadAll: () => void;
  t: (k: string, v?: Record<string, string>) => string;
}) {
  return (
    <section className="mb-12" aria-labelledby={`heading-${title.replace(/\s/g, "-")}`}>
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3
            id={`heading-${title.replace(/\s/g, "-")}`}
            className="text-xl font-bold text-white md:text-2xl"
          >
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            {t("pressKit.fileCount", { count: String(count) })}
          </p>
        </div>
        <button
          type="button"
          onClick={onDownloadAll}
          className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
          aria-label={t("pressKit.ariaDownloadAll", { category: title })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {t("pressKit.downloadAll")}
        </button>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {assets.map((a) => (
          <AssetCard key={a.src} asset={a} t={t} />
        ))}
      </div>
    </section>
  );
}

export default function PrensaPage() {
  const { t } = useTranslation();
  const comunicadoRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyComunicado = useCallback(async () => {
    const text = comunicadoRef.current?.innerText;
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleDownloadComunicado = useCallback(() => {
    const text = comunicadoRef.current?.innerText;
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "comunicado-barranquia-2026.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const bulkDownload = useCallback((assets: Asset[]) => {
    assets.forEach((a, i) => {
      window.setTimeout(() => {
        const link = document.createElement("a");
        link.href = a.src;
        link.download = fileName(a.src);
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, i * 450);
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white">
      <WhatsAppFloatButton />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-12 pt-20 md:px-8 md:pb-16 md:pt-28 lg:max-w-5xl">
        <header className="text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-purple-400 transition-colors hover:text-purple-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t("pressKit.backHome")}
          </Link>
          <p className="text-sm font-medium tracking-wide text-purple-300">
            3ra edición
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Kit de prensa
            </span>
          </h1>
          <h2 className="mt-1 text-2xl font-bold md:text-4xl">
            Barranqui-IA 2026
          </h2>
          <div className="mx-auto mt-8 max-w-md space-y-1">
            <p className="text-lg font-semibold text-white">
              22 al 24 de mayo de 2026
            </p>
            <p className="text-gray-300">
              Cubo de Cristal — Plaza de la Paz · Barranquilla, Colombia
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base italic text-gray-400">
            El punto de encuentro nacional para construir el futuro de Colombia
            con Inteligencia Artificial
          </p>
          <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm">
            <span className="font-medium text-gray-200">
              Contacto de prensa:
            </span>
            <a
              href="mailto:anuar@codigoabierto.tech"
              className="text-purple-400 underline-offset-2 hover:underline"
            >
              anuar@codigoabierto.tech
            </a>
            <span
              className="hidden text-white/20 sm:inline"
              aria-hidden="true"
            >
              |
            </span>
            <a
              href="tel:+573103900986"
              className="text-purple-400 underline-offset-2 hover:underline"
            >
              +57 310 390 0986
            </a>
          </p>
        </header>
      </div>

      <nav
        className="sticky top-16 z-40 border-y border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0a0a]/80"
        aria-label="Índice del kit de prensa"
      >
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 md:px-8 lg:max-w-5xl">
          <p className="hidden shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-500 md:block">
            Índice
          </p>
          <ul
            className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="list"
          >
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-14 md:px-8 md:py-20 lg:max-w-5xl">
        <section
          id="resumen-ejecutivo"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-resumen"
        >
          <SectionHeading id="heading-resumen" eyebrow="1" title="Resumen ejecutivo" />
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Barranqui-IA es el hackatón de inteligencia artificial más grande del
              Caribe colombiano y el punto de encuentro nacional para construir el
              futuro de Colombia con IA. En su tercera edición, se realizará del 22 al
              24 de mayo de 2026 en el Cubo de Cristal de la Plaza de la Paz, en el
              corazón de Barranquilla.
            </p>
            <p>
              Durante 48 horas, desarrolladores, diseñadores, estudiantes y
              emprendedores de todo el país formarán equipos para crear prototipos
              funcionales de soluciones basadas en inteligencia artificial, compitiendo
              por más de $20,000,000 COP en premios.
            </p>
            <p>
              Este año la convocatoria es nacional. La premisa es simple y poderosa: la
              IA ya la tenemos en las manos. ¿Qué vamos a construir con ella?
            </p>
          </div>
        </section>

        <section
          id="cifras-clave"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-cifras"
        >
          <SectionHeading id="heading-cifras" eyebrow="2" title="Cifras clave" />
          <ul
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            role="list"
          >
            {KEY_STATS.map((s) => (
              <li
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <p className="text-2xl font-bold text-white md:text-3xl">{s.value}</p>
                <p className="mt-2 text-xs text-gray-400 leading-snug">{s.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="trayectoria"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-trayectoria"
        >
          <SectionHeading id="heading-trayectoria" eyebrow="3" title="Trayectoria" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TRAJECTORY.map((col) => (
              <article
                key={col.year}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="mb-4 border-b border-white/10 pb-2 font-semibold text-purple-300">
                  {col.year}
                </h3>
                <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
                  {col.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="premios"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-premios"
        >
          <SectionHeading id="heading-premios" eyebrow="4" title="Estructura de premios" />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold text-white">Categoría general</h3>
              <ul className="space-y-2 text-gray-300">
                <li>1er lugar: $6,000,000 COP</li>
                <li>2do lugar: $4,000,000 COP</li>
                <li>3er lugar: $2,000,000 COP</li>
              </ul>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold text-white">Premio por vertical</h3>
              <p className="text-gray-300">
                $2,000,000 COP por cada una de las cuatro verticales temáticas.
              </p>
              <p className="mt-4 font-semibold text-purple-300">
                Total en premios: $20,000,000 COP
              </p>
            </article>
          </div>
        </section>

        <section
          id="lineas-tematicas"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-verticales"
        >
          <SectionHeading
            id="heading-verticales"
            eyebrow="5"
            title="Líneas temáticas (verticales)"
          />
          <p className="mb-6 text-gray-300 leading-relaxed">
            Habrá cuatro verticales temáticas cuyos nombres y enfoques específicos se irán
            revelando en las próximas semanas. La idea es que respondan a retos de
            Colombia en sectores y ámbitos como salud, finanzas, logística y otros, sin
            cerrar la puerta a propuestas creativas alineadas con esos desafíos. Además,
            contaremos con una línea de innovación libre para equipos que quieran
            proponer soluciones abiertas a cualquier industria.
          </p>
          <article className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-pink-400">Innovación libre</h3>
            <p className="mt-2 text-sm text-gray-300">
              Propuestas abiertas en cualquier sector o industria, para quienes prefieren
              explorar fuera de las verticales anunciadas.
            </p>
          </article>
        </section>

        <section
          id="build-with-ai"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-bwai"
        >
          <SectionHeading
            id="heading-bwai"
            eyebrow="6"
            title="Talleres Build with AI"
          />
          <article className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-6">
            <p className="mb-6 text-gray-300 leading-relaxed">
              En el marco de la iniciativa Build with AI de Google, el sábado 23 de mayo
              se realizarán talleres prácticos abiertos a toda la comunidad. La
              asistencia es gratuita confirmando cupo y sujeta a disponibilidad de
              aforo. Los participantes inscritos en el hackatón tendrán lugares VIP
              garantizados.
            </p>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-gray-500">Fecha</dt>
                <dd className="text-gray-200">Sábado 23 de mayo de 2026</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Lugar</dt>
                <dd className="text-gray-200">
                  Cubo de Cristal — Plaza de la Paz, Barranquilla
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Costo</dt>
                <dd className="text-gray-200">Gratuito (con registro previo)</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Talleristas</dt>
                <dd className="text-gray-200">8 talleristas especializados</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-gray-500">Capacidad adicional</dt>
                <dd className="text-gray-200">
                  300 asistentes (además de los participantes del hackatón)
                </dd>
              </div>
            </dl>
          </article>
        </section>

        <section
          id="casos-exito"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-casos"
        >
          <SectionHeading id="heading-casos" eyebrow="7" title="Casos de éxito" />
          <div className="space-y-6">
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Geko Agent — De prototipo a empresa
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Geko Agent es el ejemplo más representativo del impacto de Barranqui-IA.
                En la primera edición (2024), el equipo presentó un detector de armas con
                inteligencia artificial para el transporte público y obtuvo el primer
                lugar. En la segunda edición (2025), evolucionaron su solución hacia un
                agente conectado a redes de cámaras de seguridad, obteniendo el tercer
                lugar. Hoy, Geko Agent es una empresa de visión artificial que presta
                servicios a empresas del sector de empaques, demostrando que un
                prototipo de 48 horas puede convertirse en un negocio real.
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Kelly Toro y Arissa — Del hackatón a incubación y escenario regional
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Kelly Toro y su equipo Arissa, tras su paso por Barranqui-IA, entraron a un
                proceso de incubación con 51 Labs. Allí consolidaron su proyecto y se
                hicieron acreedores a 5.000 USD de capital semilla no reembolsable.
                Además presentaron su solución en Tech Caribe Fest, el evento de
                innovación y tecnología de la región, mostrando cómo una idea nacida en el
                hackatón puede seguir creciendo con acompañamiento y proyección en el
                ecosistema caribeño.
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Paulo Estrada — De cero a programador
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Paulo Estrada llegó a la primera edición de Barranqui-IA sin saber
                programar. La experiencia lo inspiró tanto que aprendió a programar de
                forma autodidacta. En la segunda edición participó como parte del staff
                organizador, y actualmente es un programador activo que ha realizado
                múltiples proyectos exitosamente. Su historia refleja el espíritu del
                hackatón: no necesitas tener todas las respuestas para atreverte a
                construir.
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Dávila Publicidad — Del hackatón a la contratación
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Dávila Publicidad participó con un equipo en la segunda edición de
                Barranqui-IA. Durante las 48 horas del hackatón, la empresa no solo
                desarrolló un prototipo junto a su equipo, sino que identificó talento en
                la competencia: al finalizar el evento, terminaron contratando a uno de
                los participantes. Este caso demuestra que Barranqui-IA no es solo un
                espacio para construir tecnología, sino también un punto de encuentro
                entre empresas y talento tech.
              </p>
            </article>
          </div>
        </section>

        <section
          id="organizadores"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-org"
        >
          <SectionHeading id="heading-org" eyebrow="8" title="Organizadores" />
          <div className="space-y-6">
            <article className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-start">
              <div className="relative h-16 w-32 shrink-0">
                <Image
                  src="/images/sponsors/fca.webp"
                  alt="Fundación Código Abierto"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Fundación Código Abierto (FCA)
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  Organizador principal del hackatón. Fundación con la misión de
                  convertir a la región Caribe en un epicentro tech, impulsando la
                  innovación tecnológica y el desarrollo de habilidades digitales en
                  Colombia. Cra. 50 #72-126, Barranquilla.{" "}
                  <a
                    href="https://codigoabierto.tech"
                    className="text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codigoabierto.tech
                  </a>
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-start">
              <div className="relative h-16 w-32 shrink-0">
                <Image
                  src="/images/sponsors/caribe-ventures.png"
                  alt="Caribe Ventures"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">Caribe Ventures</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  Co-organizador. Primer fondo pre-seed del Caribe colombiano enfocado en
                  founders que usan IA para transformar industrias. Caribe Ventures busca
                  a los mejores proyectos del hackatón para darles seguimiento a través
                  de un programa de aceleración, con el objetivo de convertirlos en
                  startups de base tecnológica.{" "}
                  <a
                    href="https://caribe.ventures"
                    className="text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    caribe.ventures
                  </a>
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-start">
              <div className="relative h-16 w-40 shrink-0">
                <Image
                  src="/logos/gdg-logo-blanco.png"
                  alt="Google Developer Groups Barranquilla"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Google Developer Groups (GDG) Barranquilla
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  Aliado estratégico. Comunidad de desarrolladores respaldada por Google
                  que impulsa el aprendizaje de tecnologías de IA de Google en
                  Barranquilla. Para esta edición, la colaboración tiene alcance nacional
                  en conjunto con los GDGs locales de distintas ciudades de Colombia,
                  llevando los talleres Build with AI a participantes de todo el país.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="fundadores"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-fundadores"
        >
          <SectionHeading
            id="heading-fundadores"
            eyebrow="9"
            title="Fundadores del evento"
          />
          <p className="mb-8 text-gray-300 leading-relaxed">
            Barranqui-IA nace del liderazgo de Anuar Harb y Grace Torres, quienes
            articulan organización, inversión y comunidad tech en la región Caribe.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Anuar Harb</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-purple-400">
                Cofundador
              </p>
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                Desarrollador de software y, actualmente, director de Fundación Código
                Abierto, <span lang="en">general partner</span> de Caribe Ventures y
                líder del Google Developer Group (GDG) Barranquilla. Vivió en México,
                donde experimentó el ecosistema de tecnología a todo lo que da, y desde
                hace tres años impulsa la misión de convertir al Caribe colombiano en un
                epicentro de tecnología donde sucedan cosas.
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Grace Torres</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-purple-400">
                Cofundadora
              </p>
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                Abogada especialista en derecho administrativo, directora operativa de
                Fundación Código Abierto y fundadora de Tech Centre. Su trabajo
                articula gobernanza, operación y alianzas para sostener la misión de la
                fundación y del ecosistema de innovación en la costa.
              </p>
            </article>
          </div>
          <article className="mt-6 rounded-xl border border-purple-500/30 bg-purple-950/20 p-6">
            <h3 className="text-base font-semibold text-white">Costa Digital</h3>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Juntos crearon el movimiento{" "}
              <strong className="font-medium text-white">Costa Digital</strong>, a
              través del cual impulsan el ecosistema tecnológico de la costa
              colombiana: comunidad, eventos y vínculo entre talento, empresas e
              instituciones.
            </p>
            <p className="mt-4">
              <a
                href="https://costadigital.org"
                className="text-sm font-medium text-purple-400 underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                costadigital.org
              </a>
            </p>
          </article>
        </section>

        <section
          id="patrocinadores"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-pat"
        >
          <SectionHeading
            id="heading-pat"
            eyebrow="10"
            title="Patrocinadores y aliados"
          />
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[320px] text-left text-sm">
              <caption className="sr-only">
                Patrocinadores y aliados del evento
              </caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th scope="col" className="px-4 py-3 font-semibold text-white">
                    Patrocinador
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-white">
                    Rol
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {SPONSORS_TABLE.map((row) => (
                  <tr key={row.name} className="border-b border-white/5">
                    <td className="px-4 py-3">{row.name}</td>
                    <td className="px-4 py-3">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="comunicado-prensa"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-comunicado"
        >
          <SectionHeading
            id="heading-comunicado"
            title="Comunicado de prensa"
          />
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={handleCopyComunicado}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500/40 hover:bg-white/10 hover:text-white"
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
              {copied ? "Copiado" : "Copiar texto"}
            </button>
            <button
              type="button"
              onClick={handleDownloadComunicado}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-purple-500/40 hover:bg-white/10 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar .txt
            </button>
          </div>
          <article ref={comunicadoRef} className="rounded-xl border border-white/10 bg-white/[0.07] p-6 md:p-10 text-gray-200 shadow-inner">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              Para publicación inmediata
            </p>
            <h3 className="mt-4 text-xl font-bold text-white md:text-2xl">
              Barranquilla se convierte en el epicentro nacional de la inteligencia
              artificial con la tercera edición de Barranqui-IA
            </h3>
            <p className="mt-3 text-sm italic text-gray-400">
              Más de 450 participantes de todo Colombia se reunirán del 22 al 24 de mayo
              para construir soluciones con IA, competir por $20 millones en premios y
              acceder a talleres gratuitos de Build with AI de Google
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <p>
                <strong className="text-white">Barranquilla, Colombia —</strong> La
                Fundación Código Abierto, Caribe Ventures y Google Developer Groups
                Barranquilla anuncian la tercera edición del Hackatón Barranqui-IA, el
                punto de encuentro nacional para construir el futuro de Colombia con
                inteligencia artificial. El evento se realizará del 22 al 24 de mayo de
                2026 en el Cubo de Cristal de la Plaza de la Paz, en el corazón de
                Barranquilla.
              </p>
              <p>
                Con una convocatoria que por primera vez alcanza escala nacional,
                Barranqui-IA 2026 espera reunir a más de 450 participantes
                —desarrolladores, diseñadores, estudiantes y emprendedores— que durante
                48 horas formarán equipos para crear prototipos funcionales de
                soluciones basadas en inteligencia artificial.
              </p>
              <p>
                Los equipos competirán en cuatro verticales temáticas que se irán dando a
                conocer próximamente, pensadas como retos relevantes para Colombia —por
                ejemplo en ámbitos como salud, finanzas, logística y otros— además de una
                línea de innovación libre. El premio total supera los $20,000,000 COP, con
                $6 millones para el primer lugar de la categoría general.
              </p>
              <p>
                Como parte de la programación, el sábado 23 de mayo se realizarán
                talleres prácticos en el marco de la iniciativa Build with AI de Google,
                abiertos gratuitamente a la comunidad con una capacidad adicional de 300
                asistentes.
              </p>
            </div>
            <blockquote className="my-8 border-l-4 border-purple-500 pl-4 text-sm italic text-gray-300">
              <p>
                «Estamos creando espacios para que las personas tomen acción y no solo
                usen IA, sino que construyan con inteligencia artificial de manera educada
                para transformar el país y que mejor que el punto de encuentro sea el
                Caribe, una región que está creciendo exponencialmente y tiene mucho que
                ofrecer»,
              </p>
              <footer className="mt-2 not-italic text-gray-500">
                — Anuar Harb, Director de Fundación Código Abierto y fundador de
                Barranqui-IA
              </footer>
            </blockquote>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                En dos ediciones anteriores, Barranqui-IA ha demostrado su capacidad de
                generar impacto real. Geko Agent, equipo ganador de la primera edición con
                un detector de armas con IA para transporte público, es hoy una empresa
                de visión artificial operando en el sector de empaques. Kelly Toro y su
                equipo Arissa, tras el hackatón, pasaron por incubación en 51 Labs,
                obtuvieron 5.000 USD de capital semilla no reembolsable y se presentaron
                en Tech Caribe Fest. Dávila Publicidad participó en la segunda edición y
                terminó contratando a uno de los participantes del hackatón. Historias
                como la de Paulo Estrada, quien llegó sin saber programar y hoy es
                desarrollador activo, reflejan el poder transformador del evento.
              </p>
              <p>
                Los proyectos más destacados del hackatón serán invitados a postularse al
                Programa de Aceleración de Caribe Ventures, un proceso de 12 semanas para
                convertir prototipos en startups de base tecnológica con acompañamiento
                técnico, estratégico y acceso a inversión. La colaboración con Google
                Developer Groups tiene alcance nacional: GDGs de distintas ciudades de
                Colombia participan en la difusión y los talleres Build with AI,
                posicionando a Barranquilla como el punto de convergencia de la comunidad
                tech colombiana.
              </p>
            </div>
            <div className="mt-10 space-y-4 border-t border-white/10 pt-8 text-sm">
              <div>
                <h4 className="font-semibold text-white">Sobre Fundación Código Abierto</h4>
                <p className="mt-1 text-gray-400">
                  Fundación con la misión de convertir a la región Caribe en un epicentro
                  tech, impulsando la innovación tecnológica y el desarrollo de
                  habilidades digitales en Colombia. Con sede en Barranquilla, es
                  organizadora de Barranqui-IA desde 2024.{" "}
                  <a
                    href="https://codigoabierto.tech"
                    className="text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    codigoabierto.tech
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Sobre Caribe Ventures</h4>
                <p className="mt-1 text-gray-400">
                  Primer fondo de inversión pre-seed del Caribe colombiano, enfocado en
                  founders que usan IA para transformar industrias. En Barranqui-IA,
                  Caribe Ventures identifica los mejores proyectos para acompañarlos con
                  un programa de aceleración hacia su consolidación como startups de base
                  tecnológica.{" "}
                  <a
                    href="https://caribe.ventures"
                    className="text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    caribe.ventures
                  </a>
                </p>
              </div>
            </div>
          </article>
        </section>

        <section
          id="recursos-descargables"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-recursos"
        >
          <SectionHeading
            id="heading-recursos"
            eyebrow="11"
            title="Recursos y assets descargables"
          />
          <p className="mb-6 text-gray-300">
            Los siguientes recursos están disponibles para medios de comunicación y
            aliados: logos oficiales, flyers promocionales y galería fotográfica de
            ediciones anteriores. Para videos recap, canción del evento o archivos en
            máxima resolución, escribe a{" "}
            <a
              href="mailto:anuar@codigoabierto.tech"
              className="text-purple-400 hover:underline"
            >
              anuar@codigoabierto.tech
            </a>
            .
          </p>
          <CategorySection
            title={t("pressKit.logosCategory")}
            count={LOGOS.length}
            assets={LOGOS}
            onDownloadAll={() => bulkDownload(LOGOS)}
            t={t}
          />
          <CategorySection
            title={t("pressKit.flyersCategory")}
            count={FLYERS.length}
            assets={FLYERS}
            onDownloadAll={() => bulkDownload(FLYERS)}
            t={t}
          />
          <CategorySection
            title={t("pressKit.photosCategory")}
            count={PHOTOS.length}
            assets={PHOTOS}
            onDownloadAll={() => bulkDownload(PHOTOS)}
            t={t}
          />
        </section>

        <section
          id="contacto-dudas"
          className="mb-16 scroll-mt-28"
          aria-labelledby="heading-dudas"
        >
          <SectionHeading
            id="heading-dudas"
            eyebrow="12"
            title="¿Tienes alguna duda?"
          />
          <ContactDudasAddress intro="Escríbenos y con gusto te orientamos sobre el kit de prensa, el evento o cualquier consulta general." />
        </section>

        <section
          id="contacto-prensa"
          className="scroll-mt-28"
          aria-labelledby="heading-contacto"
        >
          <SectionHeading id="heading-contacto" eyebrow="13" title="Contacto de prensa" />
          <address className="not-italic rounded-xl border border-purple-500/30 bg-purple-950/30 p-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium text-white">Vocero oficial:</span> Anuar Harb
              </li>
              <li>
                <span className="font-medium text-white">Cargo:</span> Director de
                Fundación Código Abierto y Fundador de Barranqui-IA
              </li>
              <li>
                <span className="font-medium text-white">Teléfono:</span>{" "}
                <a href="tel:+573103900986" className="text-purple-400 hover:underline">
                  +57 310 390 0986
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Correo:</span>{" "}
                <a
                  href="mailto:anuar@codigoabierto.tech"
                  className="text-purple-400 hover:underline"
                >
                  anuar@codigoabierto.tech
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Sitio web:</span>{" "}
                <a
                  href="https://barranquiia.com"
                  className="text-purple-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  barranquiia.com
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Hashtag oficial:</span>{" "}
                <span className="text-pink-400">#BarranquiIA2026</span>
              </li>
            </ul>
          </address>
        </section>
      </div>
    </main>
  );
}
