"use client";
import { signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  // console.log("navbar:",session);
  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">HelthCARE</h1>
            </div>
            <div className="hidden lg:flex space-x-4">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">
                Home
              </Link>
              <Link href="/all-blood-post" className="px-3 py-2 rounded-lg hover:bg-gray-100">
                All Blood Post
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                href="/ask-med"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                AI
              </Link>
              
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Contact
              </Link>
              <Link
                href="/alldoctor"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Doctors
              </Link>
              <Link
                href="/ambulance"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Ambulance Service
              </Link>
              <Link
                href="/dashboard"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Dashboard
              </Link>

              {status == "authenticated" ? (
                <>
                  <p>
                    {/* <Image
                      src={session?.user?.image}
                      width={50}
                      height={50}
                      alt="user-logo"
                    /> */}
                  </p>
                  <button
                    onClick={() => signOut()}
                    className=" border  rounded-lg hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={"/login"}
                    className="px-3 border  py-2 rounded-lg hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    href={"/register"}
                    className="px-3 border  py-2 rounded-lg hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <FiAlignRight />
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md flex flex-col">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">
                Home
              </Link>
              <Link href="/all-blood-post" className="px-3 py-2 rounded-lg hover:bg-gray-100">
                All Blood Post
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                href="/ask-med"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                AI
              </Link>
              <Link
                href="/dashboard"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Contact
              </Link>
              <Link
                href="/alldoctor"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Doctors
              </Link>
              <Link
                href="/ambulance"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Ambulance Service
              </Link>
              <Link
                href="/dashboard/user/add-blood-post"
                className="px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Dashboard
              </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
