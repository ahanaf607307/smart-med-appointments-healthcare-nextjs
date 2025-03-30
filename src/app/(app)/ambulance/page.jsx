import AmbulanceCard from '@/components/AmbulanceCard/AmbulanceCard';
import React from 'react';

const AmbulanceService = () => {
    return (
        <div className='p-5'>
            <h1 className='text-5xl text-center pt-10 font-bold text-cyan-700'>Ambulance Service</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
           <AmbulanceCard/>
           <AmbulanceCard/>
           <AmbulanceCard/>
           <AmbulanceCard/>
           <AmbulanceCard/>
           <AmbulanceCard/>
           <AmbulanceCard/>
           </div>
        </div>
    );
};

export default AmbulanceService;