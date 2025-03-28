"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function DashboardLayout({ children }) {
    const router = useRouter()
    const isMobile = useMobile()
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
    const [user, setUser] = useState(null)

    useEffect(() => {
        // Get user from localStorage
        const userStr = localStorage.getItem("user")
        if (userStr) {
            setUser(JSON.parse(userStr))
        }
    }, [])

    useEffect(() => {
        setSidebarOpen(!isMobile)
    }, [isMobile])

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("user")
        router.push("/")
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile sidebar toggle */}
            <div className="fixed top-4 left-4 z-50 md:hidden">
                <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="bg-white">
                    {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Sidebar Component */}
            <Sidebar isMobile={isMobile} sidebarOpen={sidebarOpen} user={user} handleLogout={handleLogout} />

            {/* Main Content Component */}
            <MainContent user={user} handleLogout={handleLogout}>
                {children}
            </MainContent>
        </div>
    )
}

