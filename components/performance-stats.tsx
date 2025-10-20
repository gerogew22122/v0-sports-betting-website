import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Trophy, Target, Zap } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    label: "AFL Performance",
    value: "+103.29U",
    description: "Dominant season performance",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    label: "Horse Racing",
    value: "+33.91U",
    description: "77% ROI • 7 straight profitable weeks",
    color: "text-accent",
  },
  {
    icon: Target,
    label: "NBA Total",
    value: "+204.7U",
    description: "Last season performance",
    color: "text-primary",
  },
  {
    icon: Zap,
    label: "NRL Performance",
    value: "+25.8U",
    description: "Consistent profitability",
    color: "text-primary",
  },
]

export function PerformanceStats() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Track Record</h2>
          <p className="text-muted-foreground text-lg">Real results from real bets. Transparency is our priority.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold mt-4">{stat.value}</CardTitle>
                  <CardDescription className="text-base">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
