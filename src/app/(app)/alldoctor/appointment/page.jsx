import AppointmentForm from "./components/Appointment-from";

const page = () => {
    return (
        <div className="max-w-11/12 mx-auto mt-10">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-2 uppercase">Doctor <span className='text-[#00BDE0]'>Appointment</span></h1>
            </div>
            <div className="mb-10">
                <AppointmentForm></AppointmentForm>
            </div>
        </div>
    );
};

export default page;