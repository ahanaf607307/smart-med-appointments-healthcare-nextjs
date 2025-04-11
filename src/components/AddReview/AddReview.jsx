"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await axios.post(`/api/addReview`, data);
    },
    onSuccess: () => {
      toast.success("Review added successfully!!");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = async (data) => {
    await mutateAsync({ ...data, displayName: "anonymous" });
    reset();
  };
  return (
    <Card className="w-full max-w-md mx-auto mb-16">
      <CardHeader>
        <CardTitle>Add a Review</CardTitle>
        <CardDescription>Share your thoughts about our product</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Write your review here"
              {...register("description")}
              required
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating">Rating (1-5)</Label>
            <Input
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="5"
              placeholder="Rate from 1 to 5"
              {...register("rating")}
              required
            />
          </div>
        </CardContent>

        <CardFooter className="mt-5">
          <Button type="submit" className="w-full">
            Submit Review
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddReview;
