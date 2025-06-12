"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    budget: "",
    message: "",
  })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setSuccess(true)
      setLoading(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        budget: "",
        message: "",
      })
    }, 1000)
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
              <Link href="/blog" className="text-rich-brown hover:text-deep-taupe transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-deep-taupe font-medium">
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
            <h1 className="text-5xl md:text-6xl font-semibold text-deep-taupe mb-6 font-playfair">Let's Connect</h1>
            <p className="text-xl text-rich-brown max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your project and discuss how we can create
              something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-dusty-rose border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold text-deep-taupe mb-8 font-playfair">
                  Tell Us About Your Project
                </h2>

                {success && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    Thank you for your message! We'll be in touch within 24 hours.
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-rich-brown font-medium">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-rich-brown font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-rich-brown font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-rich-brown font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-rich-brown font-medium">
                      Service Interested In
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding Cinematography</SelectItem>
                        <SelectItem value="commercial">Commercial Production</SelectItem>
                        <SelectItem value="portrait">Portrait Photography</SelectItem>
                        <SelectItem value="event">Event Coverage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-rich-brown font-medium">
                      Event Date (if applicable)
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-rich-brown font-medium">
                      Budget Range
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2k">Under $2,000</SelectItem>
                        <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-plus">$10,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-rich-brown font-medium">
                      Tell Us About Your Vision
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe min-h-[120px]"
                      placeholder="Share details about your project, style preferences, special requirements, or any questions you have..."
                      required
                    />
                  </div>

                  <Button size="lg" className="w-full btn-primary text-lg py-4" disabled={loading}>
                    <Send className="w-5 h-5 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-deep-taupe mb-8 font-playfair">Get In Touch</h2>
                <p className="text-xl text-rich-brown leading-relaxed mb-8">
                  We're here to answer your questions and help bring your creative vision to life. Reach out through any
                  of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-warm-stone border-none shadow-lg">
                  <CardContent className="p-6">
                    <button
                      onClick={handleCallNow}
                      className="flex items-center space-x-4 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-deep-taupe rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-soft-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-taupe mb-1">Phone</h3>
                        <p className="text-rich-brown">+1 (555) 123-4567</p>
                        <p className="text-sm text-rich-brown/80">Available Mon-Fri, 9AM-6PM PST</p>
                      </div>
                    </button>
                  </CardContent>
                </Card>

                <Card className="bg-warm-stone border-none shadow-lg">
                  <CardContent className="p-6">
                    <button
                      onClick={handleEmailUs}
                      className="flex items-center space-x-4 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-deep-taupe rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-soft-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-taupe mb-1">Email</h3>
                        <p className="text-rich-brown">hello@insaniyyahfilms.com</p>
                        <p className="text-sm text-rich-brown/80">We respond within 24 hours</p>
                      </div>
                    </button>
                  </CardContent>
                </Card>

                <Card className="bg-warm-stone border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-deep-taupe rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-soft-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-taupe mb-1">Location</h3>
                        <p className="text-rich-brown">Los Angeles, California</p>
                        <p className="text-sm text-rich-brown/80">Serving LA & surrounding areas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-warm-stone border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-deep-taupe rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-soft-cream" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-taupe mb-1">Response Time</h3>
                        <p className="text-rich-brown">Within 24 hours</p>
                        <p className="text-sm text-rich-brown/80">Usually much faster!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-dusty-rose p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-deep-taupe mb-4 font-playfair">
                  Prefer to Schedule a Call?
                </h3>
                <p className="text-rich-brown mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your project in detail and see if we're the right fit
                  for your vision.
                </p>
                <BookingModal trigger={<Button className="btn-primary">Schedule Free Consultation</Button>} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-deep-taupe mb-6 font-playfair">Find Us</h2>
            <p className="text-xl text-rich-brown leading-relaxed">
              Based in Los Angeles, serving clients throughout Southern California and beyond
            </p>
          </div>

          <div className="bg-warm-stone rounded-lg p-8 text-center">
            <div className="w-full h-64 bg-soft-cream rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Image
                  src="/images/insaniyyah-logo.png"
                  alt="Insaniyyah Films Logo"
                  width={60}
                  height={60}
                  className="rounded-full mx-auto mb-4"
                />
                <p className="text-rich-brown">Interactive map would be embedded here</p>
                <p className="text-sm text-rich-brown/80">Los Angeles, CA 90210</p>
              </div>
            </div>
            <p className="text-rich-brown">
              We're happy to travel for destination weddings and special projects.
              <br />
              Contact us to discuss travel arrangements for your event.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
