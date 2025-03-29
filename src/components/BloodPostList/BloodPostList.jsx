"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Search } from "lucide-react"
import { useState } from "react"
import BloodDonateForm from "../BloodDonateForm/BloodDonateForm"
import BloodPostCard from "../BloodPostCard/BloodPostCard"


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


const BloodPostList = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [requests, setRequests] = useState(mockBloodRequests);
    const [sortedRequests, setSortedRequested] = useState(mockBloodRequests);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['bloodPosts'],
        queryFn: async () => {
            const { data } = await axios.get(`/all-blood-post?searchQuery=${searchQuery}`);
            return data;
        }
    });

    if (isLoading) return <p>Loading....</p>


    const filteredRequests = requests.filter((request) => {
        const searchLower = searchQuery.toLowerCase()
        return (
            request.patientName.toLowerCase().includes(searchLower) ||
            request.hospital.toLowerCase().includes(searchLower) ||
            request.location.toLowerCase().includes(searchLower) ||
            request.bloodType.toLowerCase().includes(searchLower)
        )
    })

    // Sort by urgency and then by posted time
    // const sortedRequests = [...filteredRequests].sort((a, b) => {
    //     const urgencyOrder = { immediate: 0, urgent: 1, high: 2 }
    //     const urgencyComparison =
    //         urgencyOrder[a.urgencyLevel as keyof typeof urgencyOrder] -
    //         urgencyOrder[b.urgencyLevel as keyof typeof urgencyOrder]

    //     if (urgencyComparison !== 0) return urgencyComparison

    //     // If same urgency, sort by most recent
    //     return b.postedAt.getTime() - a.postedAt.getTime()
    // })

    const handleDonateBlood = (post) => {
        setSelectedPost(post)
        setIsModalOpen(true)
    }

    return (
        <div className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                    placeholder="Search by name, hospital, location or blood type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Showing {sortedRequests.length} requests</p>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery("")}>
                    Clear filters
                </Button>
            </div>

            {sortedRequests.length === 0 ? (
                <div className="text-center py-10 border rounded-lg bg-gray-50">
                    <p className="text-gray-500">No blood requests match your search criteria</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {sortedRequests.map((request) => (
                        <BloodPostCard key={request.id} bloodPost={request}
                            handleDonateBlood={handleDonateBlood}
                        />
                    ))}
                </div>
            )}

            <div className="flex flex-col justify-center items-center">
                <Button variant="btnPrimary">View All</Button>
            </div>

            <div className="flex flex-col justify-center items-center">

            </div>

            <BloodDonateForm
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                post={selectedPost}
            />

        </div>
    )
}

export default BloodPostList;
