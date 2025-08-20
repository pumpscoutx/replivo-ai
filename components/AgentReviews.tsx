"use client"

import React from 'react'

interface AgentReviewsProps {
  agentName: string
  rating: number
  reviews: number
  onClose: () => void
}

const mockReviews = [
  { id: 1, user: 'Alex P.', comment: 'Super reliable and easy to work with.', stars: 5 },
  { id: 2, user: 'Jamie R.', comment: 'Delivered results quickly with clear communication.', stars: 5 },
  { id: 3, user: 'Sam T.', comment: 'Great value. The workflows saved us hours every week.', stars: 4 },
]

export default function AgentReviews({ agentName, rating, reviews, onClose }: AgentReviewsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-white/10 rounded-2xl w-full max-w-xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-space-grotesk text-white">Reviews for {agentName}</h2>
            <p className="text-white/70 text-sm">★ {rating} • {reviews} reviews</p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white text-2xl">×</button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto">
          {mockReviews.map(r => (
            <div key={r.id} className="p-4 rounded-lg border border-white/10 bg-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{r.user}</span>
                <span className="text-white">{'★'.repeat(r.stars)}</span>
              </div>
              <p className="text-white/80 text-sm">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 