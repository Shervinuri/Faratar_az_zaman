"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Send, Mic, User, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "framer-motion"

interface ChatInterfaceProps {
  module?: string
  initialMessages?: { role: "user" | "assistant"; content: string }[]
}

export default function ChatInterface({ module, initialMessages = [] }: ChatInterfaceProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    body: { module },
    initialMessages,
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isRecording, setIsRecording] = useState(false)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Simulate speech recognition (in a real app, you would use the Web Speech API)
  const handleMicClick = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate recording for 3 seconds
      setTimeout(() => {
        setIsRecording(false)
        handleInputChange({ target: { value: "Tell me about quantum computing" } } as any)
      }, 3000)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("flex items-start gap-3", message.role === "user" ? "justify-end" : "justify-start")}
            >
              {message.role === "assistant" && (
                <Avatar className="h-8 w-8 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500">
                  <div className="relative w-full h-full">
                    <Image src="/images/aegis-omega-logo.png" alt="AEGIS-Ω" fill className="object-cover" />
                  </div>
                </Avatar>
              )}

              <div
                className={cn(
                  "rounded-lg px-4 py-2 max-w-[80%]",
                  message.role === "user"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-100",
                )}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>

              {message.role === "user" && (
                <Avatar className="h-8 w-8 bg-gray-700">
                  <User className="h-4 w-4" />
                </Avatar>
              )}
            </motion.div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500">
                <div className="relative w-full h-full">
                  <Image src="/images/aegis-omega-logo.png" alt="AEGIS-Ω" fill className="object-cover" />
                </div>
              </Avatar>

              <div className="bg-gray-800 rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 text-sm">
              Error: {error.message || "Something went wrong. Please try again."}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 border-t border-gray-800 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={cn("text-gray-400", isRecording && "text-red-500")}
              onClick={handleMicClick}
            >
              <Mic className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask AEGIS-Ω anything..."
                className="bg-gray-800 border-gray-700 text-white pr-10"
                disabled={isLoading}
              />

              {isLoading ? (
                <div className="absolute right-3 top-3">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
                </div>
              ) : (
                input && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8 text-gray-400"
                    onClick={() => handleInputChange({ target: { value: "" } } as any)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )
              )}
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-2 text-center">
            AEGIS-Ω is powered by Groq AI. All interactions are processed with ethical oversight.
          </p>
        </div>
      </div>
    </div>
  )
}
