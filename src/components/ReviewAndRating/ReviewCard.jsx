import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const ReviewCard = () => {
    return (
        <div>
             <div className="card w-80 border-2 border-gray-200 rounded-xl p-3">
            <div className="flex gap-x-3 items-center">
              <h1 className="text-3xl">
                <FaUserCircle />
              </h1>
              <div className="my-5">
                <h1 className="font-semibold text-xl">
                 Mr.Ahanaf Mubasshir
                </h1>
                <p className="font-medium text-gray-600">Cricketer</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-5">
            "I love how Study Today makes group study sessions more organized. The real-time feedback and grading system help improve learning efficiency. The website runs smoothly without any lag, and the UI is very intuitive. A must-try for students!" – Mr. Arosh Al Hasan
            </p>
            <hr />
            <div className="flex gap-4 items-center text-sm mt-2">
              <h1>Rating :</h1>{" "}
              <section className="text-orange-400 flex gap-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </section>
            </div>
          </div>
        </div>
    );
};

export default ReviewCard;