"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    try {
      // Fetching corresponding user
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await res.json()

      if (!data.acknowledged) {
        toast.error("User not found or incorrect credentials")
        setIsLoading(false)
        return
      }

      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      })

      if (response?.ok) {
        toast.success("Logged in successfully")
        router.push("/")
        form.reset()
      } else {
        toast.error("Failed to log in. Please try again.")
      }
    } catch (error) {
      console.error(error)
      toast.error("An error occurred while logging in.")
    } finally {
      setIsLoading(false)
    }
  }


  const handleSocialLogin = async (providerName) => {
    console.log("social login", providerName);
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Login your account</h2>
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type here"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>
        <div className="mb-4 relative">
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
          className="w-full h-11 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
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
        New here?{" "}
        <Link
          href={"/register"}
          className="text-blue-500 font-bold hover:underline"
        >
          Create a New Account
        </Link>
      </p>
    </div>
  );
}
