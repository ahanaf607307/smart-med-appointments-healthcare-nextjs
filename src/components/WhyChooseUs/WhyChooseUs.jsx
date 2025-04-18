import { AiTwotoneExperiment } from "react-icons/ai";
import { GiHealthPotion } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

export default function WhyChooseUs() {
    return (
        <div className="container mx-auto">

            <div className=" bg-white px-5 md:px-10 lg:px-4 py-10  gap-5">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase">Why <span className="text-[#00BDE0]">Choose Us</span></h1>
                </div>
                {/* End of Heading */}

                {/* Why Choose Us Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-14 mt-10 ">
                    {/* Image */}
                    <div className="flex-1 h-[450px] border-0 w-full">
                        <img className="w-full md:h-96 h-full lg:h-full  object-cover rounded-2xl" src="https://img.freepik.com/free-photo/doctor-talking-patient-medium-shot_23-2149856214.jpg?t=st=1743071665~exp=1743075265~hmac=f2101d31f0ec5d6d6d3043f3b92dc073310426b3609654b6c6affd5e28fa930c&w=740" alt="" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-3 border-2 border-blue-300 p-5 md:h-52 rounded-3xl">
                            <p className="text-5xl text-[#00BDE0]"><SlBadge /></p>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-xl">More Experience</p>
                                <p>We offer a range of health services to meet all your needs.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-2 border-blue-300 p-5 md:h-52 rounded-3xl">
                            <p className="text-5xl text-[#00BDE0]"><GiHealthPotion /></p>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-xl">Seamless care</p>
                                <p>We offer a range of health services to meet all your needs.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-2 border-blue-300 p-5 md:h-52 rounded-3xl">
                            <p className="text-5xl text-[#00BDE0]"><MdOutlineHealthAndSafety /></p>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-xl">The right answers?</p>
                                <p>We offer a range of health services to meet all your needs.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-2 border-blue-300 p-5 md:h-52 rounded-3xl">
                            <p className="text-5xl text-[#00BDE0]"><AiTwotoneExperiment /></p>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-xl">Unparalleled expertise</p>
                                <p>We offer a range of health services to meet all your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Why Choose Us Content */}

            </div>
        </div>
    )
}
