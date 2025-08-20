'use client'

import { useState } from 'react'
import ProgressTracker from './ProgressTracker'

interface HeaderProps {
  onLogoClick?: () => void
  onProgressTracker?: () => void
  onSignIn?: () => void
  onGetStarted?: () => void
}

export default function Header({ onLogoClick, onProgressTracker, onSignIn, onGetStarted }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showProgressTracker, setShowProgressTracker] = useState(false)

  return (
    <>
      <header className="bg-modern-header glass-effect sticky top-0 z-50">
        <div className="container-max px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={onLogoClick}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-white text-xl">⚡</span>
              </div>
              <span className="text-3xl font-oxona text-neutral-900 font-bold">REPLIVO</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Agents
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Marketplace
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Pricing
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                Support
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={onProgressTracker || (() => setShowProgressTracker(true))}
                className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center space-x-2 font-sans"
              >
                <span>📊</span>
                <span>Progress</span>
              </button>
              <button 
                onClick={onSignIn}
                className="text-neutral-600 hover:text-primary-600 transition-colors font-sans"
              >
                Sign In
              </button>
              <button 
                onClick={onGetStarted}
                className="button-primary font-oxona"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-2xl">{isMenuOpen ? '×' : '☰'}</span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Agents
                </a>
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Marketplace
                </a>
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Support
                </a>
                <button 
                  onClick={() => {
                    setShowProgressTracker(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center space-x-2"
                >
                  <span>📊</span>
                  <span>Progress Tracker</span>
                </button>
                <div className="pt-4 border-t border-neutral-200">
                  <button className="text-neutral-600 hover:text-primary-600 transition-colors block w-full text-left mb-2">
                    Sign In
                  </button>
                  <button className="button-primary w-full">
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Progress Tracker Modal */}
      {showProgressTracker && (
        <ProgressTracker onClose={() => setShowProgressTracker(false)} />
      )}
    </>
  )
} 