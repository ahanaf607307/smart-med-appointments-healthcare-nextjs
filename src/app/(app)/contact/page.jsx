"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone, Send, MessageCircle, HeartHandshake, Shield, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage("Thank you for your message. We'll get back to you soon!")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Healthcare Avenue", "Medical District, City 12345"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["General: (123) 456-7890", "Emergency: (123) 456-7999"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@healthcareservices.com", "support@healthcareservices.com"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Hours of Operation",
      details: [
        "Monday - Friday: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: 10:00 AM - 2:00 PM",
        "Emergency Services: 24/7",
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            We're here to help. Reach out to us with any questions, concerns, or to schedule an appointment.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>

              {submitMessage && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    rows={5}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
                <p className="text-gray-600">Multiple ways to reach us</p>
              </div>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div
                          className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className={`text-gray-600 ${
                                  detail.includes("Emergency") ? "font-semibold text-red-600" : ""
                                }`}
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Emergency Notice */}
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-1">Emergency Services</h3>
                    <p className="text-red-700">
                      For medical emergencies, call <span className="font-bold">(123) 456-7999</span> or visit our
                      emergency department immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Map</h3>
                    <p className="text-gray-600">Find us easily with our location map</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
