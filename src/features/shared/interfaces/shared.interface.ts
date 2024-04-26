/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { CSSProperties, ChangeEvent, ReactNode } from 'react';
import { IBuyerDocument } from 'src/features/components/header/interfaces/header.interface';
import { ISignInPayload, ISignUpPayload, IResetPassword, IAuthResponse, IAuthDocument, IOrderDocument, IOrderNotifcation, IReviewDocument } from 'src/features/store';
import { ISellerGig } from './gig.interface';
import { ISellerDocument } from './seller.interface';

export type validationErrorsType =
  | ISignInPayload
  | ISignUpPayload
  | IResetPassword
  | 'ICreateGig'
  | 'IPersonalInfoData'
  | 'IExperience'
  | 'IEducation'
  | 'ILanguage';

export interface IQueryResponse {
  data: IAuthResponse;
  error: FetchBaseQueryError | SerializedError;
}

export interface IResponse {
  message?: string;
  friend?: string;
  token?: string;
  user?: IAuthDocument;
  buyer?: IBuyerDocument;
  seller?: ISellerDocument;
  sellers?: ISellerDocument[];
  gig?: ISellerGig;
  gigs?: ISellerGig[];
  total?: number;
  sortItems?: string[];
  // conversations?: IConversationDocument[] | IMessageDocument[];
  // messages?: IMessageDocument[];
  // messageData?: IMessageDocument;
  conversationId?: string;
  clientSecret?: string;
  paymentIntentId?: string;
  order?: IOrderDocument;
  orders?: IOrderDocument[];
  review?: IReviewDocument;
  reviews?: IReviewDocument[];
  notifications?: IOrderNotifcation[];
  
}

export interface IBannerProps {
  bgColor: string;
  text: string;
  showLink: boolean;
  linkText?: string;
  onClick?: () => void;
}

export interface IAlertProps {
  type: string;
  message: string;
}

export interface IAlertTypes {
  [key: string]: string;
  success: string;
  error: string;
  warning: string;
}

export interface IBreadCrumbProps {
  breadCrumbItems: string[];
}

export interface IDropdownProps {
  text: string;
  values: string[];
  maxHeight: string;
  mainClassNames?: string;
  dropdownClassNames?: string;
  showSearchInput?: boolean;
  style?: CSSProperties;
  setValue?: Dispatch<any>;
  onClick?: (item: string) => void;
}

export interface IHtmlParserProps {
  input: string;
}

export interface IPageMessageProps {
  header: string;
  body: string;
}

export interface ITextInputProps {
  id?: string;
  name?: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  readOnly?: boolean;
  checked?: boolean;
  rows?: number;
  autoFocus?: boolean;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  onChange?: (event: ChangeEvent) => void;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyUp?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export interface IButtonProps {
  label?: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  id?: string;
  className?: string;
  role?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event?: any) => void;
  disabled?: boolean;
  testId?: string;
}

export interface ISliderImagesText {
  header: string;
  subHeader: string;
}

export interface IStarRatingProps {
  value?: number;
  size?: number;
  setReviewRating?: Dispatch<any>;
}

export interface IGigCardItemModal {
  overlay: boolean;
  deleteApproval: boolean;
}

export interface IUserProfile {
  userId: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  location?: string;
  socialLinks?: ISocialLink[];
}

export interface ISocialLink {
  platform: string;
  url: string;
}

export interface IUserRole {
  role: string;
  permissions: string[];
}

export interface IUserPreferences {
  theme: 'light' | 'dark';
  notificationSettings: {
    email: boolean;
    push: boolean;
  };
}

export interface IPost {
  postId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: IComment[];
}

export interface IComment {
  commentId: string;
  authorId: string;
  content: string;
  createdAt: Date;
}
