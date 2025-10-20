import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const benefits = [
  "Daily expert tips across 10+ sports",
  "Transparent unit tracking & ROI",
  "Proven 77% ROI on horse racing",
  "AFL, NBA, NRL specialist coverage",
  "Real-time notifications",
  "Money-back guarantee",
]

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-background to-background" />

      <div className="container relative mx-auto px-4">
        <Card className="border-primary/50 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Winning?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join hundreds of successful bettors who trust Sen.Bets for premium sports betting tips.
                </p>

                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/50"
                  >
                    Join Now - Limited Spots
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="bg-accent/10 border-accent/30">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-accent mb-2">+103.29U</div>
                    <div className="text-sm text-muted-foreground">AFL Total Profit</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/10 border-primary/30">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">+204.7U</div>
                    <div className="text-sm text-muted-foreground">NBA Last Season</div>
                  </CardContent>
                </Card>
                <Card className="bg-accent/10 border-accent/30">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-accent mb-2">77% ROI</div>
                    <div className="text-sm text-muted-foreground">Horse Racing Success</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Sen.Bets. All rights reserved. Gamble responsibly.</p>
        </div>
      </div>
    </section>
  )
}
