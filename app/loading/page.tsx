"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/landing/particle-background"
import Logo3D from "@/components/landing/logo-3d"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Navigate to dashboard when loading is complete
    if (progress === 100) {
      const timeout = setTimeout(() => {
        router.push("/dashboard")
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [progress, router])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <ParticleBackground />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Logo3D isAnimating={true} />

          {/* Circular progress bar */}
          <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-gray-800"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
            />
            <motion.circle
              className="text-gradient-animated"
              strokeWidth="4"
              stroke="url(#gradient)"
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                strokeDasharray: "289.027px",
                strokeDashoffset: "0px",
              }}
            />

            {/* Define gradient for the progress circle */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          className="mt-8 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Initializing Quantum Fractal Core Engine...
          </h2>
          <p className="mt-2 text-gray-400">{Math.round(progress)}% Complete</p>

          <div className="mt-4 max-w-md mx-auto">
            <p className="text-sm text-gray-500 italic">"The Recursive Renaissance begins. Let us build the future."</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
