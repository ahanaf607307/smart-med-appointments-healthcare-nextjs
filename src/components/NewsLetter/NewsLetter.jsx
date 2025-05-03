"use client"


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CheckCircle, Mail, PartyPopper, Send } from "lucide-react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setSubmitted(true)
      setShowModal(true)

      // Reset form state after delay (only if modal is closed)
      setTimeout(() => {
        if (!showModal) {
          setSubmitted(false)
          setEmail("")
        }
      }, 3000)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSubmitted(false)
    setEmail("")
  }

  return (
    <>
      <div className="relative overflow-hidden py-16 px-4 sm:px-6">
        {/* Decorative background elements */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-2xl p-10 dark:bg-gray-900/80 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left side with icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30">
                <Mail className="h-12 w-12" />
              </div>

              {/* Right side with content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Join Our Insider Newsletter
                </h2>
                <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                  Get exclusive deals, early access to new products, and insider tips delivered straight to your inbox.
                </p>

                {/* Benefits */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Weekly updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Exclusive offers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="pl-4 pr-10 py-6 w-full text-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className={`group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md font-medium transition-all duration-300 ${submitted ? "bg-green-500" : ""}`}
                    >
                      <span
                        className={`flex items-center gap-2 transition-transform duration-300 ${submitted ? "translate-y-12" : "translate-y-0"}`}
                      >
                        Subscribe <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${submitted ? "translate-y-0" : "-translate-y-12"}`}
                      >
                        <CheckCircle className="h-6 w-6 mr-1" /> Subscribed!
                      </span>
                    </Button>
                  </div>
                </form>

                {/* Social proof */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join over <span className="font-bold">10,000+</span> subscribers who trust our newsletter
                  </p>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white dark:border-gray-800"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-bold">
                      +7k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <PartyPopper className="h-6 w-6 text-green-500" />
              Subscription Successful!
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              Thank you for subscribing to our newsletter.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg my-4">
            <p className="text-center text-gray-700 dark:text-gray-300">
              We've sent a confirmation email to <span className="font-bold">{email}</span>
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Please check your inbox and confirm your subscription to start receiving our newsletter.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseModal} className="w-full sm:w-auto">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
