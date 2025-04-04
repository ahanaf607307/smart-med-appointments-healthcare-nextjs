import Image from "next/image";


const About = () => {
    return (
        <div className="px-0 py-12">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-2 uppercase">About <span className='text-[#00BDE0]'>Us</span></h1>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                    Dedicated to providing exceptional healthcare services to our community since 2020.
                </p>
            </div>

            {/* Mission Section */}

            <section className="container mx-auto px-4 mb-16">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-4 text-3xl font-bold text-primary">Our Mission</h2>
                        <p className="mb-4 text-muted-foreground">
                            Our mission is to improve the health and wellbeing of the communities we serve by providing accessible,
                            high-quality healthcare services with compassion and respect.
                        </p>
                        <p className="text-muted-foreground">
                            We are committed to excellence in patient care, innovation in medical practices, and fostering a
                            supportive environment for our patients, staff, and community partners.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Healthcare professionals"
                            width={600}
                            height={400}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-100">
                <div className="container mx-auto mb-16 px-4 py-12 rounded-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
                        <p className="mx-auto max-w-3xl text-muted-foreground">
                            We offer a comprehensive range of healthcare services to meet the needs of our community.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">Blood Donation</h3>
                            <p className="text-muted-foreground">
                                Our blood donation service helps save lives by ensuring a steady supply of blood for those in need.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">Ambulance Service</h3>
                            <p className="text-muted-foreground">
                                Our 24/7 ambulance service provides rapid emergency medical transportation with trained professionals.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-2">Doctor Appointments</h3>
                            <p className="text-muted-foreground">
                                Schedule appointments with our experienced doctors across various specialties for quality healthcare.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-16 container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Team</h2>
                    <p className="mx-auto max-w-3xl text-muted-foreground">
                        Our dedicated team of healthcare professionals is committed to providing the highest quality care.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-center">
                            <div className="mb-4 mx-auto rounded-full overflow-hidden h-40 w-40">
                                <Image
                                    src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                                    alt={`Doctor ${i}`}
                                    width={160}
                                    height={160}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">Dr. Smith</h3>
                            <p className="text-muted-foreground">Medical Director</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* History Section */}
            <section className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hospital building"
                            width={600}
                            height={400}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-4 text-3xl font-bold text-primary">Our History</h2>
                        <p className="mb-4 text-muted-foreground">
                            Founded in 2010, our healthcare service began with a small clinic dedicated to providing basic medical
                            care to underserved communities. Over the years, we have grown into a comprehensive healthcare provider
                            with multiple services and facilities.
                        </p>
                        <p className="text-muted-foreground">
                            Today, we continue to expand our services and reach, always guided by our founding principles of
                            compassion, excellence, and accessibility.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;