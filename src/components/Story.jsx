import { motion } from 'framer-motion'
import { Rocket, Cable, BarChart3, Repeat } from 'lucide-react'

export default function Story() {
  const steps = [
    {
      icon: Rocket,
      kicker: '01',
      title: 'Start with the real problem',
      text: 'We map the current flow, quantify pain, and define the smallest shippable win.',
    },
    {
      icon: Cable,
      kicker: '02',
      title: 'Wire the data together',
      text: 'APIs, events, pipelines — clean, documented, observable. Boring on purpose.',
    },
    {
      icon: BarChart3,
      kicker: '03',
      title: 'Turn signals into decisions',
      text: 'Dashboards that clarify. Alerts that matter. Interfaces people actually use.',
    },
    {
      icon: Repeat,
      kicker: '04',
      title: 'Ship. Learn. Repeat.',
      text: 'Weekly releases, monthly retros, always moving toward the next unlock.',
    },
  ]

  return (
    <section id="solutions" className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-0 h-40 bg-gradient-to-b from-indigo-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white/90">How we build</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-slate-900">A story in four moves</h2>
          <p className="mt-4 text-slate-600 text-lg">A lightweight, outcome-first process tailored for teams who need to move.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-tr from-indigo-100 to-fuchsia-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center gap-3 text-indigo-600">
                <s.icon className="h-6 w-6" />
                <span className="text-xs font-semibold text-slate-500">{s.kicker}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
