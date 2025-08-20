import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-landing-gradient flex items-center justify-center">
      <div className="card-glass-dark p-8 rounded-2xl text-center max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/" className="btn-white">
          Return Home
        </Link>
      </div>
    </div>
  )
} 