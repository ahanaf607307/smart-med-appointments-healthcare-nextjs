import Image from "next/image";
import LoginForm from "./components/LoginForm";

const Page = () => {
  return (
    <>
      
      <section className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-lg w-4/5 mx-auto my-6  max-w-4xl">
        {/* Left Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            className="hidden md:block"
            src={"/assets/images/login/loginImage.png"}
            width={460}
            height={500}
            alt={"Authentication Image"}
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2  flex justify-center items-center">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Page;
