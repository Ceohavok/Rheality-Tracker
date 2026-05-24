import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { LogOut, Brain, Wallet, Heart, Zap, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const sections = [
    {
      title: 'Mental Progress',
      description: 'Track your mental health with personalized coping strategies',
      icon: Brain,
      color: 'bg-mental text-white',
      path: '/mental-progress'
    },
    {
      title: 'Financial Literacy',
      description: 'Learn about money, budget, save, and invest wisely',
      icon: Wallet,
      color: 'bg-financial text-gray-800',
      path: '/financial-literacy'
    },
    {
      title: 'Wellness Journey',
      description: 'Personalized fitness, nutrition, and hydration tracking',
      icon: Heart,
      color: 'bg-wellness text-white',
      path: '/wellness-journey'
    },
    {
      title: 'Productivity Chart',
      description: 'Track tasks, time, and boost your productivity',
      icon: Zap,
      color: 'bg-productivity text-white',
      path: '/productivity-chart'
    },
    {
      title: 'Journal',
      description: 'Your private, encrypted diary with customization',
      icon: BookOpen,
      color: 'bg-gray-700 text-white',
      path: '/journal'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Rheality Tracker</h1>
            <p className="text-gray-600 text-sm">Your Wellness Companion</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div
                key={index}
                onClick={() => navigate(section.path)}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                <div className={`${section.color} p-6 flex items-center justify-center`}>
                  <IconComponent size={48} />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h2>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}