// pages/index.js
import React from "react";
import TitleBar from "../components/TitleBar";

const PostTitleBar = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="mb-8">
      {/* TitleBar Component */}
      <TitleBar title="My Posts" buttonText="Add Post" />
    </div>
  );
};

export default PostTitleBar;
