"use client"
import { Heart, Info, BarChart2, Activity, Clock, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/dashboard/sidebar"

export default function NeuroQuantumAffectiveModule() {
  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-600">
              NeuroQuantum Affective Module (NQAM)
            </h1>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-700">
                <Info className="h-4 w-4 mr-2" />
                Documentation
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <Tabs defaultValue="emotional" className="w-full">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="emotional">Emotional States</TabsTrigger>
              <TabsTrigger value="physiological">Physiological Data</TabsTrigger>
              <TabsTrigger value="encoding">Emotion Encoding</TabsTrigger>
              <TabsTrigger value="historical">Historical Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="emotional" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800 md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart2 className="h-5 w-5 mr-2 text-pink-400" />
                      Emotional State Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] bg-gray-950 rounded-md relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400">Real-time Emotional State Visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-pink-400" />
                      Current Emotional Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Positive Sentiment</span>
                          <span className="text-sm text-green-400">72%</span>
                        </div>
                        <Progress value={72} className="h-1.5 bg-gray-700" indicatorClassName="bg-green-500" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Engagement</span>
                          <span className="text-sm text-green-400">85%</span>
                        </div>
                        <Progress value={85} className="h-1.5 bg-gray-700" indicatorClassName="bg-green-500" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Curiosity</span>
                          <span className="text-sm text-green-400">90%</span>
                        </div>
                        <Progress value={90} className="h-1.5 bg-gray-700" indicatorClassName="bg-green-500" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Frustration</span>
                          <span className="text-sm text-yellow-400">15%</span>
                        </div>
                        <Progress value={15} className="h-1.5 bg-gray-700" indicatorClassName="bg-yellow-500" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Confusion</span>
                          <span className="text-sm text-yellow-400">12%</span>
                        </div>
                        <Progress value={12} className="h-1.5 bg-gray-700" indicatorClassName="bg-yellow-500" />
                      </div>

                      <div className="p-3 bg-gray-800 rounded-md mt-6">
                        <h4 className="text-sm font-medium mb-2">Emotional Summary</h4>
                        <p className="text-xs text-gray-300">
                          Current emotional state indicates high engagement and curiosity with minimal frustration. The
                          user appears to be in an optimal state for learning and interaction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle>Sentiment Analysis by Topic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-4 bg-gray-800 rounded-md">
                      <h4 className="text-sm font-medium text-center mb-3">Quantum Physics</h4>
                      <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-400">92%</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-400 mt-3">Very Positive</p>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-md">
                      <h4 className="text-sm font-medium text-center mb-3">Machine Learning</h4>
                      <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-400">88%</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-400 mt-3">Very Positive</p>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-md">
                      <h4 className="text-sm font-medium text-center mb-3">Ethics</h4>
                      <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                          <span className="text-2xl font-bold text-yellow-400">75%</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-400 mt-3">Positive</p>
                    </div>

                    <div className="p-4 bg-gray-800 rounded-md">
                      <h4 className="text-sm font-medium text-center mb-3">User Interface</h4>
                      <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-400">85%</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-gray-400 mt-3">Very Positive</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="physiological" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Physiological Data Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Real-time Physiological Metrics</h3>

                      <div className="space-y-6">
                        <div className="p-4 bg-gray-800 rounded-md">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium flex items-center">
                              <Activity className="h-4 w-4 mr-2 text-pink-400" />
                              Heart Rate
                            </h4>
                            <span className="text-lg font-bold text-pink-400">72 BPM</span>
                          </div>
                          <div className="h-[100px] bg-gray-950 rounded-md relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <p className="text-xs text-gray-500">Heart Rate Visualization</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-gray-800 rounded-md">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-medium flex items-center">
                              <Activity className="h-4 w-4 mr-2 text-blue-400" />
                              Skin Conductance
                            </h4>
                            <span className="text-lg font-bold text-blue-400">2.4 µS</span>
                          </div>
                          <div className="h-[100px] bg-gray-950 rounded-md relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <p className="text-xs text-gray-500">Skin Conductance Visualization</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Physiological Interpretation</h3>

                      <div className="p-4 bg-gray-800 rounded-md h-[calc(100%-2rem)]">
                        <h4 className="text-sm font-medium mb-3">Analysis</h4>

                        <div className="space-y-4">
                          <p className="text-sm text-gray-300">
                            Current physiological metrics indicate a calm and focused state. Heart rate is within normal
                            resting range, and skin conductance suggests minimal stress or arousal.
                          </p>

                          <div className="p-3 bg-gray-700 rounded-md">
                            <h5 className="text-xs font-medium text-pink-300 mb-1">Heart Rate Analysis</h5>
                            <p className="text-xs text-gray-400">
                              72 BPM indicates a relaxed state. Variability patterns suggest good cognitive engagement
                              without stress.
                            </p>
                          </div>

                          <div className="p-3 bg-gray-700 rounded-md">
                            <h5 className="text-xs font-medium text-blue-300 mb-1">Skin Conductance Analysis</h5>
                            <p className="text-xs text-gray-400">
                              Low skin conductance (2.4 µS) indicates minimal sympathetic nervous system arousal,
                              suggesting comfort with current tasks.
                            </p>
                          </div>

                          <div className="p-3 bg-gray-700 rounded-md">
                            <h5 className="text-xs font-medium text-green-300 mb-1">Combined Interpretation</h5>
                            <p className="text-xs text-gray-400">
                              Physiological profile suggests optimal state for learning and decision-making. Recommend
                              maintaining current engagement approach.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="encoding" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Emotion Encoding Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px] bg-gray-950 rounded-md relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-400">
                        Emotion Encoding Visualization - How emotions are represented in QSCI's cognitive framework
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="historical" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-900 border-gray-800 md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-pink-400" />
                      Emotional Trends Over Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] bg-gray-950 rounded-md relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400">Historical Emotional Data Visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-pink-400" />
                      User Emotional Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-gray-800 rounded-md">
                        <h4 className="text-sm font-medium mb-2">Dominant Emotional Patterns</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• High curiosity during learning sessions</li>
                          <li>• Positive engagement with visual data</li>
                          <li>• Brief frustration during complex tasks</li>
                          <li>• Satisfaction after problem resolution</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-gray-800 rounded-md">
                        <h4 className="text-sm font-medium mb-2">Emotional Triggers</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Positive: Visual data representations</li>
                          <li>• Positive: Interactive elements</li>
                          <li>• Negative: Delayed system responses</li>
                          <li>• Negative: Complex terminology</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-gray-800 rounded-md">
                        <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                        <ul className="text-xs text-gray-300 space-y-1">
                          <li>• Increase visual data representations</li>
                          <li>• Enhance interactive elements</li>
                          <li>• Optimize system response times</li>
                          <li>• Provide glossary for complex terms</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
