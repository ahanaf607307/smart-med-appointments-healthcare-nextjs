'use client'; 

import { Card } from "@/components/ui/card"
import { useSession } from "next-auth/react"
import Image from "next/image";

export default function UserProfile() {
    const { data: session } = useSession();
      console.log(session)
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-lg">
 
          <div className="relative h-64 w-full bg-gray-200">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Profile banner"
              fill
              className="object-cover"
              priority
            />
          </div>
  
   
          <div className="flex flex-col items-center -mt-16 relative z-10">
            <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32 bg-white">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile picture"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
  
   
            <div className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">admin</div>
          </div>
  

          <div className="text-center mt-4 px-6">
            <h2 className="text-xl font-medium text-gray-800">User Id: bpluq2rgRQSJR3UPn3yV45C6nUs2</h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between px-8 py-6 gap-4">
            <div className="space-y-1">
              <p className="text-gray-500">Name</p>
              <p className="font-medium text-gray-900">Admin</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500">Email</p>
              <p className="font-medium text-gray-900">admin@gmail.com</p>
            </div>
            
          </div>
        </Card>
      </div>
    )
  }