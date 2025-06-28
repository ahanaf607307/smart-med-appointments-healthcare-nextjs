"use client";

import { IoMdArrowForward } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-[#F2FAFF] w-full overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-16 gap-8 md:gap-5">
        {/* Text Container */}
        <div className="flex-1 flex flex-col gap-4 md:gap-5 mt-8 md:mt-0">
          {/* Text */}
          <div className="max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-[#031B4E] leading-tight">
              Medical &
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-[#031B4E] leading-tight">
              Health Care
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-[#00BDE0] leading-tight">
              Services
            </h1>
          </div>

          {/* Description */}
          <div className="w-full max-w-full md:max-w-[480px]">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
              Your health is our top priority. Schedule an appointment with us
              today.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-3 md:mt-7 w-full">
            <button className="w-full sm:w-auto bg-[#00BDE0] text-white font-semibold px-5 py-2.5 rounded-3xl border-2 border-[#00BDE0] hover:bg-transparent hover:text-[#00BDE0] transition-all cursor-pointer flex flex-row justify-center items-center gap-2">
              Read More{" "}
              <span>
                <IoMdArrowForward />
              </span>
            </button>
            <button className="w-full sm:w-auto mt-3 sm:mt-0 text-[#00BDE0] font-semibold px-5 py-2.5 rounded-3xl border-2 border-[#00BDE0] hover:bg-[#00BDE0] hover:text-white hover:border-[#00BDE0] transition-all cursor-pointer flex flex-row justify-center items-center gap-2">
              <span>
                <IoPlayOutline />
              </span>{" "}
              Watch Now
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[541px] mx-auto md:mx-0">
          <img
            className="w-full h-auto object-contain"
            src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"
            alt="Medical professional"
          />

          {/* Number of Doctors - Responsive positioning */}
          <div className="hidden md:block absolute bottom-1/4 left-0 border border-[#00BDE0] backdrop-blur-2xl rounded-2xl px-3 py-1 shadow-lg bg-white/30">
            <div className="flex flex-row justify-center items-center gap-2">
              <img
                className="border-2 border-white w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover"
                src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"
                alt="Doctor"
              />
              <div>
                <h1 className="text-base lg:text-lg font-bold">120+</h1>
                <p className="text-xs lg:text-base font-bold">Doctors</p>
              </div>
            </div>
          </div>

          {/* Number of Patients - Responsive positioning */}
          <div className="hidden md:block absolute top-1/4 right-0 border border-[#00BDE0] backdrop-blur-2xl rounded-2xl px-3 py-1 shadow-lg bg-white/30">
            <div className="flex flex-row justify-center items-center gap-2">
              <img
                className="border-2 border-white w-10 h-10 lg:w-16 lg:h-16 rounded-full object-cover"
                src="https://img.freepik.com/free-photo/senior-man-sitting-wheelchair-doctor_23-2148962355.jpg?t=st=1742996738~exp=1743000338~hmac=d73a009d8645911cac0a6d373ca9fe0417b14fd4addc1823565890ee1d310175&w=826"
                alt="Patient"
              />
              <div>
                <h1 className="text-base lg:text-lg font-bold">10K+</h1>
                <p className="text-xs lg:text-sm font-bold">Patients Recover</p>
              </div>
            </div>
          </div>

          {/* Mobile version of the stats cards */}
          <div className="flex md:hidden justify-between mt-4 w-full">
            <div className="border border-[#00BDE0] backdrop-blur-2xl rounded-2xl px-3 py-1 shadow-lg bg-white/30 flex-1 mr-2">
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  className="border-2 border-white w-10 h-10 rounded-full object-cover"
                  src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"
                  alt="Doctor"
                />
                <div>
                  <h1 className="text-base font-bold">120+</h1>
                  <p className="text-xs font-bold">Doctors</p>
                </div>
              </div>
            </div>
            <div className="border border-[#00BDE0] backdrop-blur-2xl rounded-2xl px-3 py-1 shadow-lg bg-white/30 flex-1 ml-2">
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  className="border-2 border-white w-10 h-10 rounded-full object-cover"
                  src="https://img.freepik.com/free-photo/senior-man-sitting-wheelchair-doctor_23-2148962355.jpg?t=st=1742996738~exp=1743000338~hmac=d73a009d8645911cac0a6d373ca9fe0417b14fd4addc1823565890ee1d310175&w=826"
                  alt="Patient"
                />
                <div>
                  <h1 className="text-base font-bold">10K+</h1>
                  <p className="text-xs font-bold">Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
