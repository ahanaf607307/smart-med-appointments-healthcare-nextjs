"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for doctors
const doctorsData = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        category: "Cardiologist",
        gender: "Female",
        image: "/placeholder.svg?height=100&width=100",
        rating: 4.8,
        experience: "10 years",
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        category: "Pediatrician",
        gender: "Male",
        image: "/placeholder.svg?height=100&width=100",
        rating: 4.9,
        experience: "15 years",
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        category: "Dermatologist",
        gender: "Female",
        image: "/placeholder.svg?height=100&width=100",
        rating: 4.7,
        experience: "8 years",
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        category: "Neurologist",
        gender: "Male",
        image: "/placeholder.svg?height=100&width=100",
        rating: 4.6,
        experience: "12 years",
    },
    {
        id: 5,
        name: "Dr. Lisa Patel",
        category: "Orthopedic",
        gender: "Female",
        image: "/placeholder.svg?height=100&width=100",
        rating: 4.9,
        experience: "14 years",
    },
    {
        id: 6,
        name: "Dr. Robert Kim",
        category: "Pediatrician",
        gender: "Male",
        image: "/placeholder.svg?height=100&width=100",
        rating: 4.5,
        experience: "7 years",
    },
]

// Get unique categories for the filter
const categories = Array.from(new Set(doctorsData.map((doctor) => doctor.category)))

export function Filter() {
    const [nameFilter, setNameFilter] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("")
    const [genderFilter, setGenderFilter] = useState("")

    // Filter doctors based on all filters
    const filteredDoctors = doctorsData.filter((doctor) => {
        const matchesName = doctor.name.toLowerCase().includes(nameFilter.toLowerCase())
        const matchesCategory = categoryFilter === "" || doctor.category === categoryFilter
        const matchesGender = genderFilter === "" || doctor.gender === genderFilter

        return matchesName && matchesCategory && matchesGender
    })

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Name filter */}
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Search doctor name"
                        className="pl-10"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                    />
                </div>

                {/* Category filter */}
                <div className="flex gap-4 justify-center">
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All specialties</SelectItem>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>


                    {/* Gender filter */}
                    <Select value={genderFilter} onValueChange={setGenderFilter}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All genders</SelectItem>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-muted-foreground">Found {filteredDoctors.length} doctors</div>

            {/* Results grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                    <Card key={doctor.id}>
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <Image
                                    src={doctor.image || "/placeholder.svg"}
                                    alt={doctor.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-1">
                                    <h3 className="font-semibold">{doctor.name}</h3>
                                    <p className="text-sm text-muted-foreground">{doctor.category}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">{doctor.gender}</span>
                                        <span className="text-amber-500">★ {doctor.rating}</span>
                                        <span>{doctor.experience}</span>
                                    </div>
                                    <Button size="sm" className="mt-2">
                                        Book Appointment
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredDoctors.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-muted-foreground">No doctors found matching your criteria</p>
                    <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                            setNameFilter("")
                            setCategoryFilter("")
                            setGenderFilter("")
                        }}
                    >
                        Clear filters
                    </Button>
                </div>
            )}
        </div>
    )
}

