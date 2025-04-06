"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Fetching corresponding user
    const res = await fetch("/api/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log("Response is: ", data);


    if (!data.acknowledged) {
      toast.error("User not found or incorrect credentials");
      return;
    }

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      console.log(response);
      if (response.ok) {
        toast.success("Logged in successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("Failed to log in. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while logging in.");
    }
  };

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
        <button className="btn w-full h-12 bg-blue-400 rounded-md text-white font-bold">
          Login
        </button>
      </form>
      <div className="mt-6 text-center">
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
      </div>

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
