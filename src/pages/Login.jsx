import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, appleProvider } from '../firebase'
import { Chrome, Apple } from 'lucide-react'

export default function Login() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      setError('')
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleAppleSignIn = async () => {
    try {
      setLoading(true)
      setError('')
      await signInWithPopup(auth, appleProvider)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Rheality Tracker</h1>
          <p className="text-gray-600">Your Wellness Companion</p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-center text-gray-700 text-sm leading-relaxed">
            Welcome! Sign in to start tracking your mental health, finances, wellness, productivity, and personal growth.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Sign In Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Chrome size={20} />
            Continue with Google
          </button>

          <button
            onClick={handleAppleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Apple size={20} />
            Continue with Apple
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-6 text-center">
            <div className="inline-block animate-spin">
              <div className="border-4 border-gray-300 border-t-indigo-600 rounded-full h-8 w-8"></div>
            </div>
            <p className="text-gray-600 text-sm mt-2">Signing in...</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-xs text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}