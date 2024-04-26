import React from 'react';
import { FaUserFriends } from 'react-icons/fa'; // Ícono de amigos en común

interface FriendRequestCardProps {
  userName: string;
  mutualFriendsCount: number;
  userImageUrl: string;
}

const FriendRequestCard: React.FC<FriendRequestCardProps> = ({ userName, mutualFriendsCount, userImageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
      <div className="flex items-center w-full mb-4">
        <img
          src={userImageUrl}
          alt={userName}
          className="rounded-full h-16 w-16 object-cover mr-4" // Tamaño ajustado a 16x16 para coincidir con la imagen de referencia
        />
        <div className="flex flex-col">
          <h5 className="font-bold">{userName}</h5>
          <div className="flex items-center text-sm text-gray-600">
            <FaUserFriends className="text-gray-500 mr-1" />
            {mutualFriendsCount} amigos en común
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <button className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-sm">Confirmar</button>
        <button className="text-gray-700 bg-transparent hover:bg-gray-100 px-6 py-2 rounded text-sm">Eliminar</button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
