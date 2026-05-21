"use client"

import {
  ArrowUpRight,
  BookOpenText,
  ChevronRight,
  CircleDot,
  MousePointer2,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const navItems = ["Noticias", "Acerca del manga", "Merch", "Sketch"]

const newsItems = [
  {
    title: "Diario de producción",
    text: "Espacio para notas del autor, avances de páginas, decisiones visuales y cambios de fecha.",
  },
  {
    title: "Estado del capítulo 01",
    text: "Bloque para comunicar si el capítulo está en guion, storyboard, tinta o publicación.",
  },
  {
    title: "Archivo visual",
    text: "Lugar para bocetos, moodboards, pruebas de portada y material extra del universo.",
  },
]

const glimpseCards = [
  {
    title: "La ciudad",
    text: "Vistazo sobre el lugar donde las anomalías se vuelven rutina: calles estrechas, luz cansada y objetos con memoria.",
    type: "wide",
  },
  {
    title: "Rituales",
    text: "Cards pequeñas para explicar costumbres, símbolos, máscaras o reglas del mundo sin revelar demasiado.",
    type: "small",
  },
  {
    title: "Archivo",
    text: "Entrada para piezas coleccionables: expedientes, cartas, recortes o pistas del manga.",
    type: "small",
  },
]

const protagonists = [
  {
    name: "Mercedes",
    role: "Observa la anomalía antes de entenderla.",
    text: "Ficha lateral como en el boceto: puede arrancar casi vacía y revelar biografía, conflicto o frase clave al pasar el mouse.",
  },
  {
    name: "Pierre",
    role: "Aparece cuando la grieta ya esta abierta.",
    text: "Segunda ficha lateral para balancear la escena central de protagonistas y dejar espacio a ilustración final.",
  },
]

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

function SketchCard({
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
      className={`group relative min-h-36 overflow-hidden border border-foreground/18 bg-background/55 p-4 transition-colors hover:border-primary/55 hover:bg-card ${className}`}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-3 border border-foreground/8" />
      <div className="relative z-10">
        <p className="font-heading text-2xl leading-none text-foreground">
          {title}
        </p>
        <p className="mt-3 max-h-0 text-sm leading-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
          {text}
        </p>
      </div>
    </motion.article>
  )
}

function ProgressDial() {
  return (
    <div className="grid justify-items-center gap-3 border border-foreground/18 bg-card/55 px-5 py-6 text-center">
      <p className="max-w-28 text-xs font-semibold uppercase leading-4 text-foreground/75">
        Progreso de autoría
      </p>
      <div className="relative grid size-28 place-items-center rounded-full border border-primary/30 bg-background/45">
        <div className="absolute inset-3 rounded-full border-[10px] border-primary/25 border-r-primary border-t-primary" />
        <span className="font-heading text-4xl text-primary">65%</span>
      </div>
      <Progress
        value={65}
        aria-label="Progreso de autoría 65%"
        className="h-1.5 bg-foreground/10 [&_[data-slot=progress-indicator]]:bg-primary"
      />
    </div>
  )
}

function FigurePair() {
  return (
    <div className="relative flex min-h-80 items-end justify-center overflow-hidden border border-primary/24 bg-[radial-gradient(circle_at_50%_30%,oklch(48.6%_0.017_107/0.35),oklch(21.5%_0.002_18)_68%)] p-6">
      <div className="absolute left-1/2 top-8 h-[82%] w-px -translate-x-1/2 bg-primary/20" />
      <div className="absolute inset-x-8 bottom-7 h-px bg-foreground/12" />
      <div className="relative h-64 w-36 -translate-x-6">
        <div className="absolute left-12 top-0 size-16 rounded-full bg-foreground/18" />
        <div className="absolute bottom-0 left-4 h-52 w-24 rounded-t-full bg-foreground/12" />
        <div className="absolute bottom-20 left-0 h-12 w-28 -rotate-12 border border-foreground/18 bg-background/55" />
      </div>
      <div className="relative h-64 w-36 translate-x-4">
        <div className="absolute right-12 top-0 size-16 rounded-full bg-primary/18" />
        <div className="absolute bottom-0 right-4 h-52 w-24 rounded-t-full bg-primary/12" />
        <div className="absolute bottom-20 right-0 h-12 w-28 rotate-12 border border-primary/18 bg-background/55" />
      </div>
    </div>
  )
}

export function SketchOneProposal() {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-4 py-5 sm:px-6 lg:py-8">
      <div className="mb-3 flex justify-end pr-2 text-[10px] uppercase text-muted-foreground">
        Web navegador
      </div>
      <div className="overflow-hidden border border-primary/24 bg-background/90 shadow-[0_28px_120px_oklch(0%_0_0/0.72)] backdrop-blur">
        <header className="flex min-h-11 items-center justify-between border-b border-primary/20 px-3 text-xs text-muted-foreground sm:px-5">
          <nav className="flex min-w-0 items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Noticias" ? "#noticias" : "#obra"}
                className="shrink-0 border-r border-primary/16 px-3 py-3 transition-colors hover:bg-primary/8 hover:text-foreground"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 pl-4 sm:flex">
            <Link href="/chapters" className="hover:text-foreground">
              Archivo
            </Link>
            <Link href="#protagonistas" className="hover:text-foreground">
              Autor
            </Link>
          </div>
        </header>

        <section className="sketch-hero-grid relative min-h-[360px] overflow-hidden border-b border-primary/20 px-5 py-9 text-center sm:min-h-[410px] sm:px-10">
          <Image
            src="/anomalyer-key-art.webp"
            alt="Imagen promocional temporal de AnomalyeR"
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover opacity-22"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent,oklch(21.5%_0.002_18/0.72)_62%,oklch(0%_0_0/0.92)_100%),linear-gradient(90deg,oklch(0%_0_0/0.78),transparent_28%,transparent_72%,oklch(0%_0_0/0.78))]" />
          <div className="absolute left-0 top-0 hidden h-full w-48 bg-[repeating-linear-gradient(135deg,oklch(86.8%_0.066_78/0.16)_0_1px,transparent_1px_13px)] opacity-55 sm:block" />
          <div className="absolute right-0 top-0 hidden h-full w-48 bg-[repeating-linear-gradient(45deg,oklch(86.8%_0.066_78/0.16)_0_1px,transparent_1px_13px)] opacity-55 sm:block" />
          <Reveal className="relative z-10 mx-auto flex min-h-[280px] max-w-3xl flex-col items-center justify-center gap-5 sm:min-h-[330px]">
            <p className="text-xs uppercase text-muted-foreground">
              Imagen promocional
            </p>
            <h1 className="font-heading text-6xl font-semibold leading-none sm:text-8xl">
              AnomalyeR
            </h1>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
              Portada basada en el boceto: logo centrado, ilustración
              atmosférica y CTA principal como primer punto de acción.
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 min-w-56 rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/chapters/fragmento-00">
                <BookOpenText data-icon="inline-start" />
                Leer ahora
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
          </Reveal>
        </section>

        <section
          id="noticias"
          className="grid gap-5 border-b border-primary/20 px-5 py-8 sm:px-8 lg:grid-cols-[180px_1fr]"
        >
          <Reveal>
            <ProgressDial />
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="mb-4 font-heading text-3xl leading-none">
                Ultimas noticias
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {newsItems.map((item) => (
                  <article
                    key={item.title}
                    className="min-h-40 border border-primary/20 bg-card p-4 transition-colors hover:border-primary/45"
                  >
                    <div className="sketch-placeholder mb-5 h-14 border border-primary/16" />
                    <h3 className="font-heading text-2xl leading-none">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="obra" className="border-b border-primary/20 px-5 py-10 sm:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs uppercase text-primary/85">
              &lt;&lt; Conviértete en una Anomaly
            </p>
            <h2 className="font-heading text-4xl leading-tight sm:text-6xl">
              Contexto sobre la obra
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              Bloque pensado como el centro del boceto: una explicación breve
              del universo, con espacio para que el autor cambie copy,
              capturas, panels o arte final.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_260px]">
            <div className="grid gap-4 sm:grid-cols-2">
              <SketchCard
                title={glimpseCards[0].title}
                text={glimpseCards[0].text}
                className="sm:col-span-2 min-h-56"
              />
              <SketchCard title={glimpseCards[1].title} text={glimpseCards[1].text} />
              <SketchCard title={glimpseCards[2].title} text={glimpseCards[2].text} />
            </div>
            <aside className="border-l border-foreground/16 pl-5">
              <p className="font-heading text-3xl leading-none">
                Vistazos sobre la obra
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Estas cards pueden estar vacías en esta propuesta o llenarse
                con mundo, escenas, páginas del manga, mapas, notas del autor o
                previews.
              </p>
              <div className="mt-6 flex items-start gap-3 border border-primary/22 bg-primary/8 p-3 text-xs leading-5 text-primary">
                <MousePointer2 aria-hidden="true" />
                Al posicionar el mouse, la card se agranda y surge su texto.
              </div>
            </aside>
          </div>
        </section>

        <section
          id="protagonistas"
          className="border-b border-primary/20 px-5 py-10 sm:px-8"
        >
          <Reveal>
            <h2 className="mb-7 font-heading text-5xl leading-none">
              Protagonistas
            </h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[260px_1fr_260px] lg:items-stretch">
            <SketchCard
              title={protagonists[0].name}
              text={`${protagonists[0].role} ${protagonists[0].text}`}
              className="min-h-64"
            />
            <Reveal delay={0.08}>
              <FigurePair />
            </Reveal>
            <SketchCard
              title={protagonists[1].name}
              text={`${protagonists[1].role} ${protagonists[1].text}`}
              className="min-h-64"
            />
          </div>
        </section>

        <footer className="grid gap-5 px-5 py-7 text-sm text-muted-foreground sm:grid-cols-[1fr_auto] sm:px-8">
          <div>
            <p className="font-heading text-2xl text-foreground">AnomalyeR</p>
            <p className="mt-2 max-w-xl leading-6">
              Sketch 1 Proposal branch: flujo casi identico al boceto para
              comparar contra otras ramas antes de elegir main.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-foreground/20 bg-transparent"
          >
            <Link href="/chapters">
              Base de capítulos
              <ChevronRight data-icon="inline-end" />
            </Link>
          </Button>
        </footer>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1180px] items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <CircleDot aria-hidden="true" />
          Proposal 1 / Sketch 1
        </span>
        <span>branch: sketch-1-proposal</span>
      </div>
    </div>
  )
}
