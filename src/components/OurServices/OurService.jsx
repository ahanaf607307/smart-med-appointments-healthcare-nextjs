import Link from 'next/link';
import React from 'react';
import { IoMdArrowDown } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';

const OurService = () => {
    return (
        <div className='bg-[#F2FAFF] pb-10'>
            <div>
                <div className="text-center py-10">
                    <h1 className="text-4xl font-bold uppercase">Our <span className="text-[#00BDE0]">Services</span></h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 w-11/12 mx-auto'>
                <Link href={"/"}>
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <MdMedicalServices className='text-5xl text-white' />
                            </span>
                            <h1 className='space-y-6 pt-5 text-2xl font-bold leading-7 transition-all duration-300 group-hover:text-white/90'>Angioplasty</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link href={"/"}>
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <MdMedicalServices className='text-5xl text-white' />
                            </span>
                            <h1 className='space-y-6 pt-5 text-2xl font-bold leading-7 transition-all duration-300 group-hover:text-white/90'>Cardiology</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link href={"/"}>
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <MdMedicalServices className='text-5xl text-white' />
                            </span>
                            <h1 className='space-y-6 pt-5 text-2xl font-bold leading-7 transition-all duration-300 group-hover:text-white/90'>Endocrinology</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link href={"/"}>
                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                <MdMedicalServices className='text-5xl text-white' />
                            </span>
                            <h1 className='space-y-6 pt-5 text-2xl font-bold leading-7 transition-all duration-300 group-hover:text-white/90'>Orthopedics</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default OurService;