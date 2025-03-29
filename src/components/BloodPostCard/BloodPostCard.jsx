import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"
import { AlertCircle, Clock, Droplet, MapPin, Phone } from "lucide-react"

const BloodPostCard = ({ bloodPost, handleDonateBlood }) => {

    const getUrgencyColor = (level) => {
        switch (level) {
            case "immediate":
                return "bg-red-100 text-red-800 border-red-200"
            case "urgent":
                return "bg-amber-100 text-amber-800 border-amber-200"
            case "high":
                return "bg-orange-100 text-orange-800 border-orange-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const getUrgencyLabel = (level) => {
        switch (level) {
            case "immediate":
                return "Immediate (Within hours)"
            case "urgent":
                return "Urgent (Within 24 hours)"
            case "high":
                return "High (Within 48 hours)"
            default:
                return level
        }
    }

    const getBloodTypeColor = (type) => {
        if (type.includes("O")) return "bg-green-100 text-green-800 border-green-200"
        if (type.includes("A")) return "bg-blue-100 text-blue-800 border-blue-200"
        if (type.includes("B")) return "bg-purple-100 text-purple-800 border-purple-200"
        if (type.includes("AB")) return "bg-indigo-100 text-indigo-800 border-indigo-200"
        return "bg-gray-100 text-gray-800 border-gray-200"
    };

    // const handleClick = () => {
    //     console.log(`Button clicked: ${bloodPost.id}`);
    //     // You can perform any action here like updating state, making API calls, etc.
    //   };


    return (
        <Card
            className="overflow-hidden border-l-4"
            style={{
                borderLeftColor:
                    bloodPost.urgencyLevel === "immediate" ? "#ef4444" : bloodPost.urgencyLevel === "urgent" ? "#f59e0b" : "#f97316",
            }}
        >
            <CardContent className="p-0">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-lg font-semibold">{bloodPost.patientName}</h3>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>Posted {formatDistanceToNow(bloodPost.postedAt, { addSuffix: true })}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className={getUrgencyColor(bloodPost.urgencyLevel)}>
                                <AlertCircle className="h-3 w-3 mr-1" />
                                {getUrgencyLabel(bloodPost.urgencyLevel)}
                            </Badge>

                            <Badge variant="outline" className={getBloodTypeColor(bloodPost.bloodType)}>
                                <Droplet className="h-3 w-3 mr-1" />
                                {bloodPost.bloodType} ({bloodPost.unitsNeeded} {bloodPost.unitsNeeded === 1 ? "unit" : "units"})
                            </Badge>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                                <div className="font-medium">{bloodPost.hospital}</div>
                                <div className="text-gray-500 text-sm">{bloodPost.location}</div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                            <div>
                                <div className="font-medium">{bloodPost.contactName}</div>
                                <div className="text-gray-500 text-sm">{bloodPost.contactPhone}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-500">Contact the requester directly or use the button to respond</div>
                    <div className="flex gap-2">
                        {/* <Button variant="outline" size="sm">
                            Share
                        </Button> */}
                        <Button
                            onClick={() => handleDonateBlood(bloodPost)}
                            className="bg-[#00BDE0] text-white font-bold px-4 py-2 rounded border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0]  disabled:cursor-not-allowed transition-all duration-300 cursor-pointer">Donate Blood</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default BloodPostCard
