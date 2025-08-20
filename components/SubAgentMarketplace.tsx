'use client'

import { useState } from 'react'
import { SubAgent } from '@/data/agents'

interface SubAgentMarketplaceProps {
  subAgents: SubAgent[]
  onClose: () => void
  onHire: (subAgent: SubAgent) => void
}

export default function SubAgentMarketplace({ subAgents, onClose, onHire }: SubAgentMarketplaceProps) {
  const [selectedAgents, setSelectedAgents] = useState<SubAgent[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'compare'>('grid')

  const handleSelectAgent = (agent: SubAgent) => {
    if (selectedAgents.find(a => a.id === agent.id)) {
      setSelectedAgents(selectedAgents.filter(a => a.id !== agent.id))
    } else if (selectedAgents.length < 3) {
      setSelectedAgents([...selectedAgents, agent])
    }
  }

  const handleHire = (agent: SubAgent) => {
    onHire(agent)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-white/10 rounded-2xl w-full max-w-7xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="px-3 py-2 rounded-lg border border-white/20 text-white/80 hover:bg-white/10">Back to Main Agents</button>
            <h2 className="text-2xl font-space-grotesk text-white">Sub-Agent Marketplace</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${viewMode === 'grid' ? 'bg-white text-black border-white' : 'text-white/80 border-white/20 hover:bg-white/10'}`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('compare')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${viewMode === 'compare' ? 'bg-white text-black border-white' : 'text-white/80 border-white/20 hover:bg-white/10'}`}
              >
                Compare ({selectedAgents.length}/3)
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-2xl text-white/70 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 text-white">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subAgents.map((agent) => (
                <SubAgentCard
                  key={agent.id}
                  agent={agent}
                  onHire={() => handleHire(agent)}
                  onSelect={() => handleSelectAgent(agent)}
                  isSelected={selectedAgents.some(a => a.id === agent.id)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Selected Agents for Comparison */}
              {selectedAgents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedAgents.map((agent) => (
                    <SubAgentCard
                      key={agent.id}
                      agent={agent}
                      onHire={() => handleHire(agent)}
                      onSelect={() => handleSelectAgent(agent)}
                      isSelected={true}
                      compact={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Select agents to compare
                  </h3>
                  <p className="text-white/70">
                    Choose up to 3 sub-agents to compare their features and pricing
                  </p>
                </div>
              )}

              {/* Available Agents */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Available Sub-Agents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subAgents
                    .filter(agent => !selectedAgents.some(a => a.id === agent.id))
                    .map((agent) => (
                      <SubAgentCard
                        key={agent.id}
                        agent={agent}
                        onHire={() => handleHire(agent)}
                        onSelect={() => handleSelectAgent(agent)}
                        isSelected={false}
                        compact={true}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface SubAgentCardProps {
  agent: SubAgent
  onHire: () => void
  onSelect: () => void
  isSelected: boolean
  compact?: boolean
}

function SubAgentCard({ agent, onHire, onSelect, isSelected, compact = false }: SubAgentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-white bg-white/5' : 'border border-white/10 bg-white/5'
      } rounded-xl ${compact ? 'p-4' : 'p-6'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Agent Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img 
            src={agent.profileImage} 
            alt={agent.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
          />
          <div>
            <h3 className="font-semibold text-white font-sans">{agent.name}</h3>
            <p className="text-sm text-white/70 font-sans">{agent.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white font-oxona">${agent.price}</div>
          <div className="text-sm text-white/60 font-sans">per month</div>
        </div>
      </div>

      {/* Task Preview */}
      <div className="relative h-14 mb-4 overflow-hidden rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div
          className={`absolute inset-0 flex items-center px-3 transition-transform duration-500 ${
            isHovered ? 'transform -translate-x-3' : ''
          }`}
        >
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
            <span className="text-lg">{agent.icon}</span>
            <div className="flex flex-col">
              <span className="text-sm text-white/80 font-medium font-sans">{agent.task}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-white">★</span>
            <span className="ml-1 text-sm font-semibold text-white">{agent.rating}</span>
          </div>
          <span className="text-sm text-white/70">({agent.reviews} reviews)</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onHire()
          }}
          className="px-4 py-2 rounded-lg bg-white text-black flex items-center space-x-2 group font-oxona"
        >
          <span>Hire Now</span>
          <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onSelect()
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
            isSelected ? 'bg-white text-black border-white' : 'text-white/80 border-white/20 hover:bg-white/10'
          }`}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  )
} 