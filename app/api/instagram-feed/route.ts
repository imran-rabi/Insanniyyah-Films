import { NextResponse } from "next/server"

// Instagram Basic Display API configuration
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID

interface InstagramApiResponse {
  data: Array<{
    id: string
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
    media_url: string
    thumbnail_url?: string
    caption: string
    permalink: string
    timestamp: string
  }>
  paging?: {
    cursors: {
      before: string
      after: string
    }
    next?: string
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get("limit") || "12"

  try {
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      throw new Error("Instagram API credentials not configured")
    }

    // Fetch user's media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // Cache for 10 minutes to avoid hitting rate limits
        next: { revalidate: 600 },
      },
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramApiResponse = await response.json()

    // Transform the data to match our interface
    const posts = data.data.map((post) => ({
      id: post.id,
      media_type: post.media_type,
      media_url: post.media_url,
      thumbnail_url: post.thumbnail_url,
      caption: post.caption || "",
      permalink: post.permalink,
      timestamp: post.timestamp,
    }))

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Instagram API Error:", error)

    // Return mock data in case of API failure
    const mockPosts = [
      {
        id: "mock-1",
        media_type: "VIDEO" as const,
        media_url: "/placeholder.svg?height=400&width=400",
        caption: "Behind the scenes of our latest wedding shoot ✨ #WeddingCinematography",
        permalink: "https://instagram.com/insaniyyahfilms",
        timestamp: new Date().toISOString(),
      },
      // Add more mock posts as needed
    ]

    return NextResponse.json({
      posts: mockPosts,
      error: "Using fallback data - Instagram API unavailable",
    })
  }
}
