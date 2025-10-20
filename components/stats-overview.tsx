import { Card, CardContent } from "@/components/ui/card"

export function StatsOverview() {
  const stats = [
    {
      label: "Total Profit",
      value: "+$487K",
      description: "Across all sports",
      icon: "💰",
    },
    {
      label: "Win Rate",
      value: "68.4%",
      description: "Last 12 months",
      icon: "🎯",
    },
    {
      label: "ROI",
      value: "77%",
      description: "Horse racing average",
      icon: "📈",
    },
    {
      label: "Active Members",
      value: "5,000+",
      description: "Winning together",
      icon: "👥",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-balance">
            The Numbers {"Don't"} Lie
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real bets. Track record verified and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-display font-semibold mb-1 text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
