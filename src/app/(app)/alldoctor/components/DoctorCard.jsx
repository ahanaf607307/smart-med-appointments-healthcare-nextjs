"use client"
import Link from "next/link"
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { BsClockHistory } from "react-icons/bs"

const DoctorCard = ({ doctor }) => {
  const { _id, name, category, gender, imageLink, rating, experience } = doctor

  // Generate dynamic star rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />)
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" />)
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />)
    }

    return stars
  }

  return (
    <Link href={`/alldoctor/${_id}`} className="block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative">
        {/* Top curved background decoration */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl" />

        {/* Content container with proper spacing */}
        <div className="relative px-5 pt-8 pb-6">
          {/* Image and category */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img
                  src={imageLink || "/placeholder.svg?height=112&width=112"}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full shadow-md">
                <span className="text-white text-xs font-medium whitespace-nowrap">{category}</span>
              </div>
            </div>
          </div>

          {/* Doctor name and info */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">{name}</h2>
            <div className="flex items-center justify-center mt-1 text-yellow-500 text-sm gap-0.5">
              {renderStars(rating)}
              <span className="ml-2 text-gray-600">({rating})</span>
            </div>
          </div>

          {/* Details section */}
          <div className="grid grid-cols-1 gap-3 mt-5 pt-5 border-t border-gray-100">
            {/* Experience */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <BsClockHistory className="text-blue-600 text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-medium text-gray-700">{experience}</p>
              </div>
            </div>

            {/* Gender */}
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <FaUserDoctor className="text-purple-600 text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Gender</p>
                <p className="text-sm font-medium text-gray-700">{gender}</p>
              </div>
            </div>
          </div>

          {/* Book appointment button */}
          <button className="w-full py-2.5 mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
            Book Appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default DoctorCard
