"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Camera, Film, Users, Award, ArrowRight, Phone, Mail, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"

export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  const handleWatchShowreel = () => {
    setShowVideoModal(true)
    // In a real app, this would open a video modal or navigate to a video page
    console.log("Opening showreel video...")
  }

  const handleCallNow = () => {
    window.open("tel:+15551234567", "_self")
  }

  const handleEmailUs = () => {
    window.open("mailto:hello@insaniyyahfilms.com", "_self")
  }

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
              <Link href="/contact" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Contact
              </Link>
            </div>

            <BookingModal
              trigger={
                <Button className="btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              }
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dusty-rose/80 to-warm-stone/60 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Cinematic background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 opacity-90">
            <Image
              src="/images/insaniyyah-logo.png"
              alt="Insaniyyah Films Logo"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold text-soft-cream mb-6 font-playfair leading-tight drop-shadow-lg">
            Crafting stories in
            <br />
            motion & stills
          </h1>

          <p className="text-xl md:text-2xl text-soft-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Boutique videography & photography studio creating cinematic experiences that capture your most precious
            moments
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWatchShowreel}
              className="bg-soft-cream text-deep-taupe hover:bg-dusty-rose hover:text-rich-brown transition-all duration-300 text-lg px-8 py-4 shadow-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Showreel
            </Button>
            <BookingModal
              trigger={
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-soft-cream text-soft-cream hover:bg-soft-cream hover:text-deep-taupe transition-all duration-300 text-lg px-8 py-4 shadow-lg"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Our Craft</h2>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              From intimate weddings to commercial productions, we bring cinematic vision to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Weddings",
                desc: "Cinematic wedding films that tell your love story",
                service: "wedding",
              },
              {
                icon: Film,
                title: "Commercial",
                desc: "Brand stories that connect and convert",
                service: "commercial",
              },
              { icon: Camera, title: "Portraits", desc: "Timeless portraits with artistic flair", service: "portrait" },
              {
                icon: Award,
                title: "Events",
                desc: "Corporate and social events captured beautifully",
                service: "event",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-soft-cream border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-deep-taupe rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rich-brown transition-colors">
                    <service.icon className="w-8 h-8 text-soft-cream" />
                  </div>
                  <h3 className="text-2xl font-semibold text-deep-taupe mb-4 font-playfair">{service.title}</h3>
                  <p className="text-rich-brown leading-relaxed mb-6">{service.desc}</p>
                  <BookingModal
                    service={service.service}
                    trigger={<Button className="btn-secondary w-full">Learn More</Button>}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Recent Work</h2>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              A glimpse into our latest cinematic creations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer" onClick={() => console.log(`Opening project ${item}`)}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Portfolio item ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm-stone/0 group-hover:bg-warm-stone/30 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-soft-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-dusty-rose text-rich-brown">
                    {item % 2 === 0 ? "Wedding" : "Commercial"}
                  </Badge>
                  <h3 className="text-xl font-semibold text-deep-taupe font-playfair">Project Title {item}</h3>
                  <p className="text-rich-brown">Beautiful cinematic story capturing precious moments</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" className="btn-primary">
                View Full Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Client Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Ahmed",
                type: "Wedding",
                quote:
                  "Insaniyyah Films captured our wedding day with such artistry and emotion. Every frame tells our story beautifully.",
                rating: 5,
              },
              {
                name: "Tech Startup Co.",
                type: "Commercial",
                quote:
                  "Their commercial work elevated our brand story. The cinematic quality and attention to detail exceeded expectations.",
                rating: 5,
              },
              {
                name: "The Johnson Family",
                type: "Portrait",
                quote:
                  "Professional, creative, and so easy to work with. Our family portraits are now treasured heirlooms.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-soft-cream border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-deep-taupe rounded-full flex items-center justify-center">
                        <span className="text-soft-cream font-semibold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-taupe">{testimonial.name}</h4>
                        <Badge variant="secondary" className="bg-dusty-rose text-rich-brown text-xs">
                          {testimonial.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-rich-brown leading-relaxed italic">"{testimonial.quote}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-stone">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">
            Ready to tell your story?
          </h2>
          <p className="text-xl text-rich-brown mb-12 leading-relaxed">
            Let's create something beautiful together. Book a consultation to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              trigger={
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              }
            />
            <Button size="lg" onClick={handleCallNow} className="btn-secondary text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" onClick={handleEmailUs} className="btn-accent text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rich-brown text-soft-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src="/images/insaniyyah-logo.png"
                  alt="Insaniyyah Films Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-2xl font-semibold font-playfair">Insaniyyah Films</span>
              </div>
              <p className="text-soft-cream/80 leading-relaxed mb-6 max-w-md">
                Boutique videography & photography studio crafting cinematic stories that capture life's most precious
                moments.
              </p>
              <div className="space-y-2">
                <button
                  onClick={handleCallNow}
                  className="flex items-center space-x-3 text-soft-cream/80 hover:text-soft-cream transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </button>
                <button
                  onClick={handleEmailUs}
                  className="flex items-center space-x-3 text-soft-cream/80 hover:text-soft-cream transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@insaniyyahfilms.com</span>
                </button>
                <div className="flex items-center space-x-3 text-soft-cream/80">
                  <MapPin className="w-5 h-5" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 font-playfair">Services</h4>
              <ul className="space-y-3 text-soft-cream/80">
                <li>
                  <Link href="/services#weddings" className="hover:text-soft-cream transition-colors">
                    Wedding Films
                  </Link>
                </li>
                <li>
                  <Link href="/services#commercial" className="hover:text-soft-cream transition-colors">
                    Commercial Video
                  </Link>
                </li>
                <li>
                  <Link href="/services#portraits" className="hover:text-soft-cream transition-colors">
                    Portrait Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services#events" className="hover:text-soft-cream transition-colors">
                    Event Coverage
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 font-playfair">Company</h4>
              <ul className="space-y-3 text-soft-cream/80">
                <li>
                  <Link href="/about" className="hover:text-soft-cream transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-soft-cream transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-soft-cream transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-soft-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-soft-cream/60 text-sm">© 2025 Insaniyyah Films. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-soft-cream/60 hover:text-soft-cream text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-soft-cream/60 hover:text-soft-cream text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
