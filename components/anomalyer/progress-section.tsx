import { ProgressMeter } from "@/components/anomalyer/progress-meter"
import { Reveal } from "@/components/anomalyer/reveal"
import { SectionHeading } from "@/components/anomalyer/section-heading"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { progressItems } from "@/lib/anomalyer-content"

export function ProgressSection() {
  return (
    <section id="obra" className="relative bg-background py-16 sm:py-24">
      <SectionHeading
        kicker="Obra en proceso"
        title="Un avance visible, no un archivo cerrado."
      >
        La web queda preparada para publicar por etapas: progreso creativo,
        noticias de autor y capítulos cuando la obra esté lista para salir.
      </SectionHeading>
      <div className="mx-auto mt-10 grid w-full max-w-6xl gap-5 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <Card className="anomaly-surface h-full rounded-none border-foreground/10 bg-card/80 py-0">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="font-heading text-4xl leading-none">
                Arco inicial
              </CardTitle>
              <CardDescription className="text-base leading-7">
                La primera fase prioriza el lenguaje visual, la cadencia de
                lectura y una ruta técnica que no dependa de plataformas
                externas.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <Separator className="my-6 bg-foreground/12" />
              <dl className="grid grid-cols-2 gap-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">Formato</dt>
                  <dd className="mt-1 text-foreground">Manga web</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Fase</dt>
                  <dd className="mt-1 text-foreground">MVP editorial</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Lectura</dt>
                  <dd className="mt-1 text-foreground">Capítulos futuros</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Mood</dt>
                  <dd className="mt-1 text-foreground">Tinta, duelo, luz</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </Reveal>
        <Card className="rounded-none border-foreground/10 bg-card/72 py-0 backdrop-blur-md">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="font-heading text-3xl leading-none">
              Progreso de producción
            </CardTitle>
            <CardDescription>
              Estado interno estimado para ordenar la comunicación con lectores.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 px-6 pb-6">
            {progressItems.map((item, index) => (
              <ProgressMeter
                key={item.label}
                label={item.label}
                value={item.value}
                note={item.note}
                delay={index * 0.06}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
