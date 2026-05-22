import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SiteFooter } from "@/components/anomalyer/site-footer"
import { SiteHeader } from "@/components/anomalyer/site-header"
import { Badge } from "@/components/ui/badge"
import { chapters, getChapter } from "@/lib/anomalyer-content"

type ChapterPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }))
}

export async function generateMetadata({
  params,
}: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params
  const chapter = getChapter(slug)

  if (!chapter) {
    return {
      title: "Capitulo no encontrado",
    }
  }

  return {
    title: chapter.title,
    description: chapter.summary,
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params
  const chapter = getChapter(slug)

  if (!chapter) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <article className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <Badge
          variant="outline"
          className="rounded-none border-primary/25 bg-transparent text-primary"
        >
          {chapter.status}
        </Badge>
        <h1 className="mt-6 font-heading text-5xl leading-none sm:text-7xl">
          {chapter.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
          {chapter.summary}
        </p>
        <div className="mt-12 grid gap-4">
          {chapter.panels.map((panel, index) => (
            <section
              key={panel}
              className="border border-foreground/12 bg-card/70 p-6 sm:p-8"
            >
              <p className="text-xs text-primary">
                Panel {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-5 font-heading text-3xl leading-tight sm:text-4xl">
                {panel}
              </p>
            </section>
          ))}
        </div>
      </article>
      <SiteFooter />
    </main>
  )
}
