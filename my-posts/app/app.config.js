const config = {
  development: {
    apiUrl: "http://localhost:3002/api/viewPost", // Development API URL
    apiUrl2:
      "https://my-json-server.typicode.com/AravindCodesAllDay/FakeApi2/info", // Another API URL for development
  },
  production: {
    apiUrl: "http://localhost:3002/api/posts", // Production API URL
    apiUrl2:
      "https://my-json-server.typicode.com/AravindCodesAllDay/FakeApi2/info", // Another API URL for production
  },
};

export default config;
