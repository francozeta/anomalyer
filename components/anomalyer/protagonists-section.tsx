import { HoverLift } from "@/components/anomalyer/reveal"
import { SectionHeading } from "@/components/anomalyer/section-heading"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { protagonists } from "@/lib/anomalyer-content"

export function ProtagonistsSection() {
  return (
    <section id="protagonistas" className="relative py-16 sm:py-24">
      <SectionHeading
        kicker="Protagonistas"
        title="Tres presencias para abrir el archivo."
      >
        Nombres y descripciones viven en una capa de datos lista para cambiar
        cuando el canon final del manga se cierre.
      </SectionHeading>
      <div className="mx-auto mt-10 grid w-full max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
        {protagonists.map((character, index) => (
          <HoverLift key={character.name} delay={index * 0.07}>
            <Card className="group relative h-full rounded-none border-foreground/10 bg-card/76 py-0">
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,oklch(0.78_0.112_70),oklch(0.39_0.065_186),oklch(0.56_0.18_29))] opacity-55 transition-opacity group-hover:opacity-90" />
              <CardHeader className="px-5 pt-7">
                <div className="mb-10 flex aspect-[4/3] items-end border border-foreground/10 bg-[linear-gradient(135deg,oklch(0.18_0.024_35),oklch(0.12_0.02_33)),linear-gradient(90deg,transparent,oklch(0.78_0.112_70/0.14),transparent)] p-4">
                  <span className="font-heading text-7xl leading-none text-foreground/12 transition-colors group-hover:text-primary/30">
                    {character.name.slice(0, 1)}
                  </span>
                </div>
                <CardTitle className="font-heading text-4xl leading-none">
                  {character.name}
                </CardTitle>
                <CardDescription className="text-primary/85">
                  {character.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 px-5 pb-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  {character.summary}
                </p>
                <p className="border-t border-foreground/10 pt-4 text-xs text-foreground/75">
                  Senal visual: {character.signal}
                </p>
              </CardContent>
            </Card>
          </HoverLift>
        ))}
      </div>
    </section>
  )
}
