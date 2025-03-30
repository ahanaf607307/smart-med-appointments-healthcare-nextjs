"use client";

import { Calendar, CheckCircle, Clock, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Sample pending patients data
const initialPendingPatients = [
  {
    id: 101, 
    name: "Olivia Chen",
    image: "/placeholder.svg?height=40&width=40",
    initials: "OC",
    age: 28,
    gender: "Female",
    condition: "Asthma",
    requestDate: "2023-03-28",
    notes: "New patient referral from Dr. Williams",
  },
  {
    id: 102,
    name: "Sophia Martinez",
    image: "/placeholder.svg?height=40&width=40",
    initials: "SM",
    age: 31,
    gender: "Female",
    condition: "Migraine",
    requestDate: "2023-03-20",
    notes: "Patient seeking second opinion on treatment plan",
  },
  {
    id: 103,
    name: "Daniel Kim",
    image: "/placeholder.svg?height=40&width=40",
    initials: "DK",
    age: 45,
    gender: "Male",
    condition: "Lower back pain",
    requestDate: "2023-03-25",
    notes: "Referred by physical therapist for further evaluation",
  },
  {
    id: 104,
    name: "Isabella Garcia",
    image: "/placeholder.svg?height=40&width=40",
    initials: "IG",
    age: 52,
    gender: "Female",
    condition: "Chronic fatigue",
    requestDate: "2023-03-22",
    notes: "Patient reports symptoms for over 6 months",
  },
  {
    id: 105,
    name: "Noah Wilson",
    image: "/placeholder.svg?height=40&width=40",
    initials: "NW",
    age: 38,
    gender: "Male",
    condition: "Anxiety disorder",
    requestDate: "2023-03-18",
    notes: "Seeking consultation for medication management",
  },
];

export default function AppointmentsPage() {
  const router = useRouter();
  const [pendingPatients, setPendingPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);

  // Initialize localStorage on first load
  useEffect(() => {
    // Initialize pending patients if not already in localStorage
    if (!localStorage.getItem("pendingPatients")) {
      localStorage.setItem(
        "pendingPatients",
        JSON.stringify(initialPendingPatients)
      );
    }

    // Load pending patients from localStorage
    const storedPendingPatients = localStorage.getItem("pendingPatients");
    setPendingPatients(JSON.parse(storedPendingPatients));

    // Debug: Check if localStorage is working
    console.log("Loaded pending patients:", JSON.parse(storedPendingPatients));

    // Clear any existing completed patients data to start fresh
    if (!localStorage.getItem("completedPatients")) {
      localStorage.setItem("completedPatients", JSON.stringify([]));
    }
  }, []);

  // Filter patients based on search query
  const filteredPatients = pendingPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle accepting a pending patient
  const handleAcceptPatient = (patientId) => {
    // Find the patient that was accepted
    const acceptedPatient = pendingPatients.find(
      (patient) => patient.id === patientId
    );

    if (acceptedPatient) {
      // Create a completed patient record
      const completedPatient = {
        id: acceptedPatient.id,
        name: acceptedPatient.name,
        image: acceptedPatient.image,
        initials: acceptedPatient.initials,
        age: acceptedPatient.age,
        gender: acceptedPatient.gender,
        condition: acceptedPatient.condition,
        completedDate: new Date().toISOString().split("T")[0], 
        treatmentDuration: "New", // Initial value
        outcome: "Improved", // Default outcome
      };

      // Get existing completed patients from localStorage
      let completedPatients = [];
      try {
        const storedCompletedPatients =
          localStorage.getItem("completedPatients");
        if (storedCompletedPatients) {
          completedPatients = JSON.parse(storedCompletedPatients);
        }
      } catch (error) {
        console.error("Error parsing completed patients:", error);
      }

      // Add the new completed patient
      completedPatients.unshift(completedPatient); 

      // Save back to localStorage
      localStorage.setItem(
        "completedPatients",
        JSON.stringify(completedPatients)
      );

      // Debug: Verify the data was saved
      console.log("Updated completed patients:", completedPatients);

      // Remove from pending list
      const updatedPendingPatients = pendingPatients.filter(
        (patient) => patient.id !== patientId
      );
      setPendingPatients(updatedPendingPatients);
      localStorage.setItem(
        "pendingPatients",
        JSON.stringify(updatedPendingPatients)
      );

      // Show status message
      setStatusMessage({
        type: "success",
        text: `You've accepted the appointment for ${acceptedPatient.name}`,
      });

      
      setTimeout(() => {
        router.push("/dashboard/doctor/completeAppointment");
      }, 1500);
    }
  };

  // Handle rejecting a pending patient
  const handleRejectPatient = (patientId) => {
    // Find the patient that was rejected
    const rejectedPatient = pendingPatients.find(
      (patient) => patient.id === patientId
    );

    // Remove from pending list
    const updatedPendingPatients = pendingPatients.filter(
      (patient) => patient.id !== patientId
    );
    setPendingPatients(updatedPendingPatients);
    localStorage.setItem(
      "pendingPatients",
      JSON.stringify(updatedPendingPatients)
    );

   
    setStatusMessage({
      type: "error",
      text: `You've rejected the appointment for ${rejectedPatient?.name}`,
    });

    
    setTimeout(() => {
      setStatusMessage(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-6 w-11/12 mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        <p className="text-muted-foreground">
          Review and manage appointment requests waiting for your approval.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-md ${
            statusMessage.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Appointment Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 max-w-sm"
              />
            </div>

            {filteredPatients.length === 0 ? (
              <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-1 text-center">
                  <Clock className="h-10 w-10 text-muted-foreground/70" />
                  <h3 className="font-medium">No appointments</h3>
                  <p className="text-sm text-muted-foreground">
                    All appointment requests have been processed.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredPatients.map((patient) => (
                  <Card key={patient.id} className="overflow-hidden">
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between p-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={patient.image}
                              alt={patient.name}
                            />
                            <AvatarFallback>{patient.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{patient.name}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{patient.age} years</span>
                              <span>•</span>
                              <span>{patient.gender}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Clock className="h-3 w-3" />
                          <span>Pending</span>
                        </Badge>
                      </div>
                      <div className="border-t px-4 py-3">
                        <div className="grid gap-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">
                              Condition:
                            </span>
                            <span className="text-sm">{patient.condition}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">
                              Appointment Date:
                            </span>
                            <div className="flex items-center gap-1 text-sm">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(
                                  patient.requestDate
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t px-4 py-3">
                        <p className="text-sm font-medium">Notes:</p>
                        <p className="text-sm text-muted-foreground">
                          {patient.notes}
                        </p>
                      </div>
                      <div className="flex border-t">
                        <Button
                          variant="ghost"
                          className="flex-1 rounded-none rounded-bl-md py-3 text-destructive hover:text-destructive"
                          onClick={() => handleRejectPatient(patient.id)}
                        >
                          <X className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                        <div className="border-r" />
                        <Button
                          variant="ghost"
                          className="flex-1 rounded-none rounded-br-md py-3 text-primary hover:text-primary"
                          onClick={() => handleAcceptPatient(patient.id)}
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
