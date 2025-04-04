"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Clock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddBloodForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bloodTypeData, setBloodTypeData] = useState("A+");
    const [urgencyLevelData, setUrgencyLevelData] = useState("immediate");
    const [isConsentChecked, setIsConsentChecked] = useState(false);

    const { mutateAsync } = useMutation({
        mutationFn: async(newBloodPost) => {
            await axios.post(`/api/addBloodPost`,  newBloodPost )
            // console.log("From Tanstack:", newBloodPost);
        },
        onSuccess: () => {
            toast.success("New Blood Posted Successfully!!");
        },
        onError: (error) => {
            toast.error(error.response.data.msg);
        }
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        setIsSubmitting(true)

        try {
            // Here you would typically send the data to your API
            // console.log(data)
            const time = new Date();
            const newBloodData = {
                patientName: data.patientName,
                bloodType: bloodTypeData,
                unitsNeeded: data.unitsNeeded,
                urgencyLevel: urgencyLevelData,
                hospital: data.hospital,
                location: data.location,
                contactName: data.contactName,
                contactPhone: data.contactPhone,
                contactEmail: data.contactEmail,
                additionalInfo: data.additionalInfo,
                consent: isConsentChecked,
                postedAt: time.getTime(),
                isDonate: false,
            };
            // console.table(newBloodData);

            await mutateAsync(newBloodData);

            // Simulate API call
            // await new Promise((resolve) => setTimeout(resolve, 1000))

            // toast.success("Blood Posted successfully.");

            // form.reset()
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Patient Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="patientName">
                                        Patient Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input id="patientName" {...register("patientName", { required: true })} placeholder="Enter patient name" />
                                    {errors.patientName && (
                                        <p className="text-sm text-red-500">Please enter patinet name.</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bloodType">
                                        Blood Type Required <span className="text-red-500">*</span>
                                    </Label>
                                    <Select {...register("bloodType")} onValueChange={(value) => setBloodTypeData(value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select required blood type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A+">A+</SelectItem>
                                            <SelectItem value="A-">A-</SelectItem>
                                            <SelectItem value="B+">B+</SelectItem>
                                            <SelectItem value="B-">B-</SelectItem>
                                            <SelectItem value="AB+">AB+</SelectItem>
                                            <SelectItem value="AB-">AB-</SelectItem>
                                            <SelectItem value="O+">O+</SelectItem>
                                            <SelectItem value="O-">O-</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.bloodType && (
                                        <p className="text-sm text-red-500">Please select the blood type.</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="unitsNeeded">
                                        Units Needed <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="unitsNeeded"
                                        type="number"
                                        min="1"
                                        {...register("unitsNeeded", { required: true })}
                                        placeholder="How many units needed"
                                    />
                                    {errors.unitsNeeded && (
                                        <p className="text-sm text-red-500">Please specify how many units are needed.</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="urgencyLevel">
                                        Urgency Level <span className="text-red-500">*</span>
                                    </Label>
                                    <Select {...register("urgencyLevel")} onValueChange={(value) => setUrgencyLevelData(value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Immediate (Within hours)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="immediate">Immediate (Within hours)</SelectItem>
                                            <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                                            <SelectItem value="high">High (Within 48 hours)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.urgencyLevel && (
                                        <p className="text-sm text-red-500">Please select emergency level.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Hospital Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="hospital">
                                        Hospital Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input id="hospital" {...register("hospital", { required: true })} placeholder="Enter hospital name" />
                                    {errors.hospital && (
                                        <p className="text-sm text-red-500">Please enter the hospital name.</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location">
                                    Hospital Address/Location <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="location"
                                    {...register("location", { required: true })}
                                    placeholder="Enter complete hospital address with city and landmark if possible"
                                    className="min-h-[80px]"
                                />
                                {errors.location && (
                                    <p className="text-sm text-red-500">Please enter the full hospital addresss/location.</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Contact Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="contactName">
                                        Contact Person Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input id="contactName" {...register("contactName", { required: true })} placeholder="Enter contact person name" />
                                    {errors.contactName && (
                                        <p className="text-sm text-red-500">Please enter contact person name.</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contactPhone">
                                        Contact Phone <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="contactPhone"
                                        {...register("contactPhone", { required: true })}
                                        placeholder="Enter contact phone number"
                                    />
                                    {errors.contactPhone && (
                                        <p className="text-sm text-red-500">Please enter a valid phone number.</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contactEmail">
                                    Contact Email <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="contactEmail"
                                    type="email"
                                    {...register("contactEmail", { required: true })}
                                    placeholder="Enter contact email"
                                />
                                {errors.contactEmail && (
                                    <p className="text-sm text-red-500">Please enter a valid email address.</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Additional Information</Label>
                            <Textarea
                                id="additionalInfo"
                                {...register("additionalInfo", { required: true })}
                                placeholder="Any additional details that might be helpful for donors"
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="consent"
                                    checked={isConsentChecked}
                                    onCheckedChange={(checked) => {
                                        setIsConsentChecked(checked);
                                        // setValue(checked);
                                    }}
                                    {...register("consent", { required: true })} />

                                <Label htmlFor="consent" className="text-sm">
                                    I confirm that this is a genuine emergency blood requirement and all the information provided is
                                    accurate. I consent to making this information public to potential donors.
                                    <span className="text-red-500"> *</span>
                                </Label>
                            </div>
                            {errors.consent && (
                                <p className="text-sm text-red-500">You must agree to the terms and conditions.</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center text-amber-600">
                                <Clock className="h-4 w-4 mr-2" />
                                <span className="text-sm font-medium">Time is critical in emergencies</span>
                            </div>
                            <button type="submit" className="btn bg-[#00BDE0] text-white font-bold px-4 py-2 rounded border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0]  disabled:cursor-not-allowed transition-all duration-500 cursor-pointer" disabled={isSubmitting || !isConsentChecked}>
                                {isSubmitting ? "Submitting..." : "Post Blood Request"}
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddBloodForm;
