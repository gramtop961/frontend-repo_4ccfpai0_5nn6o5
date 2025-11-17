import { useState, useEffect } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'How we build', href: '#solutions' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 border-b border-white/20' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-rose-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-white grid place-items-center">
                <Rocket className="h-4.5 w-4.5 text-indigo-600" />
              </div>
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900">SOLVIA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-white shadow-sm hover:shadow-md transition-shadow">
              Start a project
            </a>
          </nav>

          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden rounded-xl border border-white/20 bg-white/80 backdrop-blur p-2">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/20 px-2 pb-4">
            <div className="mt-2 grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white/60">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-white">
                Start a project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
