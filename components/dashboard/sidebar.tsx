"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Brain,
  Shield,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Network,
  Layers,
  Cpu,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import AegisLogo from "@/components/branding/aegis-logo"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  isActive: boolean
  isCollapsed: boolean
}

const SidebarItem = ({ icon, label, href, isActive, isCollapsed }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        isActive
          ? "bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 text-cyan-400"
          : "text-gray-400 hover:text-white hover:bg-gray-800",
      )}
    >
      {icon}
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  )
}

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const sidebarItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Cpu size={20} />,
      label: "Quantum Fractal Core",
      href: "/qcc",
    },
    {
      icon: <Shield size={20} />,
      label: "Ethical Projection Matrix",
      href: "/eom",
    },
    {
      icon: <Brain size={20} />,
      label: "Recursive Learning Kernel",
      href: "/alci",
    },
    {
      icon: <Network size={20} />,
      label: "Multi-Agent Swarm",
      href: "/nqam",
    },
    {
      icon: <Layers size={20} />,
      label: "Fractal Neural Visualization",
      href: "/qtse",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Meta-Recursive Cognition",
      href: "/chat",
    },
    {
      icon: <FileText size={20} />,
      label: "Blog",
      href: "/blog",
    },
  ]

  return (
    <div
      className={cn(
        "h-screen bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        {!isCollapsed ? (
          <AegisLogo variant="full" size="sm" animated />
        ) : (
          <AegisLogo variant="2d" size="sm" animated className="mx-auto" />
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800",
            isCollapsed && "absolute right-2",
          )}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="space-y-1">
          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            href="/settings"
            isActive={pathname === "/settings"}
            isCollapsed={isCollapsed}
          />
          <SidebarItem icon={<LogOut size={20} />} label="Logout" href="/" isActive={false} isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  )
}
