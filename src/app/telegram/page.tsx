import { TelegramForm } from "@/components/telegram-form";
import { Eye, TrendingUp, Radio, Zap } from "lucide-react";
import Image from "next/image";

const C = "w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8";

export default function TelegramPage() {
  return (
    <div className="telegram-theme dark min-h-screen" style={{ backgroundColor: "#0f1419", color: "#f5f3ff" }}>

      {/* Nav */}
      <nav className="border-b sticky top-0 z-50 backdrop-blur-sm" style={{ borderColor: "#334155", backgroundColor: "rgba(15,20,25,0.85)" }}>
        <div className={`${C} flex items-center justify-between py-4`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#f59e0b" }}>
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
            </div>
            <span className="text-lg font-semibold tracking-wide">MERIDIAN</span>
          </div>
          <div className="text-sm" style={{ color: "#cbd5e1" }}>15 spots remaining</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/telegram/meridian-hero-abstract-7kswKTfY4gaNFcbtqQJABj.webp"
            alt="Market structure visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className={`${C} relative z-10`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-sm tracking-widest uppercase" style={{ color: "#f59e0b" }}>
                  Institutional Market Intelligence
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>
                  Real-time Market Structure
                </h1>
                <p className="text-xl leading-relaxed" style={{ color: "#cbd5e1" }}>
                  The same institutional frameworks used by 30+ years of portfolio management. Now available to a select group of independent traders.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm" style={{ color: "#cbd5e1" }}>
                  The channel is active now. Members are already inside.
                </p>
                <div className="flex items-center gap-3" style={{ color: "#f59e0b" }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#f59e0b" }} />
                  <span className="text-sm font-semibold">Accepting new members</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="relative w-48 h-48 md:w-56 md:h-56 animate-fadeInUp pulse-glow">
                <Image
                  src="/telegram/meridian-scarcity-badge-2ndKAYu4cYgddMksfUjYnF.webp"
                  alt="15 spots remaining"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center space-y-3">
                <p className="text-sm" style={{ color: "#cbd5e1" }}>Membership: Limited to 25 members</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>$1,000</span>
                  <span style={{ color: "#cbd5e1" }}>/month</span>
                </div>
                <p className="text-xs" style={{ color: "#cbd5e1" }}>Rate locked for life of membership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "rgba(26,31,46,0.3)" }}>
        <div className={C}>
          <div className="mb-16 space-y-4">
            <p className="text-sm tracking-widest uppercase" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>What You Get</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Institutional Trading Framework</h2>
          </div>
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="institutional-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                    <Eye className="w-6 h-6" style={{ color: "#f59e0b" }} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Real-time Structure Mapping</h3>
                    <p style={{ color: "#cbd5e1" }}>
                      Trend identification, liquidity analysis, and positioning insights highlighting key market inflection points.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-48 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(245,158,11,.1), transparent)" }} />
            </div>
            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block h-48 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(245,158,11,.1), transparent)" }} />
              <div className="institutional-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                    <TrendingUp className="w-6 h-6" style={{ color: "#f59e0b" }} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Institutional Frameworks</h3>
                    <p style={{ color: "#cbd5e1" }}>
                      Momentum, divergence, and narrative shift analysis across BTC, FX, and futures markets. The same frameworks used in managing hundreds of millions in capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="institutional-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                    <Radio className="w-6 h-6" style={{ color: "#f59e0b" }} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Private Telegram Channel</h3>
                    <p style={{ color: "#cbd5e1" }}>
                      One-way broadcast of real-time market intelligence. No group chat noise. No constant posting. No recycled content. Just institutional-grade market context.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-48 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(245,158,11,.1), transparent)" }} />
            </div>
            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block h-48 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(245,158,11,.1), transparent)" }} />
              <div className="institutional-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                    <Zap className="w-6 h-6" style={{ color: "#f59e0b" }} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Learn to Read Markets</h3>
                    <p style={{ color: "#cbd5e1" }}>
                      This is not a signal service. You will learn how to map structure and read positioning in real time—building the skills that institutional traders use daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Mark */}
      <section className="py-20 md:py-32">
        <div className={C}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/telegram/mark-schaefer_9adecbac.jpg"
                alt="Mark Schaefer - Founder"
                width={320}
                height={320}
                className="rounded-lg shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm tracking-widest uppercase" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>About the Founder</p>
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Mark Schaefer</h2>
                <p className="text-xl" style={{ color: "#cbd5e1" }}>30+ years managing institutional capital across FX, futures, and crypto</p>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 pl-6 space-y-2" style={{ borderColor: "#f59e0b" }}>
                  <h3 className="text-4xl font-semibold" style={{ color: "#f59e0b" }}>Barclays</h3>
                  <p style={{ color: "#cbd5e1" }}>Head British Pound Trader / Market Maker</p>
                </div>
                <div className="border-l-2 pl-6 space-y-2" style={{ borderColor: "#f59e0b" }}>
                  <h3 className="text-4xl font-semibold" style={{ color: "#f59e0b" }}>Eagle Trading Systems</h3>
                  <p style={{ color: "#cbd5e1" }}>PM, Systematic FX &amp; Futures (managed hundreds of millions)</p>
                </div>
                <div className="border-l-2 pl-6 space-y-2" style={{ borderColor: "#f59e0b" }}>
                  <h3 className="text-4xl font-semibold" style={{ color: "#f59e0b" }}>Centiva Capital</h3>
                  <p style={{ color: "#cbd5e1" }}>PM, Systematic Currencies</p>
                </div>
                <div className="rounded-lg p-6 border" style={{ backgroundColor: "#1a1f2e", borderColor: "#334155" }}>
                  <p className="text-sm mb-3" style={{ color: "#cbd5e1" }}>
                    Built and managed a currency-only strategy that raised over{" "}
                    <span className="font-semibold" style={{ color: "#f59e0b" }}>$300M</span>{" "}
                    during the financial crisis and delivered:
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>+25%</p>
                      <p className="text-xs" style={{ color: "#cbd5e1" }}>2008</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>+23%</p>
                      <p className="text-xs" style={{ color: "#cbd5e1" }}>2009</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Access */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "rgba(26,31,46,0.5)" }}>
        <div className={C}>
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-sm tracking-widest uppercase" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>Request Access</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Join Meridian Compass</h2>
              <p className="text-lg" style={{ color: "#cbd5e1" }}>
                If this aligns with how you approach markets and you&apos;re looking for deeper real-time context, request access below. Access is selective.
              </p>
            </div>
            <TelegramForm turnstileSiteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: "rgba(51,65,85,.3)", backgroundColor: "rgba(15,20,25,.5)" }}>
        <div className={C}>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#f59e0b" }}>
                <div className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
              </div>
              <span className="text-sm font-semibold tracking-wide">MERIDIAN</span>
            </div>
            <div className="space-y-4 text-xs" style={{ color: "#cbd5e1" }}>
              <p>Educational and informational purposes only. Not investment advice. Trading involves risk. Past performance is not indicative of future results.</p>
              <p>© 2026 Meridian Compass. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
