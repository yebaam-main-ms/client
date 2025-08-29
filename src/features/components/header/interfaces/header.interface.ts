import { Dispatch, SetStateAction } from 'react';
import { ISellerGig } from 'src/features/shared/interfaces/gig.interface';
import { SellerType, ILanguage, IExperience, IEducation, ICertificate } from 'src/features/shared/interfaces/seller.interface';
import { IAuthUser, IRatingCategories } from 'src/features/store';

export interface IReduxHeader {
  type: string;
  payload: string;
}

export interface IReduxShowCategory {
  type: string;
  payload: boolean;
}

export interface IReduxNotification {
  type?: string;
  payload: string;
}

export interface IHomeProps {
  gigs: ISellerGig[];
  title: string;
  subTitle?: string;
  category?: string;
}


export interface IHomeHeaderProps {
  buyer?: IBuyerDocument;
  seller?: ISellerDocument;
  authUser?: IAuthUser;
  type?: string;
  isAuthenticated?: boolean;  // Si el usuario está autenticado
  theme?: 'light' | 'dark';  // Tema actual de la interfaz
  showCategoryContainer?: boolean;
  setIsDropdownOpen?: Dispatch<SetStateAction<boolean>>;
  setIsOrderDropdownOpen?: Dispatch<SetStateAction<boolean>>;
  setIsMessageDropdownOpen?: Dispatch<SetStateAction<boolean>>;
  setIsNotificationDropdownOpen?: Dispatch<SetStateAction<boolean>>;
  setIsProfileModalOpen?: Dispatch<SetStateAction<boolean>>; // Para abrir el modal de perfil
  setIsFriendRequestDropdownOpen?: Dispatch<SetStateAction<boolean>>; // Para controlar la visibilidad del dropdown de solicitudes de amistad
  logoutUser?: () => void;  // Función para manejar el logout del usuario
}

export interface IHeaderSideBarProps {
  setShowRegisterModal?: Dispatch<SetStateAction<IHeaderModalProps>>;
  setShowLoginModal?: Dispatch<SetStateAction<IHeaderModalProps>>;
  setOpenSidebar?: Dispatch<SetStateAction<boolean>>;
}

export interface IHeader {
  navClass: string;
}

export interface ISettings {
  id: number;
  name: string;
  url: string;
  show: boolean;
}

export interface IHeaderModalProps {
  login: boolean;
  register: boolean;
  forgotPassword: boolean;
}


export interface IBuyerDocument {
  _id?: string;
  username?: string;
  email?: string;
  profilePicture?: string;
  country: string;
  isSeller?: boolean;
  purchasedGigs: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IReduxBuyer {
  type?: string;
  payload: IBuyerDocument;
}



export interface ISellerDocument extends Record<string, SellerType> {
  _id?: string;
  profilePublicId?: string;
  fullName: string;
  username?: string;
  email?: string;
  profilePicture?: string;
  description: string;
  country: string;
  oneliner: string;
  skills: string[];
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  languages: ILanguage[];
  responseTime: number;
  recentDelivery?: Date | string;
  experience: IExperience[];
  education: IEducation[];
  socialLinks: string[];
  certificates: ICertificate[];
  ongoingJobs?: number;
  completedJobs?: number;
  cancelledJobs?: number;
  totalEarnings?: number;
  totalGigs?: number;
  paypal?: string; // not needed
  createdAt?: Date | string;
}
