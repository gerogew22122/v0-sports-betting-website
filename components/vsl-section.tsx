import { Button } from "@/components/ui/button"

export function VSLSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-balance">
              See How We Turn Data Into Winning Bets
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our proven methodology in action and discover why thousands of punters trust Sen.Bets
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border-2 border-primary/30 shadow-2xl shadow-primary/20 mb-8 group hover:border-primary/50 transition-all duration-300">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center border-2 border-secondary group-hover:scale-110 group-hover:bg-secondary/30 transition-all duration-300 shadow-lg shadow-secondary/20">
                  <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground font-medium">Video Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-200 font-display font-bold shadow-2xl shadow-secondary/30"
            >
              Start Winning Today
            </Button>
            <p className="mt-6 text-sm text-muted-foreground font-medium">
              Join 5,000+ members already profiting from our tips
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
