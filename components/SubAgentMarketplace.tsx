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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Sub-Agent Marketplace</h2>
            <p className="text-neutral-600 mt-1">Browse and hire specialized sub-agents</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('compare')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'compare'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Compare ({selectedAgents.length}/3)
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
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
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Select agents to compare
                  </h3>
                  <p className="text-neutral-600">
                    Choose up to 3 sub-agents to compare their features and pricing
                  </p>
                </div>
              )}

              {/* Available Agents */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
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
      className={`card-minimal group cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary-500 bg-primary-50' : ''
      } ${compact ? 'p-4' : 'p-6'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Agent Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{agent.icon}</div>
          <div>
            <h3 className="font-semibold text-neutral-900">{agent.name}</h3>
            <p className="text-sm text-neutral-600">{agent.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-neutral-900">${agent.price}</div>
          <div className="text-sm text-neutral-500">per month</div>
        </div>
      </div>

      {/* Task Preview */}
      <div className="relative h-12 mb-4 overflow-hidden rounded-lg bg-neutral-50">
        <div
          className={`absolute inset-0 flex items-center px-3 transition-transform duration-500 ${
            isHovered ? 'transform -translate-x-2' : ''
          }`}
        >
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-neutral-200">
            <span className="text-sm">{agent.icon}</span>
            <span className="text-sm text-neutral-700 font-medium">{agent.task}</span>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-semibold text-neutral-900">{agent.rating}</span>
          </div>
          <span className="text-sm text-neutral-500">({agent.reviews} reviews)</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onHire()
          }}
          className="button-primary flex items-center space-x-2 group"
        >
          <span>Hire Now</span>
          <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onSelect()
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isSelected
              ? 'bg-primary-100 text-primary-700'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  )
} 