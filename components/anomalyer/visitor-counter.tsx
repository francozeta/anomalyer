"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

const visitorKey = "anomalyer.visitor-number"

function createVisitorNumber() {
  const range = 900

  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    const values = new Uint32Array(1)
    crypto.getRandomValues(values)
    return 100 + (values[0] % range)
  }

  return 100 + Math.floor(Math.random() * range)
}

function formatVisitorNumber(value: number) {
  return value.toLocaleString("es-PE", {
    minimumIntegerDigits: 3,
    useGrouping: false,
  })
}

export function VisitorCounter({ className }: { className?: string }) {
  const visitorNumberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const storedValue = window.localStorage.getItem(visitorKey)
    const nextValue = storedValue ? Number(storedValue) : createVisitorNumber()

    window.localStorage.setItem(visitorKey, String(nextValue))
    if (visitorNumberRef.current) {
      visitorNumberRef.current.textContent = formatVisitorNumber(nextValue)
    }
  }, [])

  return (
    <p
      data-visitor-counter
      className={cn(
        "inline-flex items-center gap-2 border border-primary/18 bg-primary/5 px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-primary/90",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-primary shadow-[0_0_14px_oklch(85%_0.14_80/0.45)]"
      />
      Eres visitante n.º <span ref={visitorNumberRef}>---</span>
    </p>
  )
}
