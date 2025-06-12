import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Camera, Film, Users, Award, Check, ArrowLeft, DrillIcon as Drone, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: "Wedding Cinematography",
      description: "Cinematic wedding films that capture your love story with artistic flair and emotional depth.",
      features: [
        "Full day coverage",
        "Highlight reel (3-5 min)",
        "Ceremony film",
        "Reception highlights",
        "Raw footage delivery",
      ],
      pricing: "Starting at $2,500",
      image: "/placeholder.svg?height=400&width=600",
      service: "wedding",
    },
    {
      icon: Film,
      title: "Commercial Production",
      description: "Brand stories and promotional content that connect with your audience and drive results.",
      features: ["Concept development", "Professional crew", "4K production", "Post-production", "Multiple formats"],
      pricing: "Starting at $3,500",
      image: "/placeholder.svg?height=400&width=600",
      service: "commercial",
    },
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Timeless portraits that capture personality and essence with artistic vision.",
      features: [
        "Studio or location",
        "Professional lighting",
        "Wardrobe consultation",
        "Retouched images",
        "Print-ready files",
      ],
      pricing: "Starting at $800",
      image: "/placeholder.svg?height=400&width=600",
      service: "portrait",
    },
    {
      icon: Award,
      title: "Event Coverage",
      description: "Comprehensive documentation of corporate events, galas, and special occasions.",
      features: [
        "Multi-camera setup",
        "Live streaming option",
        "Same-day highlights",
        "Full event documentation",
        "Social media content",
      ],
      pricing: "Starting at $1,500",
      image: "/placeholder.svg?height=400&width=600",
      service: "event",
    },
  ]

  const addOns = [
    { icon: Drone, title: "Drone Footage", desc: "Aerial cinematography for stunning perspectives", price: "+$500" },
    { icon: Clock, title: "Same-Day Edit", desc: "Quick turnaround highlight reel for events", price: "+$800" },
    { icon: Star, title: "Extended Coverage", desc: "Additional hours beyond standard package", price: "+$200/hr" },
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
              <Link href="/about" className="text-rich-brown hover:text-deep-taupe transition-colors">
                About
              </Link>
              <Link href="/services" className="text-deep-taupe font-medium">
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
            <h1 className="text-5xl md:text-6xl font-semibold text-deep-taupe mb-6 font-playfair">Our Services</h1>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              Comprehensive visual storytelling services tailored to capture your most important moments with cinematic
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-dusty-rose border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm-stone/20"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-soft-cream/90 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-deep-taupe" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-6">
                    <CardTitle className="text-2xl font-semibold text-deep-taupe mb-3 font-playfair">
                      {service.title}
                    </CardTitle>
                    <p className="text-rich-brown leading-relaxed mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-deep-taupe font-playfair">{service.pricing}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-rich-brown">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-deep-taupe flex-shrink-0" />
                        <span className="text-rich-brown">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <BookingModal
                      service={service.service}
                      trigger={<Button className="btn-primary flex-1">Book Now</Button>}
                    />
                    <Button className="btn-secondary">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-warm-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">
              Enhance Your Package
            </h2>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              Optional add-ons to make your project even more spectacular
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card
                key={index}
                className="bg-soft-cream border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-deep-taupe rounded-full flex items-center justify-center mx-auto mb-6">
                    <addon.icon className="w-8 h-8 text-soft-cream" />
                  </div>
                  <h3 className="text-xl font-semibold text-deep-taupe mb-3 font-playfair">{addon.title}</h3>
                  <p className="text-rich-brown mb-4 leading-relaxed">{addon.desc}</p>
                  <div className="text-2xl font-bold text-deep-taupe font-playfair">{addon.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">Our Process</h2>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              From initial consultation to final delivery, we ensure a seamless experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and creative goals" },
              { step: "02", title: "Planning", desc: "Detailed planning including timeline, locations, and logistics" },
              { step: "03", title: "Production", desc: "Professional filming with state-of-the-art equipment" },
              { step: "04", title: "Delivery", desc: "Post-production and delivery of your final cinematic piece" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-deep-taupe rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-soft-cream">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-taupe mb-3 font-playfair">{process.title}</h3>
                <p className="text-rich-brown leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-deep-taupe mb-6 font-playfair">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 3-6 months in advance, especially for weddings and major events during peak season.",
              },
              {
                q: "What's included in the final deliverables?",
                a: "You'll receive high-resolution edited footage, highlight reels, and raw footage on a custom USB drive with branded packaging.",
              },
              {
                q: "Do you travel for destination events?",
                a: "Yes! We love destination projects. Travel costs are calculated separately based on location and duration.",
              },
              {
                q: "How long does post-production take?",
                a: "Typical turnaround is 4-6 weeks for weddings and 2-4 weeks for commercial projects, depending on complexity.",
              },
              {
                q: "Can we request specific shots or styles?",
                a: "We encourage clients to share inspiration and specific requests during our consultation process.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-dusty-rose border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-deep-taupe mb-4 font-playfair">{faq.q}</h3>
                  <p className="text-rich-brown leading-relaxed">{faq.a}</p>
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
            Ready to get started?
          </h2>
          <p className="text-xl text-rich-brown mb-12 leading-relaxed">
            Let's discuss your project and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal
              trigger={
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Book Free Consultation
                </Button>
              }
            />
            <Link href="/portfolio">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
