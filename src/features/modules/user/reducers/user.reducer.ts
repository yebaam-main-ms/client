import { createSlice, Slice } from '@reduxjs/toolkit';
import { IReduxBuyer, IUserDocument } from '../interfaces/user.interface';
import { emptyBuyerData } from 'src/features/shared/utils/static-data';


const initialValue: IUserDocument = emptyBuyerData;

const userSlice: Slice = createSlice({
  name: 'user',
  initialState: initialValue,
  reducers: {
    addUser: (state: IUserDocument, action: IReduxBuyer): IUserDocument => {
      state = { ...action.payload };
      return state;
    },
    emptyBuyer: (): IUserDocument => {
      return emptyBuyerData;
    }
  }
});

export const { addBuyer, emptyBuyer } = userSlice.actions;
export default userSlice.reducer;
