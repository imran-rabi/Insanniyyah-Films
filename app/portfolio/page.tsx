"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Filter, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"

export default function PortfolioPage() {
  const categories = ["All", "Weddings", "Commercial", "Events", "Portraits", "Short Films"]

  const portfolioItems = [
    {
      id: 1,
      title: "Sarah & Ahmed's Wedding",
      category: "Weddings",
      image: "/placeholder.svg?height=600&width=800",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Tech Startup Brand Film",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
      duration: "2:30",
    },
    {
      id: 3,
      title: "Corporate Gala 2024",
      category: "Events",
      image: "/placeholder.svg?height=600&width=800",
      duration: "4:20",
    },
    {
      id: 4,
      title: "The Johnson Family",
      category: "Portraits",
      image: "/placeholder.svg?height=600&width=800",
      duration: "1:15",
    },
    {
      id: 5,
      title: "Midnight Dreams",
      category: "Short Films",
      image: "/placeholder.svg?height=600&width=800",
      duration: "8:30",
    },
    {
      id: 6,
      title: "Maria & David's Celebration",
      category: "Weddings",
      image: "/placeholder.svg?height=600&width=800",
      duration: "4:10",
    },
    {
      id: 7,
      title: "Restaurant Brand Story",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
      duration: "2:45",
    },
    {
      id: 8,
      title: "Annual Conference",
      category: "Events",
      image: "/placeholder.svg?height=600&width=800",
      duration: "3:20",
    },
    {
      id: 9,
      title: "Executive Portraits",
      category: "Portraits",
      image: "/placeholder.svg?height=600&width=800",
      duration: "1:30",
    },
  ]

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
              <Link href="/portfolio" className="text-deep-taupe font-medium">
                Portfolio
              </Link>
              <Link href="/about" className="text-rich-brown hover:text-deep-taupe transition-colors">
                About
              </Link>
              <Link href="/services" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Contact
              </Link>
            </div>

            <BookingModal
              trigger={
                <Button className="btn-primary">
                  <Play className="w-4 h-4 mr-2" />
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
            <h1 className="text-5xl md:text-6xl font-semibold text-deep-taupe mb-6 font-playfair">Our Portfolio</h1>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              A curated collection of our finest cinematic work, showcasing the art of visual storytelling across
              weddings, commercial projects, and creative films.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-soft-cream border-b border-warm-stone/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-primary" : "btn-secondary"}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="bg-dusty-rose border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => console.log(`Opening project: ${item.title}`)}
              >
                <div className="relative overflow-hidden rounded-t-lg aspect-[16/10]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm-stone/0 group-hover:bg-warm-stone/30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-soft-cream/90 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-deep-taupe" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-rich-brown/80 text-soft-cream px-2 py-1 rounded text-sm">
                    {item.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Badge variant="secondary" className="bg-warm-stone text-rich-brown">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-deep-taupe font-playfair group-hover:text-rich-brown transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-rich-brown text-sm leading-relaxed">
                      Cinematic storytelling that captures the essence and emotion of every moment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button size="lg" className="btn-primary">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-stone">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Love what you see?</h2>
          <p className="text-xl text-rich-brown mb-12 leading-relaxed">
            Let's create something equally beautiful for your special moments.
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
