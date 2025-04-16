import React from "react";
import "@fontsource/dm-serif-display";
import { useNavigate } from "react-router-dom";

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#f9f5ef] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        {/* BIG Logo */}
        <img
          src="/logo.png"
          alt="Learn Without Teacher Logo"
          className="w-[240px] md:w-[300px] lg:w-[350px] drop-shadow-xl"
        />

        {/* BIG Title */}
        <h1
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-gray-900 leading-tight font-black"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Learn Without Teacher
        </h1>

        {/* Navigation Button */}
        <button
          onClick={() => navigate("/categories")}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-[#fdf3e6] to-[#f9f5ef] text-[#1e1f61] text-xl md:text-2xl font-semibold shadow-[6px_6px_16px_#e0dbd3,-6px_-6px_16px_#ffffff] hover:scale-105 transition-transform duration-300"
        >
          Choose Your Exam
        </button>
      </div>
    </div>
  );
};

export default CoverPage;
