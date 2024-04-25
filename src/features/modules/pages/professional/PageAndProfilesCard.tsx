import React, { useState } from 'react';
import { MdSwitchAccount, MdOutlineLocalOffer, MdMoreHoriz } from 'react-icons/md'; // Importa los íconos necesarios

interface PageAndProfilesCardProps {
  profileName: string;
}

const PageAndProfilesCard: React.FC<PageAndProfilesCardProps> = ({ profileName }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-bold">Tus páginas y perfiles</h5>
        <button onClick={() => setShowOptions(!showOptions)}>
          <MdMoreHoriz className="text-2xl" />
        </button>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-gray-300 p-2 mr-2 rounded-full text-white">T</div>
        <span>{profileName}</span>
      </div>
      {showOptions && (
        <div className="absolute right-0 w-48 bg-white border rounded shadow-lg z-10">
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <MdSwitchAccount className="mr-2" /> Cambiar a página
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <MdOutlineLocalOffer className="mr-2" /> Crear promoción
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageAndProfilesCard;
