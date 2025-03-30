"use client";

import { useState } from "react";
import {
  Droplet,
  MapPin,
  Phone,
  Clock,
  AlertTriangle,
  Calendar,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function BloodCard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample blood request data
  const request = {
    patientName: "Sarah Miller",
    hospitalName: "City General Hospital",
    bloodType: "A-",
    unitsNeeded: 3,
    urgency: "High", // High, Medium, Low
    location: "123 Medical Center Dr, Springfield",
    contactName: "Dr. James Wilson",
    contactPhone: "(555) 123-4567",
    postedDate: "2024-03-25",
    neededBy: "2024-03-29",
    hospitalImage: "/placeholder.svg?height=80&width=80",
  };

  // Calculate days remaining
  const getDaysRemaining = () => {
    const today = new Date();
    const neededBy = new Date(request.neededBy);
    const diffTime = neededBy.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining();

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDialogOpen(false);
      // Here you would typically handle the actual form submission
    }, 1500);
  };

  // Determine urgency styling
  const getUrgencyStyles = () => {
    switch (request.urgency) {
      case "High":
        return "bg-red-100 text-red-800 border-red-300";
      case "Medium":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Low":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <Card className=" max-w-sm  border-2 border-red-200 shadow-lg ">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">Blood Request</CardTitle>
            <CardDescription>For {request.patientName}</CardDescription>
          </div>
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={request.hospitalImage}
              alt={request.hospitalName}
            />
            <AvatarFallback className="bg-red-100 text-red-800">
              {request.hospitalName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge className="px-4 py-1.5 bg-red-600 hover:bg-red-600 text-white text-lg font-bold">
            <Droplet className="mr-1 h-5 w-5 fill-white" />
            {request.bloodType}
          </Badge>
          <div
            className={`flex items-center px-3 py-1 rounded-full border ${getUrgencyStyles()}`}
          >
            {request.urgency === "High" && (
              <AlertTriangle className="mr-1 h-4 w-4" />
            )}
            <span className="font-medium">{request.urgency} Urgency</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-3 shadow-sm">
          <div className="flex items-center text-sm font-medium">
            <Users className="mr-2 h-4 w-4 text-red-500" />
            Units Needed:{" "}
            <span className="ml-1 font-bold">{request.unitsNeeded}</span>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-gray-500 flex-shrink-0" />
            <span>{request.hospitalName}</span>
          </div>
          <div className="mt-1 flex items-center text-sm text-muted-foreground">
            <span className="ml-6">{request.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-muted p-3">
            <div className="flex items-center text-sm font-medium">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              Posted Date
            </div>
            <p className="mt-1 text-sm">{formatDate(request.postedDate)}</p>
          </div>
          <div className="rounded-lg bg-muted p-3">
            <div className="flex items-center text-sm font-medium">
              <Calendar className="mr-2 h-4 w-4 text-red-500" />
              Needed By
            </div>
            <p className="mt-1 text-sm font-semibold">
              {formatDate(request.neededBy)}
            </p>
          </div>
        </div>

        {daysRemaining <= 1 ? (
          <div className="flex items-center justify-center rounded-md bg-red-50 p-2 text-red-800 border border-red-200">
            <AlertTriangle className="mr-2 h-5 w-5" />
            <span className="font-medium">Urgent! Needed within 24 hours</span>
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-md bg-amber-50 p-2 text-amber-800 border border-amber-200">
            <Clock className="mr-2 h-5 w-5" />
            <span>{daysRemaining} days remaining to donate</span>
          </div>
        )}

        <div className="rounded-lg border bg-card p-3 shadow-sm">
          <div className="text-sm font-medium mb-2">Contact Information:</div>
          <div className="space-y-1 text-sm">
            <div>{request.contactName}</div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4 text-gray-500" />
              {request.contactPhone}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-white">
              I Can Donate
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Respond to Blood Request</DialogTitle>
              <DialogDescription>
                Please provide your information to help with this blood donation
                request.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="phone" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bloodType" className="text-right">
                    Blood Type
                  </Label>
                  <Input
                    id="bloodType"
                    className="col-span-3"
                    defaultValue={request.bloodType}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button  type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default BloodCard;
