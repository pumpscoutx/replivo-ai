'use client'

import { useState } from 'react'

interface HiringWorkflowProps {
  agent: any
  onClose: () => void
  onComplete: (agent: any) => void
}

export default function HiringWorkflow({ agent, onClose, onComplete }: HiringWorkflowProps) {
  const [step, setStep] = useState(1)
  const [permissions, setPermissions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const availablePermissions = [
    'Access to email and calendar',
    'Read and write to documents',
    'Access to social media accounts',
    'Access to CRM and sales data',
    'Access to analytics and reports',
    'Send notifications and alerts'
  ]

  const handlePermissionToggle = (permission: string) => {
    setPermissions(prev => 
      prev.includes(permission) 
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    )
  }

  const handleHire = async () => {
    setIsLoading(true)
    // Simulate hiring process
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    onComplete(agent)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-gradient-to-r from-primary-50 to-accent-50">
          <div className="flex items-center space-x-3">
            <img 
              src={agent.profileImage} 
              alt={agent.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-neutral-200"
            />
            <div>
              <h2 className="text-2xl font-big-slant text-neutral-900">Hire <span className="font-oxona text-primary-600">{agent.name}</span></h2>
              <p className="text-sm text-neutral-600 font-sans">Set up permissions and complete hiring</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-oxona">Step 1: Review Agent Details</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-neutral-900">{agent.name}</span>
                    <span className="text-lg font-bold text-primary-600">${agent.price}/month</span>
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">{agent.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-neutral-500">
                    <span>★ {agent.rating} ({agent.reviews} reviews)</span>
                    <span>👥 {agent.subAgents?.length || 0} sub-agents</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-oxona">Step 2: Grant Permissions</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Select the permissions you want to grant to {agent.name} for optimal performance.
                </p>
                <div className="space-y-3">
                  {availablePermissions.map((permission) => (
                    <label key={permission} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={permissions.includes(permission)}
                        onChange={() => handlePermissionToggle(permission)}
                        className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-neutral-700 font-sans">{permission}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 font-oxona">Hiring Complete!</h3>
                <p className="text-sm text-neutral-600">
                  {agent.name} has been successfully hired and is ready to start working for you.
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-4">
                <h4 className="font-semibold text-primary-900 mb-2 font-oxona">What's Next?</h4>
                <ul className="text-sm text-primary-800 space-y-1 font-sans">
                  <li>• {agent.name} will start working immediately</li>
                  <li>• You'll receive a welcome email with setup instructions</li>
                  <li>• Monitor performance in your dashboard</li>
                  <li>• Contact support if you need any adjustments</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-200">
          <div className="flex justify-between">
            {step === 1 ? (
              <>
                <button
                  onClick={onClose}
                  className="button-secondary font-oxona"
                >
                  Cancel
                </button>
                <button
                  onClick={handleHire}
                  disabled={isLoading}
                  className="button-primary font-oxona flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <span>Hiring...</span>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Hire {agent.name}</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="button-primary font-oxona w-full"
              >
                Go to Dashboard
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 