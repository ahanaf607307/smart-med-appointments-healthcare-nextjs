import BloodFilters from '@/components/BloodFilters/BloodFilters'
import BloodPostList from '@/components/BloodPostList/BloodPostList'
import { Button } from '@/components/ui/button'

const page = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-2 uppercase">All Blood <span className='text-[#00BDE0]'>Posts</span></h1>
                    {/* <p className="text-gray-600 max-w-2xl mx-auto">
                        View all current blood donation posts. Filter by blood type, location, or urgency to find requests you
                        can help with.
                    </p> */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <BloodFilters />
                    </div>

                    <div className="lg:col-span-3">
                        <BloodPostList />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default page
