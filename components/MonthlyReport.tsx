"use client"

interface MonthlyReportProps {
  onClose: () => void
}

export default function MonthlyReport({ onClose }: MonthlyReportProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-white/10 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-space-grotesk">Monthly Agent Report</h2>
          <button onClick={onClose} className="text-white/70 hover:text-white text-2xl">×</button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
          <div className="p-4 border border-white/10 rounded-lg">
            <div className="text-sm text-white/60">Agents hired</div>
            <div className="text-3xl font-space-grotesk">5</div>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <div className="text-sm text-white/60">Tasks completed</div>
            <div className="text-3xl font-space-grotesk">1,284</div>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <div className="text-sm text-white/60">Time saved</div>
            <div className="text-3xl font-space-grotesk">72h</div>
          </div>
          <div className="p-4 border border-white/10 rounded-lg">
            <div className="text-sm text-white/60">Spend</div>
            <div className="text-3xl font-space-grotesk">$1,165</div>
          </div>
        </div>
      </div>
    </div>
  )
} 