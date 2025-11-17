import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Sparkles, Loader2 } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          source: 'website'
        })
      })
      if (!res.ok) throw new Error('Failed to send message')
      setSent(true)
      ;(e.target).reset()
    } catch (e) {
      setError('Something went wrong. Please try again.')
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> Open brief
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Let’s build what your business needs</h2>
            <p className="mt-4 text-slate-600 text-lg">Tell us about your challenges and goals. We’ll map a phased plan that delivers results fast.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2">• Week 1: Integrations + schema</li>
              <li className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2">• Week 2: Dashboard slice</li>
              <li className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2">• Week 3: Automations</li>
              <li className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2">• Week 4: Production hardening</li>
            </ul>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex flex-col items-center text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Message sent</h3>
                  <p className="mt-2 text-slate-600">We’ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Name</label>
                    <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">What do you want to build?</label>
                    <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  {error && <p className="text-sm text-rose-600">{error}</p>}
                  <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg hover:shadow-xl disabled:opacity-60">
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} {loading ? 'Sending…' : 'Send message'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
