import { FaUserFriends, FaUsers } from 'react-icons/fa'; // Importa los íconos que necesitas

const SidebarLeft = () => {
  // URL de la imagen de perfil (reemplazar con la URL real según sea necesario)
  const userProfileImageUrl = 'https://via.placeholder.com/150';

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center space-x-4 p-2">
        <img src={userProfileImageUrl} alt="Profile" className="h-10 w-10 rounded-full" />
        <span>Profile</span>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <FaUserFriends className="text-xl" /> {/* Ícono para Friends */}
          <span>Amigos</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers className="text-xl" /> {/* Ícono para Groups */}
          <span>Groups</span>
        </li>

        <li className="flex items-center space-x-2">
          <FaUsers className="text-xl" /> {/* Ícono para Groups */}
          <span>Albunes</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers className="text-xl" /> {/* Ícono para Groups */}
          <span>Fotos</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers className="text-xl" /> {/* Ícono para Groups */}
          <span>Groups</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers className="text-xl" /> {/* Ícono para Groups */}
          <span>Comunidad</span>
        </li>
   
      </ul>
    </div>
  );
};

export default SidebarLeft;
