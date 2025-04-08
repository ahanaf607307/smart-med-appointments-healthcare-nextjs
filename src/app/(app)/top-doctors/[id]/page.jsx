'use client';

import DoctorReviewModal from '@/components/DoctorReviewModal/DoctorReviewModal';
import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaHospital, FaMapMarkerAlt, FaPhone, FaStar, FaStethoscope } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';

const page = ({ params }) => {
    // console.log(params.id);

    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
    const doctor = {
        name: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
        rating: 4.8,
        reviews: 124,
        location: "123 Medical Center Drive, Boston, MA",
        hospital: "Boston General Hospital",
        specialists: ["Cardiology", "Internal Medicine"],
        designation: "Senior Cardiologist",
        experience: "12 years",
        education: "MD, Harvard Medical School",
        about: "Dr. Johnson is a board-certified cardiologist with extensive experience in treating heart conditions. She is known for her patient-centered approach and commitment to providing the highest quality care.",
        availability: [
            { day: "Monday", time: "9:00 AM - 5:00 PM" },
            { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
            { day: "Friday", time: "9:00 AM - 3:00 PM" }
        ],
        contact: "+1 (617) 555-0123"
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Doctor Header Section */}
                    <div className="md:flex">
                        <div className="md:w-1/3 p-6 flex justify-center">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-64 h-64 rounded-full object-cover border-4 border-blue-100"
                            />
                        </div>
                        <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
                                    <p className="text-blue-600 font-medium">{doctor.designation}</p>
                                </div>
                                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                                    <FaStar className="text-yellow-400 mr-1" />
                                    <span className="font-semibold text-gray-700">{doctor.rating}</span>
                                    <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center text-gray-600">
                                    <FaStethoscope className="mr-2 text-blue-500" />
                                    <span>{doctor.specialists.join(", ")}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <FaHospital className="mr-2 text-blue-500" />
                                    <span>{doctor.hospital}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                                    <span>{doctor.location}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    onClick={() => setIsReviewModalOpen(true)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md mr-4">
                                    <MdOutlineReviews className="inline mr-2" />
                                    Add Review
                                </button>
                                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
                                    <FaCalendarAlt className="inline mr-2" />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Doctor Details Section */}
                    <div className="border-t border-gray-200 p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">About Doctor</h2>
                                <p className="text-gray-600">{doctor.about}</p>

                                <div className="mt-6">
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Education</h3>
                                    <p className="text-gray-600">{doctor.education}</p>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Experience</h3>
                                    <p className="text-gray-600">{doctor.experience} of experience</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Availability</h2>
                                <div className="space-y-4">
                                    {doctor.availability.map((slot, index) => (
                                        <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                                            <FaClock className="text-blue-500 mr-3" />
                                            <div>
                                                <p className="font-medium text-gray-800">{slot.day}</p>
                                                <p className="text-gray-600 text-sm">{slot.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-lg font-medium text-gray-800 mb-2">Contact Information</h3>
                                    <div className="flex items-center text-gray-600">
                                        <FaPhone className="mr-2 text-blue-500" />
                                        <span>{doctor.contact}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Review Modal */}
            <DoctorReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
        </div>


    )
}

export default page
