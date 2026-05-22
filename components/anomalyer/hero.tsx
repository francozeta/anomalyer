import { ArrowDown, ArrowUpRight, BookOpenText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Reveal } from "@/components/anomalyer/reveal"
import { SiteHeader } from "@/components/anomalyer/site-header"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="paper-grain relative min-h-[84svh] overflow-hidden md:min-h-[86svh]">
      <Image
        src="/anomalyer-key-art.webp"
        alt="Arte atmosférico de AnomalyeR con figura, eclipse y textura de tinta"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-85"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.09_0.021_33/0.96)_0%,oklch(0.11_0.024_33/0.72)_36%,oklch(0.09_0.021_33/0.24)_72%),linear-gradient(180deg,oklch(0.09_0.021_33/0.7)_0%,transparent_42%,oklch(0.1_0.021_33/0.9)_100%)]" />
      <SiteHeader />
      <div className="relative z-10 mx-auto flex min-h-[calc(84svh-84px)] w-full max-w-7xl items-end px-5 pb-8 sm:px-8 sm:pb-14 md:min-h-[calc(86svh-84px)]">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <Reveal className="max-w-4xl">
            <h1 className="font-heading text-6xl font-semibold leading-none text-foreground sm:text-8xl lg:text-9xl">
              AnomalyeR
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/82 sm:text-xl sm:leading-9">
              Un manga independiente sobre cuerpos que recuerdan lo imposible y
              una ciudad que aprendió a rezar en silencio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-none bg-primary px-5 text-primary-foreground hover:bg-primary/90"
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
                className="h-11 rounded-none border-foreground/25 bg-background/10 px-5 text-foreground backdrop-blur-md hover:bg-foreground/10"
              >
                <Link href="/chapters">Ver capítulos</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="hidden lg:block">
            <dl className="grid gap-5 border-l border-foreground/20 pl-6 text-sm text-muted-foreground">
              <div>
                <dt className="text-foreground">Estado editorial</dt>
                <dd className="mt-1">Capítulo 01 en arte final</dd>
              </div>
              <div>
                <dt className="text-foreground">Publicación</dt>
                <dd className="mt-1">Lectura web preparada por etapas</dd>
              </div>
              <div>
                <dt className="text-foreground">Tono</dt>
                <dd className="mt-1">Oscuro, íntimo, melancólico</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground md:flex">
        <ArrowDown aria-hidden="true" />
        Obra en progreso
      </div>
    </section>
  )
}
