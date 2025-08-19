'use client'

import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="glass-effect sticky top-0 z-50">
      <div className="container-max px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-neutral-900 text-display">Replivo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Agents
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
              Support
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="button-ghost">
              Sign In
            </button>
            <button className="button-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-6 border-t border-neutral-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                Agents
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                Support
              </a>
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <button className="w-full text-left button-ghost">
                  Sign In
                </button>
                <button className="w-full button-primary">
                  Get Started
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
} 