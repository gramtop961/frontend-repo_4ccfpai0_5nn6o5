import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-slate-900">
      <Navbar />
      <Hero />
      <Story />
      <Work />
      <Contact />
      <footer className="border-t border-slate-200 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} SOLVIA. All rights reserved.</p>
          <div className="text-sm text-slate-600">Built with care — from data to decisions.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
