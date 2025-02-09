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
    // getFavorites: builder.query({
    //   query: () => ({
    //     url: "teachers.json",
    //   }),
    // }),
    // postFavoriteTeachers: builder.mutation({
    //   query: (data) => ({ url: "favorites.json", method: "POST", data }),
    // }),
    // deleteFavoriteTeachers: builder.mutation({
    //   query: (id) => ({
    //     url: `favorites.json?orderBy='$value'&favorite=${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useGetTeachersQuery,
  usePostFavoriteTeachersMutation,
  useDeleteFavoriteTeachersMutation,
} = teachersApi;
