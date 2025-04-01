'use client';
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const page = () => {
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

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-2 uppercase">Contact <span className='text-[#00BDE0]'>Us</span></h1>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        We're here to help. Reach out to us with any questions or concerns.
                    </p>
                </div>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
                {/* Contact Form */}
                <div className="bg-card p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                    {submitMessage && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">{submitMessage}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this regarding?"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    rows={5}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-[#00BDE0] text-white font-bold px-4 py-2 rounded border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0]  disabled:cursor-not-allowed transition-all duration-300 cursor-pointer" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                                <p className="text-muted-foreground">123 Healthcare Avenue</p>
                                <p className="text-muted-foreground">Medical District, City 12345</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Phone Numbers</h3>
                                <p className="text-muted-foreground">General: (123) 456-7890</p>
                                <p className="text-muted-foreground">Emergency: (123) 456-7999</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Email Addresses</h3>
                                <p className="text-muted-foreground">info@healthcareservices.com</p>
                                <p className="text-muted-foreground">support@healthcareservices.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">Hours of Operation</h3>
                                <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM</p>
                                <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM</p>
                                <p className="text-muted-foreground">Sunday: 10:00 AM - 2:00 PM</p>
                                <p className="text-muted-foreground font-semibold mt-1">Emergency Services: 24/7</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    {/* <div className="mt-8 rounded-lg overflow-hidden h-64 bg-muted">
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            Interactive Map Would Be Displayed Here
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default page
