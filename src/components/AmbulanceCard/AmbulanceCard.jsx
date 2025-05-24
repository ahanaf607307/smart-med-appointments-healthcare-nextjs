import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Heart, MapPin, Phone, Shield, Star, Truck } from "lucide-react";

function AmbulanceCard({ ambulance }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "Critical Care":
        return "from-red-500 to-pink-500";
      case "Advanced Life Support":
        return "from-blue-500 to-cyan-500";
      case "Basic Life Support":
        return "from-green-500 to-emerald-500";
      case "Pediatric Specialized":
        return "from-purple-500 to-violet-500";
      case "Trauma Specialized":
        return "from-orange-500 to-red-500";
      case "Mobile ICU":
        return "from-indigo-500 to-blue-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  return (
    <Card className="group overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4  w-full">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={ambulance?.ambulanceImage || "/placeholder.svg"}
          alt={ambulance?.ambulanceName || "Ambulance"}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg">
          <Clock className="w-3 h-3 mr-1" />
          Available 24/7
        </Badge>

        <Badge
          className={`absolute top-4 left-4 bg-gradient-to-r ${getTypeColor(
            ambulance?.type
          )} text-white border-0 shadow-lg`}
        >
          <Shield className="w-3 h-3 mr-1" />
          {ambulance?.type || "Emergency"}
        </Badge>

        {/* Response Time Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-800">
            {ambulance?.responseTime || "5-10 min"}
          </span>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
          {ambulance?.ambulanceName}
        </CardTitle>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600">(4.9/5)</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pb-4">
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            ${ambulance?.rentPrice}
          </div>
          <div className="text-sm text-gray-500">per service</div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium">{ambulance?.location}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-gray-600">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium">+880 {ambulance?.phoneNumber}</span>
        </div>

        {/* Equipment */}
        {ambulance?.equipment && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="font-medium text-sm">Equipment Available:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {ambulance.equipment.slice(0, 3).map((item, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                >
                  {item}
                </Badge>
              ))}
              {ambulance.equipment.length > 3 && (
                <Badge
                  variant="outline"
                  className="text-xs bg-gray-50 text-gray-600 border-gray-200"
                >
                  +{ambulance.equipment.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full space-y-2">
          <Button className="w-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-semibold h-12 transition-all duration-300 transform hover:scale-105">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 h-10"
          >
            <Truck className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AmbulanceCard;
