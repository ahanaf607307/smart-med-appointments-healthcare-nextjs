'use client'

import Link from "next/link";
import { useState } from "react";
import TopRatedDoctorsCard from "../TopRatedDoctorsCard/TopRatedDoctorsCard";

const topRatedMockDoctorsData = [
    {
        id: 1,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-1.jpg',
        rating: '5.0',
        name: "Dr. Demetrius Wright",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Pathologist",
    },
    {
        id: 2,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-2.jpg',
        rating: '5.0',
        name: "Dr. Patrick Smith",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Cardiologist",
    },
    {
        id: 3,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-3.jpg',
        rating: '5.0',
        name: "Dr. Brenton Ottinger",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Neurologist",
    },
    {
        id: 4,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-4.jpg',
        rating: '4.5',
        name: "Dr. Demetrius Wright",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Gynocologist",
    },
    {
        id: 5,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-5.jpg',
        rating: '5.0',
        name: "Dr. Demetrius Wright",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Pathologist",
    },
    {
        id: 6,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-6.jpg',
        rating: '5.0',
        name: "Dr. Demetrius Wright",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Pathologist",
    },
    {
        id: 7,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-7.jpg',
        rating: '5.0',
        name: "Dr. Demetrius Wright",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Pathologist",
    },
    {
        id: 8,
        image: 'https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-8.jpg',
        rating: '5.0',
        name: "Dr. Demetrius Wright",
        designation: "MBBS, MD, DM, PhD",
        location: "MBBS, MD, DM, PhD",
        specialists: "Pathologist",
    },
]

const TopRatedDoctors = () => {

    const [topDoctors, setTopDoctors] = useState(topRatedMockDoctorsData);

    // console.log(topDoctors);

    return (
        <div className="container mx-auto">

            <div className=" bg-white px-5 md:px-10 lg:px-4 py-10 lg:min-h-screen gap-5">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase">Meet The Top <span className="text-[#00BDE0]">Rated Doctors</span></h1>
                </div>
                {/* End of Heading */}

                {/* Doctors Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                    {
                        topDoctors?.map((doctor) =>
                            <TopRatedDoctorsCard key={doctor.id} doctor={doctor} />
                        )
                    }
                </div>
                {/* End of Doctors Container */}

                {/* View All Button */}
                <div className="flex flex-col justify-center items-center mt-8">
                    <Link href='/top-doctors'>
                        <button className="bg-[#00BDE0] text-white px-10 py-2 rounded-2xl border-2 border-[#00BDE0] cursor-pointer transition-all hover:bg-transparent hover:text-[#00BDE0] font-bold">View All</button>
                    </Link>
                </div>
                {/* End of View all Button */}
            </div>
        </div>
    );
};

export default TopRatedDoctors;

// Resources
// https://templates.envytheme.com/hinton/default/index-2.html
// Pathologist Cardiologist Neurologist Gynocologist Dermatologist Physiologist ENT Surgeon Epidemiologist