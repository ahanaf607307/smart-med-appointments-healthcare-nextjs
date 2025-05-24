import { Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ReviewCard = ({ name, role, review, rating, avatar }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  return (
    <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
            <p className="text-sm text-blue-600 font-medium">{role}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">"{review}"</p>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Rating:</span>
            <div className="flex gap-1">{renderStars(rating)}</div>
            <span className="text-sm text-gray-500 ml-1">({rating}/5)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ReviewCard
