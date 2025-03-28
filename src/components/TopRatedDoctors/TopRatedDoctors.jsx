import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const TopRatedDoctors = () => {
    return (
        <div className="container mx-auto">

            <div className=" bg-white px-5 md:px-10 lg:px-4 py-10 lg:min-h-screen gap-5">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase">Meet The Top <span className="text-[#00BDE0]">Rated Doctors</span></h1>
                </div>
                {/* End of Heading */}

                {/* Doctors Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                    {/* Doctor - 1 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-1.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Demetrius Wright</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 2 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-2.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Patrick Smith</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 3 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-3.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Brenton Ottinger</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 4 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-1.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Demetrius Wright</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 5 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-3.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Brenton Ottinger</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 6 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-1.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Demetrius Wright</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 7 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-2.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Patrick Smith</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                    {/* Doctor - 8 */}
                    <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                        {/* Image */}
                        <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                            <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-3.jpg" alt="" />
                            <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                                <h1 className="text-white font-semibold">Pathologist</h1>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-row gap-5 justify-start items-center">
                            <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </div>
                            <p>5.0</p>
                            {/* <Rating /> */}
                        </div>

                        {/* Doctor Info */}
                        <div className="">
                            <h1 className="text-2xl font-bold">Dr. Brenton Ottinger</h1>
                            <p className="text-gray-600">MBBS, MD, DM, PhD</p>
                        </div>

                        {/* Location */}
                        <div className="flex flex-row gap-1 justify-start items-center mb-5">
                            {/* Icon */}
                            <div className="font-bold text-xl">
                                <IoLocationOutline />
                            </div>
                            {/* Location Text */}
                            <div className="text-gray-600">
                                <h1 className="text-base">42 Main Drive Florida 10235</h1>
                            </div>
                        </div>

                        {/* Break Point */}
                        {/* <div className="">
                            <hr />
                        </div> */}
                    </div>

                </div>
                {/* End of Doctors Container */}

                {/* View All Button */}
                <div className="flex flex-col justify-center items-center mt-8">
                    <button className="bg-[#00BDE0] text-white px-10 py-2 rounded-2xl border-2 border-[#00BDE0] cursor-pointer transition-all hover:bg-transparent hover:text-[#00BDE0] font-bold">View All</button>
                </div>
                {/* End of View all Button */}
            </div>
        </div>
    );
};

export default TopRatedDoctors;

// Resources
// https://templates.envytheme.com/hinton/default/index-2.html