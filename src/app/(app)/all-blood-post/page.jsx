import BloodFilters from '@/components/BloodFilters/BloodFilters'
import BloodPostList from '@/components/BloodPostList/BloodPostList'

const page = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-2 uppercase">All Blood <span className='text-[#00BDE0]'>Posts</span></h1>
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
