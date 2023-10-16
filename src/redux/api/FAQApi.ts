import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const FAQ_URL = "/faqs";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    FAQs: build.query({
      query: (arg?: Record<string, any>) => {
        return {
          url: FAQ_URL,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.faq],
    }),
    // get single
    FAQ: build.query({
      query: (id: string) => ({
        url: `${FAQ_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faq],
    }),
    // create
    addFAQ: build.mutation({
      query: (data) => ({
        url: FAQ_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    // update
    updateFAQ: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    // delete
    deleteFAQ: build.mutation({
      query: (id) => ({
        url: `${FAQ_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useFAQsQuery,
  useFAQQuery,
  useAddFAQMutation,
  useDeleteFAQMutation,
  useUpdateFAQMutation,
} = faqApi;
