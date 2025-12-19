import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "PET Bottles",
    description: "Crystal clear PET bottles for beverages, oils, and liquid products.",
    sizes: "100ml - 5L",
    image: "/clear-pet-plastic-bottles-various-sizes-packaging.jpg",
  },
  {
    name: "HDPE Containers",
    description: "Durable HDPE containers ideal for chemicals, lubricants, and industrial use.",
    sizes: "500ml - 20L",
    image: "/white-hdpe-plastic-containers-industrial-packaging.jpg",
  },
  {
    name: "Jars & Wide-Mouth",
    description: "Wide-mouth jars perfect for food products, cosmetics, and pharmaceuticals.",
    sizes: "50ml - 2L",
    image: "/plastic-jars-wide-mouth-containers-food-grade.jpg",
  },
  {
    name: "Custom Solutions",
    description: "Bespoke packaging designed to your exact specifications and branding needs.",
    sizes: "As per requirement",
    image: "/custom-plastic-packaging-solutions-various-shapes.jpg",
  },
]

export function Products() {
  return (
    <section id="products" className="py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - stack on mobile */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Products</p>
            <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Quality Packaging Range
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
              Explore our comprehensive range of blow-moulded plastic packaging solutions.
            </p>
          </div>
          <Button variant="outline" className="hidden shrink-0 bg-transparent sm:inline-flex">
            View Full Catalog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products grid - 2 cols on mobile, 2 on tablet, 4 on desktop */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-accent/50 hover:shadow-lg sm:rounded-xl"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted sm:aspect-[4/3]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="font-serif text-sm font-semibold text-foreground sm:text-lg">{product.name}</h3>
                <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{product.description}</p>
                <p className="mt-1 text-xs font-medium text-accent sm:mt-3">Sizes: {product.sizes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 sm:hidden">
          <Button variant="outline" className="w-full bg-transparent">
            View Full Catalog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
