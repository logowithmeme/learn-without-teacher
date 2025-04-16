import React from "react";

const topCategories = [
  "Home", "All India Govt Jobs", "State Govt Jobs", "Bank Jobs",
  "Teaching Jobs", "Engineering Jobs", "Railway Jobs", "Police/Defence Jobs", "Defence Jobs"
];

const states = [
  "AP", "AS", "BR", "CG", "DL", "GJ", "HP", "HR", "JH", "KA", "KL",
  "MH", "MP", "OD", "PB", "RJ", "TN", "TS", "UK", "UP", "WB", "Other States"
];

const CategoryPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f5ef] w-screen flex flex-col items-center justify-start px-6 py-20">
      {/* 🔥 BIG TITLE */}
      <h1 className="text-4xl md:text-6xl font-black text-[#1e1f61] text-center font-serif mb-12">
        Choose Your Exam Category
      </h1>

      {/* 🔷 TOP CATEGORY BUTTONS */}
      <div className="w-full max-w-[90rem] flex flex-wrap justify-center gap-6 mb-10">
        {topCategories.map((cat, index) => (
          <button
            key={index}
            className="bg-blue-600 text-white text-lg md:text-2xl font-semibold px-10 py-5 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🌐 STATE BUTTONS */}
      <div className="w-full max-w-[90rem] flex flex-wrap justify-center gap-4 mb-12">
        {states.map((state, index) => (
          <button
            key={index}
            className="bg-blue-600 text-white text-base md:text-xl font-medium px-7 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            {state}
          </button>
        ))}
      </div>

      {/* 🚧 COMING SOON */}
      <p className="text-xl md:text-2xl text-gray-700 text-center">
        🚧 Coming Soon: Select a category to start your journey!
      </p>
    </div>
  );
};

export default CategoryPage;
