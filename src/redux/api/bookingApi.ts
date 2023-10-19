import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BookingUrl = "/bookings";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    bookings: build.query({
      query: (arg?: Record<string, any>) => {
        return {
          url: BookingUrl,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    // get single
    booking: build.query({
      query: (id: string) => ({
        url: `${BookingUrl}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
    // create
    addBooking: build.mutation({
      query: (data) => ({
        url: BookingUrl,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    // update
    updateBooking: build.mutation({
      query: (data) => ({
        url: `${BookingUrl}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    // delete
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${BookingUrl}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useBookingsQuery,
  useBookingQuery,
  useAddBookingMutation,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
} = bookingApi;
