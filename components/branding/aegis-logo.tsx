"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AegisLogoProps {
  variant?: "3d" | "2d" | "text" | "full"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
}

export default function AegisLogo({ variant = "full", size = "md", className, animated = false }: AegisLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Size mapping
  const sizeMap = {
    sm: {
      container: "h-8 w-8",
      textSize: "text-sm",
      logoSize: 32,
    },
    md: {
      container: "h-12 w-12",
      textSize: "text-lg",
      logoSize: 48,
    },
    lg: {
      container: "h-16 w-16",
      textSize: "text-xl",
      logoSize: 64,
    },
    xl: {
      container: "h-24 w-24",
      textSize: "text-2xl",
      logoSize: 96,
    },
  }

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  // Logo only
  if (variant === "2d") {
    return (
      <div
        className={cn(sizeMap[size].container, "relative rounded-full overflow-hidden", animated && "group", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/images/aegis-omega-logo.png"
          alt="AEGIS-Ω Logo"
          width={sizeMap[size].logoSize}
          height={sizeMap[size].logoSize}
          className={cn("object-cover", animated && "transition-transform duration-500 group-hover:scale-110")}
        />
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>
    )
  }

  // Text only
  if (variant === "text") {
    return (
      <div
        className={cn(
          "font-bold bg-clip-text text-transparent",
          sizeMap[size].textSize,
          animated
            ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-colors duration-300"
            : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
          className,
        )}
      >
        AEGIS-Ω
      </div>
    )
  }

  // Full logo with text
  if (variant === "full") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div
          className={cn(sizeMap[size].container, "relative rounded-full overflow-hidden", animated && "group")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/images/aegis-omega-logo.png"
            alt="AEGIS-Ω Logo"
            width={sizeMap[size].logoSize}
            height={sizeMap[size].logoSize}
            className={cn("object-cover", animated && "transition-transform duration-500 group-hover:scale-110")}
          />
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
        </div>
        <div
          className={cn(
            "font-bold bg-clip-text text-transparent",
            sizeMap[size].textSize,
            animated
              ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-colors duration-300"
              : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
          )}
        >
          AEGIS-Ω
        </div>
      </div>
    )
  }

  // 3D animated logo (simplified version)
  return (
    <div className={cn(sizeMap[size].container, "relative rounded-full overflow-hidden", className)}>
      <motion.div
        animate={{
          rotateY: isHovered || animated ? 360 : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: animated ? Number.POSITIVE_INFINITY : 0,
          repeatType: "loop",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full h-full"
      >
        <Image
          src="/images/aegis-omega-logo.png"
          alt="AEGIS-Ω Logo"
          width={sizeMap[size].logoSize}
          height={sizeMap[size].logoSize}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>
  )
}
