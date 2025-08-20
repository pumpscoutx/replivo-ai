'use client'

import { useState } from 'react'
import AgentRecommender from '@/components/AgentRecommender'
import { useRouter } from 'next/navigation'

export default function FindAgentPage() {
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  const trendingTemplates = [
    'TikTok Ads Specialist',
    'Legal Drafting Assistant',
    'E-commerce Manager',
    'Content Writer',
    'HR Recruiter',
    'Financial Analyst',
  ]

  return (
    <main className="min-h-screen bg-landing-gradient">
      <div className="container-max section-padding">
        <section className="text-center mb-12 card-glass-dark p-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-white">AI-Powered Matching</span>
          </div>
          <h1 className="font-clash text-4xl md:text-5xl text-white mb-4">Find the Perfect Agent for Your Business</h1>
          <p className="text-white/75 max-w-2xl mx-auto">Describe what you need, and our AI will recommend the best agents for your specific requirements.</p>
        </section>

        <section className="max-w-4xl mx-auto">
          {/* Agent Recommender */}
          <div className="card-glass-dark p-8 rounded-2xl mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">🤖</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Agent Recommender</h3>
                <p className="text-sm text-white/70">Tell us what you need help with</p>
              </div>
            </div>

            {!showChat ? (
              <div className="text-center">
                <button onClick={() => setShowChat(true)} className="btn-white">Start Chat</button>
                <p className="text-white/60 text-sm mt-3">AI will analyze your needs and suggest the best agents</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">AI Agent Advisor</h3>
                    <button 
                      onClick={() => setShowChat(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <AgentRecommender />
                </div>
              </div>
            )}
          </div>

          {/* Trending Templates */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white">Trending Agent Templates</h4>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {trendingTemplates.map((t) => (
                <button key={t} onClick={() => router.push('/request-agent')} className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-full text-sm font-medium text-white transition-smooth">
                  {t}
                </button>
              ))}
            </div>

            <div className="card-glass-dark p-6 rounded-xl max-w-2xl mx-auto text-center">
              <h5 className="font-semibold mb-2 text-white">Can't Find What You Need?</h5>
              <p className="text-white/70 mb-4">Describe your custom agent requirements and we'll build it for you.</p>
              <button onClick={() => router.push('/request-agent')} className="btn-white">Request Custom Agent</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 