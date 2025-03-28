"useClinet"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const UserDashboard = () => {
    return (
        <div className='min-h-screen'>
            This is user dashboard
            <Link href='/dashboard/user/adddoctor' ><Button variant='outline' className='cursor-pointer'>Add Doctor</Button></Link>
        </div>
    );
};

export default UserDashboard;