// components/Card.js
import React from "react";

const PostCard = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4/12 bg-white p-6 rounded-md shadow-md">
        {/* Card Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Line Separator */}
        <hr className="mb-4" />

        {/* Card Body */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PostCard;
5;
