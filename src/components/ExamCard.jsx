import React from "react";
import "../index.css";

const ExamCard = ({ icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full sm:w-64 border border-black rounded-xl px-4 py-6 text-center cursor-pointer hover:shadow-lg transition bg-white"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h2 className="text-lg font-semibold text-[#150c3b]">{title}</h2>
    </div>
  );
};

export default ExamCard;
