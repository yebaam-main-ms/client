import React, { useState } from 'react';
import { MdMoreVert } from 'react-icons/md'; // MdMoreVert es un ícono de tres puntos verticales

interface AdCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const AdCard: React.FC<AdCardProps> = ({ imageUrl, title, description }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative p-4 bg-white rounded-lg shadow">
      <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-lg" />
      <div className="mt-2">
        <h5 className="font-bold">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button className="absolute top-2 right-2 text-lg" onClick={() => setShowOptions(!showOptions)}>
        <MdMoreVert />
      </button>
      {showOptions && (
        <div className="absolute top-10 right-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ocultar anuncio</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reportar anuncio</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">¿Por qué veo este anuncio?</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdCard;
