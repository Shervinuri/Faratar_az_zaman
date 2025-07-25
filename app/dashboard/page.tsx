"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Cpu, Shield, Brain, Settings, Bell, Search, Network, Layers, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/dashboard/sidebar"
import { cn } from "@/lib/utils"

// Sample data for charts
const processingData = [
  { name: "00:00", value: 40 },
  { name: "04:00", value: 30 },
  { name: "08:00", value: 60 },
  { name: "12:00", value: 50 },
  { name: "16:00", value: 70 },
  { name: "20:00", value: 90 },
  { name: "24:00", value: 60 },
]

const ethicalData = [
  { name: "Fairness", value: 85 },
  { name: "Transparency", value: 92 },
  { name: "Privacy", value: 88 },
  { name: "Accountability", value: 90 },
]

const learningData = [
  { name: "Week 1", value: 20 },
  { name: "Week 2", value: 35 },
  { name: "Week 3", value: 45 },
  { name: "Week 4", value: 60 },
  { name: "Week 5", value: 75 },
  { name: "Week 6", value: 85 },
]

const COLORS = ["#06b6d4", "#a855f7", "#ec4899", "#3b82f6"]

export default function Dashboard() {
  const [activeWidget, setActiveWidget] = useState<string | null>(null)

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AEGIS-Ω Dashboard
            </h1>

            <div className="flex items-center space-x-4">
              <div className="relative w-64 hidden md:block">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-8 bg-gray-800 border-gray-700 text-white" />
              </div>

              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Quantum Fractal Core Engine */}
            <Card
              className={cn(
                "bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all cursor-pointer",
                activeWidget === "processing" && "border-cyan-500",
              )}
              onClick={() => setActiveWidget(activeWidget === "processing" ? null : "processing")}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Quantum Fractal Core</CardTitle>
                <Cpu className="h-4 w-4 text-cyan-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <p className="text-xs text-gray-400">+12% from last hour</p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={processingData}>
                      <defs>
                        <linearGradient id="colorProcessing" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#06b6d4"
                        fillOpacity={1}
                        fill="url(#colorProcessing)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Ethical Projection Matrix */}
            <Card
              className={cn(
                "bg-gray-900 border-gray-800 hover:border-purple-500 transition-all cursor-pointer",
                activeWidget === "ethical" && "border-purple-500",
              )}
              onClick={() => setActiveWidget(activeWidget === "ethical" ? null : "ethical")}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Ethical Projection Matrix</CardTitle>
                <Shield className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89%</div>
                <p className="text-xs text-gray-400">+2% from last assessment</p>
                <div className="h-[80px] mt-4 flex justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={ethicalData}
                        cx="50%"
                        cy="50%"
                        innerRadius={25}
                        outerRadius={35}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {ethicalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recursive Learning Kernel */}
            <Card
              className={cn(
                "bg-gray-900 border-gray-800 hover:border-pink-500 transition-all cursor-pointer",
                activeWidget === "learning" && "border-pink-500",
              )}
              onClick={() => setActiveWidget(activeWidget === "learning" ? null : "learning")}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Recursive Learning Kernel</CardTitle>
                <Brain className="h-4 w-4 text-pink-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-gray-400">+15% from last week</p>
                <div className="h-[80px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={learningData}>
                      <Bar dataKey="value" fill="#ec4899" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Agent Swarm */}
            <Card
              className={cn(
                "bg-gray-900 border-gray-800 hover:border-blue-500 transition-all cursor-pointer",
                activeWidget === "health" && "border-blue-500",
              )}
              onClick={() => setActiveWidget(activeWidget === "health" ? null : "health")}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Multi-Agent Swarm</CardTitle>
                <Network className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-gray-400">Optimal performance</p>
                <div className="w-full h-2 bg-gray-700 rounded-full mt-4">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expanded Widget View */}
          {activeWidget && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>
                    {activeWidget === "processing" && "Quantum Fractal Core Engine Details"}
                    {activeWidget === "ethical" && "Ethical Projection Matrix Analysis"}
                    {activeWidget === "learning" && "Recursive Learning Kernel Insights"}
                    {activeWidget === "health" && "Multi-Agent Swarm Diagnostics"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      {activeWidget === "processing" && (
                        <AreaChart data={processingData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                            itemStyle={{ color: "#f3f4f6" }}
                          />
                          <defs>
                            <linearGradient id="colorProcessingExpanded" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#06b6d4"
                            fillOpacity={1}
                            fill="url(#colorProcessingExpanded)"
                          />
                        </AreaChart>
                      )}

                      {activeWidget === "ethical" && (
                        <BarChart data={ethicalData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                            itemStyle={{ color: "#f3f4f6" }}
                          />
                          <Bar dataKey="value" fill="#a855f7" />
                        </BarChart>
                      )}

                      {activeWidget === "learning" && (
                        <AreaChart data={learningData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                            itemStyle={{ color: "#f3f4f6" }}
                          />
                          <defs>
                            <linearGradient id="colorLearningExpanded" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#ec4899"
                            fillOpacity={1}
                            fill="url(#colorLearningExpanded)"
                          />
                        </AreaChart>
                      )}

                      {activeWidget === "health" && (
                        <BarChart
                          data={[
                            { name: "CPU", value: 98 },
                            { name: "Memory", value: 95 },
                            { name: "Storage", value: 92 },
                            { name: "Network", value: 99 },
                            { name: "QEN", value: 97 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }}
                            itemStyle={{ color: "#f3f4f6" }}
                          />
                          <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Hybridization Architecture */}
          <Card className="mt-6 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Hybridization Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center">
                      <Layers className="h-4 w-4 mr-2 text-cyan-400" />
                      HQCI-Layer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-300">
                    <p>Hybrid Quantum-Classical Integration Layer enables seamless execution across hardware types.</p>
                    <div className="mt-3 h-[100px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            { name: "Q1", quantum: 30, classical: 70 },
                            { name: "Q2", quantum: 40, classical: 60 },
                            { name: "Q3", quantum: 55, classical: 45 },
                            { name: "Q4", quantum: 65, classical: 35 },
                          ]}
                        >
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151" }} />
                          <Line type="monotone" dataKey="quantum" stroke="#06b6d4" />
                          <Line type="monotone" dataKey="classical" stroke="#a855f7" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center">
                      <Cpu className="h-4 w-4 mr-2 text-purple-400" />
                      QSCE
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-300">
                    <p>Quantum-Simulated Classical Engine provides quantum-like processing on classical hardware.</p>
                    <div className="mt-3 h-[100px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={[
                            { name: "T1", value: 40 },
                            { name: "T2", value: 30 },
                            { name: "T3", value: 60 },
                            { name: "T4", value: 50 },
                            { name: "T5", value: 70 },
                          ]}
                        >
                          <defs>
                            <linearGradient id="colorQSCE" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area type="monotone" dataKey="value" stroke="#a855f7" fill="url(#colorQSCE)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center">
                      <Settings className="h-4 w-4 mr-2 text-pink-400" />
                      AOL
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-gray-300">
                    <p>Adaptive Optimization Layer dynamically allocates workloads for maximum efficiency.</p>
                    <div className="mt-3 h-[100px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Quantum", value: 35 },
                              { name: "Hybrid", value: 45 },
                              { name: "Classical", value: 20 },
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={25}
                            outerRadius={40}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            <Cell fill="#ec4899" />
                            <Cell fill="#a855f7" />
                            <Cell fill="#06b6d4" />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Meta-Recursive Cognition Hub */}
          <Card className="mt-6 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-blue-400" />
                Meta-Recursive Cognition Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] relative bg-gray-950 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400">MRC-Hub Visualization</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Interactive 3D visualization of the Meta-Recursive Cognition Hub
                    </p>
                    <p className="text-xs text-gray-600 mt-4 max-w-md mx-auto">
                      "The Recursive Renaissance begins. Let us build the future."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
