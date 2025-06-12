"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Award, Users, Heart, ArrowLeft, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"

export default function AboutPage() {
  const timeline = [
    { year: "2018", title: "The Beginning", desc: "Started with a passion for capturing authentic moments" },
    { year: "2020", title: "Studio Launch", desc: "Established Insaniyyah Films as a boutique studio" },
    { year: "2022", title: "Award Recognition", desc: "Won Best Wedding Cinematography at Regional Film Awards" },
    { year: "2024", title: "Expansion", desc: "Grew team and expanded into commercial productions" },
    { year: "2025", title: "New Horizons", desc: "Continuing to push creative boundaries in visual storytelling" },
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
              <Link href="/portfolio" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-deep-taupe font-medium">
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
                  <Camera className="w-4 h-4 mr-2" />
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
            <h1 className="text-5xl md:text-6xl font-semibold text-deep-taupe mb-6 font-playfair">Our Story</h1>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              Born from a passion for authentic storytelling and cinematic artistry, Insaniyyah Films has been crafting
              visual narratives that resonate with the heart.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=640"
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm-stone p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-deep-taupe" />
                  <div>
                    <p className="font-semibold text-deep-taupe">Award Winner</p>
                    <p className="text-sm text-rich-brown">Best Cinematography 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-semibold text-deep-taupe mb-4 font-playfair">Meet the Visionary</h2>
                <h3 className="text-2xl text-rich-brown mb-6">Sarah Al-Mansouri, Founder & Creative Director</h3>
              </div>

              <div className="space-y-4 text-rich-brown leading-relaxed">
                <p>
                  With over 7 years of experience in visual storytelling, Sarah founded Insaniyyah Films with a simple
                  yet profound mission: to capture the authentic beauty of human connection through cinematic artistry.
                </p>
                <p>
                  Her background in fine arts and film studies, combined with an intuitive understanding of light,
                  emotion, and narrative, has established her as one of the region's most sought-after cinematographers.
                </p>
                <p>
                  "Every frame should tell a story, every story should touch a heart. That's the philosophy that drives
                  everything we create at Insaniyyah Films."
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge className="bg-dusty-rose text-rich-brown">Fine Arts Graduate</Badge>
                <Badge className="bg-dusty-rose text-rich-brown">7+ Years Experience</Badge>
                <Badge className="bg-dusty-rose text-rich-brown">Award Winner</Badge>
                <Badge className="bg-dusty-rose text-rich-brown">200+ Projects</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Our Values</h2>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              The principles that guide every project and relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Authenticity",
                desc: "We capture genuine moments and real emotions, never staged or artificial.",
              },
              {
                icon: Camera,
                title: "Artistry",
                desc: "Every frame is crafted with cinematic vision and artistic excellence.",
              },
              {
                icon: Users,
                title: "Connection",
                desc: "We build lasting relationships with our clients based on trust and understanding.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We strive for perfection in every detail, from concept to final delivery.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-soft-cream border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-deep-taupe rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-soft-cream" />
                  </div>
                  <h3 className="text-xl font-semibold text-deep-taupe mb-4 font-playfair">{value.title}</h3>
                  <p className="text-rich-brown leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Our Journey</h2>
            <p className="text-xl text-rich-brown leading-relaxed">
              From humble beginnings to award-winning productions
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-warm-stone"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-dusty-rose border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-deep-taupe mb-2 font-playfair">{item.year}</div>
                      <h3 className="text-xl font-semibold text-rich-brown mb-3">{item.title}</h3>
                      <p className="text-rich-brown leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-deep-taupe rounded-full border-4 border-soft-cream"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-warm-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Behind the Scenes</h2>
            <p className="text-xl text-rich-brown leading-relaxed">
              A glimpse into our creative process and the passion that drives us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer" onClick={() => console.log(`Opening BTS video ${item}`)}>
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <Image
                    src={`/placeholder.svg?height=400&width=400`}
                    alt={`Behind the scenes ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm-stone/0 group-hover:bg-warm-stone/30 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-soft-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">
            Ready to work together?
          </h2>
          <p className="text-xl text-rich-brown mb-12 leading-relaxed">
            Let's create something beautiful that tells your unique story.
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
