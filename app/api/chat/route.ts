import { generateText, streamText } from "ai"
import { groqLlama3, groqMixtral, defaultSystemPrompt, generateModulePrompt } from "@/lib/ai"

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { messages, module, stream = true } = await req.json()

    // Determine which system prompt to use based on the module
    const systemPrompt = module ? generateModulePrompt(module) : defaultSystemPrompt

    // Choose the model based on the complexity of the request
    // For this implementation, we'll use llama3 for most requests
    // and mixtral for more complex requests that might benefit from its capabilities
    const model = messages.length > 5 || (messages[0]?.content?.length || 0) > 500 ? groqMixtral : groqLlama3

    if (stream) {
      // Stream the response for a more interactive experience
      const response = await streamText({
        model,
        system: systemPrompt,
        messages,
      })

      return response
    } else {
      // Generate a complete response at once
      const response = await generateText({
        model,
        system: systemPrompt,
        messages,
      })

      return new Response(JSON.stringify({ text: response.text }), {
        headers: { "Content-Type": "application/json" },
      })
    }
  } catch (error) {
    console.error("Error in chat API route:", error)
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
