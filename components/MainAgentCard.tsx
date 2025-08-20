'use client'

import { useState } from 'react'
import { MainAgent } from '@/data/agents'

interface MainAgentCardProps {
  agent: MainAgent
  onViewSubAgents?: (subAgents: MainAgent['subAgents']) => void
  onHire?: (agent: MainAgent) => void
}

export default function MainAgentCard({ agent, onViewSubAgents, onHire }: MainAgentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showHowItWorks, setShowHowItWorks] = useState(false)

  return (
    <div
      className="agent-card group cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Agent Header */}
      <div className={`p-6 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white relative overflow-hidden rounded-t-xl`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img 
                src={agent.profileImage} 
                alt={agent.name}
                className="w-12 h-12 rounded-full border-2 border-white/30 object-cover shadow-lg"
              />
              <div className="text-4xl">{agent.icon}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-oxona font-bold">${agent.price}</div>
              <div className="text-sm opacity-90 font-sans">per month</div>
            </div>
          </div>
          <h3 className="text-xl font-big-slant mb-2">{agent.name}</h3>
          <p className="text-sm opacity-90 mb-4 font-sans">{agent.description}</p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium font-oxona">
              {agent.category}
            </span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-white">★</span>
                <span className="ml-1 text-sm font-semibold font-sans">{agent.rating}</span>
              </div>
              <span className="text-sm opacity-90 font-sans">({agent.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Content */}
      <div className="p-6">
        {/* Ratings and Reviews */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-white">★</span>
              <span className="ml-1 text-sm font-semibold text-white/90">{agent.rating}</span>
            </div>
            <span className="text-sm text-white/60">({agent.reviews} reviews)</span>
          </div>
          <div className="flex items-center text-sm text-white/60">
            <span className="mr-1">👥</span>
            {agent.subAgents.length} sub-agents
          </div>
        </div>

        {/* Moving Task Preview */}
        <div className="relative h-20 mb-6 overflow-hidden rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800">
          <div
            className={`absolute inset-0 flex items-center px-4 transition-transform duration-700 ${
              isHovered ? 'transform -translate-x-4' : ''
            }`}
          >
            <div className="flex space-x-4">
              {agent.subAgents.map((subAgent, index) => (
                <div
                  key={subAgent.id}
                  className={`flex items-center space-x-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 transition-all duration-500 ${
                    isHovered ? 'opacity-100 transform translate-y-0 scale-105' : 'opacity-80 transform translate-y-1 scale-100'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={subAgent.profileImage} 
                    alt={subAgent.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/20"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white font-sans">{subAgent.name}</span>
                    <span className="text-xs text-white/70 font-sans">{subAgent.task}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button 
            onClick={(e) => {
              e.stopPropagation()
              onHire?.(agent)
            }}
            className="px-4 py-2 rounded-lg bg-white text-black flex items-center space-x-2 group font-oxona"
          >
            <span>Hire Now</span>
            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
          <div className="flex items-center space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                onViewSubAgents?.(agent.subAgents)
              }}
              className="px-3 py-2 rounded-lg border border-white/20 text-sm font-sans text-white/80 hover:bg-white/10"
            >
              View Sub-Agents
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setShowHowItWorks(!showHowItWorks)
              }}
              className="px-3 py-2 rounded-lg border border-white/20 text-sm font-sans text-white/80 hover:bg-white/10"
            >
              How It Works
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Overlay */}
      {showHowItWorks && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl z-20 flex items-center justify-center p-6">
          <div className="bg-black border border-white/10 rounded-xl p-6 max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-big-slant text-white">How {agent.name} Works</h4>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setShowHowItWorks(false)
                }}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-white/70 mb-4 font-sans">{agent.howItWorks}</p>
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-white font-oxona">Key Features:</h5>
              <ul className="text-xs text-white/70 space-y-1 font-sans">
                {agent.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-white">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 