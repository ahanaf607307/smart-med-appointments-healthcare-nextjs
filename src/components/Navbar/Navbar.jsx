

"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Heart,
  Home,
  Info,
  Sparkles,
  PhoneCall,
  Stethoscope,
  Ambulance,
  LayoutDashboard,
  LogIn,
  UserPlus,
  LogOut,
  User,
  Settings,
  ChevronDown,
} from "lucide-react"
import logoImage from '../../../public/assets/images/login/images.png'
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({ menu: false, profile: false })
  const [scrolled, setScrolled] = useState(false)
  const session = useSession()
  const status = session?.status || "unauthenticated"
  const userData = session?.data?.user
  const pathname = usePathname()
// console.log("navbar session",session  )
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen.profile && !event.target.closest(".profile-dropdown-container")) {
        setIsOpen((prev) => ({ ...prev, profile: false }))
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen.profile])

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Blood Posts", path: "/all-blood-post", icon: <Heart className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "AI", path: "/ask-med", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <PhoneCall className="w-4 h-4" /> },
    { name: "Doctors", path: "/alldoctor", icon: <Stethoscope className="w-4 h-4" /> },
    { name: "Ambulance", path: "/ambulance", icon: <Ambulance className="w-4 h-4" /> },
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  ]

  return (
    <div className="relative z-50">
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-gradient-to-r from-cyan-50 to-blue-50 shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-full"></div>
                <div className="relative">
                  <Link href='/'><Image src={logoImage} className="w-20 h-20 rounded-full" alt="logo"/></Link>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 
                    ${
                      pathname === item.path
                        ? "bg-blue-50 text-blue-600 font-medium shadow-sm"
                        : "hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                  )}
                </Link>
              ))}

              {/* Desktop Auth Buttons */}
              <div className="ml-2 hidden lg:flex items-center">
                {status === "authenticated" ? (
                  <div className="relative profile-dropdown-container">
                    <button
                      onClick={() => setIsOpen((prev) => ({ ...prev, profile: !prev.profile }))}
                      className="flex items-center gap-2 p-1 rounded-full hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      aria-label="Open profile menu"
                    >
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-75"></div>

                        {/* Profile Image */}
                        <div className="relative rounded-full overflow-hidden border-2 border-white">
                          {userData?.image ? (
                            <img
                              src={userData.image || "/placeholder.svg"}
                              alt="Profile"
                              className="w-10 h-10 object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                              {userData?.name?.charAt(0) || "U"}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* User name and dropdown indicator */}
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{userData?.name?.split(" ")[0] || "User"}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isOpen.profile ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>

                    {/* Desktop Profile Dropdown */}
                    {isOpen.profile && (
                      <div className="absolute right-0 mt-2 w-64 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50 transform origin-top-right transition-all duration-200">
                        {/* User Info */}
                        <div className="p-4 flex items-center gap-3">
                          <div className="relative rounded-full overflow-hidden border-2 border-blue-100">
                            {userData?.image ? (
                              <img
                                src={userData.image || "/placeholder.svg"}
                                alt="Profile"
                                className="w-12 h-12 object-cover"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                                {userData?.name?.charAt(0) || "U"}
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{userData?.displayName || "User"}</p>
                            <p className="text-sm text-gray-500 truncate">{userData?.email || ""}</p>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          <Link
                            href="/userProfile"
                            onClick={() => setIsOpen((prev) => ({ ...prev, profile: false }))}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <User className="w-4 h-4" />
                            Your Profile
                          </Link>
                          <Link
                            href="/dashboard"
                            onClick={() => setIsOpen((prev) => ({ ...prev, profile: false }))}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <LayoutDashboard className="w-4 h-4" />
                            Dashboard
                          </Link>
                         
                        </div>

                        {/* Logout */}
                        <div className="py-2">
                          <button
                            onClick={() => {
                              signOut()
                              setIsOpen((prev) => ({ ...prev, profile: false }))
                            }}
                            className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link
                      href="/login"
                      className="flex items-center gap-1 px-4 py-1.5 border border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-200 hover:scale-105"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Register</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Header Right Section */}
            <div className="flex items-center lg:hidden">
              {/* Mobile Profile Picture (when authenticated) */}
              {status === "authenticated" && (
                <div className="relative profile-dropdown-container mr-2">
                  <button
                    onClick={() => setIsOpen((prev) => ({ ...prev, profile: !prev.profile }))}
                    className="flex items-center justify-center p-1 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label="Open profile menu"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-75"></div>

                      {/* Profile Image */}
                      <div className="relative rounded-full overflow-hidden border-2 border-white">
                        {userData?.image ? (
                          <img
                            src={userData.image || "/placeholder.svg"}
                            alt="Profile"
                            className="w-8 h-8 object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                            {userData?.name?.charAt(0) || "U"}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Mobile Profile Dropdown */}
                  {isOpen.profile && (
                    <div className="absolute right-0 mt-2 w-60 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                      {/* User Info */}
                      <div className="p-4 flex items-center gap-3">
                        <div className="relative rounded-full overflow-hidden border-2 border-blue-100">
                          {userData?.image ? (
                            <img
                              src={userData.image || "/placeholder.svg"}
                              alt="Profile"
                              className="w-12 h-12 object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                              {userData?.name?.charAt(0) || "U"}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{userData?.displayName || "User"}</p>
                          <p className="text-sm text-gray-500 truncate">{userData?.email || ""}</p>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          href="/userProfile"
                          onClick={() => setIsOpen((prev) => ({ ...prev, profile: false }))}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <User className="w-4 h-4" />
                          Your Profile
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsOpen((prev) => ({ ...prev, profile: false }))}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </Link>
                        
                      </div>

                      {/* Logout */}
                      <div className="py-2">
                        <button
                          onClick={() => {
                            signOut()
                            setIsOpen((prev) => ({ ...prev, profile: false }))
                          }}
                          className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen((prev) => ({ ...prev, menu: !prev.menu }))}
                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen.menu ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5 text-blue-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen.menu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white p-4 space-y-3 divide-y divide-gray-100">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen((prev) => ({ ...prev, menu: false }))}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${pathname === item.path ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-50"}
                  `}
                >
                  <div className="bg-blue-100 p-2 rounded-full">{item.icon}</div>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Login/Register (only when not authenticated) */}
            {status !== "authenticated" && (
              <div className="pt-3 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen((prev) => ({ ...prev, menu: false }))}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <div className="bg-blue-100 p-2 rounded-full">
                    <LogIn className="w-4 h-4" />
                  </div>
                  <span>Login</span>
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen((prev) => ({ ...prev, menu: false }))}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                >
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <span>Register</span>
                </Link>
              </div>
            )}

            {/* Mobile User Info (only when authenticated) */}
            {status === "authenticated" && (
              <div className="pt-3">
                <div className="px-4 py-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative rounded-full overflow-hidden border-2 border-blue-100">
                      {userData?.image ? (
                        <img
                          src={userData.image || "/placeholder.svg"}
                          alt="Profile"
                          className="w-12 h-12 object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                          {userData?.name?.charAt(0) || "U"}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{userData?.name || "User"}</p>
                      <p className="text-sm text-gray-500 truncate">{userData?.email || ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


