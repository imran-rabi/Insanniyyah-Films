"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Perfect Wedding Photography",
      excerpt: "Discover the secrets to capturing unforgettable wedding moments that couples will treasure forever.",
      author: "Sarah Al-Mansouri",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Wedding Tips",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "The Art of Cinematic Storytelling",
      excerpt:
        "Learn how we craft compelling visual narratives that resonate with audiences and create lasting impact.",
      author: "Sarah Al-Mansouri",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Cinematography",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 3,
      title: "Behind the Scenes: Commercial Production",
      excerpt: "Take a peek into our commercial production process and see how we bring brand stories to life.",
      author: "Sarah Al-Mansouri",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 4,
      title: "Choosing the Right Photographer for Your Event",
      excerpt: "A comprehensive guide to selecting the perfect photographer for your special occasion.",
      author: "Sarah Al-Mansouri",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Event Planning",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 5,
      title: "Color Grading Techniques for Emotional Impact",
      excerpt: "Explore how color grading can enhance the emotional resonance of your visual content.",
      author: "Sarah Al-Mansouri",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Post-Production",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 6,
      title: "Portrait Photography: Capturing Personality",
      excerpt: "Learn the techniques we use to reveal the true essence and personality of our portrait subjects.",
      author: "Sarah Al-Mansouri",
      date: "2023-12-25",
      readTime: "5 min read",
      category: "Portrait Tips",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Wedding Tips",
    "Cinematography",
    "Commercial",
    "Event Planning",
    "Post-Production",
    "Portrait Tips",
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-soft-cream/95 backdrop-blur-sm border-b border-warm-stone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/insaniyyah-logo.png"
                alt="Insaniyyah Films Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-semibold text-rich-brown font-playfair">Insaniyyah Films</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-rich-brown hover:text-deep-taupe transition-colors">
                About
              </Link>
              <Link href="/services" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-deep-taupe font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Contact
              </Link>
            </div>

            <BookingModal
              trigger={
                <Button className="btn-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              }
            />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-rich-brown hover:text-deep-taupe transition-colors mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-semibold text-deep-taupe mb-6 font-playfair">
              Insights & Stories
            </h1>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              Behind-the-scenes insights, photography tips, and stories from our cinematic journey
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-soft-cream border-b border-warm-stone/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rich-brown w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-dusty-rose border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "btn-primary" : "btn-secondary"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-soft-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-deep-taupe mb-4 font-playfair">Featured Article</h2>
            </div>

            <Card className="bg-dusty-rose border-none shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-deep-taupe text-soft-cream">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-warm-stone text-rich-brown w-fit">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-3xl font-semibold text-deep-taupe font-playfair group-hover:text-rich-brown transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-rich-brown leading-relaxed text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-rich-brown/80">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="btn-primary w-fit">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-soft-cream border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => console.log(`Opening article: ${post.title}`)}
              >
                <div className="relative overflow-hidden rounded-t-lg aspect-[16/10]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-warm-stone text-rich-brown">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-deep-taupe font-playfair group-hover:text-rich-brown transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-rich-brown leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-rich-brown/80">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button size="lg" className="btn-primary">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-warm-stone">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Stay Inspired</h2>
          <p className="text-xl text-rich-brown mb-12 leading-relaxed">
            Subscribe to our newsletter for the latest photography tips, behind-the-scenes content, and exclusive
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-soft-cream border-dusty-rose focus:border-deep-taupe focus:ring-deep-taupe"
            />
            <Button className="btn-primary whitespace-nowrap">Subscribe</Button>
          </div>
          <p className="text-sm text-rich-brown/80 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">
            Ready to create your story?
          </h2>
          <p className="text-xl text-rich-brown mb-12 leading-relaxed">
            Let's discuss your vision and bring it to life with our cinematic expertise.
          </p>
          <BookingModal
            trigger={
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Button>
            }
          />
        </div>
      </section>
    </div>
  )
}
