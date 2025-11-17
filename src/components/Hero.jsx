import Spline from '@splinetool/react-spline'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDownRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const words = ['systems', 'dashboards', 'integrations', 'workflows']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-[94vh] overflow-hidden pt-28">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* overlays for contrast and vibe */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-white/70 via-white/30 to-white/95" />
      <div className="pointer-events-none absolute inset-0 -z-0 [background:radial-gradient(60%_40%_at_70%_10%,_rgba(99,102,241,0.18),_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> Young, fast, relentlessly practical
              </span>

              <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
                We are SOLVIA — a modern tech studio shipping
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">real-world&nbsp;</span>
                  <span className="inline-block min-w-[8ch]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35 }}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700"
                      >
                        {words[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed text-slate-700">
                We build the invisible infrastructure that lets ambitious teams move faster — data capture, clean pipelines, crisp dashboards, and the ops glue that binds it all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-indigo-200 hover:shadow-xl">
                  Start an open brief
                </a>
                <a href="#solutions" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 backdrop-blur px-6 py-3 text-slate-900 hover:bg-white">
                  See how we work
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                {['Speed-first', 'Founder-energy', 'No fluff', 'Ship weekly'].map((b) => (
                  <span key={b} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: manifesto card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <div className="text-sm uppercase tracking-wider text-slate-500">Our manifesto</div>
              <ul className="mt-3 space-y-3 text-slate-800">
                <li>• Build what reduces friction, not what inflates decks.</li>
                <li>• Combine taste with telemetry — design that measures up.</li>
                <li>• Ship small, ship often, learn faster.</li>
                <li>• Own the outcome, not just the code.</li>
              </ul>
              <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <ArrowDownRight className="h-4 w-4" /> Scroll — the story continues
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* bottom cue */}
      <div className="absolute bottom-6 left-0 right-0 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  )
}
