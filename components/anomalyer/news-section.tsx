import { HoverLift } from "@/components/anomalyer/reveal"
import { SectionHeading } from "@/components/anomalyer/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { newsItems } from "@/lib/anomalyer-content"

export function NewsSection() {
  return (
    <section id="noticias" className="relative py-16 sm:py-24">
      <SectionHeading
        kicker="Ultimas noticias"
        title="Bitácora corta para una obra en movimiento."
      >
        Entradas pensadas como archivo editorial: progreso, notas visuales y
        decisiones de autor sin convertir la web en un blog generico.
      </SectionHeading>
      <div className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <HoverLift key={item.title} delay={index * 0.07}>
            <Card className="group h-full rounded-none border-foreground/10 bg-card/70 py-0 transition-colors hover:border-primary/40 hover:bg-card">
              <CardHeader className="px-5 pt-5">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <Badge
                    variant="outline"
                    className="rounded-none border-primary/25 bg-transparent text-primary"
                  >
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <CardTitle className="font-heading text-3xl leading-none">
                  {item.title}
                </CardTitle>
                <CardDescription className="pt-2 leading-7">
                  {item.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <div className="h-px w-full bg-foreground/10 transition-colors group-hover:bg-primary/50" />
              </CardContent>
            </Card>
          </HoverLift>
        ))}
      </div>
    </section>
  )
}
