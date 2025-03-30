import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
import ambulanceImage from '../../../public/assets/images/ambulance/ambulance1.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

 function AmbulanceCard() {
  return (
    <Card className="overflow-hidden max-w-sm w-full">
      <div className="relative h-52 w-full">
        <Image
          src={ ambulanceImage}
          alt={` ambulance`}
          fill
          className="object-cover p-4"
        />
        <Badge className="absolute top-3 right-3 bg-red-500 text-white ">Available 24/7</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">Ambulance Name</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-lg font-bold text-red-600">
          Rent Price $
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Location</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4" />
          <span className="font-medium">+880 1609961661</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-cyan-500 hover:bg-cyan-400 cursor-pointer">Call Now</Button>
      </CardFooter>
    </Card>
  )
}

;

export default AmbulanceCard;