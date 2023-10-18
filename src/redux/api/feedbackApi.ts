import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const feedbackURL = "/feedbacks";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    feedbacks: build.query({
      query: (arg?: Record<string, any>) => {
        return {
          url: feedbackURL,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
    // get single
    feedback: build.query({
      query: (id: string) => ({
        url: `${feedbackURL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.feedback],
    }),
    // create
    addFeedback: build.mutation({
      query: (data) => ({
        url: feedbackURL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    // update
    updateFeedback: build.mutation({
      query: (data) => ({
        url: `${feedbackURL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    // delete
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${feedbackURL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useFeedbacksQuery,
  useFeedbackQuery,
  useAddFeedbackMutation,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
} = feedbackApi;
