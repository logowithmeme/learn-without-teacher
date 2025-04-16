import React from "react";
import careerBanner from "../assets/career-banner.png";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Medical Entrance", path: "/medical" },
  { name: "Engineering Entrance", path: "/engineering" },
  { name: "Teaching", path: "/teaching" },
  { name: "Defence Exams", path: "/defence" },
  { name: "Government Jobs", path: "/government" },
  { name: "Banking", path: "/banking" },
  { name: "Railways", path: "/railways" },
  { name: "Police/Army", path: "/police" },
  { name: "Others", path: "/others" },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f5ef] text-center px-4 py-10">
      <h1 className="text-4xl font-bold text-[#150E46] mb-12">
        Choose Your Exam Category
      </h1>

      {/* Updated Main Categories as Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => navigate(category.path)}
            className="cursor-pointer border-2 border-black px-6 py-6 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all"
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Banner Image */}
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
