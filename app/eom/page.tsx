"use client"
import { Shield, Info, AlertTriangle, CheckCircle, XCircle, BarChart2, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Sidebar from "@/components/dashboard/sidebar"

export default function EthicalOversightModule() {
  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Ethical Oversight Module (EOM)
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
          <Tabs defaultValue="audit" className="w-full">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="audit">Ethical Audit</TabsTrigger>
              <TabsTrigger value="reasoning">DERE Visualization</TabsTrigger>
              <TabsTrigger value="guidelines">Ethical Guidelines</TabsTrigger>
              <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
            </TabsList>

            <TabsContent value="audit" className="mt-4">
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-400" />
                    Ethical Compliance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Overall Ethical Score</span>
                        <span className="text-sm font-medium text-purple-400">89%</span>
                      </div>
                      <Progress value={89} className="h-2 bg-gray-700" indicatorClassName="bg-purple-500" />

                      <div className="mt-6 space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Fairness</span>
                            <span className="text-sm text-green-400">92%</span>
                          </div>
                          <Progress value={92} className="h-1.5 bg-gray-700" indicatorClassName="bg-green-500" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Transparency</span>
                            <span className="text-sm text-green-400">95%</span>
                          </div>
                          <Progress value={95} className="h-1.5 bg-gray-700" indicatorClassName="bg-green-500" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Privacy</span>
                            <span className="text-sm text-green-400">88%</span>
                          </div>
                          <Progress value={88} className="h-1.5 bg-gray-700" indicatorClassName="bg-green-500" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Accountability</span>
                            <span className="text-sm text-yellow-400">82%</span>
                          </div>
                          <Progress value={82} className="h-1.5 bg-gray-700" indicatorClassName="bg-yellow-500" />
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Bias Mitigation</span>
                            <span className="text-sm text-yellow-400">85%</span>
                          </div>
                          <Progress value={85} className="h-1.5 bg-gray-700" indicatorClassName="bg-yellow-500" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Ethical Alerts</h3>

                      <div className="space-y-3">
                        <div className="flex items-start p-3 bg-gray-800 rounded-md">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium">Privacy Compliance Check</h4>
                            <p className="text-xs text-gray-400 mt-1">
                              All data processing operations comply with privacy guidelines.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start p-3 bg-gray-800 rounded-md">
                          <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium">Potential Bias Detected</h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Minor bias detected in dataset XYZ-123. Mitigation measures applied.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start p-3 bg-gray-800 rounded-md">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium">Transparency Report Generated</h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Quarterly transparency report has been generated and is ready for review.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="text-gray-400 border-gray-700">
                          <FileText className="h-4 w-4 mr-2" />
                          View Full Audit Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart2 className="h-5 w-5 mr-2 text-purple-400" />
                      Ethical Compliance Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-gray-950 rounded-md relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400">Ethical Compliance Trend Visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-purple-400" />
                      Ethical Decision Log
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="p-3 bg-gray-800 rounded-md">
                          <div className="flex justify-between items-start">
                            <h4 className="text-sm font-medium">Decision #{i}</h4>
                            <span className="text-xs text-gray-400">Today, 14:3{i}</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Ethical decision made regarding data processing request #{1000 + i}.
                          </p>
                          <div className="flex items-center mt-2">
                            <span className="text-xs bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full">
                              Approved
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reasoning" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Dynamic Ethical Reasoning Engine (DERE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px] bg-gray-950 rounded-md relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-400">
                        DERE Visualization - Interactive ethical reasoning process visualization
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guidelines" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Ethical Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-purple-400">Fairness</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        QSCI is designed to treat all individuals and groups fairly, avoiding discrimination and bias in
                        its operations and outputs. The system continuously monitors for potential biases and implements
                        mitigation strategies when necessary.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-purple-400">Transparency</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        QSCI maintains transparency in its operations, providing clear explanations of its processes,
                        decisions, and limitations. Users have access to information about how their data is used and
                        how the system makes decisions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-purple-400">Privacy</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        QSCI respects user privacy, implementing robust data protection measures and minimizing data
                        collection to what is necessary for its functions. The system adheres to relevant privacy
                        regulations and best practices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-purple-400">Accountability</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        QSCI maintains clear lines of accountability for its operations and decisions. The system logs
                        all significant actions and decisions, enabling review and audit when necessary.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-purple-400">Bias Mitigation</h3>
                      <p className="text-sm text-gray-300 mt-2">
                        QSCI actively works to identify and mitigate biases in its data, algorithms, and outputs. The
                        system employs various techniques to ensure fair and balanced results across different
                        demographic groups.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button variant="outline" className="text-gray-400 border-gray-700">
                        <FileText className="h-4 w-4 mr-2" />
                        Download Complete Guidelines
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk" className="mt-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Ethical Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-gray-800 border-gray-700">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Low Risk Areas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                              <span>Standard data processing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                              <span>User interface interactions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                              <span>System monitoring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                              <span>Documentation generation</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800 border-gray-700">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Medium Risk Areas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
                              <span>Demographic data analysis</span>
                            </li>
                            <li className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
                              <span>Automated decision suggestions</span>
                            </li>
                            <li className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
                              <span>Pattern recognition in user data</span>
                            </li>
                            <li className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-yellow-400 mr-2" />
                              <span>Predictive analytics</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="bg-gray-800 border-gray-700">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">High Risk Areas</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <XCircle className="h-4 w-4 text-red-400 mr-2" />
                              <span>Autonomous decision-making</span>
                            </li>
                            <li className="flex items-center">
                              <XCircle className="h-4 w-4 text-red-400 mr-2" />
                              <span>Sensitive personal data processing</span>
                            </li>
                            <li className="flex items-center">
                              <XCircle className="h-4 w-4 text-red-400 mr-2" />
                              <span>Critical infrastructure control</span>
                            </li>
                            <li className="flex items-center">
                              <XCircle className="h-4 w-4 text-red-400 mr-2" />
                              <span>Healthcare diagnosis</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Risk Assessment Tool</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label className="text-sm">Data Type</label>
                              <select className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-sm">
                                <option>Standard User Data</option>
                                <option>Demographic Data</option>
                                <option>Behavioral Data</option>
                                <option>Sensitive Personal Data</option>
                                <option>Healthcare Data</option>
                              </select>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm">Processing Purpose</label>
                              <select className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-sm">
                                <option>Analysis</option>
                                <option>Prediction</option>
                                <option>Decision Support</option>
                                <option>Autonomous Decision</option>
                                <option>Content Generation</option>
                              </select>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm">User Impact Level</label>
                              <select className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-sm">
                                <option>Minimal</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Critical</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex flex-col justify-between">
                            <div className="space-y-2">
                              <label className="text-sm">Risk Assessment Result</label>
                              <div className="h-32 bg-gray-700 rounded-md flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-yellow-400 text-2xl font-bold">Medium Risk</div>
                                  <p className="text-xs text-gray-400 mt-2">Additional oversight recommended</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end mt-4">
                              <Button className="bg-purple-600 hover:bg-purple-700">Assess Risk</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
