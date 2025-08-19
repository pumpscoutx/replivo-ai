'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import MainAgentCard from '@/components/MainAgentCard'
import AgentRecommender from '@/components/AgentRecommender'
import CustomAgentRequestor from '@/components/CustomAgentRequestor'
import SubAgentMarketplace from '@/components/SubAgentMarketplace'
import { mainAgents } from '@/data/agents'

export default function Home() {
  const [showRecommender, setShowRecommender] = useState(false)
  const [showRequestor, setShowRequestor] = useState(false)
  const [showSubAgentMarketplace, setShowSubAgentMarketplace] = useState(false)
  const [selectedSubAgents, setSelectedSubAgents] = useState<any[]>([])

  const handleViewSubAgents = (subAgents: any[]) => {
    setSelectedSubAgents(subAgents)
    setShowSubAgentMarketplace(true)
  }

  const handleHireSubAgent = (subAgent: any) => {
    // Handle sub-agent hiring logic
    console.log('Hiring sub-agent:', subAgent)
    // You can add a toast notification or modal here
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="container-max section-padding">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Hire Your <span className="text-primary-600">AI Workforce</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Intelligent AI agents that work across your business workflows.
            Each agent is a bundle of specialized sub-agents ready to tackle your tasks.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setShowRecommender(true)} className="button-primary">
              Find the Right Agent
            </button>
            <button onClick={() => setShowRequestor(true)} className="button-secondary">
              Request Custom Agent
            </button>
          </div>
        </section>

        {/* Main Agents Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Available Main Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainAgents.map((agent) => (
              <MainAgentCard 
                key={agent.id} 
                agent={agent} 
                onViewSubAgents={handleViewSubAgents}
              />
            ))}
          </div>
          
          {/* Custom Agent Request CTA */}
          <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-soft border border-neutral-200">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Didn't find the agent you need?
            </h3>
            <p className="text-neutral-600 mb-6">
              Let us know what you're looking for and we'll build it for you.
            </p>
            <button onClick={() => setShowRequestor(true)} className="button-primary">
              Request Custom Agent
            </button>
          </div>
        </section>
      </main>

      {/* Agent Recommender Modal */}
      {showRecommender && (
        <AgentRecommender
          onClose={() => setShowRecommender(false)}
          onRequestCustom={() => {
            setShowRecommender(false)
            setShowRequestor(true)
          }}
        />
      )}

      {/* Custom Agent Requestor Modal */}
      {showRequestor && (
        <CustomAgentRequestor
          onClose={() => setShowRequestor(false)}
        />
      )}

      {/* Sub-Agent Marketplace Modal */}
      {showSubAgentMarketplace && (
        <SubAgentMarketplace
          subAgents={selectedSubAgents}
          onClose={() => setShowSubAgentMarketplace(false)}
          onHire={handleHireSubAgent}
        />
      )}
    </div>
  )
} 