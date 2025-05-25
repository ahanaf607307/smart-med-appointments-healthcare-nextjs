"use client"


import { useEffect, useState } from "react"
import ChatInput from "./components/chat-input"

// Animated background geometric shapes
const GeometricShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
    <div
      className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"
      style={{ animationDelay: "2s" }}
    ></div>
    <div
      className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"
      style={{ animationDelay: "0.5s" }}
    ></div>
  </div>
)

// Medical icons floating animation
const MedicalIcons = () => {
  const icons = [
    { icon: "🩺", delay: "0s" },
    { icon: "💊", delay: "1s" },
    { icon: "🏥", delay: "2s" },
    { icon: "⚕️", delay: "3s" },
    { icon: "🧬", delay: "4s" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-10 animate-float"
          style={{
            left: `${20 + index * 15}%`,
            top: `${10 + index * 10}%`,
            animationDelay: item.delay,
            animationDuration: "6s",
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
}

function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <GeometricShapes />
      <MedicalIcons />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-gray-800 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-fadeIn">
              ASK{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent relative">
                MEDICINE
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transform scale-x-0 animate-scaleX"></div>
              </span>
            </h1>
          </div>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            Your AI-powered medical assistant. Get instant, reliable answers to your health questions.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            {["24/7 Available", "Evidence-Based", "Confidential", "Instant Responses"].map((feature, index) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/40 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex items-start justify-center animate-fadeIn" style={{ animationDelay: "0.9s" }}>
          <ChatInput />
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8 animate-fadeIn" style={{ animationDelay: "1.2s" }}>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            <span className="font-semibold">Medical Disclaimer:</span> This AI assistant provides general health
            information only. Always consult with qualified healthcare professionals for medical advice, diagnosis, or
            treatment.
          </p>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Page
