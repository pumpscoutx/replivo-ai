'use client'

import { useState } from 'react'
import { MainAgent } from '@/data/agents'

interface MainAgentCardProps {
  agent: MainAgent
}

export default function MainAgentCard({ agent }: MainAgentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="agent-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Agent Header */}
      <div className={`p-6 bg-gradient-to-r ${agent.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl animate-float">{agent.icon}</div>
            <div className="text-right">
              <div className="text-2xl font-bold">${agent.price}</div>
              <div className="text-sm opacity-90">/month</div>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-display">{agent.name}</h3>
          <p className="text-sm opacity-90 leading-relaxed">{agent.description}</p>
        </div>
      </div>

      {/* Agent Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="badge badge-primary mb-4">
          {agent.category}
        </div>

        {/* Ratings and Reviews */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="ml-1 text-sm font-semibold text-neutral-900">{agent.rating}</span>
            </div>
            <span className="text-sm text-neutral-500">({agent.reviews} reviews)</span>
          </div>
          <div className="flex items-center text-sm text-neutral-500">
            <span className="mr-1">👥</span>
            {agent.subAgents.length} sub-agents
          </div>
        </div>

        {/* Moving Task Preview */}
        <div className="relative h-20 mb-6 overflow-hidden rounded-lg bg-neutral-50 border border-neutral-200">
          <div
            className={`absolute inset-0 flex items-center px-4 transition-transform duration-600 ease-in-out ${
              isHovered ? 'translate-x-0' : 'translate-x-0'
            }`}
          >
            <div className="flex space-x-3">
              {agent.subAgents.map((subAgent, index) => (
                <div
                  key={subAgent.id}
                  className={`flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-soft border border-neutral-200 transition-all duration-400 ${
                    isHovered 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-80 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg">{subAgent.icon}</span>
                  <span className="text-sm text-neutral-700 font-medium max-w-[120px] truncate">
                    {subAgent.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button className="button-primary flex items-center space-x-2 group">
            <span>Hire Now</span>
            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>
          <button className="button-ghost">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
} 