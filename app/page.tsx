'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import MainAgentCard from '@/components/MainAgentCard'
import AgentRecommender from '@/components/AgentRecommender'
import CustomAgentRequestor from '@/components/CustomAgentRequestor'
import SubAgentMarketplace from '@/components/SubAgentMarketplace'
import HiringWorkflow from '@/components/HiringWorkflow'
import { mainAgents } from '@/data/agents'

export default function Home() {
  const [showRecommender, setShowRecommender] = useState(false)
  const [showRequestor, setShowRequestor] = useState(false)
  const [showSubAgentMarketplace, setShowSubAgentMarketplace] = useState(false)
  const [selectedSubAgents, setSelectedSubAgents] = useState<any[]>([])
  const [showHiringWorkflow, setShowHiringWorkflow] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<any>(null)
  const [showMonthlyReport, setShowMonthlyReport] = useState(false)
  const [showProgressTracker, setShowProgressTracker] = useState(false)

  // Navigation Handlers
  const handleViewSubAgents = (subAgents: any[]) => {
    setSelectedSubAgents(subAgents)
    setShowSubAgentMarketplace(true)
  }

  const handleHireMainAgent = (agent: any) => {
    setSelectedAgent(agent)
    setShowHiringWorkflow(true)
    // This would open the hiring workflow for the main agent
    console.log('Opening hiring workflow for main agent:', agent.name)
  }

  const handleHireSubAgent = (subAgent: any) => {
    setSelectedAgent(subAgent)
    setShowHiringWorkflow(true)
    // This would open the hiring workflow for the sub-agent
    console.log('Opening hiring workflow for sub-agent:', subAgent.name)
  }

  const handleAgentSelection = (agent: any) => {
    // Navigate to selected agent (could be main agent or sub-agent)
    if (agent.subAgents) {
      // It's a main agent, show sub-agent marketplace
      handleViewSubAgents(agent.subAgents)
    } else {
      // It's a sub-agent, open hiring workflow
      handleHireSubAgent(agent)
    }
  }

  const handleViewMonthlyReport = () => {
    setShowMonthlyReport(true)
    console.log('Opening monthly report')
  }

  const handleViewProgressTracker = () => {
    setShowProgressTracker(true)
    console.log('Opening progress tracker')
  }

  return (
    <div className="min-h-screen bg-hero-section">
      <Header 
        onLogoClick={() => {
          // Return to main agents page (refresh or scroll to top)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onProgressTracker={handleViewProgressTracker}
        onSignIn={() => {
          console.log('Opening sign in modal')
          // This would open a sign in modal
        }}
        onGetStarted={() => {
          console.log('Opening get started flow')
          // This would open the onboarding flow
        }}
      />
      
      <main className="container-max section-padding relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20 bg-floating-elements rounded-3xl p-12 glass-morphism">
          <h1 className="text-6xl md:text-7xl font-big-slant text-neutral-900 mb-6">
            <span className="font-oxona text-primary-600">REPLIVO</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-better-days text-neutral-800 mb-6">
            Hire Your <span className="text-primary-600">AI Workforce</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto font-sans">
            Intelligent AI agents that work across your business workflows.
            Each agent is a bundle of specialized sub-agents ready to tackle your tasks.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setShowRecommender(true)} className="button-primary font-oxona">
              Find the Right Agent
            </button>
            <button onClick={() => setShowRequestor(true)} className="button-secondary font-oxona">
              Request Custom Agent
            </button>
          </div>
        </section>

        {/* Main Agents Grid */}
        <section className="mb-20 bg-abstract-lines rounded-3xl p-8 glass-morphism">
          <h2 className="text-4xl font-big-slant text-neutral-900 mb-8 text-center">
            Available <span className="font-oxona text-primary-600">Main Agents</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainAgents.map((agent) => (
              <MainAgentCard 
                key={agent.id} 
                agent={agent} 
                onViewSubAgents={handleViewSubAgents}
                onHire={handleHireMainAgent}
              />
            ))}
          </div>
          
          {/* Custom Agent Request CTA */}
          <div className="text-center mt-12 p-8 bg-card-gradient rounded-2xl shadow-medium border border-white/20">
            <h3 className="text-2xl font-better-days text-neutral-900 mb-4">
              Didn't find the agent you need?
            </h3>
            <p className="text-neutral-600 mb-6 font-sans">
              Let us know what you're looking for and we'll build it for you.
            </p>
            <button onClick={() => setShowRequestor(true)} className="button-primary font-oxona">
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
          onAgentSelection={(agent) => {
            setShowRecommender(false)
            handleAgentSelection(agent)
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

      {/* Hiring Workflow Modal */}
      {showHiringWorkflow && selectedAgent && (
        <HiringWorkflow
          agent={selectedAgent}
          onClose={() => {
            setShowHiringWorkflow(false)
            setSelectedAgent(null)
          }}
          onComplete={(agent) => {
            console.log('Successfully hired:', agent.name)
            setShowHiringWorkflow(false)
            setSelectedAgent(null)
            // Could show a success notification here
          }}
        />
      )}
    </div>
  )
} 