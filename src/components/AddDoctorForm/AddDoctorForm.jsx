"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function AddDoctorForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    degree: "",
    imageLink: "",
    location: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
   
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Doctor Information</CardTitle>
        <CardDescription>Enter the doctor's details to add them to the system.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Doctor Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Dr. Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Doctor Category</Label>
            <Select onValueChange={handleSelectChange} required>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="general">General Practice</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="degree">Doctor Degree</Label>
            <Input
              id="degree"
              name="degree"
              placeholder="MD, PhD, MBBS"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageLink">Doctor Image Link</Label>
            <Input
              id="imageLink"
              name="imageLink"
              type="url"
              placeholder="https://example.com/doctor-image.jpg"
              value={formData.imageLink}
              onChange={handleChange}
              required
            />
            <p className="text-sm text-muted-foreground">Enter a valid URL for the doctor's profile image</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Doctor Location</Label>
            <Textarea
              id="location"
              name="location"
              placeholder="123 Medical Center Dr, City, State, ZIP"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Save Doctor Information
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default AddDoctorForm