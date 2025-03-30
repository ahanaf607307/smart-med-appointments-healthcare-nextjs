import BloodCard from '@/components/BloodCard/BloodCard';
import React from 'react';

const Blood = () => {
    return (
        <div  className='container mx-auto p-4'>
    <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-10'>
    <BloodCard/>
    <BloodCard/>
    <BloodCard/>
    <BloodCard/>
    <BloodCard/>
    </div>
        </div>
    );
};

export default Blood;