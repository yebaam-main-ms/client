import { FaUserFriends, FaUsers, FaImages, FaPhotoVideo, FaBuilding } from 'react-icons/fa'; // Importación de íconos necesarios
import { Link } from 'react-router-dom'; // Importación del componente Link para navegación interna

const SidebarLeft = () => {
  // URL de la imagen de perfil (reemplazar con la URL real según sea necesario)
  const userProfileImageUrl = 'https://via.placeholder.com/150';

  return (
    <div className="bg-gray-100 p-4 cursor-pointer">
      <div className="flex items-center space-x-4 p-2">
        <img src={userProfileImageUrl} alt="Profile" className="h-10 w-10 rounded-full" />
        <span>Profile</span>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <Link to="/amigos">
            <FaUserFriends className="text-xl" /> {/* Ícono para Amigos */}
          </Link>
          <span>Amigos</span>
        </li>
        <li className="flex items-center space-x-2">
          <Link to="/groups">
            <FaUsers className="text-xl" /> {/* Ícono para Grupos */}
          </Link>
          <span>Groups</span>
        </li>
        <li className="flex items-center space-x-2">
          <Link to="/albums">
            <FaImages className="text-xl" /> {/* Ícono para Álbumes */}
          </Link>
          <span>Álbumes</span>
        </li>
        <li className="flex items-center space-x-2">
          <Link to="/fotos">
            <FaPhotoVideo className="text-xl" /> {/* Ícono para Fotos */}
          </Link>
          <span>Fotos</span>
        </li>
        <li className="flex items-center space-x-2">
          <Link to="/comunidad">
            <FaBuilding className="text-xl" /> {/* Ícono para Comunidad */}
          </Link>
          <span>Comunidad</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
