export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin mb-4">
          <div className="border-4 border-gray-300 border-t-indigo-600 rounded-full h-12 w-12"></div>
        </div>
        <p className="text-gray-700 font-semibold">Loading Rheality Tracker...</p>
      </div>
    </div>
  )
}