import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BLOG_URL = "/blogs";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    blogs: build.query({
      query: (arg?: Record<string, any>) => {
        return {
          url: BLOG_URL,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.blog],
    }),
    // get single
    blog: build.query({
      query: (id: string) => ({
        url: `${BLOG_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    // create
    addBlog: build.mutation({
      query: (data) => ({
        url: BLOG_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    // update
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    // delete
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOG_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useBlogsQuery,
  useBlogQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = newsApi;
