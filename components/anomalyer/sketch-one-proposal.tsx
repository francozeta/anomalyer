"use client"

import {
  ArrowUpRight,
  BookOpenText,
  ChevronRight,
  CircleDot,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const navItems = [
  { label: "Noticias", href: "#noticias" },
  { label: "Acerca del manga", href: "#obra" },
  { label: "Protagonistas", href: "#protagonistas" },
  { label: "Capítulos", href: "/chapters" },
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
    name: "Mercedes",
    role: "Observa la anomalía antes de entenderla.",
    text: "La ficha puede revelar biografía, conflicto o frase clave al pasar el mouse, sin perder la tensión editorial.",
    image: "/anomalyer-mercedes.jpg",
    imagePosition: "object-[52%_34%]",
  },
  {
    name: "Pierre",
    role: "Aparece cuando la grieta ya está abierta.",
    text: "Su presencia balancea la portada: una figura más quieta, de lectura lateral y pasado incierto.",
    image: "/anomalyer-pierre.jpg",
    imagePosition: "object-[48%_34%]",
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
        <nav className="flex min-w-0 items-center gap-1 overflow-x-auto text-xs text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="shrink-0 px-3 py-2 uppercase tracking-[0.08em] transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
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

function ProtagonistCard({
  name,
  role,
  text,
  image,
  imagePosition,
  delay,
}: {
  name: string
  role: string
  text: string
  image: string
  imagePosition: string
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <article className="group grid overflow-hidden border border-primary/18 bg-card/68 transition-colors hover:border-primary/52 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.8fr)]">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src={image}
            alt={`Retrato de ${name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className={`grayscale ${imagePosition} object-cover transition duration-700 group-hover:scale-[1.035]`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,oklch(0%_0_0/0.82)_100%)]" />
        </div>
        <div className="flex min-h-80 flex-col justify-end p-6 sm:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">
            Protagonista
          </p>
          <h3 className="font-heading text-5xl leading-none sm:text-6xl">
            {name}
          </h3>
          <p className="mt-5 text-base leading-7 text-foreground/82">{role}</p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
        </div>
      </article>
    </Reveal>
  )
}

export function SketchOneProposal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="paper-grain relative min-h-[76svh] overflow-hidden border-b border-primary/20 pt-14">
        <Image
          src="/anomalyer-cover.jpg"
          alt="Portada de AnomalyeR"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] opacity-72 grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,transparent_0%,oklch(0%_0_0/0.48)_42%,oklch(0%_0_0/0.96)_92%),linear-gradient(90deg,oklch(0%_0_0/0.92)_0%,oklch(0%_0_0/0.62)_34%,transparent_58%,oklch(0%_0_0/0.74)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,oklch(0%_0_0)_86%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(76svh-56px)] w-full max-w-7xl items-end px-5 pb-8 sm:px-8 sm:pb-12">
          <Reveal className="max-w-3xl">
            <h1 className="font-heading text-6xl font-semibold leading-none text-foreground sm:text-8xl lg:text-9xl">
              AnomalyeR
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/82 sm:text-xl sm:leading-9">
              Una obra independiente sobre cuerpos que recuerdan lo imposible y
              una ciudad que aprendió a rezar en silencio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-none bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/chapters/fragmento-00">
                  <BookOpenText data-icon="inline-start" />
                  Leer ahora
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-primary/30 bg-background/15 px-8 text-foreground backdrop-blur-md hover:bg-primary/10"
              >
                <Link href="#obra">Entrar al universo</Link>
              </Button>
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
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-heading text-6xl leading-none sm:text-7xl">
                Protagonistas
              </h2>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Los retratos pueden crecer como fichas completas cuando el
                autor defina biografías, capítulos y arte final.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {protagonists.map((character, index) => (
              <ProtagonistCard
                key={character.name}
                name={character.name}
                role={character.role}
                text={character.text}
                image={character.image}
                imagePosition={character.imagePosition}
                delay={index * 0.08}
              />
            ))}
          </div>
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
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <CircleDot aria-hidden="true" size={14} />
            Manga independiente
          </span>
        </div>
      </footer>
    </div>
  )
}
