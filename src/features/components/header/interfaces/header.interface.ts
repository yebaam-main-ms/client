import { Dispatch, SetStateAction } from 'react';

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


export interface IHomeHeaderProps {
  buyer?: string;
  seller?: string;
  authUser?: string;
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
