"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Heart, MessageCircle, ExternalLink, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  caption: string
  permalink: string
  timestamp: string
  like_count?: number
  comments_count?: number
}

interface InstagramFeedProps {
  limit?: number
  showHeader?: boolean
}

export default function InstagramFeed({ limit = 6, showHeader = true }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock data for demonstration - replace with actual API call
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      media_type: "VIDEO",
      media_url: "/placeholder.svg?height=400&width=400",
      caption: "Behind the scenes of our latest wedding shoot ✨ #WeddingCinematography #BehindTheScenes",
      permalink: "https://instagram.com/p/example1",
      timestamp: "2024-01-15T10:30:00Z",
      like_count: 245,
      comments_count: 12,
    },
    {
      id: "2",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400",
      caption: "Golden hour magic at Sarah & Ahmed's engagement session 🌅 #GoldenHour #EngagementPhotography",
      permalink: "https://instagram.com/p/example2",
      timestamp: "2024-01-14T16:45:00Z",
      like_count: 189,
      comments_count: 8,
    },
    {
      id: "3",
      media_type: "VIDEO",
      media_url: "/placeholder.svg?height=400&width=400",
      caption: "Commercial shoot for @techstartup - bringing their vision to life 🎬 #CommercialVideo #BrandStory",
      permalink: "https://instagram.com/p/example3",
      timestamp: "2024-01-13T14:20:00Z",
      like_count: 156,
      comments_count: 15,
    },
    {
      id: "4",
      media_type: "CAROUSEL_ALBUM",
      media_url: "/placeholder.svg?height=400&width=400",
      caption: "Some of our favorite shots from this month 📸 Swipe to see more! #MonthlyHighlights",
      permalink: "https://instagram.com/p/example4",
      timestamp: "2024-01-12T12:00:00Z",
      like_count: 298,
      comments_count: 22,
    },
    {
      id: "5",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=400&width=400",
      caption: "Portrait session with the amazing Johnson family 👨‍👩‍👧‍👦 #FamilyPortraits #StudioSession",
      permalink: "https://instagram.com/p/example5",
      timestamp: "2024-01-11T09:15:00Z",
      like_count: 167,
      comments_count: 9,
    },
    {
      id: "6",
      media_type: "VIDEO",
      media_url: "/placeholder.svg?height=400&width=400",
      caption: "Drone footage from yesterday's corporate event 🚁 #DroneFootage #CorporateEvent",
      permalink: "https://instagram.com/p/example6",
      timestamp: "2024-01-10T18:30:00Z",
      like_count: 203,
      comments_count: 11,
    },
  ]

  useEffect(() => {
    // Simulate API call
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true)

        // In a real implementation, you would call the Instagram API here:
        // const response = await fetch('/api/instagram-feed')
        // const data = await response.json()

        // For now, we'll use mock data
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate loading
        setPosts(mockPosts.slice(0, limit))
        setError(null)
      } catch (err) {
        setError("Failed to load Instagram posts")
        console.error("Instagram API Error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [limit])

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  const truncateCaption = (caption: string, maxLength = 100) => {
    if (caption.length <= maxLength) return caption
    return caption.substring(0, maxLength) + "..."
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {showHeader && (
          <div className="text-center">
            <div className="w-16 h-16 bg-soft-clay rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="w-32 h-6 bg-soft-clay rounded mx-auto animate-pulse"></div>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(limit)].map((_, index) => (
            <div key={index} className="aspect-square bg-soft-clay rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <Instagram className="w-12 h-12 text-smoky-stone/50 mx-auto mb-4" />
        <p className="text-smoky-stone mb-4">{error}</p>
        <Button
          variant="outline"
          className="border-taupe text-taupe hover:bg-taupe hover:text-sandstone"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full p-1">
              <div className="w-full h-full bg-sandstone rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-taupe" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-taupe font-playfair">@insaniyyahfilms</h3>
              <p className="text-smoky-stone">Follow our latest work</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-blush-quartz border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={post.thumbnail_url || post.media_url}
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Media type indicator */}
              <div className="absolute top-3 right-3">
                {post.media_type === "VIDEO" && (
                  <Badge className="bg-smoky-stone/80 text-sandstone">
                    <Play className="w-3 h-3 mr-1" />
                    Video
                  </Badge>
                )}
                {post.media_type === "CAROUSEL_ALBUM" && (
                  <Badge className="bg-smoky-stone/80 text-sandstone">📷 Album</Badge>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-soft-clay/0 group-hover:bg-soft-clay/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-4 text-sandstone">
                  {post.like_count && (
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">{post.like_count}</span>
                    </div>
                  )}
                  {post.comments_count && (
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">{post.comments_count}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-smoky-stone/80">{formatDate(post.timestamp)}</span>
                  <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-taupe hover:text-smoky-stone transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-smoky-stone text-sm leading-relaxed">{truncateCaption(post.caption)}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white"
        >
          <Link href="https://instagram.com/insaniyyahfilms" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 mr-2" />
            Follow @insaniyyahfilms
          </Link>
        </Button>
      </div>
    </div>
  )
}
