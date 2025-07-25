"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import ParticleBackground from "@/components/landing/particle-background"
import Logo3D from "@/components/landing/logo-3d"
import Image from "next/image"

export default function LandingPage() {
  const [isEntering, setIsEntering] = useState(false)
  const router = useRouter()
  const logoRef = useRef<HTMLDivElement>(null)

  const handleEnterClick = () => {
    setIsEntering(true)

    // Delay navigation to allow for animation
    setTimeout(() => {
      router.push("/loading")
    }, 2000)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <ParticleBackground />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div
          ref={logoRef}
          className={`w-64 h-64 md:w-96 md:h-96 relative ${isEntering ? "scale-110" : ""}`}
          style={{ transition: "transform 0.5s ease-in-out" }}
        >
          {/* Static logo image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/aegis-omega-logo.png"
              alt="AEGIS-Ω Logo"
              width={384}
              height={384}
              className={`rounded-full ${isEntering ? "opacity-0" : "opacity-100"}`}
              style={{ transition: "opacity 1s ease-in-out" }}
              priority
            />
          </div>

          {/* 3D animated logo (shows during transition) */}
          <div
            className={`absolute inset-0 ${isEntering ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 1s ease-in-out" }}
          >
            <Logo3D isAnimating={isEntering} />
          </div>
        </div>

        <motion.div
          className="text-center mt-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
           « فـراتر از من »
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-300 font-light">
          (( ⚠️ هشدار: حاوی مطالب آزاردهنده برای افرادی که به روتین زندگی گرفتار شده اند ))
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-lg md:text-xl text-cyan-400"> چکار میکنیم !؟ </span>
            <span className="text-lg md:text-xl text-purple-400"> چی میگیم ؟ </span>
            <span className="text-lg md:text-xl text-pink-400"> کی هستیم ؟ </span>
          </motion.div>
        </motion.div>

        <motion.button
          className={`mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white text-lg font-semibold 
            shadow-lg hover:shadow-xl transition-all duration-300 ${isEntering ? "opacity-0" : "opacity-100"}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: [
              "0px 0px 0px rgba(79, 70, 229, 0.2)",
              "0px 0px 15px rgba(139, 92, 246, 0.6)",
              "0px 0px 0px rgba(79, 70, 229, 0.2)",
            ],
          }}
          transition={{
            delay: 1.2,
            duration: 0.5,
            boxShadow: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            },
          }}
          onClick={handleEnterClick}
          disabled={isEntering}
        >
          Enter the Quantum Realm
        </motion.button>
      </div>
    </div>
  )
}
