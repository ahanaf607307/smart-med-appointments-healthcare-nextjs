"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

 function AddBlood() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm()
      const onSubmit= (data) => {

        const category = data.category
        const degree = data.degree
        const imageLink = data.imageLink
        const location = data.location
        const name = data.name
        const doctorInfo = {
            category,
            degree,
            imageLink,
            location,
            name,
        }
        console.log(doctorInfo)
      }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Doctor Information</CardTitle>
        <CardDescription>Enter the doctor's details to add them to the system.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Doctor Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Dr. Jane Smith"
              {...register("name")}

              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Doctor Category</Label>
            <Select
          onValueChange={(value) => setValue("category", value)} >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a specialty" />
              </SelectTrigger>
              <SelectContent >
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
              {...register("degree")}

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
              {...register("imageLink")}

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
              {...register("location")}

              required
            />
          </div>
        </CardContent>
        <CardFooter >
          <Button variant='outline' type="submit" className="w-full cursor-pointer mt-5 bg-cyan-400">
            Save Doctor Information
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}


export default AddBlood;