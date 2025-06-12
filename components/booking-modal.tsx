"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface BookingModalProps {
  trigger: React.ReactNode
  service?: string
}

export default function BookingModal({ trigger, service }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: service || "",
    date: "",
    budget: "",
    message: "",
    preferredTime: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Handle form submission
      console.log("Form submitted:", formData)
      setStep(4) // Success step
      setTimeout(() => {
        setIsOpen(false)
        setStep(1)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: service || "",
          date: "",
          budget: "",
          message: "",
          preferredTime: "",
        })
      }, 2000)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-deep-taupe mb-2 font-playfair">Let's Get Started</h3>
              <p className="text-rich-brown">Tell us a bit about yourself</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
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
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-deep-taupe mb-2 font-playfair">Project Details</h3>
              <p className="text-rich-brown">Tell us about your vision</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service" className="text-rich-brown font-medium">
                Service Type
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-rich-brown font-medium">
                  Event Date
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
                    <SelectValue placeholder="Select budget" />
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-rich-brown font-medium">
                Tell Us About Your Vision
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe min-h-[100px]"
                placeholder="Share details about your project, style preferences, or any special requirements..."
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-deep-taupe mb-2 font-playfair">Almost Done!</h3>
              <p className="text-rich-brown">When would you like to chat?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="text-rich-brown font-medium">
                Preferred Consultation Time
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleInputChange("preferredTime", value)}
              >
                <SelectTrigger className="bg-soft-cream border-warm-stone focus:border-deep-taupe focus:ring-deep-taupe">
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                  <SelectItem value="flexible">I'm flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Card className="bg-dusty-rose border-none">
              <CardContent className="p-6">
                <h4 className="font-semibold text-deep-taupe mb-4">Consultation Summary</h4>
                <div className="space-y-2 text-sm text-rich-brown">
                  <p>
                    <strong>Name:</strong> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <strong>Service:</strong> {formData.service}
                  </p>
                  <p>
                    <strong>Event Date:</strong> {formData.date || "To be discussed"}
                  </p>
                  <p>
                    <strong>Budget:</strong> {formData.budget || "To be discussed"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
            <div>
              <h3 className="text-2xl font-semibold text-deep-taupe mb-2 font-playfair">Thank You!</h3>
              <p className="text-rich-brown">
                We've received your consultation request and will get back to you within 24 hours.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-soft-cream border-warm-stone">
        <DialogHeader>
          <DialogTitle className="text-deep-taupe font-playfair">Book Your Free Consultation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="flex justify-between mt-8">
            {step > 1 && step < 4 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="border-warm-stone text-deep-taupe hover:bg-warm-stone hover:text-rich-brown"
              >
                Back
              </Button>
            )}
            {step < 4 && (
              <Button
                type="submit"
                className="btn-primary ml-auto"
                disabled={
                  (step === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) ||
                  (step === 2 && !formData.service) ||
                  (step === 3 && !formData.preferredTime)
                }
              >
                {step === 3 ? "Book Consultation" : "Next"}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
