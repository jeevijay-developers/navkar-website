const milestones = [
  {
    year: "1992",
    title: "Foundation",
    description: "Shri Navkar Blowpack was established with a vision to revolutionize plastic packaging in India.",
  },
  {
    year: "2000",
    title: "Expansion",
    description: "Expanded manufacturing capacity with new machinery and moved to a larger facility.",
  },
  {
    year: "2008",
    title: "ISO Certification",
    description: "Achieved ISO 9001 certification, establishing quality management standards.",
  },
  {
    year: "2015",
    title: "Technology Upgrade",
    description: "Invested in automated blow moulding machines for increased efficiency and precision.",
  },
  {
    year: "2020",
    title: "Sustainability Initiative",
    description: "Launched eco-friendly packaging line using recycled and recyclable materials.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Implemented digital systems for order management and quality tracking.",
  },
]

export function Timeline() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Journey</p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            30+ Years of Excellence
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            A legacy built on quality, innovation, and customer trust.
          </p>
        </div>

        {/* Timeline - Desktop horizontal */}
        <div className="mt-12 hidden lg:mt-16 lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-border" />

            {/* Milestones */}
            <div className="relative flex justify-between">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex w-40 flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-accent text-sm font-bold text-accent-foreground">
                    {milestone.year.slice(-2)}
                  </div>
                  <p className="mt-4 font-serif text-sm font-semibold text-foreground">{milestone.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{milestone.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Descriptions */}
          <div className="mt-8 grid grid-cols-6 gap-4">
            {milestones.map((milestone) => (
              <p key={milestone.year} className="text-center text-sm text-muted-foreground">
                {milestone.description}
              </p>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet vertical */}
        <div className="mt-8 sm:mt-12 lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-border sm:left-6" />

            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative flex gap-4 sm:gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-background bg-accent text-xs font-bold text-accent-foreground sm:h-12 sm:w-12 sm:text-sm">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs text-muted-foreground sm:text-sm">{milestone.year}</p>
                    <h3 className="font-serif text-base font-semibold text-foreground sm:text-lg">{milestone.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
