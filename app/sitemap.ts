import type { MetadataRoute } from "next"

import { chapters } from "@/lib/anomalyer-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anomalyer.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/chapters`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...chapters.map((chapter) => ({
      url: `${siteUrl}/chapters/${chapter.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
