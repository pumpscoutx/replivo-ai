'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import MainAgentCard from '@/components/MainAgentCard'
import AgentRecommender from '@/components/AgentRecommender'
import CustomAgentRequestor from '@/components/CustomAgentRequestor'
import SubAgentMarketplace from '@/components/SubAgentMarketplace'
import HiringWorkflow from '@/components/HiringWorkflow'
import { mainAgents } from '@/data/agents'
import Footer from '@/components/Footer'

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
    <div className="min-h-screen bg-landing-gradient">
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
        <section className="text-left mb-12 card-glass-dark p-12">
          <h1 className="font-clash text-5xl md:text-6xl text-white mb-4">Hire Your Digital Team</h1>
          <p className="text-lg text-white/75 mb-8 max-w-2xl font-sans">Smart business agents that work like humans—available instantly.</p>
          <div className="flex gap-4 items-center">
            <a href="#agents" className="btn-white">Hire Now</a>
            <button onClick={() => setShowRequestor(true)} className="btn-outline-white">Request Custom Agent</button>
          </div>
        </section>

        {/* Trusted By Logos */}
        <section className="mb-20">
          <div className="marquee marquee--slow opacity-80">
            <div className="marquee__inner">
              {['stripe','hubspot','shopify','zapier','notion','intercom','webflow','airtable','stripe','hubspot','shopify','zapier','notion','intercom','webflow','airtable'].map((name, idx) => (
                <div key={`${name}-${idx}`} className="h-8 w-auto text-white/70 bg-white/10 border border-white/10 rounded-md px-3 py-1 capitalize">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Agents Grid */}
        <section id="agents" className="mb-20 card-glass-dark p-8 bg-agents-section">
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

        {/* Find an Agent Section with embedded chatbot */}
        <section className="mb-24 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-4">Find the perfect agent for your business.</h2>
          <div className="text-white/70 mb-6">Describe your needs and we’ll recommend the best fit.</div>
          {!showRecommender && (
            <button onClick={() => setShowRecommender(true)} className="btn-white">Start Chat</button>
          )}
          {showRecommender && (
            <div className="mt-6">
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
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Custom Agent Requestor Modal */}
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