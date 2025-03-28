import { IoMdArrowForward } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        // <div className="flex flex-col-reverse md:flex-row justify-between bg-[#F2FAFF] px-5 md:px-10 lg:px-14 py-16 lg:h-screen gap-5">
        <div className=" bg-[#F2FAFF] ">

            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between px-5 md:px-10 lg:px-4 py-16 lg:max-h-screen gap-5">

                {/* Text Container */}
                <div className="flex-1 flex flex-col gap-5">
                    {/* Text */}
                    <div className="">
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#031B4E]">Medical &</h1>
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#031B4E]">Health Care</h1>
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#00BDE0]">Services</h1>
                    </div>

                    {/* Description */}
                    <div className="">
                        <p className="w-96 lg:w-[480px] text-2xl">
                            Your health is our top priority. Schedule an appointment with us today.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="flex flex-row justify-start items-center gap-10 mt-3 md:mt-7">
                        <div className="">
                            <button className="bg-[#00BDE0] text-white font-semi-bold px-5 py-2 rounded-3xl border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0] transition-all cursor-pointer flex flex-row justify-center items-center gap-2">Read More <span><IoMdArrowForward /></span></button>
                        </div>
                        <div className="">
                            <button className="text-[#00BDE0] font-semi-bold px-5 py-2 rounded-3xl border-2 border-[#00BDE0] hover:bg-[#00BDE0] hover:text-white hover:border-[#00BDE0] transition-all cursor-pointer flex flex-row justify-center items-center gap-2"><span><IoPlayOutline /></span> Watch Now</button>
                        </div>
                    </div>
                </div>

                {/* Image Container */}
                <div className="w-80 mx-auto md:w-[450px] lg:w-[541px] lg:h-full lg:relative">
                    <img className="w-full h-full" src="https://clinicmaster.wprdx.com/medical/wp-content/uploads/2024/08/img1.webp" alt="" />
                    {/* <img className="w-full" src="https://i.ibb.co.com/d4bvfkGv/female-doctor-hospital-with-stethoscope-23-2148827776-removebg-preview.png" alt="" /> */}

                    {/* Number of Doctors */}
                    <div className="hidden lg:block absolute top-96  gap-3 border-[1px] border-[#00BDE0] backdrop-blur-2xl rounded-2xl px-5 py-1">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img className="border-2 border-white w-16 rounded-full" src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png" alt="" />
                            <div className="">
                                <h1 className="text-lg font-bold">120+</h1>
                                <p className="text-base font-bold">Doctors</p>
                            </div>
                        </div>
                    </div>

                    {/* Number of Patients */}
                    <div className="absolute top-64 -right-0  gap-3 border-[1px] border-[#00BDE0] backdrop-blur-2xl rounded-2xl px-5 py-1 hidden lg:block">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img className="border-2 border-white w-16 h-16 rounded-full" src="https://img.freepik.com/free-photo/senior-man-sitting-wheelchair-doctor_23-2148962355.jpg?t=st=1742996738~exp=1743000338~hmac=d73a009d8645911cac0a6d373ca9fe0417b14fd4addc1823565890ee1d310175&w=826" alt="" />
                            <div className="">
                                <h1 className="text-lg font-bold">10K+</h1>
                                <p className="text-sm font-bold">Patients Recover</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;