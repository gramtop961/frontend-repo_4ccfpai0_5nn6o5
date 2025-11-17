import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // This demo just simulates success; wire to backend later if needed
      await new Promise((r) => setTimeout(r, 800))
      setSent(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Let’s build what your business needs</h2>
            <p className="mt-4 text-slate-600 text-lg">Tell us about your challenges and goals. We’ll map a phased plan that delivers results fast.</p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Message sent</h3>
                <p className="mt-2 text-slate-600">We’ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
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
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg hover:shadow-xl">
                  <Send className="h-4 w-4" /> Send message
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
