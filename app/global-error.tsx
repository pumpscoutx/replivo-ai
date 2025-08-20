'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-landing-gradient flex items-center justify-center">
          <div className="card-glass-dark p-8 rounded-2xl text-center max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
            <p className="text-white/70 mb-6">
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={reset}
              className="btn-white"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 