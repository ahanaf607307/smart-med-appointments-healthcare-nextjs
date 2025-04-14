"use client";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar({
  isMobile,
  sidebarOpen,
  user,
  handleLogout,
  session,
}) {
  const [allUsers, setAllUsers] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllUsers`
        );
        const users = await res.json();
        setAllUsers(users);
        const currentUser = users.find((u) => u.email === session?.user?.email);
        setRole(currentUser?.userType || "user");
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getAllUsers();
  }, [session]);
  console.log(role);
  console.log(allUsers);
  console.log("sidevar", session);
  const navItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      href: "/dashboard",
      role: ["admin", "general", "doctor"],
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Add Ambulance",
      href: "/dashboard/admin/addAmbulance",
      role: ["admin"],
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Add Blood Post",
      href: "/dashboard/user/add-blood-post",
      role: ["general"],
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Doctor Management",
      href: "/dashboard/admin/doctorManagement",
      role: ["admin"],
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Manage User",
      href: "/dashboard/admin/manageUser",
      role: ["admin"],
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Add doctor",
      href: "/dashboard/admin/adddoctor",
      role: ["admin"],
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Appointment",
      href: "/dashboard/doctor/appointment",
      role: ["doctor"],
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Complete",
      href: "/dashboard/doctor/completeAppointment",
      role: ["doctor"],
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col">
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-center border-b px-4">
          <Link href="/" className="text-xl font-bold text-primary">
            Medical Admin
          </Link>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-auto py-4">
          <nav className="space-y-1 px-2">
            {navItems
              .filter((item) => item?.role?.includes(role))
              .map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="border-t p-4">
          <div className="mb-2">
            <p className="text-sm font-medium">
              {session?.user?.displayName || "User"}
            </p>
            <p className="text-xs text-gray-500">
              {session?.user?.email || "user@example.com"}
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
