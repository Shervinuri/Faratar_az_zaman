"use client"

import { useState } from "react"
import { User, Bell, Shield, Key, HelpCircle, Palette, Moon, Sun, Monitor, Check, Save } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import Sidebar from "@/components/dashboard/sidebar"
import AegisLogo from "@/components/branding/aegis-logo"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [selectedTheme, setSelectedTheme] = useState("system")
  const [colorTheme, setColorTheme] = useState("default")

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Settings
            </h1>
          </div>
        </header>

        <main className="p-4 md:p-6 max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-gray-900 border border-gray-800 overflow-x-auto flex whitespace-nowrap mb-6">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="display" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span>Display</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Privacy</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                <span>API Keys</span>
              </TabsTrigger>
              <TabsTrigger value="support" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>Support</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your account information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          defaultValue="Dustin Groves"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          defaultValue="dustin@or4cl3.ai"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          placeholder="Your role"
                          defaultValue="Founder and CEO"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell us about yourself"
                          defaultValue="Founder and CEO of Or4cl3 AI Solutions, leading the development of AEGIS-Ω and the Recursive Renaissance."
                          className="h-32 bg-gray-800 border-gray-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Profile Picture</Label>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                            <AegisLogo variant="2d" size="md" />
                          </div>
                          <Button variant="outline" className="border-gray-700 text-gray-400">
                            Change Avatar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Account Security</h3>

                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="2fa" />
                      <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="display">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Display Preferences</CardTitle>
                  <CardDescription className="text-gray-400">
                    Customize the appearance of your AEGIS-Ω interface
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme Mode</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        className={`p-4 rounded-lg border cursor-pointer ${
                          selectedTheme === "light" ? "border-cyan-500 bg-gray-800" : "border-gray-700 bg-gray-900"
                        }`}
                        onClick={() => setSelectedTheme("light")}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Sun className="h-5 w-5 mr-2 text-yellow-400" />
                            <span>Light Mode</span>
                          </div>
                          {selectedTheme === "light" && <Check className="h-4 w-4 text-cyan-400" />}
                        </div>
                        <div className="h-20 rounded bg-gray-100"></div>
                      </div>

                      <div
                        className={`p-4 rounded-lg border cursor-pointer ${
                          selectedTheme === "dark" ? "border-cyan-500 bg-gray-800" : "border-gray-700 bg-gray-900"
                        }`}
                        onClick={() => setSelectedTheme("dark")}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Moon className="h-5 w-5 mr-2 text-blue-400" />
                            <span>Dark Mode</span>
                          </div>
                          {selectedTheme === "dark" && <Check className="h-4 w-4 text-cyan-400" />}
                        </div>
                        <div className="h-20 rounded bg-gray-900 border border-gray-700"></div>
                      </div>

                      <div
                        className={`p-4 rounded-lg border cursor-pointer ${
                          selectedTheme === "system" ? "border-cyan-500 bg-gray-800" : "border-gray-700 bg-gray-900"
                        }`}
                        onClick={() => setSelectedTheme("system")}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Monitor className="h-5 w-5 mr-2 text-gray-400" />
                            <span>System Default</span>
                          </div>
                          {selectedTheme === "system" && <Check className="h-4 w-4 text-cyan-400" />}
                        </div>
                        <div className="h-20 rounded bg-gradient-to-b from-gray-100 to-gray-900 border border-gray-700"></div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Color Theme</h3>
                    <RadioGroup
                      value={colorTheme}
                      onValueChange={setColorTheme}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div
                        className={`p-4 rounded-lg border cursor-pointer ${
                          colorTheme === "default" ? "border-cyan-500 bg-gray-800" : "border-gray-700 bg-gray-900"
                        }`}
                      >
                        <RadioGroupItem value="default" id="default" className="sr-only" />
                        <Label htmlFor="default" className="flex flex-col cursor-pointer">
                          <span className="mb-2">Quantum Default</span>
                          <div className="flex gap-1">
                            <div className="h-6 w-6 rounded-full bg-cyan-500"></div>
                            <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                            <div className="h-6 w-6 rounded-full bg-pink-500"></div>
                          </div>
                        </Label>
                      </div>

                      <div
                        className={`p-4 rounded-lg border cursor-pointer ${
                          colorTheme === "azure" ? "border-cyan-500 bg-gray-800" : "border-gray-700 bg-gray-900"
                        }`}
                      >
                        <RadioGroupItem value="azure" id="azure" className="sr-only" />
                        <Label htmlFor="azure" className="flex flex-col cursor-pointer">
                          <span className="mb-2">Azure Depths</span>
                          <div className="flex gap-1">
                            <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                            <div className="h-6 w-6 rounded-full bg-cyan-500"></div>
                            <div className="h-6 w-6 rounded-full bg-teal-500"></div>
                          </div>
                        </Label>
                      </div>

                      <div
                        className={`p-4 rounded-lg border cursor-pointer ${
                          colorTheme === "nebula" ? "border-cyan-500 bg-gray-800" : "border-gray-700 bg-gray-900"
                        }`}
                      >
                        <RadioGroupItem value="nebula" id="nebula" className="sr-only" />
                        <Label htmlFor="nebula" className="flex flex-col cursor-pointer">
                          <span className="mb-2">Nebula Burst</span>
                          <div className="flex gap-1">
                            <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                            <div className="h-6 w-6 rounded-full bg-pink-500"></div>
                            <div className="h-6 w-6 rounded-full bg-orange-500"></div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Interface Settings</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="animations">Interface Animations</Label>
                          <p className="text-sm text-gray-400">Enable or disable UI animations</p>
                        </div>
                        <Switch id="animations" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="compact">Compact Mode</Label>
                          <p className="text-sm text-gray-400">Use a more compact UI layout</p>
                        </div>
                        <Switch id="compact" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="reduced-motion">Reduced Motion</Label>
                          <p className="text-sm text-gray-400">Minimize motion for accessibility</p>
                        </div>
                        <Switch id="reduced-motion" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configure how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Notifications</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>System Status Alerts</Label>
                          <p className="text-sm text-gray-400">Receive notifications about system status changes</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Performance Metrics</Label>
                          <p className="text-sm text-gray-400">Get notified about significant performance changes</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Security Alerts</Label>
                          <p className="text-sm text-gray-400">Receive notifications about security events</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Ethical Oversight Notifications</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Ethical Violations</Label>
                          <p className="text-sm text-gray-400">Get notified about potential ethical violations</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Compliance Reports</Label>
                          <p className="text-sm text-gray-400">Receive periodic ethical compliance reports</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Learning & Development</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Learning Progress</Label>
                          <p className="text-sm text-gray-400">Get updates on system learning progress</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>New Capabilities</Label>
                          <p className="text-sm text-gray-400">Be notified when new capabilities are available</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Delivery</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-gray-400">Receive notifications via email</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-gray-400">Receive push notifications in browser</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-gray-400">Receive critical alerts via SMS</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500">
                      <Save className="h-4 w-4 mr-2" />
                      Save Notification Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your data privacy and consent preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Collection</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Usage Analytics</Label>
                          <p className="text-sm text-gray-400">Allow collection of anonymized usage data</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Performance Metrics</Label>
                          <p className="text-sm text-gray-400">Allow collection of system performance data</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Emotional Data Processing</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Sentiment Analysis</Label>
                          <p className="text-sm text-gray-400">Allow analysis of emotional content in interactions</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Behavioral Patterns</Label>
                          <p className="text-sm text-gray-400">
                            Allow analysis of behavioral patterns for personalization
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Retention</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Interaction History</Label>
                          <p className="text-sm text-gray-400">How long to retain your interaction history</p>
                        </div>
                        <select className="bg-gray-800 border-gray-700 rounded-md p-2 text-sm">
                          <option>30 days</option>
                          <option>90 days</option>
                          <option>1 year</option>
                          <option>Forever</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Learning Data</Label>
                          <p className="text-sm text-gray-400">How long to retain data used for system learning</p>
                        </div>
                        <select className="bg-gray-800 border-gray-700 rounded-md p-2 text-sm">
                          <option>30 days</option>
                          <option>90 days</option>
                          <option>1 year</option>
                          <option selected>Forever</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Management</h3>

                    <div className="space-y-3">
                      <Button variant="outline" className="border-gray-700 text-gray-400">
                        Download My Data
                      </Button>

                      <Button variant="destructive">Delete All My Data</Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500">
                      <Save className="h-4 w-4 mr-2" />
                      Save Privacy Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>API Keys</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage API keys for accessing AEGIS-Ω services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Your API Keys</h3>
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600">Generate New Key</Button>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">Production Key</h4>
                            <p className="text-sm text-gray-400">Created on April 15, 2025</p>
                          </div>
                          <Button variant="destructive" size="sm">
                            Revoke
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-900 p-2 rounded">
                          <code className="text-sm text-gray-300">aegis_prod_api_••••••••••••••••</code>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <span className="sr-only">Copy</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">Development Key</h4>
                            <p className="text-sm text-gray-400">Created on April 10, 2025</p>
                          </div>
                          <Button variant="destructive" size="sm">
                            Revoke
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-900 p-2 rounded">
                          <code className="text-sm text-gray-300">aegis_dev_api_••••••••••••••••</code>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <span className="sr-only">Copy</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">API Usage</h3>

                    <div className="h-64 bg-gray-800 rounded-lg p-4">
                      <div className="text-center text-gray-400">API usage chart will appear here</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-gray-800">
                        <h4 className="text-sm font-medium text-gray-400">Total Requests</h4>
                        <p className="text-2xl font-bold mt-1">24,892</p>
                      </div>

                      <div className="p-4 rounded-lg bg-gray-800">
                        <h4 className="text-sm font-medium text-gray-400">Average Response Time</h4>
                        <p className="text-2xl font-bold mt-1">124ms</p>
                      </div>

                      <div className="p-4 rounded-lg bg-gray-800">
                        <h4 className="text-sm font-medium text-gray-400">Error Rate</h4>
                        <p className="text-2xl font-bold mt-1">0.02%</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">API Documentation</h3>

                    <div className="flex items-center gap-4">
                      <Button variant="outline" className="border-gray-700 text-gray-400">
                        View Documentation
                      </Button>

                      <Button variant="outline" className="border-gray-700 text-gray-400">
                        API Reference
                      </Button>

                      <Button variant="outline" className="border-gray-700 text-gray-400">
                        Code Examples
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Support & Feedback</CardTitle>
                  <CardDescription className="text-gray-400">Get help and provide feedback on AEGIS-Ω</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Contact Support</h3>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            placeholder="Enter subject"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your issue or question"
                            className="h-32 bg-gray-800 border-gray-700 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="priority">Priority</Label>
                          <select id="priority" className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-sm">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                          </select>
                        </div>

                        <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 w-full">
                          Submit Support Request
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Feedback</h3>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="feedback-type">Feedback Type</Label>
                          <select
                            id="feedback-type"
                            className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-sm"
                          >
                            <option>Feature Request</option>
                            <option>Bug Report</option>
                            <option>General Feedback</option>
                            <option>Improvement Suggestion</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="feedback">Your Feedback</Label>
                          <Textarea
                            id="feedback"
                            placeholder="Share your thoughts, ideas, or report issues"
                            className="h-32 bg-gray-800 border-gray-700 text-white"
                          />
                        </div>

                        <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 w-full">
                          Submit Feedback
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Resources</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-800">
                        <h4 className="font-medium mb-2">Documentation</h4>
                        <p className="text-sm text-gray-400 mb-4">Access comprehensive documentation for AEGIS-Ω</p>
                        <Button variant="outline" className="w-full border-gray-700 text-gray-400">
                          View Documentation
                        </Button>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-800">
                        <h4 className="font-medium mb-2">FAQ</h4>
                        <p className="text-sm text-gray-400 mb-4">Find answers to frequently asked questions</p>
                        <Button variant="outline" className="w-full border-gray-700 text-gray-400">
                          Browse FAQ
                        </Button>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-700 bg-gray-800">
                        <h4 className="font-medium mb-2">Community</h4>
                        <p className="text-sm text-gray-400 mb-4">Join the AEGIS-Ω community forum</p>
                        <Button variant="outline" className="w-full border-gray-700 text-gray-400">
                          Join Community
                        </Button>
                      </div>
                    </div>
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
