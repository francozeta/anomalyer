import Link from "next/link"

import { VisitorCounter } from "@/components/anomalyer/visitor-counter"
import { siteNav } from "@/lib/anomalyer-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-2xl text-foreground">AnomalyeR</p>
        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-5 md:justify-end">
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
          <VisitorCounter />
        </div>
      </div>
    </footer>
  )
}
