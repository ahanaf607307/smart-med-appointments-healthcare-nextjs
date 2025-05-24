"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import ReviewCard from "./ReviewCard"


const reviewsData = [
  {
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    review:
      "This healthcare platform has revolutionized how I manage patient consultations. The telemedicine features are seamless, and the patient management system is incredibly intuitive. Highly recommended for healthcare professionals!",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Maria Rodriguez",
    role: "Patient",
    review:
      "Booking appointments has never been easier! The platform's user-friendly interface and quick response from healthcare providers made my experience exceptional. The prescription management feature is a game-changer.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Dr. Michael Chen",
    role: "General Practitioner",
    review:
      "The comprehensive patient history tracking and real-time health monitoring tools have significantly improved my practice efficiency. The platform's security features give both me and my patients peace of mind.",
    rating: 4,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jennifer Thompson",
    role: "Nurse Practitioner",
    review:
      "As a healthcare provider, I appreciate how this platform streamlines patient communication and appointment scheduling. The mobile app works flawlessly, making it easy to stay connected with patients on the go.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Robert Williams",
    role: "Patient",
    review:
      "The 24/7 virtual consultation feature saved me during an emergency. The doctors were professional and provided excellent care remotely. The prescription delivery service is an added bonus!",
    rating: 4,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Dr. Emily Davis",
    role: "Pediatrician",
    review:
      "Managing my young patients' health records has become so much easier with this platform. The family-friendly interface and comprehensive health tracking tools are exactly what modern healthcare needs.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const ReviewAndRating = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Healthcare Community Says</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of healthcare professionals and patients worldwide
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="pb-8"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ReviewAndRating
