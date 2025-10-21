const testimonials = [
  {
    name: "Michael Chen",
    location: "Sydney, NSW",
    initials: "MC",
    text: "Been following Sen.Bets for 6 months now and I'm up over $15k. The AFL tips are absolutely spot on. Best investment I've made.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    location: "Melbourne, VIC",
    initials: "SW",
    text: "I was skeptical at first, but the track record speaks for itself. The horse racing tips have completely changed my betting game.",
    rating: 5,
  },
  {
    name: "James Thompson",
    location: "Brisbane, QLD",
    initials: "JT",
    text: "The NBA tips are incredible. Up 180 units this season alone. The analysis and reasoning behind each pick is top-notch.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    location: "Perth, WA",
    initials: "ER",
    text: "Finally found a tipster service that's transparent and actually profitable. The community is great too. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Kim",
    location: "Adelaide, SA",
    initials: "DK",
    text: "The consistency is what impressed me most. Month after month of profits. Sen.Bets has earned my trust and my subscription.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    location: "Gold Coast, QLD",
    initials: "LA",
    text: "Best decision I made was joining Sen.Bets. The tips are well-researched and the results are real. Worth every cent.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Real Results from Real Members
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            See what our community is saying about their success with Sen.Bets Premium
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Testimonial 1 */}
          <div className="group animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-slate-900/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20">
              <img
                src="/images/design-mode/image.png"
                alt="Member testimonial about growing unit size from $25 to $200"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-slate-900/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20">
              <img
                src="/images/design-mode/image.png"
                alt="Member testimonial showing profit trend graph from April to October"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-slate-900/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20">
              <img
                src="/images/design-mode/image.png"
                alt="Member testimonial about growing bankroll from $300 to $3,600 in 5 months"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
