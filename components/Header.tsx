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
			<header className="sticky top-0 z-50">
				<div className="container-max px-4">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div 
							className="flex items-center gap-3 cursor-pointer"
							onClick={onLogoClick}
						>
							<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-600/30 to-neon-400/20 ring-neon flex items-center justify-center">
								<span className="text-neon-400">●</span>
							</div>
							<span className="text-2xl font-space-grotesk tracking-wide">nano</span>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center gap-8">
							<a href="#" className="text-white/70 hover:text-white transition-colors">Agents</a>
							<a href="#" className="text-white/70 hover:text-white transition-colors">Marketplace</a>
							<a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a>
							<a href="#" className="text-white/70 hover:text-white transition-colors">Support</a>
						</nav>

						{/* CTA Buttons */}
						<div className="hidden md:flex items-center gap-4">
							<button 
								onClick={onProgressTracker || (() => setShowProgressTracker(true))}
								className="text-white/70 hover:text-white transition-colors flex items-center gap-2 font-inter"
							>
								<span>📊</span>
								<span>Progress</span>
							</button>
							<button 
								onClick={onSignIn}
								className="text-white/70 hover:text-white transition-colors font-inter"
							>
								Sign In
							</button>
							<button 
								onClick={onGetStarted}
								className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-600 to-neon-400 text-black font-space-grotesk shadow-neon"
							>
								Get Started
							</button>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<span className="text-2xl">{isMenuOpen ? '×' : '☰'}</span>
						</button>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className="md:hidden py-4 border-t border-white/10">
							<nav className="flex flex-col gap-4">
								<a href="#" className="text-white/70 hover:text-white transition-colors">Agents</a>
								<a href="#" className="text-white/70 hover:text-white transition-colors">Marketplace</a>
								<a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a>
								<a href="#" className="text-white/70 hover:text-white transition-colors">Support</a>
								<button 
									onClick={() => {
										setShowProgressTracker(true)
										setIsMenuOpen(false)
									}}
									className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
								>
									<span>📊</span>
									<span>Progress Tracker</span>
								</button>
								<div className="pt-4 border-t border-white/10">
									<button className="text-white/70 hover:text-white transition-colors block w-full text-left mb-2">
										Sign In
									</button>
									<button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-neon-600 to-neon-400 text-black font-space-grotesk shadow-neon">
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