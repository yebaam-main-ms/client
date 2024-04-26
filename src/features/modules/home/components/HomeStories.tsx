import React, { useRef } from 'react';
import { FaChevronRight, FaPlus } from 'react-icons/fa';

interface StoryProps {
  imageUrl: string;
  userImageUrl?: string; // Añadir propiedad opcional para la imagen del usuario
  title: string;
  isAddStory?: boolean; // Opcional para identificar si es el botón de agregar historia
}

// Componente para una historia individual o el botón de agregar historia
const Story: React.FC<StoryProps> = ({ imageUrl, userImageUrl, title, isAddStory }) => {
  return (
    <div
      className={`relative w-32 h-56 rounded-lg overflow-hidden mr-2 ${isAddStory ? 'bg-blue-100' : 'bg-cover bg-center'}`}
      style={{ backgroundImage: isAddStory ? '' : `url(${imageUrl})` }}
    >
      {isAddStory ? (
        <>
          <FaPlus className="text-blue-500 text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <span className="absolute bottom-0 p-2 w-full text-center font-bold text-blue-500">{title}</span>
        </>
      ) : (
        <>
          {userImageUrl && (
            <img
              src={userImageUrl}
              alt={`Perfil de ${title}`}
              className="h-10 w-10 rounded-full border-2 border-white absolute top-2 left-2"
            />
          )}
          <span className="absolute bottom-0 p-2 bg-black bg-opacity-50 w-full text-center text-white truncate">{title}</span>
        </>
      )}
    </div>
  );
};

const HomeStories: React.FC = () => {
  const storiesRef = useRef<HTMLDivElement>(null);

  // Función para desplazar las historias
  const scroll = (offset: number) => {
    if (storiesRef.current) {
      storiesRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden p-4 space-x-2">
      <div ref={storiesRef} className="flex">
        {/* Botón para agregar una nueva historia */}
        <Story imageUrl="" title="Crear historia" isAddStory />

        {/* Historias existentes */}
        <Story imageUrl="https://via.placeholder.com/100x150" userImageUrl="https://via.placeholder.com/40" title="Alexis Córdoba" />
        <Story imageUrl="https://via.placeholder.com/100x150" userImageUrl="https://via.placeholder.com/40" title="Yariz Rivas" />
        <Story imageUrl="https://via.placeholder.com/100x150" userImageUrl="https://via.placeholder.com/40" title="Raul Morales" />
        <Story imageUrl="https://via.placeholder.com/100x150" userImageUrl="https://via.placeholder.com/40" title="Raul Morales" />

        {/* Puede haber más historias aquí */}
      </div>

      {/* Botón de desplazamiento absoluto sobre la imagen */}
      <button onClick={() => scroll(150)} className="absolute right-0 h-full flex items-center justify-center z-10">
        <FaChevronRight className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default HomeStories;
