import React from 'react';

type ProfilePictureProps = {
  imageUrl: string; // URL de la imagen del perfil
  altText?: string; // Texto alternativo para la imagen
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  imageUrl,
  altText = 'Imagen de perfil'
}) => {
  return (
    <div className="relative rounded-full overflow-hidden w-32 h-32 border-4 border-white shadow-lg">
      {/* Profile Image */}
      <img
        src={imageUrl}
        alt={altText}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ProfilePicture;
