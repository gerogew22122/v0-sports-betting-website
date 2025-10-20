"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <Image
                src="/logo.png"
                alt="Sen.Bets"
                width={48}
                height={48}
                className="w-10 h-10 md:w-14 md:h-14 relative"
              />
            </div>
            <span className="text-lg md:text-2xl font-display font-bold tracking-tight">Sen.Bets</span>
          </div>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            <button
              onClick={() => scrollToSection("performance")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Performance
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/sen.bets/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F3dvlSmaqGJQPSLRzll9iTAzrTCLi4.png"
                alt="Instagram"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </a>
            <Button
              onClick={() => scrollToSection("pricing")}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-200 font-semibold shadow-lg shadow-secondary/20"
            >
              Join Now
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/sen.bets/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F3dvlSmaqGJQPSLRzll9iTAzrTCLi4.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>Follow on Instagram</span>
              </a>
              <button
                onClick={() => scrollToSection("performance")}
                className="text-left px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Performance
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Pricing
              </button>
              <Button
                onClick={() => scrollToSection("pricing")}
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg shadow-secondary/20"
              >
                Join Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
