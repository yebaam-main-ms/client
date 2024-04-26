import { createSlice, Slice } from '@reduxjs/toolkit';
import { IBuyerDocument } from 'src/features/components/header/interfaces/header.interface';
import { emptyBuyerData } from 'src/features/shared/utils/static-data';
import { IReduxBuyer } from '../interfaces/user.interface';


const initialValue: IBuyerDocument = emptyBuyerData;

const buyerSlice: Slice = createSlice({
  name: 'user',
  initialState: initialValue,
  reducers: {
    addBuyer: (state: IBuyerDocument, action: IReduxBuyer): IBuyerDocument => {
      state = { ...action.payload };
      return state;
    },
    emptyBuyer: (): IBuyerDocument => {
      return emptyBuyerData;
    }
  }
});

export const { addBuyer, emptyBuyer } = buyerSlice.actions;
export default buyerSlice.reducer;
