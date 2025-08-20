'use client'

import { useState } from 'react'
import { MainAgent } from '@/data/agents'
import { useRouter } from 'next/navigation'
import AgentReviews from './AgentReviews'

interface MainAgentCardProps {
  agent: MainAgent
  onViewSubAgents?: (subAgents: MainAgent['subAgents']) => void
  onHire?: (agent: MainAgent) => void
}

export default function MainAgentCard({ agent, onViewSubAgents, onHire }: MainAgentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  const [showReviews, setShowReviews] = useState(false)
  const router = useRouter()

  const formatPrice = (price: number) => {
    return `$${price}`
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = (rating % 1) >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>)
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>)
      }
    }
    return stars
  }

  return (
    <div
      className="agent-card bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-700 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2"
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
              <div className="text-xl font-bold text-white">{formatPrice(agent.price)}</div>
              <div className="text-xs opacity-90">per month</div>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
          <p className="text-sm opacity-90 mb-3">{agent.description}</p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
              {agent.category}
            </span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-white">★</span>
                <span className="ml-1 text-sm font-semibold">{agent.rating}</span>
              </div>
              <span className="text-sm opacity-90">({agent.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Content */}
      <div className="p-5">
        {/* Hover How-It-Works snippet */}
        <div className="hidden group-hover:block mb-4">
          <p className="text-sm text-white/70 italic">{agent.howItWorks.slice(0, 140)}{agent.howItWorks.length > 140 ? '…' : ''}</p>
        </div>
        
        {/* Ratings and Reviews */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-white">★</span>
              <span className="ml-1 text-sm font-semibold text-white/90">{agent.rating}</span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setShowReviews(true) }} className="text-sm text-white/80 underline-offset-2 hover:underline">
              ({agent.reviews} reviews)
            </button>
          </div>
          <div className="flex items-center text-sm text-white/60">
            <span className="mr-1">👥</span>
            {agent.subAgents.length} sub-agents
          </div>
        </div>

        {/* Moving Task Preview */}
        <div className="relative h-14 mb-6 overflow-hidden rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800 marquee">
          <div className="marquee__inner px-4">
            {[...agent.subAgents, ...agent.subAgents].map((subAgent, index) => (
              <span key={`${subAgent.id}-${index}`} className="text-sm text-white/80 bg-white/10 border border-white/10 rounded-full px-3 py-1">
                {subAgent.task}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                onViewSubAgents?.(agent.subAgents)
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              View Sub-Agents
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                onHire?.(agent)
              }}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Hire Bundle
            </button>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/agents/${agent.id}`)
            }}
            className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Hire Now
          </button>
        </div>
      </div>

      {/* Agent Reviews Modal */}
      {showReviews && (
        <AgentReviews
          agent={agent}
          onClose={() => setShowReviews(false)}
        />
      )}
    </div>
  )
} 