import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const features = ["30+ Years Experience", "ISO 9001:2015 Certified", "Pan-India Delivery"]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm text-muted-foreground">
              <span className="mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent" />
              Trusted by 500+ businesses
            </div>

            <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Premium Packaging Solutions for <span className="text-accent">Modern Industry</span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Leading manufacturer of blow-moulded plastic containers, jars, and bottles. Delivering quality packaging
              solutions that protect your products and elevate your brand.
            </p>

            {/* Feature badges - stack on mobile */}
            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center gap-2 text-sm text-foreground lg:justify-start"
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs - full width on mobile */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted sm:rounded-2xl lg:aspect-[4/5]">
              <img
                src="/industrial-plastic-packaging-manufacturing-facilit.jpg"
                alt="Modern plastic packaging manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Stats overlay - repositioned for mobile */}
            <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-border bg-background p-4 shadow-lg sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto sm:rounded-xl sm:p-6">
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 sm:h-12 sm:w-12">
                  <span className="font-serif text-lg font-bold text-accent sm:text-xl">30+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of Excellence</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">Industry Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
