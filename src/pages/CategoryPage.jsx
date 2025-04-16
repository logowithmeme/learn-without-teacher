import React from "react";
import careerBanner from "../assets/career-banner.png";

const categories = [
  "Home",
  "All India Govt Jobs",
  "State Govt Jobs",
  "Bank Jobs",
  "Engineering Jobs",
];

const extraCategories = [
  "Teaching Jobs",
  "Railway Jobs",
  "Police/Defence Jobs",
  "Defence Jobs",
];

const states = [
  "AP", "TS", "MH", "UP", "WB", "CG", "AS", "BR", "DL", "MP", "Other States"
];

const CategoryPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f5ef] text-center px-4 py-10">
      <h1 className="text-4xl font-bold text-[#150E46] mb-8">
        Choose Your Exam Category
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className="border-2 border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {extraCategories.map((category) => (
          <button
            key={category}
            className="border-2 border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {states.map((state) => (
          <button
            key={state}
            className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition"
          >
            {state}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <img
          src={careerBanner}
          alt="Career Options"
          className="max-w-5xl w-full"
        />
      </div>
    </div>
  );
};

export default CategoryPage;
