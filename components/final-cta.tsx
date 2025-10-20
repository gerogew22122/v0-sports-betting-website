import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-primary/30 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Ready to Start Winning?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 5,000+ members who are already profiting from our expert tips. {"Don't"} miss out on another
                winning bet.
              </p>

              {/* Benefits list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-semibold mb-1">Daily Tips</h3>
                  <p className="text-sm text-muted-foreground">Across all major sports</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-semibold mb-1">Expert Analysis</h3>
                  <p className="text-sm text-muted-foreground">Detailed reasoning for each tip</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-semibold mb-1">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">Transparent track record</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-all duration-300"
              >
                Join Sen.Bets Now
              </Button>

              <p className="mt-6 text-sm text-muted-foreground">
                30-day money-back guarantee • Cancel anytime • Instant access
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
