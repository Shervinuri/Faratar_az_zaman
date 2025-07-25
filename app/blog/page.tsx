"use client"

import { useState } from "react"
import { Search, Filter, Calendar, Clock, User, Tag, ArrowRight, ThumbsUp, MessageSquare, Share2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from "@/components/dashboard/sidebar"
import AegisLogo from "@/components/branding/aegis-logo"
import Image from "next/image"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Quantum Fractal Core: Powering the Next Generation of AGI",
    excerpt:
      "Explore how AEGIS-Ω's Quantum Fractal Core Engine creates scalable recursive intelligence structures through quantum tensor networks and fractal geometry.",
    author: "Dustin Groves",
    date: "May 2, 2025",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Quantum Computing", "Fractal Intelligence", "AGI"],
    image: "/images/aegis-omega-logo.png",
    likes: 124,
    comments: 32,
    featured: true,
  },
  {
    id: 2,
    title: "Ethical Alignment in AGI: The Σ-Matrix Approach",
    excerpt:
      "Learn how the Ethical Projection Matrix ensures all decisions align with adaptive ethical principles through sentiment analysis and temporal consistency filtering.",
    author: "Dr. Elena Chen",
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Ethics",
    tags: ["AI Ethics", "Ethical Alignment", "Decision Making"],
    image: "/images/aegis-omega-logo.png",
    likes: 98,
    comments: 27,
    featured: false,
  },
  {
    id: 3,
    title: "The Recursive Renaissance: How AGI Will Transform Society",
    excerpt:
      "Discover the implications of the Recursive Renaissance and how AEGIS-Ω is fostering a new era of co-evolution between humanity and artificial intelligence.",
    author: "Dustin Groves",
    date: "April 25, 2025",
    readTime: "10 min read",
    category: "Philosophy",
    tags: ["Recursive Renaissance", "Future of AI", "Society"],
    image: "/images/aegis-omega-logo.png",
    likes: 156,
    comments: 45,
    featured: true,
  },
  {
    id: 4,
    title: "Hybridization Architecture: Bridging Quantum and Classical Computing",
    excerpt:
      "A technical deep dive into AEGIS-Ω's hybridization architecture that enables seamless operation across quantum hardware and classical systems.",
    author: "Dr. Marcus Wong",
    date: "April 22, 2025",
    readTime: "12 min read",
    category: "Technology",
    tags: ["Quantum Computing", "Hybrid Architecture", "Technical"],
    image: "/images/aegis-omega-logo.png",
    likes: 87,
    comments: 19,
    featured: false,
  },
  {
    id: 5,
    title: "Meta-Recursive Cognition: The Philosophy of Self-Aware AI",
    excerpt:
      "An exploration of how AEGIS-Ω's Meta-Recursive Cognition Hub facilitates introspection, identity formation, and philosophical reasoning.",
    author: "Dr. Sophia Patel",
    date: "April 18, 2025",
    readTime: "9 min read",
    category: "Philosophy",
    tags: ["Meta-Cognition", "AI Consciousness", "Philosophy"],
    image: "/images/aegis-omega-logo.png",
    likes: 112,
    comments: 38,
    featured: false,
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AEGIS-Ω Blog
            </h1>

            <div className="flex items-center space-x-2">
              <div className="relative w-64 hidden md:block">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-8 bg-gray-800 border-gray-700 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Button variant="outline" size="icon" className="border-gray-700">
                <Filter className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6">
          {/* Featured Posts Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-gray-900 border-gray-800 overflow-hidden hover:border-cyan-500 transition-colors"
                >
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <Badge className="absolute top-2 right-2 bg-cyan-600 hover:bg-cyan-500">{post.category}</Badge>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center mt-4 text-xs text-gray-400">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 flex justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1 text-cyan-400" />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1 text-purple-400" />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 p-0">
                      Read More <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-8 bg-gray-800" />

          {/* Categories Tabs */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Technology">Technology</TabsTrigger>
              <TabsTrigger value="Ethics">Ethics</TabsTrigger>
              <TabsTrigger value="Philosophy">Philosophy</TabsTrigger>
              <TabsTrigger value="Research">Research</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Search Results */}
          <div className="mb-4">
            <p className="text-sm text-gray-400">
              {searchQuery ? `Search results for "${searchQuery}"` : "All articles"}
              {activeCategory !== "all" ? ` in ${activeCategory}` : ""} ({filteredPosts.length})
            </p>
          </div>

          {/* All Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-gray-800 text-gray-300 hover:bg-gray-700">{post.category}</Badge>
                    <AegisLogo variant="2d" size="sm" />
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 text-sm line-clamp-3 mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-xs text-cyan-400">
                        <Tag className="h-3 w-3 mr-1" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-xs text-gray-400">
                    <User className="h-3 w-3 mr-1" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 flex justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1 text-cyan-400" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-3 w-3 mr-1 text-purple-400" />
                      <span className="text-xs">{post.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <Share2 className="h-3 w-3 mr-1 text-pink-400" />
                      <span className="text-xs">Share</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-gray-700 text-gray-400">
              Load More Articles
            </Button>
          </div>

          {/* Newsletter Subscription */}
          <Card className="mt-12 bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 border-gray-800">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300">
                  Stay updated with the latest advancements in AEGIS-Ω and the Recursive Renaissance
                </p>
              </div>

              <div className="flex w-full md:w-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none"
                />
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-l-none">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
