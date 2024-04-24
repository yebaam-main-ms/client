import { IAuthUser } from "..";

export interface IReduxState {
  authUser: IAuthUser;
  header: object;
  logout: object;

  userProfile: object;
  friendsList: object;
  friendRequests: object;
  posts: object;
  messages: object;
  unreadMessagesCount: number;
  notifications: object;
  comments: object; // Comentarios en publicaciones
  reactions: object; // Reacciones a elementos como publicaciones y comentarios
  events: object; // Eventos creados por los usuarios
  groups: object; // Grupos de usuarios
  media: object; // Archivos multimedia
  stories: object; // Historias temporales
  privacySettings: object; // Configuraciones de privacidad
  securityLogs: object; // Registros de seguridad
  ads: object; // Gestión de publicidad
  subscriptions: object; // Suscripciones y servicios premium
  // uiPreferences: IUIPreferences; // Preferencias de la interfaz de usuario
  // theme: 'light' | 'dark'; // Tema de la interfaz
  language: string; // Idioma de la interfaz
  layoutPreferences: object; // Preferencias de diseño específicas
  isLoading: boolean; // Indicador de carga de la aplicación
  error: string | null; // Manejo de errores globales

  buyer: object;
  seller: object;
  showCategoryContainer: boolean;
}
