'use client'

import { useRouter } from 'next/navigation'
import { mainAgents } from '@/data/agents'
import { useMemo } from 'react'
import HiringWorkflow from '@/components/HiringWorkflow'
import { useState } from 'react'

export default function SubAgentsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selected, setSelected] = useState<any | null>(null)

  const agent = useMemo(() => mainAgents.find(a => a.id === params.id), [params.id])

  if (!agent) {
    return (
      <main className="min-h-screen bg-landing-gradient">
        <div className="container-max section-padding">
          <div className="text-white">Agent not found.</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-landing-gradient">
      <div className="container-max section-padding">
        <button onClick={() => router.push('/')} className="text-white/70 hover:text-white mb-6">← Back</button>
        <section className="card-glass-dark p-8 rounded-2xl">
          <h1 className="font-clash text-3xl text-white mb-2">{agent.name}</h1>
          <p className="text-white/70 mb-6">{agent.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agent.subAgents.map(sa => (
              <div key={sa.id} className="border border-white/10 rounded-xl bg-white/5 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{sa.name}</div>
                  <div className="text-white/70 text-sm">${sa.price}/mo</div>
                </div>
                <div className="text-white/60 text-sm mb-3">{sa.task}</div>
                <div className="flex items-center justify-between">
                  <div className="text-white/70 text-sm">★ {sa.rating} ({sa.reviews})</div>
                  <button onClick={() => setSelected(sa)} className="px-3 py-2 bg-white text-black rounded-md text-sm">Hire</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selected && (
        <HiringWorkflow
          agent={selected}
          onClose={() => setSelected(null)}
          onComplete={() => setSelected(null)}
        />
      )}
    </main>
  )
} 