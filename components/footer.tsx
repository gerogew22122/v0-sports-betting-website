"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-950 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Sen.Bets" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-display font-bold">Sen.Bets</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Australia's premier sports betting community. Join 5,000+ verified members and start winning with our
              expert tips and proven strategies.
            </p>

            {/* Instagram Callout */}
            <a
              href="https://www.instagram.com/sen.bets/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-4 hover:border-pink-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F3dvlSmaqGJQPSLRzll9iTAzrTCLi4.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Follow us on Instagram</p>
                  <p className="text-xs text-pink-400">@sen.bets</p>
                </div>
              </div>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sen.bets/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F3dvlSmaqGJQPSLRzll9iTAzrTCLi4.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://discord.gg/sTbrp9GTKv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JLcbsCj03AdceurU668TRh23LeLo8J.png"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="https://discord.gg/sTbrp9GTKv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("performance")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Performance
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:support@sen.bets"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  support@sen.bets
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-muted-foreground">Australia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Sen.Bets. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Responsible Gambling
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
