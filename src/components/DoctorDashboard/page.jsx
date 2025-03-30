"use client"

import { useState } from "react"


import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { DeleteDoctorDialog } from "../DeleteDoctorModal/page"
import { EditDoctorDialog } from "../EditDoctorDialog/page"
import { DoctorTable } from "../DoctorTable/page"

// Sample data
const initialDoctors = [
  {
    id: "1",
    name: "Dr. Jane Smith",
    specialty: "Cardiology",
    hospital: "Memorial Hospital",
    email: "jane.smith@hospital.com",
    phone: "(555) 123-4567",
    status: "active",
  },
  {
    id: "2",
    name: "Dr. John Doe",
    specialty: "Neurology",
    hospital: "City Medical Center",
    email: "john.doe@hospital.com",
    phone: "(555) 987-6543",
    status: "active",
  },
  {
    id: "3",
    name: "Dr. Emily Johnson",
    specialty: "Pediatrics",
    hospital: "Children's Hospital",
    email: "emily.johnson@hospital.com",
    phone: "(555) 456-7890",
    status: "on-leave",
  },
  {
    id: "4",
    name: "Dr. Michael Chen",
    specialty: "Orthopedics",
    hospital: "University Medical Center",
    email: "michael.chen@hospital.com",
    phone: "(555) 789-0123",
    status: "inactive",
  },
  {
    id: "5",
    name: "Dr. Sarah Williams",
    specialty: "Dermatology",
    hospital: "Skin Care Clinic",
    email: "sarah.williams@hospital.com",
    phone: "(555) 234-5678",
    status: "active",
  },
]

export function DoctorDashboard() {
  const [doctors, setDoctors] = useState(initialDoctors)
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

  const handleSaveDoctor = (updatedDoctor) => {
    setDoctors(doctors.map((doc) => (doc.id === updatedDoctor.id ? updatedDoctor : doc)))
    setIsEditOpen(false)
  }

  const handleAddDoctor = () => {
    const newDoctor = {
      id: `${Date.now()}`,
      name: "",
      specialty: "",
      hospital: "",
      email: "",
      phone: "",
      status: "active",
    }
    setSelectedDoctor(newDoctor)
    setIsEditOpen(true)
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
        <Button onClick={handleAddDoctor}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Doctor
        </Button>
      </div>

      <DoctorTable doctors={doctors} onEdit={handleEdit} onDelete={handleDelete} />
    
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

