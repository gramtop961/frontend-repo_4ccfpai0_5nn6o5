import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Work() {
  const projects = [
    {
      title: 'Ops Command Center',
      desc: 'The control room for operators: live metrics, case queues, and automations.',
      tags: ['React', 'FastAPI', 'MongoDB'],
    },
    {
      title: 'Data Intake Platform',
      desc: 'High-signal forms, schema validation, and pipelines that stay green.',
      tags: ['Next.js', 'Airflow', 'dbt'],
    },
    {
      title: 'Decision Intelligence',
      desc: 'From hindsight to foresight — forecasts your team can trust.',
      tags: ['Python', 'Timeseries', 'BI'],
    },
  ]

  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Proof over promises</h2>
            <p className="mt-3 text-slate-600">A few recent builds. More on request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 hover:bg-slate-50">
            Request a deep dive <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-tr from-rose-100 to-indigo-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
