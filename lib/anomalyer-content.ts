export const siteNav = [
  { label: "Obra", href: "/#obra" },
  { label: "Noticias", href: "/#noticias" },
  { label: "Protagonistas", href: "/#protagonistas" },
  { label: "Capítulos", href: "/chapters" },
]

export const progressItems = [
  {
    label: "Guion del arco inicial",
    value: 72,
    note: "Estructura cerrada para el primer tramo.",
  },
  {
    label: "Storyboards del capítulo 01",
    value: 64,
    note: "Ritmo visual y escenas clave en revisión.",
  },
  {
    label: "Tinta y acabado",
    value: 38,
    note: "Búsqueda de contraste, manchas y textura.",
  },
  {
    label: "Publicación web",
    value: 18,
    note: "Base técnica lista para crecer por capítulos.",
  },
]

export const newsItems = [
  {
    date: "Mayo 2026",
    title: "Bitácora del autor: la ciudad bajo vidrio",
    summary:
      "Una nota breve sobre el tono visual de la serie, sus silencios y la manera en que la ciudad respira dentro de cada página.",
    category: "Diario",
  },
  {
    date: "Mayo 2026",
    title: "Primer bloque de personajes definido",
    summary:
      "La etapa de protagonistas entra en limpieza: siluetas, contradicciones internas y relaciones principales del arco inicial.",
    category: "Producción",
  },
  {
    date: "Junio 2026",
    title: "La web queda preparada para capítulos",
    summary:
      "El MVP abre una ruta editorial para publicar adelantos, notas de capítulo y futuras páginas de lectura.",
    category: "Web",
  },
]

export const protagonists = [
  {
    name: "Nira Vey",
    role: "La lectora de grietas",
    summary:
      "Percibe anomalías como recuerdos ajenos. Su don no revela la verdad, solo el costo de tocarla.",
    signal: "Pulso dorado",
  },
  {
    name: "Salek Or",
    role: "El restaurador de máscaras",
    summary:
      "Repara rostros ceremoniales para gente que ya no puede dormir con el suyo.",
    signal: "Óxido verde",
  },
  {
    name: "Mora Aster",
    role: "La cronista del silencio",
    summary:
      "Registra desapariciones que nadie denunció. Sus archivos siempre llegan antes que los hechos.",
    signal: "Tinta roja",
  },
]

export const chapters = [
  {
    slug: "fragmento-00",
    title: "Fragmento 00: El ruido bajo la piel",
    status: "Base del MVP",
    readTime: "6 min",
    summary:
      "Un prólogo breve para validar la experiencia de lectura web antes de publicar capítulos completos.",
    panels: [
      "La ciudad amaneció sin campanas. Nadie preguntó por qué.",
      "Nira encontró una grieta en el vidrio, pero el vidrio no estaba roto.",
      "Del otro lado, alguien respiraba con su misma voz.",
    ],
  },
]

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug)
}
