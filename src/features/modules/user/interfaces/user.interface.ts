export interface IUserDocument {
  _id?: string;
  username?: string;
  email?: string;
  profilePicture?: string;
  country: string;
  info: string;
  isSeller?: boolean;
  isUser?: boolean;
  purchasedGigs: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IReduxBuyer {
  type?: string;
  payload: IUserDocument;
}
