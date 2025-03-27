import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#192f47] text-white'>
            <div className='max-w-10/12 mx-auto'>
                {/* company name and logo section  */}
                <div className='flex md:flex-row flex-col md:justify-between items-center pt-5'>
                    <h1 className='text-4xl text-blue-400 pl-2'>Logo image</h1>
                    <div className='flex gap-2.5 mt-4 lg:mt-0'>
                        <button className='py-2.5 px-6 rounded-2xl border border-blue-400 hover:bg-white hover:text-blue-400 hover:border-transparent'>Contact Us</button>
                        <button className='py-2.5 px-6 rounded-2xl border border-blue-400 hover:bg-white hover:text-blue-400 hover:border-transparent'>Appointment</button>
                    </div>
                </div>

                {/* all information and service and contact info section  */}

                <div className='flex md:flex-row flex-col gap-4 md:gap-0 md:justify-around mt-5'>
                    {/* servise section  */}
                    <div>
                        <h1 className='text-xl text-center'>Our Services</h1>
                        <ul className='text-center mt-4'>
                            <li><Link href={"/"}>Eye Care</Link></li>
                            <li><Link href={"/"}>Eye Care</Link></li>
                            <li><Link href={"/"}>Eye Care</Link></li>
                            <li><Link href={"/"}>Eye Care</Link></li>
                            <li><Link href={"/"}>Eye Care</Link></li>
                        </ul>
                    </div>
                    {/* Useful Link section  */}
                    <div>
                        <h1 className='text-xl text-center'>Useful Links</h1>
                        <ul className='text-center mt-4'>
                            <li><Link href={"/"}>About us</Link></li>
                            <li><Link href={"/"}>Eye Care</Link></li>
                            <li><Link href={"/"}>About us</Link></li>
                            <li><Link href={"/"}>Eye Care</Link></li>
                        </ul>
                    </div>
                    {/* contact section  */}
                    <div>
                        <h1 className='text-xl text-center'>Get In Touch</h1>
                        <div className='mt-5 text-center md:text-left lg:text-left'>
                            <p>Call Us</p>
                            <p>+0187772662</p>
                            <hr className='my-2' />
                            <p>Email Us</p>
                            <p>smartmed@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-5 text-gray-700' />
            <div className='max-w-10/12 mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center py-6'>
                <p className='lg:text-base text-sm text-center'>Copyrights © 2024. All Rights Reserved By Smart med appointment</p>
                <div className='flex items-center'>
                    <p>A product of</p>
                    <h1 className='text-4xl text-blue-400 pl-2'>Logo</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;