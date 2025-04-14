"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DoctorCard from "./DoctorCard"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


// Get unique categories for the filter

export function Filter() {
    const [nameFilter, setNameFilter] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("")
    const [genderFilter, setGenderFilter] = useState("")


    const { data: allDoctors = [] } = useQuery({
        queryKey: ["allDoctors", `${nameFilter}`],
        queryFn: async () => {
            const res = await axios.get(`/api/getAllDoctors?query=${nameFilter}`);
            return res.data;
        },
    });
    const categories = Array.from(new Set(allDoctors.map((doctor) => doctor.category)))

    // console.log(allDoctors);

    // Filter doctors based on all filters
    const filteredDoctors = allDoctors.filter((doctor) => {
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    filteredDoctors?.map((doctor) =>
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    )
                }
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

