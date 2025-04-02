import AmbulanceCard from "@/components/AmbulanceCard/AmbulanceCard";
import React from "react";

const AmbulanceService = async () => {
  const res = await fetch("http://localhost:3000/api/getAllAmbulances", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ambulances = await res.json();

  // Map ambulances array and show all the information in card.
  console.log(ambulances);

  return (
    <div className="p-5">
      <h1 className="text-5xl text-center pt-10 font-bold text-cyan-700">
        Ambulance Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20">
        <AmbulanceCard />
        <AmbulanceCard />
        <AmbulanceCard />
        <AmbulanceCard />
        <AmbulanceCard />
        <AmbulanceCard />
        <AmbulanceCard />
      </div>
    </div>
  );
};

export default AmbulanceService;
