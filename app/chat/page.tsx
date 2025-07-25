"use client"

import Sidebar from "@/components/dashboard/sidebar"
import ChatInterface from "@/components/chat/chat-interface"

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Meta-Recursive Cognition Hub
            </h1>
          </div>
        </header>

        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </div>
  )
}
