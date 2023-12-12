// components/CardForm.js
import React from "react";

const Form = ({ header, children }) => {
  return (
    <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
      {/* Card Header */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{header}</h2>
      </div>

      {/* Line Separator */}
      <hr className="mb-4" />

      {/* Card Body (Form) */}
      <form>
        {children}
        {/* Additional form fields or components go here */}
      </form>
    </div>
  );
};

export default Form;
