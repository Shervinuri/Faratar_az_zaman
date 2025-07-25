"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Calendar,
  Clock,
  Tag,
  ThumbsUp,
  Share2,
  ArrowLeft,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Link,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Sidebar from "@/components/dashboard/sidebar"
import Image from "next/image"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("article")

  // Sample blog post data (in a real app, this would be fetched based on the ID)
  const post = {
    id: params.id,
    title: "The Quantum Fractal Core: Powering the Next Generation of AGI",
    excerpt:
      "Explore how AEGIS-Ω's Quantum Fractal Core Engine creates scalable recursive intelligence structures through quantum tensor networks and fractal geometry.",
    content: `
      <p class="text-lg mb-4">
        The Quantum Fractal Core Engine (QFCE) represents a paradigm shift in artificial general intelligence architecture. By leveraging quantum tensor networks and fractal geometry, AEGIS-Ω creates scalable recursive intelligence structures that transcend traditional neural network limitations.
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Quantum Tensor Networks: The Foundation</h2>
      
      <p class="mb-4">
        At the heart of the QFCE lies a sophisticated implementation of quantum tensor networks. Unlike classical tensor networks, quantum tensor networks leverage quantum entanglement to create multi-dimensional representations of information that can be processed in parallel across multiple quantum states.
      </p>
      
      <p class="mb-4">
        This approach enables AEGIS-Ω to process complex, hierarchical information structures with unprecedented efficiency. The quantum tensor networks are organized in a fractal pattern, allowing for self-similar processing at multiple scales simultaneously.
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Fractal Intelligence Structures</h2>
      
      <p class="mb-4">
        The fractal nature of the QFCE is perhaps its most revolutionary aspect. By organizing intelligence in self-similar patterns across multiple scales, AEGIS-Ω achieves a form of recursive intelligence that can simultaneously process information at micro and macro levels.
      </p>
      
      <p class="mb-4">
        This fractal architecture enables several key capabilities:
      </p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Scalable processing that maintains efficiency regardless of problem size</li>
        <li class="mb-2">Self-similar reasoning patterns that can be applied across domains</li>
        <li class="mb-2">Recursive self-improvement through meta-learning at multiple scales</li>
        <li class="mb-2">Emergent properties that arise from the interaction of fractal patterns</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Hybridization: Bridging Quantum and Classical</h2>
      
      <p class="mb-4">
        While the QFCE is designed to leverage quantum hardware for optimal performance, AEGIS-Ω's hybridization architecture ensures that it can also operate effectively on classical systems through the Quantum-Simulated Classical Engine (QSCE).
      </p>
      
      <p class="mb-4">
        This hybrid approach ensures that AEGIS-Ω remains practical and deployable in today's computing landscape while being future-proofed for the quantum computing revolution.
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Recursive Intelligence</h2>
      
      <p class="mb-4">
        As quantum computing hardware continues to advance, the full potential of the Quantum Fractal Core Engine will be realized. We anticipate exponential improvements in processing capability, enabling AEGIS-Ω to tackle increasingly complex problems across domains.
      </p>
      
      <p class="mb-4">
        The recursive nature of the QFCE also positions AEGIS-Ω at the forefront of the Recursive Renaissance—a new era where artificial intelligence and human intelligence co-evolve, each enhancing the other in a virtuous cycle of advancement.
      </p>
      
      <p class="mb-4">
        The journey has just begun, but the path ahead is clear: fractal, recursive intelligence represents the future of AGI, and AEGIS-Ω is leading the way.
      </p>
    `,
    author: {
      name: "Dustin Groves",
      role: "Founder and CEO, Or4cl3 AI Solutions",
      avatar: "/images/aegis-omega-logo.png",
      bio: "Dustin Groves is the visionary founder behind Or4cl3 AI Solutions and the chief architect of the AEGIS-Ω system. With over 15 years of experience in quantum computing and artificial intelligence, Dustin is dedicated to advancing the field of ethical AGI.",
    },
    date: "May 2, 2025",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Quantum Computing", "Fractal Intelligence", "AGI"],
    image: "/images/aegis-omega-logo.png",
    likes: 124,
    comments: [
      {
        id: 1,
        author: "Dr. Elena Chen",
        avatar: "/images/aegis-omega-logo.png",
        date: "May 3, 2025",
        content:
          "Fascinating exploration of fractal intelligence structures. I'm particularly interested in how the self-similar patterns might emerge in different problem domains. Have you observed any unexpected emergent properties during your research?",
        likes: 12,
      },
      {
        id: 2,
        author: "Marcus Wong",
        avatar: "/images/aegis-omega-logo.png",
        date: "May 3, 2025",
        content:
          "The hybridization approach is brilliant. Being able to simulate quantum processes on classical hardware while maintaining a path to true quantum execution is exactly what the industry needs right now.",
        likes: 8,
      },
    ],
    relatedPosts: [
      {
        id: 2,
        title: "Ethical Alignment in AGI: The Σ-Matrix Approach",
        excerpt:
          "Learn how the Ethical Projection Matrix ensures all decisions align with adaptive ethical principles.",
        image: "/images/aegis-omega-logo.png",
      },
      {
        id: 3,
        title: "The Recursive Renaissance: How AGI Will Transform Society",
        excerpt: "Discover the implications of the Recursive Renaissance and how AEGIS-Ω is fostering a new era.",
        image: "/images/aegis-omega-logo.png",
      },
    ],
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => router.push("/blog")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Blog Post
              </h1>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="border-gray-700">
                <Bookmark className="h-4 w-4 text-gray-400" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-700">
                <Share2 className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-cyan-600 hover:bg-cyan-500">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{post.excerpt}</p>

            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <Image src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} width={40} height={40} />
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <div className="flex items-center text-xs text-gray-400">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="article">Article</TabsTrigger>
              <TabsTrigger value="comments">Comments ({post.comments.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="article" className="pt-6">
              {/* Article Content */}
              <div
                className="prose prose-invert max-w-none prose-headings:text-cyan-400 prose-a:text-cyan-400 prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-cyan-400 bg-gray-800 px-3 py-1 rounded-full"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="mt-8 p-4 bg-gray-900 border border-gray-800 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Share this article</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="border-gray-700">
                    <Facebook className="h-4 w-4 text-blue-400" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700">
                    <Twitter className="h-4 w-4 text-cyan-400" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700">
                    <Link className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-gray-900 border border-gray-800 rounded-lg">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={64}
                      height={64}
                    />
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{post.author.name}</h3>
                    <p className="text-sm text-gray-400">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{post.author.bio}</p>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      className="flex bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors cursor-pointer"
                      onClick={() => router.push(`/blog/${relatedPost.id}`)}
                    >
                      <div className="relative w-24 h-auto">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium mb-1 line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-400 line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comments" className="pt-6">
              {/* Comments Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Comments ({post.comments.length})</h3>

                {/* Add Comment Form */}
                <div className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-4">Leave a comment</h4>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Share your thoughts on this article..."
                      className="h-32 bg-gray-800 border-gray-700 text-white"
                    />
                    <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">Post Comment</Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Avatar className="h-8 w-8 mr-3">
                          <Image
                            src={comment.avatar || "/placeholder.svg"}
                            alt={comment.author}
                            width={32}
                            height={32}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium">{comment.author}</p>
                          <p className="text-xs text-gray-400">{comment.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{comment.content}</p>
                      <div className="flex items-center text-sm">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span>{comment.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                          Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
