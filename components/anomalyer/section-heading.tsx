import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  kicker: string
  title: string
  children?: ReactNode
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase text-primary/80">
          {kicker}
        </p>
        <h2 className="font-heading text-4xl leading-none text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </div>
      {children ? (
        <div className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
          {children}
        </div>
      ) : null}
    </div>
  )
}
