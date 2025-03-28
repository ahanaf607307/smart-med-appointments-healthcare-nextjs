import { Button } from "../ui/button";

export default function NewsLetter() {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-full max-w-3xl bg-white border border-blue-300 rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold">Sign Up For Newsletter</h2>
          <p className="text-gray-600 mt-2">
            Get E-mail updates about our latest shop and <span className="text-blue-500 font-semibold">special offers</span>
          </p>
          <div className="mt-4 flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter Your email"
              className="border border-gray-300 px-3 py-2 w-2/3 rounded-l-md focus:outline-none"
            />
            {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md font-medium">
              Submit
            </button> */}
            <Button variant='outline'  size='lg'> Submit </Button>
          </div>
        </div>
      </div>
    );
  }
  