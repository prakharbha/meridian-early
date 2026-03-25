import { TelegramForm } from "@/components/telegram-form";
import { Eye, TrendingUp, Radio, Zap, Target, BookOpen, Clock, Activity, Flag, Calendar } from "lucide-react";
import Image from "next/image";
import { SchedulingModal } from "@/components/scheduling-modal";

const C = "w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8";

export default function NewLandingPage() {
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
                  A seat at the desk.
                </h1>
                <p className="text-xl leading-relaxed" style={{ color: "#cbd5e1" }}>
                  The closest thing to having a 30-year institutional PM beside you — in real time, as markets move.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm" style={{ color: "#cbd5e1" }}>
                  The channel is active now. Founding members are already inside.
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
                <p className="text-sm" style={{ color: "#cbd5e1" }}>Founding Allocation: Limited to 25 members</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>$600</span>
                  <span style={{ color: "#cbd5e1" }}>/month</span>
                </div>
                <p className="text-xs" style={{ color: "#cbd5e1" }}>Rate locked for life of membership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Meridian Compass Is */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "rgba(26,31,46,0.3)" }}>
        <div className={C}>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>What Meridian Compass Is</h2>
            <div className="space-y-6 text-xl leading-relaxed" style={{ color: "#cbd5e1" }}>
              <p>There&apos;s no shortage of market information. The problem is none of it comes with a filter.</p>
              <p className="font-semibold text-2xl" style={{ color: "#f59e0b" }}>Meridian Compass is that filter.</p>
              <p>Thirty years of institutional experience distilled into one thing — helping you understand what moves markets, what&apos;s noise, and how to position yourself before the move, not after.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32">
        <div className={C}>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Who This Is For</h2>
            <div className="space-y-6 text-xl leading-relaxed" style={{ color: "#cbd5e1" }}>
              <p>Professional traders, portfolio managers, family offices, small funds, corporate treasurers, and serious independent traders who already understand the basics and are ready to think institutionally.</p>
              <p className="font-semibold" style={{ color: "#f5f3ff" }}>This is not a beginner service. But if you&apos;re serious about developing a real edge — you&apos;ll fit in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Develop */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "rgba(26,31,46,0.5)" }}>
        <div className={C}>
          <div className="mb-16 space-y-4">
            <p className="text-sm tracking-widest uppercase" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>Core Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>What You&apos;ll Develop</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* 1 */}
            <div className="institutional-card h-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                  <Target className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>A framework for processing information</h3>
                  <p style={{ color: "#cbd5e1" }}>
                    Not just reacting to headlines — understanding what a data deviation actually means for price. How much of a miss matters. What the market has already priced in. When to act and when to stand aside.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="institutional-card h-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                  <Eye className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Institutional context most traders never see</h3>
                  <p style={{ color: "#cbd5e1" }}>
                    When the Iran conflict started, JPY got sold — the opposite of typical risk-off behavior. Why? Because the USD/oil correlation took precedence over safe haven flows. Most traders got caught the wrong way. Understanding why that happens — and recognizing it in real time — is what separates institutional thinking from retail thinking.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="institutional-card h-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                  <Clock className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Time of day awareness</h3>
                  <p style={{ color: "#cbd5e1" }}>
                    10-11am London is when European day traders square up. If the market has been trending into that window — that&apos;s where retracements happen. Knowing that isn&apos;t a signal. It&apos;s structural awareness that most traders never develop.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="institutional-card h-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                  <Activity className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Central bank risk</h3>
                  <div className="space-y-2" style={{ color: "#cbd5e1" }}>
                    <span className="block font-semibold" style={{ color: "#f5f3ff" }}>— the lesson most traders never learn</span>
                    <p>When central bank intervention risk is real you don&apos;t trade against it. That&apos;s the obvious lesson.</p>
                    <p>But here&apos;s what most educators never tell you — sometimes you don&apos;t want to trade with them either.</p>
                    <p>The SNB pulling the EUR/CHF peg wiped accounts on both sides in seconds. The BOJ is the same dynamic right now. The institutional answer isn&apos;t which side to be on — it&apos;s recognizing that some setups aren&apos;t worth the risk and having the discipline to stand aside.</p>
                    <p className="italic pt-2">Knowing when NOT to trade is one of the most valuable skills in this business. It&apos;s also one of the least taught.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="institutional-card h-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                  <Flag className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>A system for pre-defining everything</h3>
                  <p style={{ color: "#cbd5e1" }}>
                    Levels, stops, targets, trails, risk — decided before the trade, not during it. Human nature will push you toward emotional decisions at exactly the wrong moment. The goal is to make you certain before you&apos;re in — so you&apos;re never a deer in the headlights when a black swan hits.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="institutional-card h-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(245,158,11,.2)" }}>
                  <TrendingUp className="w-6 h-6" style={{ color: "#f59e0b" }} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>How to read geopolitical risk</h3>
                  <p style={{ color: "#cbd5e1" }}>
                    Not just what&apos;s happening — but what it means for correlated markets. Iran, oil, USD, JPY, the Strait of Hormuz. These aren&apos;t isolated events. Everything connects. You&apos;ll learn to see the connections before they show up in price.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* What Most Trading Education Gets Wrong */}
      <section className="py-20 md:py-32">
        <div className={C}>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>What Most Trading Education Gets Wrong</h2>
            <div className="space-y-6 text-xl leading-relaxed" style={{ color: "#cbd5e1" }}>
              <p>Most trading courses and mentorship programs are built around patterns and setups. Entry here, stop there, target there.</p>
              <p>What they rarely teach — because most educators have never lived it — is how to think through different market environments. Risk-on, risk-off, black swan events, central bank cycles, geopolitical shocks. The setups that work in one environment get you killed in another.</p>
              <p>Managing real capital through the 2008 financial crisis, the SNB peg removal, the COVID crash, and now a Middle East conflict that&apos;s repricing energy markets globally — that&apos;s a different education entirely.</p>
              <div className="p-6 rounded-lg bg-slate-900/50 border-l-4 border-amber-500 mt-8">
                <p className="font-bold text-2xl" style={{ color: "#f5f3ff", fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>
                  This is not a course. This is not a signal service. This is a seat at the desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "rgba(26,31,46,0.3)" }}>
        <div className={C}>
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>What You Get</h2>
            <div className="space-y-6 text-xl leading-relaxed" style={{ color: "#cbd5e1" }}>
              <p><strong className="text-2xl" style={{ color: "#f5f3ff" }}>Private Telegram broadcast</strong> — real-time market structure, key levels, momentum shifts, and geopolitical context across FX, crypto, and futures. Delivered as markets move, not after.</p>
              <p>No group chat noise. No constant posting. No recycled content. No signals.</p>
              <p className="font-semibold text-2xl" style={{ color: "#f59e0b" }}>Just institutional grade market intelligence — daily.</p>
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
                  <h3 className="text-2xl font-semibold" style={{ color: "#f59e0b" }}>Barclays</h3>
                  <p style={{ color: "#cbd5e1" }}>Head British Pound Trader / Market Maker</p>
                </div>
                <div className="border-l-2 pl-6 space-y-2" style={{ borderColor: "#f59e0b" }}>
                  <h3 className="text-2xl font-semibold" style={{ color: "#f59e0b" }}>Eagle Trading Systems</h3>
                  <p style={{ color: "#cbd5e1" }}>PM, Systematic FX &amp; Futures (managed hundreds of millions)</p>
                </div>
                <div className="border-l-2 pl-6 space-y-2" style={{ borderColor: "#f59e0b" }}>
                  <h3 className="text-2xl font-semibold" style={{ color: "#f59e0b" }}>Centiva Capital</h3>
                  <p style={{ color: "#cbd5e1" }}>PM, Systematic Currencies</p>
                </div>
                <div className="rounded-lg p-6 border" style={{ backgroundColor: "#1a1f2e", borderColor: "#334155" }}>
                  <p className="text-sm mb-3" style={{ color: "#cbd5e1" }}>
                    Built and managed a currency-only strategy that raised over{" "}
                    <span className="font-semibold" style={{ color: "#f59e0b" }}>$300M</span>{" "}
                    during the financial crisis and delivered:
                  </p>
                  <div className="flex gap-8 mb-4">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>+25%</p>
                      <p className="text-xs" style={{ color: "#cbd5e1" }}>2008</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>+23%</p>
                      <p className="text-xs" style={{ color: "#cbd5e1" }}>2009</p>
                    </div>
                  </div>
                  <p className="text-sm pt-4 border-t border-slate-700" style={{ color: "#cbd5e1" }}>
                    Currently managing capital through systematic currency strategies and providing real-time market intelligence to hedge funds, refineries, and institutional energy clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "rgba(26,31,46,0.5)" }}>
        <div className={C}>
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Membership</h2>
            <p className="text-lg" style={{ color: "#cbd5e1" }}>Access is selective.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founding */}
            <div className="institutional-card border border-amber-500 rounded-xl p-8 bg-amber-900/10 hover:bg-amber-900/20 transition-colors shadow-lg shadow-amber-900/20">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-amber-500/30 pb-4">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Founding Allocation</h3>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: "rgba(245,158,11,.2)", color: "#f59e0b" }}>Active</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>$600</span>
                  <span className="text-lg" style={{ color: "#cbd5e1" }}>/month</span>
                </div>
                <ul className="space-y-4 text-base" style={{ color: "#cbd5e1" }}>
                  <li className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Locked permanently
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    25 spots total
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Founding allocation still open
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Standard */}
            <div className="institutional-card border border-slate-700 rounded-xl p-8 bg-slate-800/20 opacity-90 transition-colors hover:bg-slate-800/30">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif", color: "#94a3b8" }}>Standard Rate</h3>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-400">Future</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-400" style={{ fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>$1,000</span>
                  <span className="text-lg text-slate-500">/month</span>
                </div>
                <ul className="space-y-4 text-base text-slate-400">
                  <li className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                    Standard pricing after founding allocation fills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Access */}
      <section className="py-20 md:py-32">
        <div className={C}>
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4 border-b pb-12" style={{ borderColor: "rgba(51,65,85,.5)" }}>
              <p className="text-sm tracking-widest uppercase" style={{ color: "#f59e0b", fontFamily: "var(--font-ibm-plex-mono, 'IBM Plex Mono'), monospace" }}>Request Access</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair, 'Playfair Display'), serif" }}>Join the Founding Group</h2>
              <p className="text-lg" style={{ color: "#cbd5e1" }}>
                If this aligns with how you approach markets and you&apos;re looking for deeper real-time context — request access below.
              </p>
            </div>

            <TelegramForm turnstileSiteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY} />
            
            <div className="text-center pt-8 space-y-6">
              <div className="inline-block px-6 py-6 rounded-xl border border-slate-700 bg-slate-800/30 w-full sm:w-auto shadow-sm">
                <p className="text-lg mb-6" style={{ color: "#cbd5e1" }}>
                  Unsure if Meridian Compass is the right fit?
                </p>
                <SchedulingModal 
                  triggerClassName="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-amber-500 bg-transparent hover:bg-amber-500/10 px-8 text-sm font-medium text-amber-500 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500" 
                  triggerLabel="Schedule a call" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: "rgba(51,65,85,.3)", backgroundColor: "rgba(15,20,25,.5)" }}>
        <div className={C}>
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-6 border-b border-slate-800">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#f59e0b" }}>
                <div className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
              </div>
              <span className="text-sm font-semibold tracking-wide" style={{ color: "#f5f3ff" }}>MERIDIAN COMPASS</span>
            </div>
            <div className="space-y-4 text-xs" style={{ color: "#94a3b8" }}>
              <p>Educational and informational purposes only. Not investment advice. Trading involves risk. Past performance is not indicative of future results.</p>
              <p>© 2026 Meridian Compass</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
