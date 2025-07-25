"use client"

import { useState } from "react"
import { FileText, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

interface AIBlogGeneratorProps {
  onGenerated?: (content: string) => void
}

export default function AIBlogGenerator({ onGenerated }: AIBlogGeneratorProps) {
  const [title, setTitle] = useState("")
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [length, setLength] = useState("medium")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")
  const { toast } = useToast()

  const handleGenerate = async () => {
    if (!topic) {
      toast({
        title: "Topic Required",
        description: "Please provide a topic for your blog post.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedContent("")

    try {
      const response = await fetch("/api/blog/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          topic,
          keywords,
          length,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate content")
      }

      const data = await response.json()
      setGeneratedContent(data.content)

      if (onGenerated) {
        onGenerated(data.content)
      }

      toast({
        title: "Content Generated",
        description: "Your blog post has been successfully generated.",
      })
    } catch (error) {
      console.error("Error generating blog content:", error)
      toast({
        title: "Generation Failed",
        description: "There was an error generating your content. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2 text-cyan-400" />
          AI Blog Content Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title (Optional)</Label>
            <Input
              id="title"
              placeholder="Enter a title or leave blank for AI to suggest one"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic" className="after:content-['*'] after:ml-0.5 after:text-red-500">
              Topic
            </Label>
            <Input
              id="topic"
              placeholder="Enter the main topic of your blog post"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords (Optional)</Label>
            <Input
              id="keywords"
              placeholder="Enter keywords separated by commas"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Content Length</Label>
            <RadioGroup value={length} onValueChange={setLength} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="short" id="short" />
                <Label htmlFor="short">Short (500-800 words)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium (1000-1500 words)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="long" id="long" />
                <Label htmlFor="long">Long (2000-3000 words)</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500"
          disabled={isGenerating || !topic}
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generating Content...
            </>
          ) : (
            <>
              <FileText className="h-4 w-4 mr-2" />
              Generate Blog Content
            </>
          )}
        </Button>

        {generatedContent && (
          <>
            <Separator className="bg-gray-800" />
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Generated Content</h3>
              <div className="bg-gray-800 rounded-md p-4 max-h-96 overflow-y-auto">
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: generatedContent.replace(/\n/g, "<br />") }} />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-400"
                  onClick={() => {
                    navigator.clipboard.writeText(generatedContent)
                    toast({
                      title: "Copied to Clipboard",
                      description: "The generated content has been copied to your clipboard.",
                    })
                  }}
                >
                  Copy to Clipboard
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
