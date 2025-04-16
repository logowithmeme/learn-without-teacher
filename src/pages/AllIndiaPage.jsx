import React from "react";
import { useNavigate } from "react-router-dom";

const allIndiaCategories = [
  "UPSC Exams",
  "SSC Exams",
  "Railway Exams",
  "Banking & Finance",
  "Teaching & Admin (KVS/NVS)",
  "DRDO / ISRO / BARC",
  "Insurance (LIC/EPFO/ESIC)",
  "Other Central Govt Jobs"
];

const AllIndiaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f5ef] text-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#150c3b] mb-10">
        All India Government Exams
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {allIndiaCategories.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate("/exam")}
            className="px-6 py-2 border border-black rounded-full text-sm sm:text-base font-medium text-[#150c3b] bg-[#f9f5ef] hover:shadow-md transition"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default AllIndiaPage;
