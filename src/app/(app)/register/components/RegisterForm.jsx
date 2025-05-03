"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photo = form.photo.value

    try {
      // 1. Register the user in your database
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/saveUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          displayName: name,
          userType: "general",
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message || "Registration failed")
        setIsLoading(false)
        return
      }

      // 2. Then login the user automatically
      const loginRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (loginRes?.ok) {
        toast.success("Registered and logged in successfully")
        router.push("/")
      } else {
        toast.error("Login failed after registration")
      }

      form.reset()
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (providerName) => {
    console.log("social login", providerName);
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
    if (result?.ok) {
      router.push("/");
    } else {
      console.error("Social login failed:", result);
    }
  };
  return (
    <section>
      <h2 className="text-2xl font-semibold text-center">
        Register your account
      </h2>
      <form onSubmit={handleSubmit} className="w-full  ">
        <div className="">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Type here"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="Type here"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type here"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className=" relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <Button
          type="submit"
          className="w-full h-11 bg-gradient-to-r mt-2 from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
      {/* <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">Or sign up with</p>
        <div className="flex justify-center mt-2 space-x-4">
          <button
            onClick={() => handleSocialLogin("google")}
            className="p-2 rounded-full bg-gray-100 text-2xl hover:bg-gray-200"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            className="p-2 rounded-full bg-gray-100 text-2xl hover:bg-gray-200"
          >
            <FaGithub />
          </button>
        </div>
      </div> */}

      <p className="text-sm text-gray-600">
        Already registered?{" "}
        <Link
          href={"/login"}
          className="text-blue-500 font-bold hover:underline"
        >
          Go to log in
        </Link>
      </p>
    </section>
  );
}
