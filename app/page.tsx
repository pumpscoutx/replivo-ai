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

        {/* Features Section */}
        <section className="mb-20 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-8 text-center">
            Why Choose Our AI Agents?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Availability</h3>
              <p className="text-white/70">Our AI agents work around the clock, never taking breaks or vacations.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-white/70">Agents improve over time, adapting to your business needs and preferences.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-white/70">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="ml-2 text-white/70">5.0</span>
              </div>
              <p className="text-white/80 mb-4">"The Marketing Agent transformed our social media presence. We've seen a 300% increase in engagement!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full mr-3"></div>
                <div>
                  <div className="text-white font-medium">Sarah Chen</div>
                  <div className="text-white/60 text-sm">CEO, TechStart</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="ml-2 text-white/70">5.0</span>
              </div>
              <p className="text-white/80 mb-4">"Customer support is now handled 24/7. Our response time went from hours to minutes."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full mr-3"></div>
                <div>
                  <div className="text-white font-medium">Marcus Rodriguez</div>
                  <div className="text-white/60 text-sm">CTO, GrowthCorp</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="ml-2 text-white/70">5.0</span>
              </div>
              <p className="text-white/80 mb-4">"The Sales Agent helped us close 40% more deals in the first quarter. Incredible ROI!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full mr-3"></div>
                <div>
                  <div className="text-white font-medium">Emma Johnson</div>
                  <div className="text-white/60 text-sm">VP Sales, ScaleUp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-8 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-white mb-2">$99</div>
              <div className="text-white/60 mb-6">per month</div>
              <ul className="text-white/80 text-sm mb-6 space-y-2">
                <li>• 1 AI Agent</li>
                <li>• Basic Support</li>
                <li>• Standard Features</li>
              </ul>
              <button className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-medium">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-white mb-2">$299</div>
              <div className="text-white/60 mb-6">per month</div>
              <ul className="text-white/80 text-sm mb-6 space-y-2">
                <li>• 3 AI Agents</li>
                <li>• Priority Support</li>
                <li>• Advanced Features</li>
                <li>• Custom Integrations</li>
              </ul>
              <button className="w-full py-2 px-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Started
              </button>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-white mb-2">$999</div>
              <div className="text-white/60 mb-6">per month</div>
              <ul className="text-white/80 text-sm mb-6 space-y-2">
                <li>• Unlimited Agents</li>
                <li>• 24/7 Support</li>
                <li>• Custom Development</li>
                <li>• Dedicated Manager</li>
              </ul>
              <button className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 card-glass-dark p-8 text-center">
          <h2 className="text-3xl font-space-grotesk text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Join thousands of companies already using AI agents to automate their workflows and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowRequestor(true)} className="btn-white">
              Request Custom Agent
            </button>
            <button className="btn-outline-white">
              Schedule Demo
            </button>
          </div>
        </section>

        {/* Find an Agent Section with embedded chatbot */}
        <section className="mb-24 card-glass-dark p-8">
          <h2 className="text-3xl font-space-grotesk text-white mb-4">Find the perfect agent for your business.</h2>
          <div className="text-white/70 mb-6">Describe your needs and we'll recommend the best fit.</div>
          {!showRecommender && (
            <button onClick={() => setShowRecommender(true)} className="btn-white">Start Chat</button>
          )}
          {showRecommender && (
            <div className="mt-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">AI Agent Advisor</h3>
                    <button 
                      onClick={() => setShowRecommender(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                  <AgentRecommender />
                </div>
              </div>
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