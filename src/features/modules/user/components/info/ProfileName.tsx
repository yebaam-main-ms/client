import React from 'react';

type ProfileNameProps = {
  name: string; // Nombre del usuario
  friendCount: number; // Cantidad de amigos
}

const ProfileName: React.FC<ProfileNameProps> = ({ name, friendCount }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Nombre del Usuario */}
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

      {/* Conteo de Amigos */}
      <span className="text-sm text-gray-600">{friendCount} amigos</span>
    </div>
  );
};

export default ProfileName;
