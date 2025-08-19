'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import MainAgentCard from '@/components/MainAgentCard'
import AgentRecommender from '@/components/AgentRecommender'
import CustomAgentRequestor from '@/components/CustomAgentRequestor'
import { mainAgents } from '@/data/agents'
import { motion } from 'framer-motion'

export default function Home() {
  const [showRecommender, setShowRecommender] = useState(false)
  const [showRequestor, setShowRequestor] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="container-max section-padding">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 text-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hire Your <span className="text-primary-600">AI Workforce</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600 mb-10 max-w-4xl mx-auto leading-relaxed text-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Intelligent AI agents that work across your business workflows. 
            Each agent is a bundle of specialized sub-agents ready to tackle your tasks.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button 
              onClick={() => setShowRecommender(true)}
              className="button-primary text-lg px-8 py-4"
            >
              Find the Right Agent
            </button>
            <button 
              onClick={() => setShowRequestor(true)}
              className="button-secondary text-lg px-8 py-4"
            >
              Request Custom Agent
            </button>
          </motion.div>
        </section>

        {/* Main Agents Grid */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center text-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Available Main Agents
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <MainAgentCard agent={agent} />
              </motion.div>
            ))}
          </div>
          
          {/* Custom Agent Request CTA */}
          <motion.div 
            className="text-center mt-16 p-10 card-minimal hover-lift"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4 text-display">
              Didn't find the agent you need?
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed text-body">
              Let us know what you're looking for and we'll build it for you.
            </p>
            <button 
              onClick={() => setShowRequestor(true)}
              className="button-primary text-lg px-8 py-4"
            >
              Request Custom Agent
            </button>
          </motion.div>
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
    </div>
  )
} 