import React from "react";
import CareerBanner from "../assets/career-banner.png";

const categories = [
  "Home", "All India Govt Jobs", "State Govt Jobs", "Bank Jobs",
  "Teaching Jobs", "Engineering Jobs", "Railway Jobs",
  "Police/Defence Jobs", "Defence Jobs"
];

const states = [
  "AP", "AS", "BR", "CG", "DL", "GJ", "HP", "HR", "JH", "KA",
  "KL", "MH", "MP", "OD", "PB", "RJ", "TN", "TS", "UK", "UP", "WB", "Other States"
];

const CategoryPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f5ef] px-6 py-10 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#1e1a3a] mb-10">
        Choose Your Exam Category
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full border-2 border-black text-sm md:text-base font-semibold hover:bg-black hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* States */}
      <div className="flex flex-wrap justify-center gap-2">
        {states.map((state, index) => (
          <button
            key={index}
            className="px-3 py-1 rounded-md border text-sm font-medium bg-white hover:bg-[#e4e4e4] transition"
          >
            {state}
          </button>
        ))}
      </div>

      {/* Transparent Image */}
      <div className="mt-16 flex justify-center">
        <img
          src={CareerBanner}
          alt="Career Inspiration"
          className="w-full max-w-6xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryPage;
