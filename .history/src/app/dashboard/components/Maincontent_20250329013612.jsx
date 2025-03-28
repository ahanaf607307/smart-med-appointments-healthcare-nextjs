"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function MainContent({ children, user, handleLogout }) {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            {/* Main content header */}
            <header className="bg-white shadow-sm">
                <div className="flex h-16 items-center justify-end px-4">
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <p className="text-sm font-medium">{user?.name || "User"}</p>
                            <p className="text-xs text-gray-500">{user?.email || "user@example.com"}</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleLogout} className="hidden md:flex">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main content body */}
            <main className="flex-1 overflow-auto bg-gray-100">{children}</main>
        </div>
    )
}

