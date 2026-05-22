"use client"

import { motion, useReducedMotion } from "motion/react"

import { Progress } from "@/components/ui/progress"

type ProgressMeterProps = {
  label: string
  value: number
  note: string
  delay?: number
}

export function ProgressMeter({
  label,
  value,
  note,
  delay = 0,
}: ProgressMeterProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="grid gap-3"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{note}</p>
        </div>
        <span className="font-heading text-3xl leading-none text-primary">
          {value}%
        </span>
      </div>
      <Progress
        value={value}
        aria-label={`${label}: ${value}%`}
        className="h-1.5 bg-foreground/10 [&_[data-slot=progress-indicator]]:bg-primary"
      />
    </motion.div>
  )
}
