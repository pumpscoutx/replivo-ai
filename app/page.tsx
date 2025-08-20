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

  const handleViewSubAgents = (subAgents: any[]) => {
    setSelectedSubAgents(subAgents)
    setShowSubAgentMarketplace(true)
  }

  const handleHireMainAgent = (agent: any) => {
    setSelectedAgent(agent)
    setShowHiringWorkflow(true)
    console.log('Opening hiring workflow for main agent:', agent.name)
  }

  const handleHireSubAgent = (subAgent: any) => {
    setSelectedAgent(subAgent)
    setShowHiringWorkflow(true)
    console.log('Opening hiring workflow for sub-agent:', subAgent.name)
  }

  const handleAgentSelection = (agent: any) => {
    if (agent.subAgents) {
      handleViewSubAgents(agent.subAgents)
    } else {
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
    <div className="min-h-screen bg-spotlight-pro">
      <Header 
        onLogoClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        onProgressTracker={handleViewProgressTracker}
        onSignIn={() => {
          console.log('Opening sign in modal')
        }}
        onGetStarted={() => {
          console.log('Opening get started flow')
        }}
      />
      
      <main className="container-max section-padding relative z-10">
        {/* Hero Section */}
        <section className="text-left mb-20 card-glass-dark p-12">
          <h1 className="heading-hero text-5xl md:text-6xl mb-6">We build custom AI solutions</h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl font-inter">Strategy, design, and engineering for innovative companies.</p>
          <div className="flex gap-4 items-center">
            <button onClick={() => setShowRecommender(true)} className="btn-white">our services</button>
            <button onClick={() => setShowRequestor(true)} className="btn-outline-white">contact us</button>
          </div>
        </section>

        {/* Main Agents Grid */}
        <section className="mb-20 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-8 text-left">
            What we do
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
        </section>
      </main>

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

      {showRequestor && (
        <CustomAgentRequestor
          onClose={() => setShowRequestor(false)}
        />
      )}

      {showSubAgentMarketplace && (
        <SubAgentMarketplace
          subAgents={selectedSubAgents}
          onClose={() => setShowSubAgentMarketplace(false)}
          onHire={handleHireSubAgent}
        />
      )}

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
          }}
        />
      )}
    </div>
  )
} 