import { ArrowUpRight, BookOpenText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { siteNav } from "@/lib/anomalyer-content"

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <Link
        href="/"
        className="font-heading text-2xl font-semibold leading-none text-foreground"
        aria-label="AnomalyeR inicio"
      >
        AnomalyeR
      </Link>
      <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
        {siteNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Button
        asChild
        size="lg"
        className="hidden rounded-none bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
      >
        <Link href="/chapters/fragmento-00">
          <BookOpenText data-icon="inline-start" />
          Leer ahora
          <ArrowUpRight data-icon="inline-end" />
        </Link>
      </Button>
    </header>
  )
}
