import React from 'react';

type ProfileCoverProps = {
  coverImageUrl: string; // URL de la imagen de portada
  onEdit: () => void; // Manejador para cuando se clickea el botón de editar
}

const ProfileCover: React.FC<ProfileCoverProps> = ({ coverImageUrl, onEdit }) => {
  return (
    <div className="relative">
      {/* Background Cover Image */}
      <img
        className="w-full h-56 object-cover lg:h-72 xl:h-80 2xl:h-96"
        src={coverImageUrl}
        alt="Portada"
      />

      {/* Edit Button */}
      <button
        className="absolute bottom-4 right-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onEdit}
      >
        Editar foto de portada
      </button>
    </div>
  );
};

export default ProfileCover;
