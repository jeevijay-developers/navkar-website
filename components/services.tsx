import { Package, Layers, Truck, Sparkles, Settings, Shield } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Blow Moulding",
    description:
      "State-of-the-art blow moulding technology for producing high-quality plastic containers in various sizes and shapes.",
  },
  {
    icon: Layers,
    title: "Custom Designs",
    description: "Tailored packaging solutions designed to meet your specific product requirements and brand identity.",
  },
  {
    icon: Settings,
    title: "Mould Development",
    description: "In-house mould design and development ensuring precision, durability, and cost-effective production.",
  },
  {
    icon: Sparkles,
    title: "Finishing Services",
    description:
      "Comprehensive finishing options including labeling, printing, and surface treatments for premium presentation.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Reliable logistics network ensuring timely delivery across India with proper packaging and handling.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes at every stage ensuring products meet international standards.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-muted/30 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What We Offer</p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Comprehensive Packaging Services
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            From concept to delivery, we provide end-to-end packaging solutions that drive your business forward.
          </p>
        </div>

        {/* Services grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-lg border border-border bg-background p-5 transition-all hover:border-accent/50 hover:shadow-lg sm:rounded-xl sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground sm:h-12 sm:w-12">
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-3 font-serif text-base font-semibold text-foreground sm:mt-4 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
