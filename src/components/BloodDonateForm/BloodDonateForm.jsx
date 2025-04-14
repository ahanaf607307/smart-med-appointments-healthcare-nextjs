

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


// const BloodDonateForm = ({ open, onClose, post, open, open }) => {
const BloodDonateForm = ({ open, post, setOpen }) => {
    console.log(post);

    const { mutateAsync } = useMutation({
        mutationFn: async (donarInfo) => {
            console.log(donarInfo);
            await axios.post(`/api/......`, donarInfo)
        },
        onSuccess: () => {
            toast.success("Blood Donate Successfully!!");
        },
        onError: (error) => {
            toast.error(error.response.data.msg);
        }
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        try {
            const donarInfo = {
                donarName: data.donarName,
                donarEmail: data.donarEmail,
                donarContact: data.donarContact,
                bloodPostId: post._id,
            }
            // console.table(donarInfo);
            // onClose();
            setOpen(false)
            await mutateAsync(donarInfo);
            reset();
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        // New Modal
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Blood Donation Registration</DialogTitle>
                    <DialogDescription>
                        Please fill in your details to register for blood donation. We'll contact you with further information.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="name" className="text-right ">
                                Donar Name
                            </Label>
                            <Input id="name" className=""
                                {...register("donarName", { required: true })}
                                placeholder="Enter Donar name"
                            />
                            {errors.donarName && (
                                <p className="text-sm text-red-500">Please enter donar name.</p>
                            )}
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <Label htmlFor="username" className="text-right">
                                Donar Email
                            </Label>
                            <Input id="donarEmail" className=""
                                {...register("donarEmail", { required: true })}
                                placeholder="Enter donar email"
                            />
                            {errors.donarEmail && (
                                <p className="text-sm text-red-500">Please enter donar email.</p>
                            )}
                        </div>
                        <div className="flex flex-col items-start  gap-2">
                            <Label htmlFor="username" className="text-start">
                                Donar Contact Number
                            </Label>
                            <Input id="donarContact" type="number" className=""
                                {...register("donarContact", { required: true })}
                            // placeholder="How many units needed"
                            />
                            {errors.donarContact && (
                                <p className="text-sm text-red-500">Please enter donar contact number.</p>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            className="bg-[#00BDE0] text-white font-bold px-4 py-2 rounded border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0]   transition-all duration-300 cursor-pointer"
                            // onClick={onClose}
                            type="submit">Donate Request</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default BloodDonateForm
