"use client"
import { Calendar, FileText, LayoutDashboard, LogOut, Settings, Users } from "lucide-react"
import Link from "next/link"


export default  function Sidebar({ isMobile, sidebarOpen, user, handleLogout }) {

    
// const res = await fetch(`/api/getAllUsers`);
// const users = await res.json();
// console.log(users);

    const navItems = [
        { icon: <LayoutDashboard className="h-5 w-5" />, label: "Dashboard", href: "/dashboard" },
        { icon: <Users className="h-5 w-5" />, label: "Add Ambulance", href: "/dashboard/addAmbulance" },
        { icon: <Users className="h-5 w-5" />, label: "Add Blood Post", href: "/dashboard/user/add-blood-post" },
        { icon: <Users className="h-5 w-5" />, label: "Doctor Management", href: "/dashboard/doctorManagement" },
        { icon: <Calendar className="h-5 w-5" />, label: "Appointments", href: "/dashboard/manageUser" },
        { icon: <Calendar className="h-5 w-5" />, label: "Add doctor", href: "/dashboard/adddoctor" },
        { icon: <Calendar className="h-5 w-5" />, label: "Appointment", href: "/dashboard/doctor/appointment" },
        { icon: <Calendar className="h-5 w-5" />, label: "Complete", href: "/dashboard/doctor/completeAppointment" },
    ]

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
            {navItems.map((item, index) => (
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

            </div>
        </div>
    )
}
