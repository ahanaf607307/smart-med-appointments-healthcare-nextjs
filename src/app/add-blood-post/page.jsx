import AddBloodForm from "@/components/AddBloodForm/AddBloodForm"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"


const page = () => {

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold uppercase mb-2">Add <span className="text-[#00BDE0]">Blood Post</span></h1>
                    {/* <p className="text-gray-600">
                        Post an urgent request for blood donation. Please provide accurate information to help donors respond
                        quickly.
                    </p> */}
                </div>

                {/* Add Blood Post Form */}
                <AddBloodForm />
            </div>
        </div>
    )
}

export default page
