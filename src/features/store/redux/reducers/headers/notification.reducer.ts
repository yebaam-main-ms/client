import { createSlice, Slice } from '@reduxjs/toolkit';
import { IReduxNotification } from 'src/features/components/header/interfaces/header.interface';
import { INotification } from 'src/features/shared/interfaces';

const initialValue: INotification = {
  hasUnreadMessage: false,
  hasUnreadNotification: false,
  notificationId: '',
  type: 'message',
  initiatingUserId: '',
  targetUserId: '',
  linkedObjectId: '',
  // createdAt: undefined,
  isRead: false,
};

const notificationSlice: Slice = createSlice({
  name: 'notification',
  initialState: initialValue,
  reducers: {
    updateNotification: (state: INotification, action: IReduxNotification): INotification => {
      // state = { ...state, ...action.payload };
      return state;
    }
  }
});

export const { updateNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
