

"use client";

import { motion } from "framer-motion";
import { Award, Calendar, UserCog, Users } from "lucide-react";
import { useEffect, useState } from "react";

// Counter animation hook
const useCounter = (end, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

const StatItem = ({ icon: Icon, value, label, delay, color }) => {
  const count = useCounter(value);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="relative p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <div
          className={`p-3 rounded-full ${color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={24} />
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="flex items-center justify-center">
          <h6
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${color.replace(
              "bg-",
              "text-"
            )}`}
          >
            {count}
          </h6>
          {value >= 1000 && (
            <span
              className={`text-xl sm:text-2xl font-bold ${color.replace(
                "bg-",
                "text-"
              )}`}
            >
              K
            </span>
          )}
        </div>
        <p className="font-bold text-gray-700 mt-2 text-sm sm:text-base">
          {label}
        </p>
      </div>

      <div
        className={`h-1 w-0 group-hover:w-full ${color} mt-4 transition-all duration-500 rounded-full`}
      ></div>
    </motion.div>
  );
};

const Stat = () => {
  const stats = [
    { icon: Users, value: 144, label: "Happy Patients", color: "bg-blue-500" },
    { icon: UserCog, value: 84, label: "Specialists", color: "bg-cyan-500" },
    { icon: Award, value: 25, label: "Winning Awards", color: "bg-indigo-500" },
    {
      icon: Calendar,
      value: 83,
      label: "Current Appointments",
      color: "bg-sky-500",
    },
  ];

  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-100 rounded-full opacity-20 translate-x-1/4 translate-y-1/4"></div>

      <div className="relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase mb-14">
          Our <span className="text-[#00BDE0]">Healthcare Impact</span>
          </h1>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;
