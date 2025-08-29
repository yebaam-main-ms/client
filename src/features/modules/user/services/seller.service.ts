import { ISellerDocument } from "src/features/shared/interfaces/seller.interface";
import { IResponse } from "src/features/shared/interfaces/shared.interface";
import { api } from "src/features/store/api";

export const sellerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSellerByUsername: build.query<IResponse, string>({
      query: (username: string) => `seller/username/${username}`,
      providesTags: ['Seller']
    }),
    getSellerById: build.query<IResponse, string>({
      query: (sellerId: string) => `seller/id/${sellerId}`,
      providesTags: ['Seller']
    }),
    getRandomSellers: build.query<IResponse, string>({
      query: (size: string) => `seller/random/${size}`,
      providesTags: ['Seller']
    }),
    createSeller: build.mutation<IResponse, ISellerDocument>({
      query(body: ISellerDocument) {
        return {
          url: 'seller/create',
          method: 'POST',
          body
        };
      },
      invalidatesTags: ['Seller']
    }),
    updateSeller: build.mutation<IResponse, { sellerId: string; seller: ISellerDocument }>({
      query(body) {
        return {
          url: `seller/${body.sellerId}`,
          method: 'PUT',
          body: body.seller
        };
      },
      invalidatesTags: ['Seller']
    })
  })
});

export const {
  useGetSellerByUsernameQuery,
  useGetRandomSellersQuery,
  useGetSellerByIdQuery,
  useCreateSellerMutation,
  useUpdateSellerMutation
} = sellerApi;
