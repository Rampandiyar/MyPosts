// pages/index.js
import React from "react";
import PostCard from "./PostCard";
import PostTitleBar from "./PostTitleBar";
import config from "../app.config";

async function getData() {
  const apiUrl = config[process.env.NODE_ENV].apiUrl;
  const res = await fetch(apiUrl);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function ViewPosts() {
  const data = await getData();

  return (
    <>
      <PostTitleBar />
      {data.customers.map((values) => (
        <div key={values._id} className="bg-gray-200 mb-8">
          <PostCard title={values.header}>
            <p className="text-gray-600">{values.detail}</p>
          </PostCard>
        </div>
      ))}
    </>
  );
}

export default ViewPosts;
