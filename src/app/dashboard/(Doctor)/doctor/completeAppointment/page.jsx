"use client"

import { useState, useEffect } from "react"
import { Calendar, CheckCircle, Download, Filter, Search, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompletedPatientsPage() {
  const [completedPatients, setCompletedPatients] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [outcomeFilter, setOutcomeFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  // Load completed patients from localStorage
  const loadCompletedPatients = () => {
    try {
      const storedCompletedPatients = localStorage.getItem("completedPatients")
      if (storedCompletedPatients) {
        const parsedData = JSON.parse(storedCompletedPatients)
        console.log("Loaded completed patients:", parsedData)
        setCompletedPatients(parsedData)
      } else {
        // Initialize with empty array if nothing in localStorage
        console.log("No completed patients found in localStorage")
        setCompletedPatients([])
        localStorage.setItem("completedPatients", JSON.stringify([]))
      }
    } catch (error) {
      console.error("Error loading completed patients:", error)
      setCompletedPatients([])
    } finally {
      setIsLoading(false)
    }
  }

  // Load data on initial render
  useEffect(() => {
    loadCompletedPatients()

    // Set up event listener for storage changes from other tabs
    const handleStorageChange = (e) => {
      if (e.key === "completedPatients") {
        console.log("Storage changed, reloading data")
        loadCompletedPatients()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  // Manual refresh function
  const handleRefresh = () => {
    setIsLoading(true)
    loadCompletedPatients()
  }

  // Filter patients based on search query and outcome filter
  const filteredPatients = completedPatients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesOutcome = outcomeFilter === "all" || patient.outcome.toLowerCase() === outcomeFilter.toLowerCase()

    return matchesSearch && matchesOutcome
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Completed Patients</h1>
        <p className="text-muted-foreground">View patients who have completed their treatment plans.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Completed Treatments</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isLoading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full items-center gap-2 sm:max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search completed patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9"
                />
              </div>
              <div className="flex items-center gap-2">
                <Select value={outcomeFilter} onValueChange={setOutcomeFilter}>
                  <SelectTrigger className="h-9 w-[180px]">
                    <SelectValue placeholder="Filter by outcome" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Outcomes</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="improved">Improved</SelectItem>
                    <SelectItem value="stable">Stable</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div className="flex h-[300px] items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                  <p>Loading patients...</p>
                </div>
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead>Completed Date</TableHead>
                      <TableHead>Treatment Duration</TableHead>
                      <TableHead>Outcome</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatients.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="h-24 text-center">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <p>No completed patients found.</p>
                            <p className="text-sm text-muted-foreground">
                              Accept patients from the Appointments page to see them here.
                            </p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredPatients.map((patient) => (
                        <TableRow key={patient.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={patient.image} alt={patient.name} />
                                <AvatarFallback>{patient.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{patient.name}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <span>{patient.age} years</span>
                                  <span>•</span>
                                  <span>{patient.gender}</span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{patient.condition}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 text-muted-foreground" />
                              <span>{new Date(patient.completedDate).toLocaleDateString()}</span>
                            </div>
                          </TableCell>
                          <TableCell>{patient.treatmentDuration}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                patient.outcome === "Resolved"
                                  ? "default"
                                  : patient.outcome === "Improved"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="flex items-center gap-1"
                            >
                              <CheckCircle className="h-3 w-3" />
                              <span>{patient.outcome}</span>
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

