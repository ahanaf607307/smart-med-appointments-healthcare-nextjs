import React from 'react';
import { TableDemo } from './components/ManageUser';

const page = () => {
    return (
        <div className='p-4'>
            <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
            <div>
                <TableDemo />
            </div>
        </div>
    );
};

export default page;