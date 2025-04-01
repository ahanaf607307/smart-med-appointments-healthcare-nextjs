import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

const Page = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-lg w-4/5 mx-auto my-8 max-w-4xl">
        {/* Left Section */}
        <div className="md:w-1/2 flex justify-center items-center my-4">
          <RegisterForm />
        </div>
        {/* Right Section */}
        <div className="md:w-1/2  flex justify-center items-center">
          <Image
            className="hidden md:block"
            src={"/assets/images/register/signUp.png"}
            width={460}
            height={500}
            alt={"Authentication Image"}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
