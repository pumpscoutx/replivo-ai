'use client'

import CustomAgentRequestor from '@/components/CustomAgentRequestor'
import { useRouter } from 'next/navigation'

export default function RequestAgentPage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-landing-gradient">
      <div className="container-max section-padding">
        <section className="text-center mb-8">
          <h1 className="font-clash text-4xl md:text-5xl text-white mb-3">Didn’t find what you need? Build your own.</h1>
          <p className="text-white/75 max-w-2xl mx-auto">Describe your custom agent idea and we’ll spin up a build plan.</p>
        </section>
        <div className="max-w-4xl mx-auto">
          <CustomAgentRequestor onClose={() => router.push('/')} onBack={() => router.push('/find-agent')} />
        </div>
      </div>
    </main>
  )
} 