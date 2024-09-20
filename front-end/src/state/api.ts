import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export interface Project {
  id: number;
}
export interface Priority {
  id: number;
}

export interface Status {
  id: number;
}
export interface User {
  id: number;
}

export interface Attachment {
  id: number;
}
export interface Task {
  id: number;
}
export interface SearchResults {
  id: number;
}
export interface Team {
  id: number;
}
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({}),
});

export const {} = api;
