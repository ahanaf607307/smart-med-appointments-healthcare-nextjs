"use client"

import Image from "next/image"
import { Heart, Users, Clock, Award, Stethoscope, Ambulance, Calendar, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  const stats = [
    { number: "50K+", label: "Patients Served", icon: Users },
    { number: "24/7", label: "Emergency Care", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Medical Staff", icon: Stethoscope },
  ]

  const services = [
    {
      title: "Blood Donation",
      description:
        "Our blood donation service helps save lives by ensuring a steady supply of blood for those in need.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Ambulance Service",
      description:
        "Our 24/7 ambulance service provides rapid emergency medical transportation with trained professionals.",
      icon: Ambulance,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Doctor Appointments",
      description:
        "Schedule appointments with our experienced doctors across various specialties for quality healthcare.",
      icon: Calendar,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Emergency",
      specialty: "Emergency Medicine",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Specialist",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824804732-ca8db7531fae?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "Dr. James Wilson",
      role: "Surgical Director",
      specialty: "General Surgery",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1470&auto=format&fit=crop",
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-200/30 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Trusted Healthcare Since 2010
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Dedicated to providing exceptional healthcare services to our community with compassion, innovation, and
            excellence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mission Section */}
        <section className="container mx-auto mb-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Transforming Healthcare with{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Compassion
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is to improve the health and wellbeing of the communities we serve by providing accessible,
                high-quality healthcare services with compassion and respect.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to excellence in patient care, innovation in medical practices, and fostering a
                supportive environment for our patients, staff, and community partners.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
                  alt="Healthcare professionals"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We offer a comprehensive range of healthcare services to meet the diverse needs of our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-8">
                      <div
                        className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our dedicated team of healthcare professionals is committed to providing the highest quality care.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop"
                  alt="Hospital building"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                A Legacy of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, our healthcare service began with a small clinic dedicated to providing basic medical
                care to underserved communities. Over the years, we have grown into a comprehensive healthcare provider
                with multiple services and facilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to expand our services and reach, always guided by our founding principles of
                compassion, excellence, and accessibility.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
