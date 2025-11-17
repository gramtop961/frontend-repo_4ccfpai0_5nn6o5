import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, LineChart, BarChart3, PieChart, Zap, Focus } from 'lucide-react'

function DashboardMock() {
  return (
    <div className="w-full aspect-[16/10] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="text-xs font-semibold text-slate-500">ops.solvia.app</div>
      </div>

      {/* Body grid */}
      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Left column cards */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="rounded-xl border border-slate-100 bg-indigo-50/40 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-700 flex items-center gap-2"><LineChart className="h-4 w-4 text-indigo-600" /> Revenue trend</div>
              <div className="text-xs text-indigo-600">Last 30 days</div>
            </div>
            <div className="mt-3 h-28 w-full">
              {/* simple chart bars */}
              <div className="flex h-full items-end gap-1">
                {[20,35,28,40,42,38,50,48,60,58,64,70].map((h,i)=> (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-fuchsia-500" style={{height:`${h}%`}} />
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <div className="text-sm font-semibold text-slate-700 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-fuchsia-600" /> Conversion cohorts</div>
            <div className="mt-3 grid grid-cols-12 gap-2">
              {[...Array(24)].map((_,i)=> (
                <div key={i} className="h-8 rounded bg-slate-100" style={{opacity: 0.6 + (i%6)*0.05}} />
              ))}
            </div>
          </div>
        </div>
        {/* Right column cards */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="rounded-xl border border-slate-100 bg-white p-4">
            <div className="text-sm font-semibold text-slate-700 flex items-center gap-2"><PieChart className="h-4 w-4 text-rose-600" /> Sources</div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {['Direct','Ops','Integrations'].map((l,i)=> (
                <div key={l} className="rounded-lg border border-slate-100 p-2 text-center">
                  <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">{[48,32,20][i]}%</div>
                  <div className="text-[10px] text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-emerald-50/50 p-4">
            <div className="text-sm font-semibold text-emerald-800 flex items-center gap-2"><Zap className="h-4 w-4" /> Automations</div>
            <ul className="mt-2 text-xs text-emerald-900/80 space-y-1">
              <li>• Alert: Ops queue &gt; 50</li>
              <li>• Sync: CRM → Billing nightly</li>
              <li>• Trigger: Retry failed webhooks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  const ref = useRef(null)
  // Pin for 220vh to create a cinematic sequence
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Global transforms for the dashboard
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.9, 1.02, 1.12, 1.22])
  const y = useTransform(scrollYProgress, [0, 1], [40, -60])
  const blur = useTransform(scrollYProgress, [0, 0.15, 0.35], [8, 2, 0])

  // Three focus stops (A: trend, B: cohorts, C: automation)
  const stopA = useTransform(scrollYProgress, [0.05, 0.22, 0.32], [0, 1, 0])
  const stopB = useTransform(scrollYProgress, [0.38, 0.52, 0.64], [0, 1, 0])
  const stopC = useTransform(scrollYProgress, [0.70, 0.84, 0.96], [0, 1, 0])

  // Use-case reveal at the end
  const opacityUsecase = useTransform(scrollYProgress, [0.78, 0.92], [0, 1])
  const yUsecase = useTransform(scrollYProgress, [0.78, 1], [30, 0])

  // Parallax floaters
  const floater1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const floater2Y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section ref={ref} className="relative py-20 min-h-[220vh]">
      {/* gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_40%_at_20%_10%,_rgba(99,102,241,0.10),_transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white/90">Interactive</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Scroll to zoom through the story</h2>
          <p className="mt-4 text-slate-600 text-lg">Three focus points. One clear outcome.</p>
        </div>

        <div className="relative mt-14">
          {/* Floating accents */}
          <motion.div style={{ y: floater1Y }} className="absolute -left-6 top-8 hidden md:block">
            <div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur px-3 py-2 text-xs font-semibold text-slate-700 inline-flex items-center gap-2 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> 12% faster lead→close
            </div>
          </motion.div>
          <motion.div style={{ y: floater2Y }} className="absolute -right-4 bottom-8 hidden md:block">
            <div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur px-3 py-2 text-xs font-semibold text-slate-700 inline-flex items-center gap-2 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-rose-600" /> 3x fewer data errors
            </div>
          </motion.div>

          {/* Sticky viewport containing the zooming dashboard */}
          <div className="sticky top-24">
            <div className="relative">
              <motion.div style={{ scale, y, filter: blur.to(b => `blur(${b}px)`) }}>
                <DashboardMock />
              </motion.div>

              {/* Focus overlays for each stop */}
              {/* A: Revenue trend */}
              <motion.div style={{ opacity: stopA }} className="pointer-events-none absolute inset-0">
                <div className="absolute left-4 right-4 top-20 h-40 rounded-xl ring-2 ring-indigo-500/70 ring-offset-2 ring-offset-white/40 bg-indigo-500/5" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  <Focus className="h-3.5 w-3.5 text-indigo-600" /> Signal: Momentum detected
                </div>
              </motion.div>

              {/* B: Cohorts */}
              <motion.div style={{ opacity: stopB }} className="pointer-events-none absolute inset-0">
                <div className="absolute left-4 right-[36%] bottom-24 h-44 rounded-xl ring-2 ring-fuchsia-500/70 ring-offset-2 ring-offset-white/40 bg-fuchsia-500/5" />
                <div className="absolute right-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  <Focus className="h-3.5 w-3.5 text-fuchsia-600" /> Insight: Cohort drift stabilized
                </div>
              </motion.div>

              {/* C: Automations */}
              <motion.div style={{ opacity: stopC }} className="pointer-events-none absolute inset-0">
                <div className="absolute right-4 top-28 w-[28%] h-56 rounded-xl ring-2 ring-emerald-500/70 ring-offset-2 ring-offset-white/40 bg-emerald-500/5" />
                <div className="absolute left-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  <Focus className="h-3.5 w-3.5 text-emerald-600" /> Action: Auto-resolve failures
                </div>
              </motion.div>
            </div>
          </div>

          {/* Use case panel that fades in as the sequence completes */}
          <motion.div style={{ opacity: opacityUsecase, y: yUsecase }}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Use case: Revenue ops</div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">From scattered signals to a single source of truth</h3>
            <p className="mt-2 text-slate-600">We stitched product analytics, CRM, and billing into one model. Leadership moved from weekly gut checks to daily decisions, unlocking faster cycles and cleaner attribution.</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[{k:'Time-to-insight', v:'-36%'},{k:'Closed-won', v:'+14%'},{k:'Ops overhead', v:'-28%'},{k:'NPS', v:'+9'}].map((m) => (
                <div key={m.k} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="text-[10px] text-slate-500">{m.k}</div>
                  <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg hover:shadow-xl">
                Start an open brief
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
