// components/TitleBar.js
import React from "react";

const TitleBar = ({ title, buttonText, onButtonClick }) => {
  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Title */}
      <h1 className="text-xl font-semibold">{title}</h1>

      {/* Button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TitleBar;
