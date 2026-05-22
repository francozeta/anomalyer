import Image from "next/image"

import { Reveal } from "@/components/anomalyer/reveal"
import { SectionHeading } from "@/components/anomalyer/section-heading"
import { Separator } from "@/components/ui/separator"

export function ContextSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <SectionHeading
        kicker="Contexto"
        title="La anomalía no llega como monstruo. Llega como memoria."
      >
        AnomalyeR se plantea como una historia de heridas compartidas, objetos
        ceremoniales y ciudades donde lo fantástico aparece con una calma
        incómoda.
      </SectionHeading>
      <div className="mx-auto mt-12 grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden border border-foreground/12 bg-muted">
            <Image
              src="/anomalyer-key-art.webp"
              alt="Detalle del arte de portada de AnomalyeR"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[58%_45%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0.1_0.021_33/0.72)_100%)]" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-xl">
            <p className="font-heading text-4xl leading-tight text-foreground sm:text-5xl">
              Una publicación de autor necesita respirar como su universo.
            </p>
            <Separator className="my-7 bg-foreground/12" />
            <div className="grid gap-5 text-base leading-8 text-muted-foreground">
              <p>
                La home funciona como portada viva: presenta la obra, comunica
                avance real y reserva espacio para notas de proceso sin romper
                el tono narrativo.
              </p>
              <p>
                La base técnica separa contenido y componentes, de modo que el
                autor pueda reemplazar textos, protagonistas y capítulos sin
                rediseñar la experiencia completa.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
