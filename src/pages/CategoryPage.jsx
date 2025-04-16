import React from "react";
import { useNavigate } from "react-router-dom";
import careerBanner from "../assets/career-banner.png";

const mainCategories = [
  { name: "Home", path: "/" },
  { name: "All India Govt Jobs", path: "/all-india" },
  { name: "State Govt Jobs", path: "/state" },
  { name: "Bank Jobs", path: "/banking" },
  { name: "Teaching Jobs", path: "/teaching" },
  { name: "Engineering Jobs", path: "/engineering" },
  { name: "Railway Jobs", path: "/railways" },
  { name: "Police/Defence Jobs", path: "/police" },
  { name: "Defence Jobs", path: "/defence" },
  { name: "Medical Entrance", path: "/medical" },
  { name: "Other Exams", path: "/others" },
];

const stateCategories = [
  "AP", "TS", "MH", "UP", "WB",
  "CG", "AS", "BR", "DL", "MP",
];

const categories = [
  "Medical Entrance",
  "Engineering Entrance",
  "Teaching",
  "Defence Exams",
  "Government Jobs",
  "Banking",
  "Railways",
  "Police/Army",
  "Others",
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f5ef] text-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#150c3b] mb-10">
        Choose Your Exam Category
      </h1>

      {/* Main Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {mainCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => cat.path !== "#" && navigate(cat.path)}
            className="px-4 py-2 border-2 border-black rounded-full text-sm sm:text-base hover:shadow-md transition"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* State Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {stateCategories.map((state, index) => (
          <button
            key={index}
            className="px-4 py-1 border border-black rounded text-sm hover:bg-[#ece6da]"
          >
            {state}
          </button>
        ))}
      </div>

      {/* Entrance Exam Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate("/exam")}
            className="px-6 py-2 border border-black rounded-full text-sm sm:text-base font-medium text-[#150c3b] bg-[#f9f5ef] hover:shadow-md transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Career Banner Image */}
      <div className="mt-8">
        <img
          src={careerBanner}
          alt="career-banner"
          className="w-full max-w-5xl mx-auto"
        />
      </div>
    </div>
  );
};

export default CategoryPage;
