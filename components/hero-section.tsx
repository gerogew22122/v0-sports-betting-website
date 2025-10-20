"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-400" />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8 relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 opacity-0 animate-fade-in">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse" />
            <Image
              src="/logo.png"
              alt="Sen.Bets Logo"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(100,180,255,0.6)] relative"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6 text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent opacity-0 animate-fade-in-up animation-delay-200 px-4">
            Bet Smarter, Win Bigger
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-3 md:mb-4 max-w-2xl text-balance font-medium opacity-0 animate-fade-in-up animation-delay-400 px-4">
            {"Join Australia's most profitable tipster service"}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl opacity-0 animate-fade-in-up animation-delay-600 px-4">
            Proven track record across AFL, NBA, NRL, Horse Racing & more
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-in-up animation-delay-800 w-full max-w-md px-4">
            <Button
              size="lg"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-200 font-display font-bold shadow-2xl shadow-secondary/30 w-full sm:w-auto"
            >
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("performance")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 border-primary/50 hover:bg-primary/10 bg-transparent hover:border-primary transition-all duration-200 font-display font-semibold w-full sm:w-auto"
            >
              View Performance
            </Button>
          </div>

          <a
            href="https://discord.gg/sTbrp9GTKv"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-3 px-6 py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5 border border-border/50 hover:border-primary/50 opacity-0 animate-fade-in-up animation-delay-1000"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JLcbsCj03AdceurU668TRh23LeLo8J.png"
              alt="Discord"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span>Join Free Tips Discord</span>
          </a>

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-0 animate-fade-in animation-delay-800 px-4">
            <div className="flex items-center justify-center gap-2 opacity-0 animate-slide-in-left animation-delay-800">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-foreground/80 font-medium">{"77% ROI on Horses"}</span>
            </div>
            <div className="flex items-center justify-center gap-2 opacity-0 animate-fade-in animation-delay-800">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse animation-delay-200" />
              <span className="text-foreground/80 font-medium">{"+204.7U NBA Season"}</span>
            </div>
            <div className="flex items-center justify-center gap-2 opacity-0 animate-slide-in-right animation-delay-800">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse animation-delay-400" />
              <span className="text-foreground/80 font-medium">{"+103.29U AFL"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
