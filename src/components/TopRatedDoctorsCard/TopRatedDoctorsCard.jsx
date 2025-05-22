import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Star, StarHalf } from "lucide-react";
import Link from "next/link";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { Calendar, Clock, MapPin } from "lucide-react";

const TopRatedDoctorsCard = ({ doctor }) => {
  const {
    id,
    name,
    rating,
    location,
    image,
    specialists,
    designation,
    availability = "Available Today",
    experience = "10+ Years",
  } = doctor;

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-amber-500 text-amber-500"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="h-4 w-4 fill-amber-500 text-amber-500"
        />
      );
    }

    return stars;
  };
  return (
    <>
      
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="relative">
          {/* Image with gradient overlay */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />

            {/* Specialist badge */}
            <Badge className="absolute top-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white z-20 px-3 py-1.5">
              {specialists}
            </Badge>

            {/* Rating */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="flex text-amber-500">{renderStars(rating)}</div>
              <span className="font-medium text-sm">{rating}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-5 bg-gradient-to-br from-white to-cyan-50/30">
          {/* Doctor info */}
          <div className="space-y-4">
            <div>
              <Link href={`/top-doctors/${id}`} className="group/link">
                <h2 className="text-xl font-bold tracking-tight group-hover/link:text-cyan-600 transition-colors flex items-center">
                  {name}
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </h2>
              </Link>
              <p className="text-gray-500 text-sm">{designation}</p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-cyan-100 p-1.5 rounded-full">
                  <MapPin className="h-3.5 w-3.5 text-cyan-600" />
                </div>
                <span className="text-gray-600 truncate">{location}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="bg-amber-100 p-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5 text-amber-600" />
                </div>
                <span className="text-gray-600">{availability}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="bg-emerald-100 p-1.5 rounded-full">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <span className="text-gray-600">{experience}</span>
              </div>
            </div>

            {/* Book appointment button */}
            <Link href={`/top-doctors/${id}`}>
              <button className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 mt-2">
                Book Appointment
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
      
    </>
  );
};

export default TopRatedDoctorsCard;
