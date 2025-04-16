import React from "react";
import ExamCard from "../components/ExamCard";
import { useNavigate } from "react-router-dom";

const policeExams = [
  { name: "SI / Constable", icon: "🚓" },
  { name: "CAPF (Assistant Commandant)", icon: "🛡️" },
  { name: "SSC GD Constable", icon: "👮‍♂️" },
  { name: "State Police Exams", icon: "🏢" },
  { name: "Intelligence Bureau", icon: "🕵️" }
];

const PolicePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f5ef] text-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#150c3b] mb-10">
        Police & Security Exams
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {policeExams.map((exam, index) => (
          <ExamCard
            key={index}
            icon={exam.icon}
            title={exam.name}
            onClick={() => navigate("/exam")}
          />
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-10 px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default PolicePage;