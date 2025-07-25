import { generateText } from "ai"
import { groqMixtral, generateModulePrompt } from "@/lib/ai"

export async function POST(req: Request) {
  try {
    const { title, topic, keywords, length = "medium" } = await req.json()

    // Use the blog-specific system prompt
    const systemPrompt = generateModulePrompt("blog")

    // Define word count based on requested length
    const wordCounts = {
      short: "500-800",
      medium: "1000-1500",
      long: "2000-3000",
    }

    const wordCount = wordCounts[length as keyof typeof wordCounts] || wordCounts.medium

    // Create a detailed prompt for the blog post generation
    const prompt = `
      Generate a comprehensive blog post with the following specifications:
      
      Title: ${title || "Please suggest an engaging title related to the topic"}
      Topic: ${topic}
      Keywords: ${keywords || "AI, quantum computing, ethics, technology"}
      Target Length: ${wordCount} words
      
      The blog post should:
      1. Have a clear introduction, body, and conclusion
      2. Include relevant subheadings for better readability
      3. Incorporate technical accuracy while remaining accessible
      4. Cite relevant research or sources where appropriate
      5. End with thought-provoking questions or a call to action
      
      Format the post in Markdown with proper headings, paragraphs, and emphasis.
    `

    // Use the Mixtral model for more creative and detailed content generation
    const response = await generateText({
      model: groqMixtral,
      system: systemPrompt,
      prompt,
    })

    return new Response(JSON.stringify({ content: response.text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in blog generation API route:", error)
    return new Response(JSON.stringify({ error: "Failed to generate blog content" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
