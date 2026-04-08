import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-surface font-body text-on-surface antialiased min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_40px_40px_-4px_rgba(38,54,45,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-emerald-900 dark:text-emerald-50 tracking-tighter font-headline">Habby</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="font-headline font-bold tracking-tight text-emerald-900 dark:text-emerald-50 border-b-2 border-emerald-500 pb-1 hover:text-emerald-900 transition-colors duration-300" href="#">Garden</a>
            <a className="font-headline font-bold tracking-tight text-emerald-700/70 dark:text-emerald-300/70 hover:text-emerald-900 transition-colors duration-300" href="#">Method</a>
            <a className="font-headline font-bold tracking-tight text-emerald-700/70 dark:text-emerald-300/70 hover:text-emerald-900 transition-colors duration-300" href="#">Pricing</a>
            {/* Added Login Link Here */}
            <Link className="font-headline font-bold tracking-tight text-primary hover:text-primary-dim transition-colors duration-300" href="/login">Log In</Link>
          </div>
          <Link href="/signup" className="primary-gradient text-on-primary px-8 py-3 rounded-full font-headline font-bold text-sm tracking-tight hover:scale-105 transition-transform duration-200">
            Start Growing
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full mb-8">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <span className="text-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">The Digital Greenhouse</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-6">
            Tiny actions, <br />
            <span className="text-primary italic">big becoming.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed">
            Cultivate consistency with a habit tracker that feels like a breath of fresh air. 
            Move beyond spreadsheets into a living digital sanctuary.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <Link href="/signup" className="primary-gradient text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all text-center">
              Start Growing
            </Link>
            <button className="bg-surface-container-high text-on-surface px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-highest transition-all">
              See how it works
            </button>
          </div>

          {/* Product Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_40px_80px_-15px_rgba(38,54,45,0.1)] relative z-10">
              <img className="rounded-lg w-full h-auto" alt="clean minimal dashboard UI on a laptop screen showing growth progress and plant habit sprouts in soft green tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKQhtyYDQd1Xx2lo_wQW--mMMcPZcu8Jc5tk95tz16eBb3_oXCc8Pb8Z2Gn_m31kCyJAtcXeuBHLHuLtKvj_O3vnEq3nkYqmtoI3h3QL67ZxaDQ56PqKtzOE3jKqfoJLtMVVf5zx_sJnxkSWS-UhWS2_LcEEUq_51hYdzOpvl2nzoL70nWH1ybnZNAzCpdmA7XXK5NZiPVfpnaQETEVVN1uWiMChPrNs4LzYndLLgIioste34nzngKW25FK-MJ_Hy24SwYCRGChdc" />
              
              {/* Floating UI Card 1 */}
              <div className="absolute -top-10 -right-10 hidden lg:block bg-surface-container-lowest p-6 rounded-lg shadow-2xl w-64 text-left border border-outline-variant/15">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Meditation</p>
                    <p className="text-[10px] text-on-surface-variant">Daily Habit</p>
                  </div>
                </div>
                <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
                <p className="text-[10px] mt-2 text-primary font-bold">85% Complete</p>
              </div>
            </div>
            {/* Background decorative shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-fixed/20 blur-[120px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 opacity-70">
          <p className="font-headline font-bold text-on-surface">Join 10,000+ gardeners of routine</p>
          <div className="flex gap-8 items-center grayscale opacity-60">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span> 
              <span className="font-bold text-sm">ZenFlow</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>energy_savings_leaf</span> 
              <span className="font-bold text-sm">GreenRoots</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span> 
              <span className="font-bold text-sm">Vitality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits (Bento Grid Style) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4">Cultivate with Care</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Systems designed for human growth, not robotic precision.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500">
            <div>
              <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">fluid</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Gentle Growth</h3>
              <p className="text-on-surface-variant leading-relaxed">Build habits without the crushing weight of perfection. Our system encourages progress over streaks.</p>
            </div>
          </div>

          {/* Card 2 (Taller/Larger) */}
          <div className="bg-primary p-10 rounded-xl flex flex-col justify-between text-on-primary hover:scale-[1.02] transition-transform duration-500">
            <div>
              <div className="w-14 h-14 bg-primary-dim rounded-full flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-primary-fixed text-3xl">visibility</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Visual Clarity</h3>
              <p className="text-on-primary/80 leading-relaxed">Watch your digital garden bloom as you complete your tasks. Progress you can actually see and feel.</p>
            </div>
            <div className="mt-12 rounded-lg overflow-hidden bg-white/10 backdrop-blur-md p-4">
              <img className="rounded-lg shadow-lg" alt="abstract visual representation of data growth with soft emerald and mint shapes on a white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbD51BIDsfHNMMWECd1_LgYfyFxprzwU5nbRNEeb6yCxxqOudZuYZzDh8YXz-tXjyPKV2uEWuKG4L1SV7jd5-C8s9w5Zl3dhaS2QEZPO7wE1iP9-PNDha6MoYx4cEaOUMmDwQkPodlnSEWMxcXUH02kSv-4J7kADX-p-UwuASpGbk7w82zMqMVJzEvPd0XcEjIxd23GyHTCk2CtpbnJ0VtM3kf2QGg1YRvnr-QsgSYFEznwOX4DD3xfjbaQ4kEOx9MV0ucPjx_5lA" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform duration-500">
            <div>
              <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">auto_graph</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Daily Momentum</h3>
              <p className="text-on-surface-variant leading-relaxed">Stay motivated with intuitive insights that highlight your wins, no matter how small they seem.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Dashboard Preview Element */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-2xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-headline font-bold text-xl">My Daily Garden</h4>
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-surface p-4 rounded-lg">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">water_drop</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-bold">Hydration habit</span>
                        <span className="text-sm text-primary font-bold">7 days</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="h-2 flex-1 bg-primary rounded-full sunbeam-glow"></div>
                        <div className="h-2 flex-1 bg-primary rounded-full sunbeam-glow"></div>
                        <div className="h-2 flex-1 bg-primary rounded-full sunbeam-glow"></div>
                        <div className="h-2 flex-1 bg-primary-fixed-dim rounded-full"></div>
                        <div className="h-2 flex-1 bg-primary-fixed-dim rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-surface p-4 rounded-lg opacity-80">
                    <div className="w-12 h-12 bg-tertiary-container/30 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary">menu_book</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-bold">Reading routine</span>
                        <span className="text-sm text-tertiary font-bold">3 days</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="h-2 flex-1 bg-tertiary-container rounded-full"></div>
                        <div className="h-2 flex-1 bg-tertiary-container rounded-full"></div>
                        <div className="h-2 flex-1 bg-tertiary-container rounded-full"></div>
                        <div className="h-2 flex-1 bg-surface-container-highest rounded-full"></div>
                        <div className="h-2 flex-1 bg-surface-container-highest rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sunbeam yellow accent badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#FFD166] text-[#691a17] font-bold px-6 py-4 rounded-lg transform -rotate-12 shadow-lg">
                  Streak on fire! 🔥
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">Insightful growth, <br/>beautifully mapped.</h2>
                <p className="text-on-surface-variant text-lg">Habby transforms your raw data into a visual story of your progress. No more guessing, just growing.</p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Habit Streaks</h4>
                    <p className="text-on-surface-variant">Visual momentum that makes it impossible to look away. Consistency made visible.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">insights</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Progress Insights</h4>
                    <p className="text-on-surface-variant">Weekly summaries that help you understand your patterns and optimize your flow.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">category</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Custom Categories</h4>
                    <p className="text-on-surface-variant">Organize your habits by life area—Health, Mind, Spirit, or Career. Your garden, your rules.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4">Three steps to a flourishing life</h2>
            <p className="text-on-surface-variant">Simple by design, powerful by choice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-primary/10 -z-10"></div>
            
            <div className="text-center bg-surface-container-lowest p-8 rounded-xl relative">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">1</div>
              <h4 className="font-headline font-bold text-xl mb-2">Plant your habits</h4>
              <p className="text-on-surface-variant text-sm">Define what matters to you. Choose from curated templates or create your own seeds.</p>
            </div>
            
            <div className="text-center bg-surface-container-lowest p-8 rounded-xl shadow-xl scale-110 z-10">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">2</div>
              <h4 className="font-headline font-bold text-xl mb-2">Water them daily</h4>
              <p className="text-on-surface-variant text-sm">Small actions everyday keep the garden alive. Log your progress with a single tap.</p>
            </div>
            
            <div className="text-center bg-surface-container-lowest p-8 rounded-xl relative">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">3</div>
              <h4 className="font-headline font-bold text-xl mb-2">Watch your life bloom</h4>
              <p className="text-on-surface-variant text-sm">Over time, these tiny seeds grow into a dense forest of flourishing rituals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface mb-6">Designed for peace of mind.</h2>
          </div>
          <div className="relative mx-auto">
            <img className="rounded-xl shadow-[0_60px_100px_-20px_rgba(38,54,45,0.15)] w-full" alt="expansive minimalist workspace with lush plants and soft daylight reflecting off a clean tablet screen showing the Habby app" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcT121ZXGJBTk4PW_XFVYviZs4J0C3ZxfEVTZNMYwd2_pDn5S6jMl4U6DETg9ZW3e5Qq15ZEDRwXweHdzM8F-Pm-x3pDxQatbgiM0gpI9R5o99W4VB-tnd8W4ncf0xZrHDanZDuwuUbwkdyJLI2VC6Q-kncP0Te5X5UgPUy-HXtYikzdjy6DEt6RolRbMMAqm-lH2QBtJD3DksodtNNMu7tfY91LExbjV54QVlzPPycnZGNtVBLC4E9JYFGjDPERiLd1j25EEJawQ" />
            
            {/* Floating Analytics Card */}
            <div className="absolute bottom-10 left-10 hidden lg:block bg-surface-container-lowest/90 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/20 text-left w-80">
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-4">Garden Health</p>
              <div className="flex items-end gap-2 mb-6">
                <div className="w-full bg-surface-container-high h-20 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary h-12"></div>
                </div>
                <div className="w-full bg-surface-container-high h-20 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary h-16"></div>
                </div>
                <div className="w-full bg-surface-container-high h-20 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary h-8"></div>
                </div>
                <div className="w-full bg-surface-container-high h-20 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 w-full bg-primary h-20 sunbeam-glow"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Total Growth</span>
                <span className="text-sm font-black text-primary">+24%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Value */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-primary-container/30 rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight italic">
              "Less guilt, more growth. <br/>Build consistency, gently."
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-10">
              Most trackers make you feel bad about missing a day. Habby celebrates the fact that you show up, no matter the scale.
            </p>
            <div className="flex items-center justify-center gap-4">
              <img className="w-12 h-12 rounded-full border-2 border-white" alt="headshot of a smiling young woman in natural outdoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsjl7QGwEJPnhGj8FwxSjYPTEgkjzwzwkDYs3-05ahBfM2oPrqwUYJMVXCb_9O69qyNw2Dy3DTUNAhiE55lj6h8T9xjX6Ywsf4zjrgXptqzWDPgd_s5GpQozCVaWTq7V3n4Xsersqdb85IZzRwoP5nKhAX3g3qNkTs1u4R-Ha38F3SSt_6sZX-92ivrLGPkq81OSWWMwDGJJHnAscBJepClHQvEgq7fJw5aNQiv15csRGq3LX40VvruF_mo4tzYqwNmX_AEHBbQW4" />
              <div className="text-left">
                <p className="font-bold text-sm">Elena Gardenia</p>
                <p className="text-xs text-on-surface-variant">Daily Gardener since 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface mb-8 tracking-tighter">Ready to start <br/>your garden?</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto">Join thousands of others cultivating their best selves, one tiny seed at a time.</p>
          <Link href="/signup" className="inline-block primary-gradient text-on-primary px-12 py-6 rounded-xl font-headline font-bold text-xl shadow-[0_20px_40px_rgba(0,109,80,0.2)] hover:scale-105 transition-transform">
            Get Started for Free
          </Link>
          <p className="mt-8 text-sm text-on-surface-variant">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-100 dark:bg-emerald-900/20 rounded-t-[3rem] mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="mb-10 md:mb-0">
            <div className="text-xl font-bold text-emerald-900 dark:text-emerald-50 mb-4 font-headline">Habby</div>
            <p className="text-emerald-800/60 dark:text-emerald-200/60 font-body text-sm font-medium">© 2024 Habby Garden. Cultivate your best self.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <a className="text-emerald-800/60 dark:text-emerald-200/60 font-body text-sm font-medium hover:text-emerald-500 transition-all" href="#">Privacy</a>
            <a className="text-emerald-800/60 dark:text-emerald-200/60 font-body text-sm font-medium hover:text-emerald-500 transition-all" href="#">Terms</a>
            <a className="text-emerald-800/60 dark:text-emerald-200/60 font-body text-sm font-medium hover:text-emerald-500 transition-all" href="#">Gardening Guide</a>
            <a className="text-emerald-800/60 dark:text-emerald-200/60 font-body text-sm font-medium hover:text-emerald-500 transition-all" href="#">Support</a>
          </div>
          <div className="mt-10 md:mt-0 flex gap-6">
            <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}