"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent px-4">
            Join Sen.Bets Today
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            Choose your plan and start winning with our proven betting strategies
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Weekly Plan */}
          <div className="group relative animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300">
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">Weekly Access Free Trial</h3>
                <p className="text-slate-400 text-sm md:text-base">Perfect for testing the waters</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl md:text-5xl font-bold text-cyan-400">$0.00</span>
                  <span className="text-slate-400 text-sm md:text-base">/week</span>
                </div>
                <p className="text-cyan-400 text-xs md:text-sm mt-2 font-semibold">3 days free</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">
                    WEEKLY Access to Premium Sports & Racing Bets 📈
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">
                    24/7 1-on-1 assistance with bankroll, bonus bet conversions, personal bets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">Arbitrages / EV's / Bonus Bet Conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">
                    Groupchat Access with HUNDREDS of other members
                  </span>
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-5 md:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm md:text-base"
              >
                <a
                  href="https://whop.com/senbets-premium/sen-premium-access-weekly/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Weekly
                </a>
              </Button>
            </div>
          </div>

          {/* Monthly Plan - Featured */}
          <div className="group relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Popular badge */}
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                MOST POPULAR
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-amber-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-amber-500/50 rounded-2xl p-6 md:p-8 hover:border-amber-400/70 transition-all duration-300">
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">Monthly Access Free Trial</h3>
                <p className="text-slate-400 text-sm md:text-base">Best value for serious punters</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl md:text-5xl font-bold text-amber-400">$0.00</span>
                  <span className="text-slate-400 text-sm md:text-base">/month</span>
                </div>
                <p className="text-amber-400 text-xs md:text-sm mt-2 font-semibold">3 days free</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">
                    MONTHLY Access to Premium Sports & Racing Bets 📈
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">
                    24/7 1-on-1 assistance with bankroll, bonus bet conversions, personal bets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">Arbitrages / EV's / Bonus Bet Conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">
                    Access to groupchats with HUNDREDS of people
                  </span>
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-bold py-5 md:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 text-sm md:text-base"
              >
                <a
                  href="https://whop.com/senbets-premium/sen-premium-monthly/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Monthly
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 md:mt-12 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-slate-400 text-xs md:text-sm px-4">
            🔒 Secure payment via Whop • Cancel anytime • Join 450+ winning members
          </p>
        </div>
      </div>
    </section>
  )
}
