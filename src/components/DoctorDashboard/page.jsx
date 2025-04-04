"use client"

import { useState } from "react"


import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { DeleteDoctorDialog } from "../DeleteDoctorModal/page"
import { EditDoctorDialog } from "../EditDoctorDialog/page"
import { DoctorTable } from "../DoctorTable/page"
import Link from "next/link"



export function DoctorDashboard() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor)
    setIsEditOpen(true)
  }

  const handleDelete = (doctor) => {
    setSelectedDoctor(doctor)
    setIsDeleteOpen(true)
  }


  const handleConfirmDelete = () => {
    if (selectedDoctor) {
      setDoctors(doctors.filter((doc) => doc.id !== selectedDoctor.id))
      setIsDeleteOpen(false)
    }
  }

  return (
    <div className="space-y-6 w-11/12 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Doctor Management</h1>
          <p className="text-muted-foreground">Manage doctor information, specialties, and status</p>
        </div>
        <Link href={"/dashboard/adddoctor"}>
          <Button><PlusCircle className="mr-2 h-4 w-4" />
            Add Doctor</Button>
        </Link>
      </div>

      <DoctorTable onEdit={handleEdit} onDelete={handleDelete} />

      {selectedDoctor && (
        <>
          <EditDoctorDialog
            doctor={selectedDoctor}
            open={isEditOpen}
            onOpenChange={setIsEditOpen}
            onSave={handleSaveDoctor}
          />

          <DeleteDoctorDialog
            doctor={selectedDoctor}
            open={isDeleteOpen}
            onOpenChange={setIsDeleteOpen}
            onConfirmDelete={handleConfirmDelete}
          />
        </>
      )}
    </div>
  )
}

