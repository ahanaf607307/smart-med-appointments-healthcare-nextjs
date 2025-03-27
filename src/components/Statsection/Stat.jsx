import React from 'react';

const Stat = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid row-gap-8 sm:grid-cols-4">
                <div className="text-center">
                    <h6 className="text-7xl font-bold text-blue-500">144K</h6>
                    <p className="font-bold">Happy Patients</p>
                </div>
                <div className="text-center">
                    <h6 className="text-7xl font-bold text-blue-500">84</h6>
                    <p className="font-bold">Specialists</p>
                </div>
                <div className="text-center">
                    <h6 className="text-7xl font-bold text-blue-500">25</h6>
                    <p className="font-bold">Winning Awards</p>
                </div>
                <div className="text-center">
                    <h6 className="text-7xl font-bold text-blue-500">83</h6>
                    <p className="font-bold">Current Appointment</p>
                </div>
            </div>
        </div>
    );
};

export default Stat;