// pages/index.js
import React from "react";
import Form from "./Form";

const AddPosts = () => {
  function setData() {}

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      {/* CardForm Component */}
      <Form header="Add Posts">
        {/* Form Fields */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Header
          </label>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Enter your header"
            onChange={setData}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Details
          </label>
          <textarea
            className="w-full border p-2 rounded-md"
            name="paragraph_text"
            cols="44"
            rows="5"
            placeholder="Enter ur post content"
            onChange={setData}
            required
          ></textarea>
        </div>

        {/* Additional form fields go here */}

        {/* Submit Button */}
        <div className="">
          <button className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={setData}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddPosts;
