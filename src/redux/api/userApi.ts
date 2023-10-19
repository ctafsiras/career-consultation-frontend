import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    users: build.query({
      query: (arg?: Record<string, any>) => ({
        url: USER_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.user],
    }),
    // get single
    user: build.query({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    userProfile: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    // create
    addUser: build.mutation({
      query: (data) => ({
        url: USER_URL + "/signup",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: USER_URL + "/login",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // update
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // delete
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUsersQuery,
  useUserQuery,
  useUserProfileQuery,
  useAddUserMutation,
  useLoginUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;
