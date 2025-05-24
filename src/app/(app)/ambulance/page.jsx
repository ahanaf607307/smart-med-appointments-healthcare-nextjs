"use client";

import { useEffect, useState } from "react";

import AmbulanceCard from "@/components/AmbulanceCard/AmbulanceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Clock, Filter, MapPin, Search, Shield, Truck } from "lucide-react";

const AmbulanceService = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [filteredAmbulances, setFilteredAmbulances] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for demonstration
  const mockAmbulances = [
    {
      _id: "1",
      ambulanceName: "Emergency Response Unit A1",
      ambulanceImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      rentPrice: 150,
      location: "Downtown Medical District",
      phoneNumber: "1234567890",
      type: "Advanced Life Support",
      responseTime: "5-8 minutes",
      equipment: ["Defibrillator", "Oxygen", "IV Equipment"],
    },
    {
      _id: "2",
      ambulanceName: "Critical Care Transport B2",
      ambulanceImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      rentPrice: 200,
      location: "North Healthcare Center",
      phoneNumber: "1234567891",
      type: "Critical Care",
      responseTime: "3-5 minutes",
      equipment: ["Ventilator", "Cardiac Monitor", "Advanced Medications"],
    },
    {
      _id: "3",
      ambulanceName: "Basic Life Support C3",
      ambulanceImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      rentPrice: 100,
      location: "South Community Hospital",
      phoneNumber: "1234567892",
      type: "Basic Life Support",
      responseTime: "8-12 minutes",
      equipment: ["First Aid", "Oxygen", "Basic Monitoring"],
    },
    {
      _id: "4",
      ambulanceName: "Pediatric Emergency Unit D4",
      ambulanceImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      rentPrice: 180,
      location: "Children's Medical Center",
      phoneNumber: "1234567893",
      type: "Pediatric Specialized",
      responseTime: "4-7 minutes",
      equipment: [
        "Pediatric Equipment",
        "Specialized Monitors",
        "Child-Safe Medications",
      ],
    },
    {
      _id: "5",
      ambulanceName: "Trauma Response Unit E5",
      ambulanceImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      rentPrice: 250,
      location: "Trauma Center East",
      phoneNumber: "1234567894",
      type: "Trauma Specialized",
      responseTime: "2-4 minutes",
      equipment: [
        "Surgical Equipment",
        "Blood Products",
        "Advanced Trauma Care",
      ],
    },
    {
      _id: "6",
      ambulanceName: "Mobile ICU Unit F6",
      ambulanceImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      rentPrice: 300,
      location: "Central Hospital",
      phoneNumber: "1234567895",
      type: "Mobile ICU",
      responseTime: "5-10 minutes",
      equipment: [
        "ICU Equipment",
        "Life Support Systems",
        "Specialized Monitoring",
      ],
    },
  ];

  useEffect(() => {
    const fetchAmbulances = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllAmbulances`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            // ✅ Add this to disable caching during SSR
            cache: "no-store",
          }
        );
        setAmbulances(data);
        setFilteredAmbulances(data);
      } catch (error) {
        console.error("Error fetching ambulances:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAmbulances();
  }, []);

  useEffect(() => {
    let filtered = ambulances;

    if (searchTerm) {
      filtered = filtered.filter(
        (ambulance) =>
          ambulance.ambulanceName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          ambulance.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ambulance.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation !== "all") {
      filtered = filtered.filter((ambulance) =>
        ambulance.location.includes(selectedLocation)
      );
    }

    setFilteredAmbulances(filtered);
  }, [searchTerm, selectedLocation, ambulances]);

  const stats = [
    { number: "24/7", label: "Emergency Service", icon: Clock },
    { number: "50+", label: "Ambulances Available", icon: Truck },
    { number: "< 5min", label: "Average Response Time", icon: Shield },
    { number: "99.9%", label: "Success Rate", icon: MapPin },
  ];

  const locations = ["all", "Downtown", "North", "South", "East", "Central"];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Truck className="w-4 h-4" />
            Emergency Medical Services
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Ambulance{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Fast, reliable emergency medical transportation available 24/7. Our
            fleet of modern ambulances is equipped with advanced life support
            systems and staffed by certified paramedics.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search and Filter Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-12">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search ambulances by name, location, or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500/20"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 pr-4 h-12 border border-gray-200 rounded-md focus:border-red-500 focus:ring-red-500/20 bg-white appearance-none cursor-pointer"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location === "all"
                          ? "All Locations"
                          : `${location} Area`}
                      </option>
                    ))}
                  </select>
                </div>
                <Button className="h-12 px-6 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-semibold">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="animate-pulse bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <div className="h-64 bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Ambulances Grid */}
        {!isLoading && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Available Ambulances{" "}
                <span className="text-lg font-normal text-gray-600">
                  ({filteredAmbulances.length} units)
                </span>
              </h2>
            </div>

            {filteredAmbulances.length === 0 ? (
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Truck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    No Ambulances Found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or location filter.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAmbulances.map((ambulance) => (
                  <AmbulanceCard key={ambulance._id} ambulance={ambulance} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Emergency Contact Section */}
        <Card className="mt-16 bg-gradient-to-r from-red-500 to-blue-500 border-0 shadow-2xl text-white">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Emergency? Call Now!</h3>
            <p className="text-xl mb-6 opacity-90">
              For immediate emergency medical assistance, call our 24/7
              emergency hotline
            </p>
            <div className="text-4xl font-bold mb-6">📞 911</div>
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 text-lg">
              Call Emergency Line
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AmbulanceService;
