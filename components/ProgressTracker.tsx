'use client'

import { useState } from 'react'

interface ProgressData {
  month: string
  agentsHired: number
  tasksCompleted: number
  timeSaved: number
  efficiencyGain: number
  achievements: string[]
}

interface ProgressTrackerProps {
  onClose: () => void
}

export default function ProgressTracker({ onClose }: ProgressTrackerProps) {
  const [selectedMonth, setSelectedMonth] = useState('December 2024')
  
  const progressData: ProgressData = {
    month: 'December 2024',
    agentsHired: 3,
    tasksCompleted: 47,
    timeSaved: 23.5,
    efficiencyGain: 34,
    achievements: [
      'First Agent Hired',
      '10 Tasks Completed',
      'Time Saver Pro',
      'Efficiency Champion'
    ]
  }

  const monthlyData: ProgressData[] = [
    {
      month: 'December 2024',
      agentsHired: 3,
      tasksCompleted: 47,
      timeSaved: 23.5,
      efficiencyGain: 34,
      achievements: [
        'First Agent Hired',
        '10 Tasks Completed',
        'Time Saver Pro',
        'Efficiency Champion'
      ]
    },
    {
      month: 'November 2024',
      agentsHired: 2,
      tasksCompleted: 32,
      timeSaved: 18.2,
      efficiencyGain: 28,
      achievements: [
        'First Agent Hired',
        '10 Tasks Completed'
      ]
    },
    {
      month: 'October 2024',
      agentsHired: 1,
      tasksCompleted: 15,
      timeSaved: 8.5,
      efficiencyGain: 15,
      achievements: [
        'First Agent Hired'
      ]
    }
  ]

  const currentData = monthlyData.find(data => data.month === selectedMonth) || progressData

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Your Progress Tracker</h2>
            <p className="text-neutral-600 mt-1">Track your AI workforce journey</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {monthlyData.map((data) => (
                <option key={data.month} value={data.month}>
                  {data.month}
                </option>
              ))}
            </select>
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
          {/* Monthly Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              {currentData.month} Report
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Agents Hired"
                value={currentData.agentsHired}
                icon="🤖"
                color="from-blue-500 to-blue-600"
              />
              <MetricCard
                title="Tasks Completed"
                value={currentData.tasksCompleted}
                icon="✅"
                color="from-green-500 to-green-600"
              />
              <MetricCard
                title="Hours Saved"
                value={currentData.timeSaved}
                icon="⏰"
                color="from-purple-500 to-purple-600"
                suffix="hrs"
              />
              <MetricCard
                title="Efficiency Gain"
                value={currentData.efficiencyGain}
                icon="📈"
                color="from-orange-500 to-orange-600"
                suffix="%"
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Achievements Unlocked
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                >
                  <div className="text-2xl">🏆</div>
                  <div>
                    <div className="font-semibold text-neutral-900">{achievement}</div>
                    <div className="text-sm text-neutral-600">Achievement unlocked!</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Visualization */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Progress Trends
            </h3>
            <div className="space-y-6">
              <ProgressBar
                label="Agent Adoption"
                current={currentData.agentsHired}
                max={5}
                color="blue"
              />
              <ProgressBar
                label="Task Completion"
                current={currentData.tasksCompleted}
                max={100}
                color="green"
              />
              <ProgressBar
                label="Time Efficiency"
                current={currentData.efficiencyGain}
                max={100}
                color="purple"
              />
            </div>
          </div>

          {/* Insights */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              💡 This Month's Insights
            </h3>
            <div className="space-y-2 text-neutral-700">
              <p>• You've saved {currentData.timeSaved} hours this month using AI agents</p>
              <p>• Your efficiency has improved by {currentData.efficiencyGain}% compared to manual workflows</p>
              <p>• You're in the top 20% of users for agent adoption</p>
              <p>• Consider hiring a {currentData.agentsHired < 3 ? 'Social Media Manager' : 'Data Analyst'} to expand your capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: number
  icon: string
  color: string
  suffix?: string
}

function MetricCard({ title, value, icon, color, suffix = '' }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center text-white text-xl`}>
          {icon}
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-neutral-900">{value}{suffix}</div>
        </div>
      </div>
      <div className="text-sm font-medium text-neutral-600">{title}</div>
    </div>
  )
}

interface ProgressBarProps {
  label: string
  current: number
  max: number
  color: 'blue' | 'green' | 'purple' | 'orange'
}

function ProgressBar({ label, current, max, color }: ProgressBarProps) {
  const percentage = Math.min((current / max) * 100, 100)
  
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-neutral-700">{label}</span>
        <span className="text-sm text-neutral-600">{current}/{max}</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${colorClasses[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
} 