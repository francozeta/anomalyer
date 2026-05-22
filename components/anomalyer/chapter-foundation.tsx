import { ArrowUpRight, BookOpenText } from "lucide-react"
import Link from "next/link"

import { Reveal } from "@/components/anomalyer/reveal"
import { SectionHeading } from "@/components/anomalyer/section-heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { chapters } from "@/lib/anomalyer-content"

export function ChapterFoundation() {
  return (
    <section className="relative py-16 sm:py-24">
      <SectionHeading
        kicker="Capítulos"
        title="La lectura ya tiene una ruta preparada."
      >
        El MVP deja un índice y una página dinámica para futuros capítulos,
        avances o notas de lectura.
      </SectionHeading>
      <Reveal className="mx-auto mt-10 w-full max-w-6xl px-5 sm:px-8">
        <div className="border border-foreground/12 bg-card/70">
          {chapters.map((chapter, index) => (
            <div key={chapter.slug}>
              <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
                <div>
                  <p className="text-xs text-primary">{chapter.status}</p>
                  <h3 className="mt-2 font-heading text-4xl leading-none">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {chapter.summary}
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-foreground/20 bg-transparent"
                >
                  <Link href={`/chapters/${chapter.slug}`}>
                    <BookOpenText data-icon="inline-start" />
                    Abrir base
                    <ArrowUpRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
              {index < chapters.length - 1 ? (
                <Separator className="bg-foreground/12" />
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
