"use client"

import {
  ChevronDown,
  ChevronRight,
  CircleDot,
} from "lucide-react"
import { Warp } from "@paper-design/shaders-react"
import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

import { Progress } from "@/components/ui/progress"
import { VisitorCounter } from "@/components/anomalyer/visitor-counter"

const navItems = [
  { label: "Noticias", href: "#noticias" },
  { label: "Acerca del manga", href: "#obra" },
  { label: "Protagonistas", href: "#protagonistas" },
  { label: "Capítulos", href: "/chapters" },
]

const socialItems = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/paintress.anomalyer/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@paintress.anomalyer",
  },
]

const newsItems = [
  {
    title: "Diario de producción",
    text: "Notas del autor, avances de páginas y decisiones visuales alrededor del primer arco.",
    image: "/anomalyer-cover.jpg",
  },
  {
    title: "Estado del capítulo 01",
    text: "El capítulo entra en una fase de composición: ritmo, silencios y contraste de tinta.",
    image: "/anomalyer-mercedes.jpg",
  },
  {
    title: "Archivo visual",
    text: "Bocetos, retratos, portada, moodboards y piezas para ampliar el universo de la obra.",
    image: "/anomalyer-pierre.jpg",
  },
]

const worldNotes = [
  {
    title: "La ciudad",
    text: "Calles estrechas, luz cansada y objetos que guardan memoria. Un lugar donde la anomalía parece una costumbre.",
  },
  {
    title: "Rituales",
    text: "Símbolos, gestos y pequeñas reglas del mundo aparecen como pistas antes que como explicación.",
  },
  {
    title: "Archivo",
    text: "Cartas, recortes, expedientes y fragmentos visuales pueden crecer como contenido extra.",
  },
]

const protagonists = [
  {
    name: "Pierre",
    role: "Aparece cuando la grieta ya está abierta.",
    text: "Su presencia balancea la portada: una figura más quieta, de lectura lateral y pasado incierto.",
    image: "/anomalyer-pierre-line.png",
    imagePosition: "object-center",
  },
  {
    name: "Mercedes",
    role: "Observa la anomalía antes de entenderla.",
    text: "La ficha puede revelar biografía, conflicto o frase clave al pasar el mouse, sin perder la tensión editorial.",
    image: "/anomalyer-mercedes-line-native.png",
    imagePosition: "object-center",
  },
]

const pierreDialog = {
  text: "—Y volví aquí, tras mi mísera odisea, confiado por el poder que tengo hoy en mis manos, a destruir esta metrópolis.",
  author: "Pierre Dessendre",
}

const mercedesDialog = {
  text: "—Entre nosotros no hubo ninguna palabra. Pero para mí, era como si nos hubiéramos dicho todo. Esta odisea... la haríamos juntos, desde este principio hasta su final... seremos compañía, el uno para el otro.",
  author: "Pensaba, para sí, Mercedes",
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/18 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-2xl leading-none text-foreground transition-colors hover:text-primary"
        >
          AnomalyeR
        </Link>
        <nav className="flex min-w-0 items-center gap-1 overflow-visible text-xs text-muted-foreground">
          <div className="flex min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 px-3 py-2 uppercase tracking-[0.08em] transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="group relative shrink-0">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 uppercase tracking-[0.08em] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60"
              aria-haspopup="menu"
            >
              Socials
              <ChevronDown
                aria-hidden="true"
                size={14}
                className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </button>
            <div
              role="menu"
              className="pointer-events-none absolute right-0 top-full z-50 mt-2 w-40 translate-y-1 border border-primary/20 bg-background/94 py-2 opacity-0 shadow-[0_18px_42px_oklch(0%_0_0/0.55)] backdrop-blur-xl transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="block px-4 py-2.5 font-heading text-xl leading-none text-primary/82 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

function ProgressDial() {
  return (
    <div className="grid justify-items-center gap-4 border border-primary/24 bg-card/70 px-5 py-7 text-center backdrop-blur-sm">
      <p className="max-w-32 text-xs font-semibold uppercase leading-4 text-foreground/78">
        Progreso de autoría
      </p>
      <div className="relative grid size-32 place-items-center rounded-full border border-primary/30 bg-background/50">
        <div className="absolute inset-4 rounded-full border-[12px] border-primary/22 border-r-primary border-t-primary" />
        <span className="font-heading text-5xl text-primary">65%</span>
      </div>
      <Progress
        value={65}
        aria-label="Progreso de autoría 65%"
        className="h-1.5 bg-foreground/10 [&_[data-slot=progress-indicator]]:bg-primary"
      />
    </div>
  )
}

function NewsCard({
  title,
  text,
  image,
  delay,
}: {
  title: string
  text: string
  image: string
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <article className="group grid min-h-[360px] overflow-hidden border border-primary/18 bg-card/72 transition-colors hover:border-primary/48">
        <div className="relative min-h-44 overflow-hidden border-b border-primary/16">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-82 grayscale transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0%_0_0/0.72)_100%)]" />
        </div>
        <div className="p-5">
          <h3 className="font-heading text-3xl leading-none">{title}</h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      </article>
    </Reveal>
  )
}

function WorldCard({
  title,
  text,
  className = "",
}: {
  title: string
  text: string
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className={`group relative overflow-hidden border border-primary/18 bg-background/48 p-5 transition-colors hover:border-primary/58 hover:bg-card/82 ${className}`}
      whileHover={reduceMotion ? undefined : { scale: 1.018 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-4 border border-foreground/8" />
      <div className="relative z-10">
        <p className="font-heading text-3xl leading-none text-foreground">
          {title}
        </p>
        <p className="mt-4 max-h-0 text-sm leading-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
          {text}
        </p>
      </div>
    </motion.article>
  )
}

function ProtagonistsComposition() {
  const [pierre, mercedes] = protagonists

  return (
    <div className="protagonists-composition relative grid min-h-[620px] gap-8 overflow-visible lg:min-h-[720px] lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.72fr)] lg:items-center">
      <div className="relative min-h-[560px] overflow-visible lg:min-h-[720px]">
        <h2 className="relative z-20 w-fit border-b border-primary/30 pr-10 font-heading text-5xl leading-none sm:text-6xl">
          Protagonistas
        </h2>

        <div
          className="pierre-trigger group/pierre absolute bottom-0 left-[8%] h-[88%] w-[min(58vw,430px)] cursor-pointer outline-none"
          tabIndex={0}
        >
          <Image
            src={pierre.image}
            alt={`Retrato de ${pierre.name}`}
            fill
            sizes="(max-width: 768px) 58vw, 430px"
            className={`${pierre.imagePosition} pointer-events-none z-20 object-contain object-bottom transition-transform duration-500 ease-out group-hover/pierre:-translate-y-1 group-focus/pierre:-translate-y-1`}
          />
        </div>
        {/* Distancia entre espaldas: baja este left para acercarlas, subelo para separarlas. */}
        <div
          className="mercedes-trigger group/mercedes absolute bottom-0 left-[40%] h-[88%] w-[min(58vw,430px)] cursor-pointer outline-none"
          tabIndex={0}
        >
          <Image
            src={mercedes.image}
            alt={`Retrato de ${mercedes.name}`}
            fill
            sizes="(max-width: 768px) 58vw, 430px"
            className={`${mercedes.imagePosition} pointer-events-none z-20 object-contain object-bottom transition-transform duration-500 ease-out group-hover/mercedes:-translate-y-1 group-focus/mercedes:-translate-y-1`}
          />
        </div>
        {/* editar bottom */}
        <div className="pointer-events-none absolute bottom-[-60px] left-1/2 z-40 h-48 w-[104%] -translate-x-1/2">
          <Image
            src="/anomalyer-grunge-ground.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 104vw, 720px"
            className="object-fill"
          />
        </div>
      </div>

      <article className="protagonists-copy relative z-20 min-h-[360px] max-w-xl pb-10 lg:pb-0">
        <div className="copy-layer copy-overview">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">
            Relación
          </p>
          <h3 className="font-heading text-5xl leading-none sm:text-6xl">
            Dos fugitivos en el continente{" "}
            <em className="italic">anómalo</em>
          </h3>
          <p className="mt-6 text-base leading-8 text-foreground/86">
            Con una recompensa puesta sobre sus cabezas, Pierre y Mercedes
            avanzan por un continente donde la realidad se quiebra y cada paso
            corrompe algo de quienes se atreven a cruzarlo.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Su viaje hacia El Museo revela heridas, decisiones y fragmentos de
            un pasado que todavía los persigue. No son solo compañeros de ruta:
            son dos jóvenes marginados intentando descubrir si pueden
            pertenecerse a sí mismos antes de perderse en Terra-3.
          </p>
        </div>
        <div className="copy-layer copy-dialog copy-pierre absolute inset-0">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">
            Pierre Dessendre
          </p>
          <blockquote className="font-heading text-3xl leading-tight text-foreground sm:text-4xl">
            {pierreDialog.text}
          </blockquote>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-primary/82">
            {pierreDialog.author}
          </p>
        </div>
        <div className="copy-layer copy-dialog copy-mercedes absolute inset-0">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">
            Mercedes
          </p>
          <blockquote className="font-heading text-3xl leading-tight text-foreground sm:text-4xl">
            {mercedesDialog.text}
          </blockquote>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-primary/82">
            {mercedesDialog.author}
          </p>
        </div>
      </article>
      <style>{`
        .protagonists-composition .copy-layer {
          transition:
            opacity 280ms ease,
            filter 280ms ease,
            transform 280ms ease;
        }

        .protagonists-composition .copy-dialog {
          filter: blur(10px);
          opacity: 0;
          pointer-events: none;
          transform: translateY(8px);
        }

        .protagonists-composition:has(.pierre-trigger:is(:hover, :focus)) .copy-overview,
        .protagonists-composition:has(.mercedes-trigger:is(:hover, :focus)) .copy-overview {
          filter: blur(10px);
          opacity: 0;
          transform: translateY(-6px);
        }

        .protagonists-composition:has(.pierre-trigger:is(:hover, :focus)) .copy-pierre,
        .protagonists-composition:has(.mercedes-trigger:is(:hover, :focus)) .copy-mercedes {
          filter: blur(0);
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .protagonists-composition .copy-layer {
            transition-duration: 0ms;
          }
        }
      `}</style>
    </div>
  )
}

export function SketchOneProposal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative min-h-[calc(100svh-56px)] overflow-hidden border-b border-primary/20 bg-black pt-14">
        <div className="absolute inset-0">
          <Warp
            className="absolute inset-0"
            width="100%"
            height="100%"
            colors={["#050505", "#fff8df", "#0a0907", "#f3d99a", "#ffffff"]}
            proportion={0.34}
            softness={0.02}
            distortion={0.92}
            swirl={1}
            swirlIterations={20}
            shape="edge"
            shapeScale={0.72}
            speed={0.58}
            scale={1.95}
            rotation={18}
            fit="cover"
            maxPixelCount={1400000}
            style={{ height: "100%", width: "100%" }}
          />
          <Warp
            className="absolute inset-0 opacity-90 mix-blend-screen"
            width="100%"
            height="100%"
            colors={["#000000", "#fff6d8", "#1a1308", "#ffffff"]}
            proportion={0.14}
            softness={0}
            distortion={0.96}
            swirl={0.86}
            swirlIterations={20}
            shape="stripes"
            shapeScale={0.88}
            speed={0.72}
            scale={1.18}
            rotation={34}
            fit="cover"
            maxPixelCount={1000000}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,oklch(97%_0.035_92/0.42)_0_30%,transparent_48%,oklch(0%_0_0/0.48)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-56px)] w-full max-w-7xl items-center justify-center px-5 sm:px-8">
          <Reveal className="relative flex w-full justify-center">
            <h1 className="sr-only">AnomalyeR</h1>
            <div className="relative aspect-square w-[min(92vw,72svh,57rem)]">
              <div className="absolute inset-[-1%] rounded-full bg-white/45 blur-2xl" />
              <div className="absolute inset-[2.5%] rounded-full bg-[radial-gradient(circle_at_50%_45%,oklch(100%_0_0)_0%,oklch(96%_0.02_92)_58%,oklch(83%_0.035_88)_100%)] shadow-[0_0_42px_oklch(100%_0_0/0.95),0_0_118px_oklch(91%_0.05_92/0.62),0_0_220px_oklch(0%_0_0/0.72)]" />
              <div className="absolute inset-[7%] overflow-hidden rounded-full">
                <Image
                  src="/anomalyer-hero-mercedes.png"
                  alt="Mercedes sosteniendo una esfera en la portada de AnomalyeR"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 57rem"
                  className="scale-[1.34] object-contain object-[50%_64%]"
                />
              </div>
              <Link
                href="/chapters/fragmento-00"
                className="group absolute inset-x-0 bottom-[3%] z-20 mx-auto flex h-[clamp(4rem,10vw,6.5rem)] w-[min(78vw,31rem)] items-center justify-center overflow-hidden text-center font-heading text-3xl uppercase tracking-[0.08em] text-white outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white sm:text-4xl"
              >
                <Image
                  src="/anomalyer-grunge-ground.webp"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 78vw, 31rem"
                  className="pointer-events-none object-fill transition-opacity duration-300 group-hover:opacity-92"
                />
                <span className="relative z-10 drop-shadow-[0_2px_8px_oklch(0%_0_0/0.85)]">
                  Leer ahora
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="noticias"
        className="relative border-b border-primary/18 bg-background py-14 sm:py-18"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[220px_1fr]">
          <Reveal>
            <ProgressDial />
          </Reveal>
          <div>
            <Reveal>
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-heading text-5xl leading-none">
                  Últimas noticias
                </h2>
                <Link
                  href="/chapters"
                  className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-foreground"
                >
                  Ver base de capítulos
                  <ChevronRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {newsItems.map((item, index) => (
                <NewsCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  delay={index * 0.06}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="obra"
        className="relative overflow-hidden border-b border-primary/18 py-16 sm:py-24"
      >
        <div className="absolute inset-y-0 right-0 hidden w-[42vw] opacity-18 lg:block">
          <Image
            src="/anomalyer-mercedes.jpg"
            alt=""
            fill
            sizes="42vw"
            className="object-cover object-[45%_40%] grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0%_0_0)_0%,transparent_42%,oklch(0%_0_0/0.92)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">
                Conviértete en una Anomaly
              </p>
              <h2 className="font-heading text-5xl leading-tight sm:text-7xl">
                Contexto sobre la obra
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                AnomalyeR se mueve entre duelo, memoria y señales imposibles.
                Esta sección abre espacio para que el autor publique
                descripción, escenas, notas y pistas sin convertir la obra en
                un blog genérico.
              </p>
              <div className="mt-8 flex items-start gap-3 border border-primary/22 bg-primary/8 p-4 text-sm leading-6 text-primary">
                <CircleDot aria-hidden="true" className="mt-1 shrink-0" />
                Un archivo vivo para expandir mundo, personajes y fragmentos
                visuales antes de que cada capítulo llegue a publicación.
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <WorldCard
              title={worldNotes[0].title}
              text={worldNotes[0].text}
              className="min-h-64 sm:col-span-2"
            />
            <WorldCard
              title={worldNotes[1].title}
              text={worldNotes[1].text}
              className="min-h-52"
            />
            <WorldCard
              title={worldNotes[2].title}
              text={worldNotes[2].text}
              className="min-h-52"
            />
          </div>
        </div>
      </section>

      <section
        id="protagonistas"
        className="relative border-b border-primary/18 py-16 sm:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal delay={0.08}>
            <ProtagonistsComposition />
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-primary/18 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-3xl text-foreground">AnomalyeR</p>
            <p className="mt-2 max-w-xl leading-6">
              Web oficial para publicar portada, noticias, contexto, retratos y
              capítulos de una obra independiente en crecimiento.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
              <CircleDot aria-hidden="true" size={14} />
              Manga independiente
            </span>
            <VisitorCounter />
          </div>
        </div>
      </footer>
    </div>
  )
}
