import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosSettings";

export const teachersApi = createApi({
  reducerPath: "teachers",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["teachers"],
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => ({
        url: "teachers.json",
      }),
    }),
    postFavoriteTeachers: builder.mutation({
      query: (data) => ({ url: "favorites.json", method: "POST", data }),
    }),
  }),
});

export const { useGetTeachersQuery, usePostFavoriteTeachersMutation } =
  teachersApi;
