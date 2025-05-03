"use client"

import { ChevronUp, ExternalLink, Heart, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  // Dynamic data
  const currentYear = new Date().getFullYear()
  const services = [
    { name: "Cardiology", icon: "❤️" },
    { name: "Dermatology", icon: "🔬" },
    { name: "Neurology", icon: "🧠" },
    { name: "Orthopedics", icon: "🦴" },
    { name: "Pediatrics", icon: "👶" },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      // In a real app, you would send this to your API
      console.log("Subscribed:", email)
    }
  }

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <footer className="relative text-white">
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
        <svg
          className="relative block w-full h-[70px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#192f47]"
          ></path>
        </svg>
      </div>

      <div className="bg-[#192f47] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section with animated gradient */}
          <div className="flex md:flex-row flex-col md:justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                SmartMed
              </h1>
            </div>
            <div className="flex gap-3 mt-6 md:mt-0">
              <Link href={"/about"}>
                <button className="py-2.5 px-6 rounded-full border border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <span>Contact Us</span>
                  <Mail className="w-4 h-4" />
                </button>
              </Link>
              <Link href={"/alldoctor"}>
                <button className="py-2.5 px-6 rounded-full bg-blue-400 text-white hover:bg-white hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <span>Appointment</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Services section with collapsible mobile view */}
            <div className="bg-[#1d3553] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-10px]">
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("services")}
              >
                <h2 className="text-xl font-semibold text-blue-400">Our Services</h2>
                <ChevronUp
                  className={`w-5 h-5 md:hidden transition-transform duration-300 ${activeSection === "services" ? "rotate-180" : ""}`}
                />
              </div>

              <ul
                className={`mt-4 space-y-3 ${activeSection === "services" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
              >
                {services.map((service, index) => (
                  <li key={index} className="group">
                    <Link
                      href={"/"}
                      className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {service.icon}
                      </span>
                      {service.name}
                      <span className="h-[1px] w-0 bg-blue-400 group-hover:w-12 transition-all duration-300 ml-1"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links section */}
            <div className="bg-[#1d3553] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-10px]">
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("links")}
              >
                <h2 className="text-xl font-semibold text-blue-400">Useful Links</h2>
                <ChevronUp
                  className={`w-5 h-5 md:hidden transition-transform duration-300 ${activeSection === "links" ? "rotate-180" : ""}`}
                />
              </div>

              <ul
                className={`mt-4 space-y-3 ${activeSection === "links" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
              >
                {["Home", "About", "Services", "Contact"].map((link, index) => (
                  <li key={index} className="overflow-hidden">
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section with newsletter */}
            <div className="bg-[#1d3553] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-10px]">
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection("contact")}
              >
                <h2 className="text-xl font-semibold text-blue-400">Get In Touch</h2>
                <ChevronUp
                  className={`w-5 h-5 md:hidden transition-transform duration-300 ${activeSection === "contact" ? "rotate-180" : ""}`}
                />
              </div>

              <div
                className={`mt-4 space-y-4 ${activeSection === "contact" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
              >
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-400 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-300">Call Us</p>
                    <p className="font-medium">+0187772662</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400 w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <p className="font-medium">smartmed@gmail.com</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm mb-2">Subscribe to our newsletter:</p>
                  {subscribed ? (
                    <div className="bg-green-900/30 text-green-400 p-2 rounded text-sm">Thanks for subscribing!</div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="bg-[#15253d] text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-r-md transition-colors duration-300"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-12 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
              <p className="text-sm text-gray-300">
                © {currentYear} HelthCARE. All Rights Reserved
                {/* Dynamic copyright year using JSX expression */}
              </p>

              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-300">Made with</p>
                <Heart className="text-red-500 w-4 h-4 animate-pulse" />
                <p className="text-sm text-gray-300">by</p>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  HelthCARE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer
