import AmbulanceCard from "@/components/AmbulanceCard/AmbulanceCard";
import React from "react";

// ✅ make sure it's a server component
const AmbulanceService = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllAmbulances`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // ✅ Add this to disable caching during SSR
    cache: "no-store",
  });

  const ambulances = await res.json();

  return (
    <div className="p-5">
      <h1 className="text-5xl text-center pt-10 font-bold text-cyan-700">
        Ambulance Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20">
      {
        ambulances.map(ambulance => <AmbulanceCard key={ambulance?._id} ambulance={ambulance}/>)
      }
      </div>
    </div>
  );
};

export default AmbulanceService;
