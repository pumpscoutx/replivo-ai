'use client'

import { useState } from 'react'
import { mainAgents } from '@/data/agents'

interface AgentRecommenderProps {
  onClose: () => void
  onRequestCustom: () => void
  onAgentSelection?: (agent: any) => void
}

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AgentRecommender({ onClose, onRequestCustom, onAgentSelection }: AgentRecommenderProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI agent recommender. I can help you find the perfect agent for your business needs. What are you looking to accomplish?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response = generateRecommendation(inputValue)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateRecommendation = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('social') || input.includes('marketing') || input.includes('post')) {
      const marketingAgent = mainAgents.find(agent => agent.name === 'Marketing Master')
      if (marketingAgent) {
        setTimeout(() => {
          onAgentSelection?.(marketingAgent)
        }, 2000)
      }
      return "Based on your needs, I recommend the **Marketing Master** agent! It includes content creation, social media management, email campaigns, and analytics. Perfect for businesses looking to boost their marketing presence. Would you like to see more details?"
    } else if (input.includes('customer') || input.includes('support') || input.includes('help')) {
      const supportAgent = mainAgents.find(agent => agent.name === 'Customer Success Pro')
      if (supportAgent) {
        setTimeout(() => {
          onAgentSelection?.(supportAgent)
        }, 2000)
      }
      return "I think the **Customer Success Pro** would be perfect for you! It handles 24/7 support with intelligent ticket routing and satisfaction tracking. Great for improving customer satisfaction."
    } else if (input.includes('sales') || input.includes('lead') || input.includes('conversion')) {
      const salesAgent = mainAgents.find(agent => agent.name === 'Sales Dynamo')
      if (salesAgent) {
        setTimeout(() => {
          onAgentSelection?.(salesAgent)
        }, 2000)
      }
      return "The **Sales Dynamo** agent sounds like what you need! It handles lead generation, prospect nurturing, and conversion optimization. Ideal for boosting your sales performance."
    } else if (input.includes('data') || input.includes('analytics') || input.includes('report')) {
      const analyticsSubAgent = mainAgents.flatMap(agent => agent.subAgents).find(subAgent => subAgent.name === 'Analytics Expert')
      if (analyticsSubAgent) {
        setTimeout(() => {
          onAgentSelection?.(analyticsSubAgent)
        }, 2000)
      }
      return "Consider the **Analytics Expert** sub-agent! It processes data, generates reports, and identifies trends. Perfect for data-driven decision making."
    } else if (input.includes('email') || input.includes('newsletter') || input.includes('campaign')) {
      const emailSubAgent = mainAgents.flatMap(agent => agent.subAgents).find(subAgent => subAgent.name === 'Email Specialist')
      if (emailSubAgent) {
        setTimeout(() => {
          onAgentSelection?.(emailSubAgent)
        }, 2000)
      }
      return "The **Email Specialist** sub-agent might be perfect! It creates personalized email sequences and manages campaigns. Excellent for email marketing automation."
    } else {
      return "I'm not sure I have the perfect agent for your specific needs. Would you like me to help you request a custom agent instead? I can guide you through the process!"
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-gradient-to-r from-primary-50 to-accent-50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-medium">
              <span className="text-white text-xl">🤖</span>
            </div>
            <div>
              <h2 className="text-2xl font-big-slant text-neutral-900">AI Agent <span className="font-oxona text-primary-600">Recommender</span></h2>
              <p className="text-sm text-neutral-600 font-sans">Let me help you find the perfect agent</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.isUser
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-900'
                }`}
              >
                <p className="text-sm leading-relaxed font-sans">{message.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-neutral-100 text-neutral-900 p-4 rounded-2xl">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-neutral-200">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe what you need help with..."
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-sans"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-oxona"
            >
              <span>Send</span>
            </button>
          </div>
          
          {/* Custom Agent Request CTA */}
          <div className="mt-4 text-center">
            <button
              onClick={onRequestCustom}
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors font-sans"
            >
              <span>Need something custom?</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 