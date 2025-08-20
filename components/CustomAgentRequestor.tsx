'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Users, TrendingUp, Zap } from 'lucide-react'

interface CustomAgentRequestorProps {
  onClose: () => void
  onBack?: () => void
}

interface TrendingTemplate {
  id: string
  name: string
  description: string
  category: string
  demand: number
  icon: string
}

const trendingTemplates: TrendingTemplate[] = [
  {
    id: 'restaurant-manager',
    name: 'Restaurant Manager',
    description: 'Complete restaurant operations management',
    category: 'Hospitality',
    demand: 89,
    icon: '🍽️'
  },
  {
    id: 'ecommerce-optimizer',
    name: 'E-commerce Optimizer',
    description: 'Product recommendations and conversion optimization',
    category: 'E-commerce',
    demand: 156,
    icon: '🛒'
  },
  {
    id: 'legal-assistant',
    name: 'Legal Assistant',
    description: 'Document review and legal research automation',
    category: 'Legal',
    demand: 67,
    icon: '⚖️'
  },
  {
    id: 'healthcare-coordinator',
    name: 'Healthcare Coordinator',
    description: 'Patient scheduling and medical record management',
    category: 'Healthcare',
    demand: 234,
    icon: '🏥'
  }
]

export default function CustomAgentRequestor({ onClose, onBack }: CustomAgentRequestorProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    useCase: '',
    requirements: '',
    timeline: '2-4 weeks',
    budget: '1000-5000',
    allowPooling: true
  })
  const [step, setStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-secondary-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-secondary-900">Custom Agent Request</h2>
                <p className="text-sm text-secondary-500">Tell us what you need, we'll build it</p>
              </div>
            </div>
            <button
              onClick={onBack || onClose}
              className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-b border-secondary-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-secondary-600">Step {step} of 3</span>
              <span className="text-sm text-secondary-500">
                {step === 1 ? 'Basic Info' : step === 2 ? 'Requirements' : 'Review & Submit'}
              </span>
            </div>
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                initial={{ width: '33%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Trending Agent Templates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trendingTemplates.map((template) => (
                      <motion.div
                        key={template.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedTemplate === template.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-secondary-200 hover:border-primary-300'
                        }`}
                        onClick={() => {
                          setSelectedTemplate(template.id)
                          setFormData(prev => ({
                            ...prev,
                            useCase: template.description,
                            industry: prev.industry || template.category
                          }))
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{template.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-secondary-900">{template.name}</h4>
                            <p className="text-sm text-secondary-600">{template.description}</p>
                            <div className="flex items-center mt-2">
                              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                              <span className="text-xs text-secondary-500">{template.demand} requests</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Requirements & Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Use Case Description
                      </label>
                      <textarea
                        value={formData.useCase}
                        onChange={(e) => handleInputChange('useCase', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Describe what you want the agent to do..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Specific Requirements
                      </label>
                      <textarea
                        value={formData.requirements}
                        onChange={(e) => handleInputChange('requirements', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="List any specific features, integrations, or requirements..."
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="2-4 weeks">2-4 weeks</option>
                          <option value="1-2 months">1-2 months</option>
                          <option value="2+ months">2+ months</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="1000-5000">$1,000 - $5,000</option>
                          <option value="5000-15000">$5,000 - $15,000</option>
                          <option value="15000-50000">$15,000 - $50,000</option>
                          <option value="50000+">$50,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-2">Cost Sharing Pool</h4>
                      <p className="text-sm text-secondary-600 mb-3">
                        Allow other businesses with similar needs to join your request and share development costs.
                      </p>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.allowPooling}
                          onChange={(e) => handleInputChange('allowPooling', e.target.checked)}
                          className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-secondary-700">
                          Yes, I'm open to cost sharing with other businesses
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Review & Submit</h3>
                  <div className="bg-secondary-50 p-6 rounded-lg space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-secondary-600">Business:</span>
                        <p className="text-secondary-900">{formData.businessName || 'Not specified'}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-secondary-600">Industry:</span>
                        <p className="text-secondary-900">{formData.industry || 'Not specified'}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-secondary-600">Use Case:</span>
                      <p className="text-secondary-900">{formData.useCase || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-secondary-600">Requirements:</span>
                      <p className="text-secondary-900">{formData.requirements || 'Not specified'}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium text-secondary-600">Timeline:</span>
                        <p className="text-secondary-900">{formData.timeline}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-secondary-600">Budget:</span>
                        <p className="text-secondary-900">{formData.budget}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-secondary-600">Cost Sharing:</span>
                      <p className="text-secondary-900">
                        {formData.allowPooling ? 'Enabled' : 'Disabled'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          {!submitted ? (
          <div className="p-6 border-t border-secondary-200">
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              {step === 3 ? (
                <button
                  onClick={handleSubmit}
                  className="button-primary"
                >
                  Submit Request
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="button-primary"
                >
                  Next Step
                </button>
              )}
            </div>
          </div>
          ) : (
            <div className="p-8 text-center space-y-3">
              <div className="text-5xl">✅</div>
              <h3 className="text-xl font-semibold">Request submitted</h3>
              <p className="text-secondary-600">We’ll get back to you within 24 hours.</p>
              <div className="pt-2">
                <button onClick={onClose} className="button-primary">Close</button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 