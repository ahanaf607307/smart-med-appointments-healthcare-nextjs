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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddAmbulance() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutateAsync } = useMutation({
    mutationFn: async (ambulanceInfo) => {
      await axios.post(`/api/addAmbulance`, ambulanceInfo);
    },
    onSuccess: () => {
      toast.success("Ambulance added successfully!!");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Add Ambulance</CardTitle>
        <CardDescription>Enter Your Ambulance Details</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ambulanceName">Ambulance Name</Label>
            <Input
              id="name"
              name="ambulanceName"
              placeholder="Write Your Ambulance Name"
              {...register("ambulanceName")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ambulanceImage">Ambulance Image</Label>
            <Input
              id="name"
              name="ambulanceImage"
              placeholder=" Ambulance Image"
              {...register("ambulanceImage")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rentPrice">Rent Price</Label>
            <Input
              id="name"
              name="rentPrice"
              placeholder="Enter Rent Price"
              {...register("rentPrice")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location </Label>
            <Input
              id="name"
              name="location"
              placeholder="Enter Ambulance Location "
              {...register("location")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="degree"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              {...register("phoneNumber")}
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

export default AddAmbulance;
