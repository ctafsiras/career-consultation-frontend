import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICES_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    services: build.query({
      query: (arg?: Record<string, any>) => {
        return {
          url: SERVICES_URL,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.service],
    }),
    // get single
    service: build.query({
      query: (id: string) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    // create
    addService: build.mutation({
      query: (data) => ({
        url: SERVICES_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // update
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // delete
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useServicesQuery,
  useServiceQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;
