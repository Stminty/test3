import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Calculator, Coins, Ruler, Scale } from "lucide-react"

export default function IndexPage() {
  const calculatorCategories = [
    {
      title: "Math Calculators",
      description: "Basic arithmetic, percentage, fraction conversions, and scientific calculations",
      icon: Calculator,
      href: "/math"
    },
    {
      title: "Financial Tools",
      description: "Mortgage, loan payments, interest rates, and investment calculations",
      icon: Coins,
      href: "/finance"
    },
    {
      title: "Conversion Tools",
      description: "Unit conversions for length, weight, temperature, and more",
      icon: Ruler,
      href: "/conversion"
    },
    {
      title: "Physics & Engineering",
      description: "Force, energy, electrical, and mechanical engineering calculations",
      icon: Scale,
      href: "/physics"
    }
  ]

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Free Online Calculator Tools <br className="hidden sm:inline" />
          For Your Daily Needs
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Simple, accurate, and easy-to-use calculators for all your mathematical, financial, and scientific calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {calculatorCategories.map((category) => {
          const Icon = category.icon
          return (
            <Link href={category.href} key={category.title} className="no-underline">
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="mt-2">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="flex gap-4">
        <Link
          href="/popular"
          className={buttonVariants()}
        >
          Popular Calculators
        </Link>
        <Link
          href="/all"
          className={buttonVariants({ variant: "outline" })}
        >
          View All Tools
        </Link>
      </div>
    </section>
  )
}