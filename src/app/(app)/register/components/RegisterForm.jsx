"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

export default function RegisterForm() {
  const router = useRouter();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   // await registerUser({ name, email, password });

  //   try {
  //     // console.log(name, email, password);
  //     const response = await signIn("credentials", {
  //       email,
  //       password,
  //       callbackUrl: "/",
  //       redirect: false,
  //     });
  //     if (response.ok) {
  //       toast.success("Logged In successfully");
  //       // Storing user in db
  //       await fetch("/api/saveUser", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email,
  //           password,
  //           displayName: name,
  //           userType: "general",
  //         }),
  //       });

  //       router.push("/");
  //       form.reset();
  //     } else {
  //       toast.error("FAILED to Log In");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("FAILED to Log In");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    try {
      // 1. Register the user in your database
      const res = await fetch("/api/saveUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          displayName: name,
          userType: "general",
        }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }

      // 2. Then login the user automatically
      const loginRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (loginRes.ok) {
        toast.success("Registered and logged in successfully");
        router.push("/");
      } else {
        toast.error("Login failed after registration");
      }

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

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
        <button className="w-full mt-4 h-12 bg-blue-400 rounded-md text-white font-bold">
          Register
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
