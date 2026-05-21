import type { Metadata } from "next"
import Link from "next/link"

import { SiteFooter } from "@/components/anomalyer/site-footer"
import { SiteHeader } from "@/components/anomalyer/site-header"
import { Button } from "@/components/ui/button"
import { chapters } from "@/lib/anomalyer-content"

export const metadata: Metadata = {
  title: "Capítulos",
  description: "Índice base de capítulos y fragmentos de AnomalyeR.",
}

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="font-heading text-6xl leading-none sm:text-8xl">
          Capítulos
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Esta ruta queda como base editorial para publicar lectura web,
          adelantos y notas por capítulo cuando la obra entre en publicación.
        </p>
        <div className="mt-12 grid gap-4">
          {chapters.map((chapter) => (
            <article
              key={chapter.slug}
              className="grid gap-5 border border-foreground/12 bg-card/70 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7"
            >
              <div>
                <p className="text-xs text-primary">{chapter.status}</p>
                <h2 className="mt-2 font-heading text-4xl leading-none">
                  {chapter.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {chapter.summary}
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-foreground/20 bg-transparent"
              >
                <Link href={`/chapters/${chapter.slug}`}>Abrir</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
