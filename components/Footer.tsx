"use client"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-max px-4 py-10 text-white/70 text-sm grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-space-grotesk mb-3">nano</div>
          <p>Smart business agents for modern teams.</p>
        </div>
        <nav className="space-y-2">
          <a href="#terms" className="block hover:text-white">Terms</a>
          <a href="#privacy" className="block hover:text-white">Privacy</a>
          <a href="#contact" className="block hover:text-white">Contact</a>
          <a href="#docs" className="block hover:text-white">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">𝕏</a>
          <a href="#" aria-label="github" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">{} </a>
          <a href="#" aria-label="linkedin" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">in</a>
        </div>
      </div>
    </footer>
  )
} 