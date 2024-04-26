import { IResponse } from "src/features/shared/interfaces/shared.interface";
import { api } from "src/features/store/api";

export const buyerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentBuyerByUsername: build.query<IResponse, void>({
      query: () => 'buyer/username',
      providesTags: ['Buyer']
    }),
    getBuyerByUsername: build.query<IResponse, string>({
      query: (username: string) => `buyer/${username}`,
      providesTags: ['Buyer']
    }),
    getBuyerByEmail: build.query<IResponse, void>({
      query: () => 'buyer/email',
      providesTags: ['Buyer']
    })
  })
});

export const { useGetCurrentBuyerByUsernameQuery, useGetBuyerByUsernameQuery, useGetBuyerByEmailQuery } = buyerApi;
