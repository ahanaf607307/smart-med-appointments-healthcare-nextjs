"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

function AddBlood() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const patientName = data.patientName;
    const bloodGroup = data.bloodGroup;
    const unitsNeeded = data.unitsNeeded;
    const hospitalName = data.hospitalName;
    const postedDate = data.postedDate;
    const neededDate = data.neededDate;
    const yourName = data.yourName;
    const yourPhoneNumber = data.yourPhoneNumber;
    const bloodInfo = {
      patientName,
      bloodGroup,
      unitsNeeded,
      hospitalName,
      postedDate,
      neededDate,
      yourName,
      yourPhoneNumber,
    };

    const res = await fetch("/api/addBlood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bloodInfo),
    });

    console.log(res);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Add Blood</CardTitle>
        <CardDescription>Enter Your Blood Details</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input
              id="name"
              name="patientName"
              placeholder="Write Your Patient Name"
              {...register("patientName")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <Input
              id="name"
              name="bloodGroup"
              placeholder="Write Your Blood Group"
              {...register("bloodGroup")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="unitsNeeded">Units Needed</Label>
            <Input
              id="name"
              name="unitsNeeded"
              placeholder="How Many Units Needed"
              {...register("unitsNeeded")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="HospitalName">Hospital Name</Label>
            <Input
              id="name"
              name="hospitalName"
              placeholder="Hospital Name"
              {...register("hospitalName")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Posted Date</Label>
            <Input
              id="name"
              name="postedDate"
              placeholder="Posted Date"
              {...register("postedDate")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Needed By</Label>
            <Input
              id="name"
              name="neededDate"
              placeholder="Needed By Date"
              {...register("neededDate")}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="Your Name">Your Name</Label>
            <Input
              id="degree"
              name="yourName"
              placeholder="Write Blood Owner Name"
              {...register("yourName")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="yourPhoneNumber">Your Phone Number</Label>
            <Input
              id="degree"
              name="yourPhoneNumber"
              placeholder="Your Phone Number"
              {...register("yourPhoneNumber")}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            type="submit"
            className="w-full cursor-pointer mt-5 bg-cyan-400"
          >
            Add
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default AddBlood;
