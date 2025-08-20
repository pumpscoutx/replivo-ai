'use client'

import { useState } from 'react'
import { mainAgents } from '@/data/agents'
import AgentCard from '@/components/AgentCard'
import SubAgentCard from '@/components/SubAgentCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'agents' | 'subagents'>('agents')

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Support', name: 'Support' },
    { id: 'Sales', name: 'Sales' },
    { id: 'Analytics', name: 'Analytics' }
  ]

  const filteredAgents = selectedCategory === 'all' 
    ? mainAgents 
    : mainAgents.filter(agent => agent.category === selectedCategory)

  const allSubAgents = mainAgents.flatMap(agent => 
    agent.subAgents.map(subAgent => ({
      ...subAgent,
      category: agent.category
    }))
  )

  const filteredSubAgents = selectedCategory === 'all'
    ? allSubAgents
    : allSubAgents.filter(subAgent => subAgent.category === selectedCategory)

  return (
    <div className="min-h-screen bg-landing-gradient">
      <Header />
      
      <main className="container-max section-padding pt-24">
        {/* Hero Section */}
        <section className="text-center mb-12 card-glass-dark p-12">
          <h1 className="font-clash text-5xl md:text-6xl text-white mb-4">AI Agent Marketplace</h1>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of AI agents and specialized sub-agents. 
            Find the perfect solution for every business need.
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('agents')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  viewMode === 'agents' 
                    ? 'bg-white text-gray-900' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Agent Bundles
              </button>
              <button
                onClick={() => setViewMode('subagents')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  viewMode === 'subagents' 
                    ? 'bg-white text-gray-900' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Individual Agents
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-gray-900'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Content Grid */}
        {viewMode === 'agents' ? (
          <section className="mb-20">
            <h2 className="text-3xl font-space-grotesk text-white mb-8 text-center">
              AI Agent Bundles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-20">
            <h2 className="text-3xl font-space-grotesk text-white mb-8 text-center">
              Individual AI Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSubAgents.map((subAgent) => (
                <SubAgentCard 
                  key={subAgent.id} 
                  subAgent={subAgent}
                  onAdd={(agent) => console.log('Added to cart:', agent.name)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="mb-20 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-8 text-center">
            Marketplace Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">{mainAgents.length}</div>
              <div className="text-white/70">Agent Bundles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{allSubAgents.length}</div>
              <div className="text-white/70">Individual Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/70">Uptime</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 