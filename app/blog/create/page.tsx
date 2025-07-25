"use client"

import type React from "react"

import { useState } from "react"
import { Save, ImageIcon, FileText, TagIcon, Calendar, Clock, Check, X, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Sidebar from "@/components/dashboard/sidebar"
import AIBlogGenerator from "@/components/blog/ai-blog-generator"

export default function CreateBlogPage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("Technology")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [isFeatured, setIsFeatured] = useState(false)
  const [activeTab, setActiveTab] = useState("edit")

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentTag) {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleGeneratedContent = (generatedContent: string) => {
    setContent(generatedContent)
    // Extract a title from the generated content if none is provided
    if (!title) {
      const titleMatch = generatedContent.match(/^#\s+(.+)$/m)
      if (titleMatch && titleMatch[1]) {
        setTitle(titleMatch[1])
      }
    }
    // Extract an excerpt from the first paragraph if none is provided
    if (!excerpt) {
      const paragraphs = generatedContent.split("\n\n")
      if (paragraphs.length > 1) {
        // Find the first paragraph that's not a heading
        const firstParagraph = paragraphs.find((p) => !p.startsWith("#"))
        if (firstParagraph) {
          setExcerpt(firstParagraph.substring(0, 200) + (firstParagraph.length > 200 ? "..." : ""))
        }
      }
    }
    // Extract tags from the content
    const potentialTags = [
      "Quantum Computing",
      "AI",
      "Ethics",
      "Machine Learning",
      "Neural Networks",
      "AGI",
      "Recursive Intelligence",
      "Quantum Fractal Core",
    ]
    const extractedTags = potentialTags.filter(
      (tag) => generatedContent.toLowerCase().includes(tag.toLowerCase()) && !tags.includes(tag),
    )
    if (extractedTags.length > 0) {
      setTags([...tags, ...extractedTags.slice(0, 5 - tags.length)])
    }
    // Switch to the edit tab to show the generated content
    setActiveTab("edit")
  }

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Create New Article
            </h1>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-400">
                Save as Draft
              </Button>
              <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">
                <Save className="h-4 w-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="ai">AI Generator</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="space-y-6 pt-6">
              {/* Title and Excerpt */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter article title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Write a brief summary of your article"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="h-24 bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>

              {/* Content Editor */}
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <div className="bg-gray-800 p-2 flex items-center gap-2 border-b border-gray-700">
                    <Button variant="ghost" size="sm" className="text-gray-400">
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
                        <path d="M4 7V4h16v3" />
                        <path d="M9 20h6" />
                        <path d="M12 4v16" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400">
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
                        <path d="M4 7V4h16v3" />
                        <path d="M9 20h6" />
                        <path d="M12 4v16" />
                      </svg>
                    </Button>
                    <Separator orientation="vertical" className="h-6 bg-gray-700" />
                    <Button variant="ghost" size="sm" className="text-gray-400">
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
                        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400">
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
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    id="content"
                    placeholder="Write your article content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[400px] bg-gray-900 border-0 rounded-none text-white p-4"
                  />
                </div>
              </div>

              {/* Featured Image */}
              <div className="space-y-2">
                <Label>Featured Image</Label>
                <div className="border-2 border-dashed border-gray-700 rounded-md p-6 text-center">
                  <ImageIcon className="h-12 w-12 mx-auto text-gray-500 mb-2" />
                  <p className="text-gray-400 mb-2">Drag and drop an image here, or click to select a file</p>
                  <Button variant="outline" className="border-gray-700 text-gray-400">
                    Upload Image
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="pt-6">
              <AIBlogGenerator onGenerated={handleGeneratedContent} />
            </TabsContent>

            <TabsContent value="preview" className="pt-6">
              {title ? (
                <div className="prose prose-invert max-w-none">
                  <h1>{title}</h1>
                  {excerpt && <p className="text-xl text-gray-300">{excerpt}</p>}
                  <div className="my-8 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-gray-600" />
                  </div>
                  {content ? (
                    <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }} />
                  ) : (
                    <p className="text-gray-500 italic">No content yet. Start writing in the Edit tab.</p>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 mx-auto text-gray-600 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No content to preview</h3>
                  <p className="text-gray-400">Add a title and content in the Edit tab to see a preview.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="seo" className="space-y-6 pt-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Search Engine Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="seo-title">SEO Title</Label>
                    <Input
                      id="seo-title"
                      placeholder="Enter SEO title"
                      defaultValue={title}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                    <p className="text-xs text-gray-400">Recommended length: 50-60 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea
                      id="meta-description"
                      placeholder="Enter meta description"
                      defaultValue={excerpt}
                      className="h-24 bg-gray-800 border-gray-700 text-white"
                    />
                    <p className="text-xs text-gray-400">Recommended length: 150-160 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      placeholder="Enter URL slug"
                      defaultValue={title ? title.toLowerCase().replace(/\s+/g, "-") : ""}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="focus-keyword">Focus Keyword</Label>
                    <Input
                      id="focus-keyword"
                      placeholder="Enter focus keyword"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>SEO Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-green-500">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Title contains focus keyword</span>
                  </div>
                  <div className="flex items-center text-green-500">
                    <Check className="h-5 w-5 mr-2" />
                    <span>Meta description has optimal length</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <X className="h-5 w-5 mr-2" />
                    <span>Content is shorter than recommended (300 words minimum)</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <X className="h-5 w-5 mr-2" />
                    <span>No internal links found in content</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6 pt-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>Article Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-sm"
                    >
                      <option>Technology</option>
                      <option>Ethics</option>
                      <option>Philosophy</option>
                      <option>Research</option>
                      <option>Tutorial</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        placeholder="Add a tag"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-gray-800 border-gray-700 text-white flex-1"
                      />
                      <Button variant="outline" className="border-gray-700 text-gray-400" onClick={handleAddTag}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="bg-gray-800 text-gray-300 hover:bg-gray-700 flex items-center gap-1"
                        >
                          <TagIcon className="h-3 w-3" />
                          {tag}
                          <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="featured">Featured Article</Label>
                        <p className="text-sm text-gray-400">Display this article in the featured section</p>
                      </div>
                      <Switch id="featured" checked={isFeatured} onCheckedChange={setIsFeatured} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="comments">Allow Comments</Label>
                        <p className="text-sm text-gray-400">Let readers comment on this article</p>
                      </div>
                      <Switch id="comments" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ai-generate">AI Content Generation</Label>
                        <p className="text-sm text-gray-400">Use AI to generate or enhance content</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-gray-700 text-gray-400"
                        onClick={() => setActiveTab("ai")}
                      >
                        Generate Content
                      </Button>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Publishing Options</h3>

                    <div className="space-y-2">
                      <Label htmlFor="publish-date">Publish Date</Label>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <Input
                          id="publish-date"
                          type="date"
                          defaultValue={new Date().toISOString().split("T")[0]}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="read-time">Read Time (minutes)</Label>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <Input
                          id="read-time"
                          type="number"
                          defaultValue="5"
                          min="1"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        defaultValue="Dustin Groves"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-6 space-x-2">
            <Button variant="outline" className="border-gray-700 text-gray-400">
              Cancel
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-400">
              Save as Draft
            </Button>
            <Button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600">
              <Save className="h-4 w-4 mr-2" />
              Publish
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
