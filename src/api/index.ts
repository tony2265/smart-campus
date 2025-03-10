import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "firebase-api",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Cluster", "Poi", "User"],
  endpoints: () => ({}),
});

export default apiSlice;
