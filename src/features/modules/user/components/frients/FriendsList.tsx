import React from 'react';

type Friend = {
  id: number;
  name: string;
  profileImageUrl: string;
}

type FriendsListProps = {
  friends: Friend[]; // Array de objetos 'Friend'
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
  return (
    <div className="flex space-x-4 overflow-auto py-2">
      {friends.map((friend) => (
        <div key={friend.id} className="flex flex-col items-center">
          {/* Friend Profile Image */}
          <img
            src={friend.profileImageUrl}
            alt={`Perfil de ${friend.name}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Friend Name */}
          <span className="text-xs text-center">{friend.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
