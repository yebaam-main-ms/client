// Datos de prueba
const userData = {
  id: '1',
  name: 'John Doe',
  profilePicture: 'path_to_image',
  bio: 'Hello, this is my bio'
};

const friendsListData = [
  { id: '2', name: 'Jane Doe', profilePicture: 'path_to_image' },
  { id: '3', name: 'Alice Smith', profilePicture: 'path_to_image' }
];

const notificationsData = [
  { id: '1', type: 'friend_request', message: 'Jane Doe sent you a friend request' },
  { id: '2', type: 'message', message: 'Alice Smith sent you a message' }
];

const themeData = {
  currentTheme: 'dark'
};

// Simular la obtención del perfil del usuario
export const fetchUserProfile = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(userData), 500)); // Simula retardo de red
};

// Simular la obtención de la lista de amigos
export const fetchFriendsList = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(friendsListData), 500)); // Simula retardo de red
};

// Simular la obtención de notificaciones
export const fetchNotifications = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(notificationsData), 500)); // Simula retardo de red
};

// Simular la obtención del tema actual
export const fetchTheme = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(themeData), 500)); // Simula retardo de red
};
