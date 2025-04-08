'use client';

import BloodDonateForm from "@/components/BloodDonateForm/BloodDonateForm";
// import BloodFilters from '@/components/BloodFilters/BloodFilters'
// import BloodPostList from '@/components/BloodPostList/BloodPostList'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { Clock, Droplet, Filter, Search } from "lucide-react";
import { useState } from "react";

// Mock data for blood requests
const mockBloodRequests = [
    {
        id: "1",
        patientName: "John Doe",
        bloodType: "O+",
        unitsNeeded: 2,
        hospital: "City General Hospital",
        location: "123 Main St, Downtown, City",
        contactName: "Jane Doe",
        contactPhone: "555-123-4567",
        urgencyLevel: "immediate",
        postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    },
    {
        id: "2",
        patientName: "Sarah Smith",
        bloodType: "A-",
        unitsNeeded: 3,
        hospital: "Memorial Hospital",
        location: "456 Oak Avenue, Westside, City",
        contactName: "Mike Smith",
        contactPhone: "555-987-6543",
        urgencyLevel: "urgent",
        postedAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    },
    {
        id: "3",
        patientName: "Robert Johnson",
        bloodType: "AB+",
        unitsNeeded: 1,
        hospital: "University Medical Center",
        location: "789 College Blvd, Eastside, City",
        contactName: "Mary Johnson",
        contactPhone: "555-456-7890",
        urgencyLevel: "high",
        postedAt: new Date(Date.now() - 20 * 60 * 60 * 1000), // 20 hours ago
    },
    {
        id: "4",
        patientName: "Emily Chen",
        bloodType: "B+",
        unitsNeeded: 2,
        hospital: "St. Luke's Hospital",
        location: "101 Health Way, Northside, City",
        contactName: "David Chen",
        contactPhone: "555-234-5678",
        urgencyLevel: "immediate",
        postedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    },
    {
        id: "5",
        patientName: "Michael Brown",
        bloodType: "O-",
        unitsNeeded: 4,
        hospital: "Mercy Hospital",
        location: "202 Mercy Drive, Southside, City",
        contactName: "Lisa Brown",
        contactPhone: "555-345-6789",
        urgencyLevel: "urgent",
        postedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    },
]

const page = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [bloodTypeFilter, setBloodTypeFilter] = useState("all")
    const [urgencyFilter, setUrgencyFilter] = useState("all")
    const [displayData, setDisplayData] = useState(mockBloodRequests);
    const [selectedPost, setSelectedPost] = useState(null);
    const [open, setOpen] = useState(false);


    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['bloodPosts'],
        queryFn: async () => {
            const { data } = await axios.get(`/api/allBloodPosts?searchQuery=${searchQuery}`);
            // const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            return data;
        }
    });

    // console.log(data);

    if (isLoading) return <p>Loading....</p>

    // Filter posts based on search query and filters
    const filteredPosts = data.filter((post) => {
        // Search filter
        const matchesSearch =
            post.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.bloodType.toLowerCase().includes(searchQuery.toLowerCase())

        // Blood type filter
        const matchesBloodType = bloodTypeFilter === "all" || post.bloodType === bloodTypeFilter

        // Urgency filter
        const matchesUrgency = urgencyFilter === "all" || post.urgencyLevel.toLowerCase() === urgencyFilter.toLowerCase()

        return matchesSearch && matchesBloodType && matchesUrgency
    })

    // Get unique blood types and urgency levels for filter options
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    const urgencyLevels = ["Immediate", "Urgent", "High"]

    // Function to get urgency badge color
    const getUrgencyColor = (urgency) => {
        switch (urgency?.toLowerCase()) {
            case "immediate":
                return "capitalize bg-red-500 hover:bg-red-600"
            case "high":
                return "capitalize bg-orange-500 hover:bg-orange-600"
            case "urgent":
                return "capitalize bg-yellow-500 hover:bg-yellow-600"
            // case "low":
            //     return "capitalize bg-green-500 hover:bg-green-600"
            default:
                return "capitalize bg-slate-500 hover:bg-slate-600"
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

    const handleDonateBlood = (post) => {
        setSelectedPost(post)
        // setIsModalOpen(true)
        setOpen(true);
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-2 uppercase">All Blood <span className='text-[#00BDE0]'>Posts</span></h1>
                </div>

                {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <BloodFilters />
                    </div>

                    <div className="lg:col-span-3">
                        <BloodPostList />
                    </div>
                </div> */}

                {/* Blood Search and Filters Code */}
                {/* Search and Filter Section */}
                <div className="mb-8 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search by name, location, blood type..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <Select value={bloodTypeFilter} onValueChange={setBloodTypeFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by blood type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Blood Types</SelectItem>
                                    {bloodTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex-1">
                            <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by urgency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Urgency Levels</SelectItem>
                                    {urgencyLevels.map((level) => (
                                        <SelectItem key={level.toLowerCase()} value={level.toLowerCase()}>
                                            {level}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => {
                                setSearchQuery("")
                                setBloodTypeFilter("all")
                                setUrgencyFilter("all")
                            }}
                        >
                            <Filter size={16} />
                            Clear Filters
                        </Button>
                    </div>
                </div>

                {/* End of Blood Search and Filters Code */}

                {/* Blood Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <Card key={post.id} className="overflow-hidden">
                                <CardHeader className="pb-1">
                                    <div className="flex justify-between items-center">
                                        <Badge variant="outline" className="text-lg font-bold border-2">
                                            {post.bloodType}
                                        </Badge>
                                        <div className="flex flex-row gap-2">
                                            <Badge className={getUrgencyColor(post.urgencyLevel)}>{post.urgencyLevel}</Badge>
                                            <Badge variant="outline" className={getBloodTypeColor(post.bloodType)}>
                                                <Droplet className="h-3 w-3 mr-1" />
                                                {post.bloodType} ({post.unitsNeeded} {post.unitsNeeded === 1 ? "unit" : "units"})
                                            </Badge>
                                        </div>
                                    </div>
                                    {/* <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline" className={getUrgencyColor(post.urgencyLevel)}>
                                            <AlertCircle className="h-3 w-3 mr-1" />
                                            {getUrgencyLabel(post.urgencyLevel)}
                                        </Badge>

                                        <Badge variant="outline" className={getBloodTypeColor(post.bloodType)}>
                                            <Droplet className="h-3 w-3 mr-1" />
                                            {post.bloodType} ({post.unitsNeeded} {post.unitsNeeded === 1 ? "unit" : "units"})
                                        </Badge>
                                    </div> */}

                                    <CardTitle className="mt-2">{post.location}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <h3 className="text-lg font-semibold">{post.patientName}</h3>
                                        <div className="flex items-center text-gray-500 text-sm mt-1">
                                            <Clock className="h-4 w-4 mr-1" />
                                            <span>Posted {formatDistanceToNow(post.postedAt, { addSuffix: true })}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardContent>
                                    {/* <p className="text-muted-foreground mb-4">{post.description}</p> */}
                                    <div className="text-sm text-muted-foreground">
                                        {/* <p>Posted: {post.postedAt}</p> */}
                                        <p>Contact Name: {post.contactName}</p>
                                        <p>Contact Phone: {post.contactPhone}</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="bg-muted/50 pt-3">
                                    <Button onClick={() => handleDonateBlood(post)}
                                        className="bg-[#00BDE0] text-white font-bold px-4 py-2 rounded border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0]  disabled:cursor-not-allowed transition-all duration-300 cursor-pointer w-full">Donate Blood</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <h3 className="text-xl font-medium">No blood donation requests match your filters</h3>
                        <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setSearchQuery("")
                                setBloodTypeFilter("all")
                                setUrgencyFilter("all")
                            }}
                        >
                            Clear All Filters
                        </Button>
                    </div>
                )}
            </div>

            <BloodDonateForm
                // open={isModalOpen}
                open={open}
                // onClose={() => setIsModalOpen(false)}
                // onClose={() => setOpen(false)}
                setOpen={setOpen}
                post={selectedPost}
            />
        </div>
    )
}

export default page
