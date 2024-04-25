import { FaImage, FaRegSmileBeam, FaVideo } from 'react-icons/fa';

const CreatePost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col space-y-3">
      <div className="flex items-center space-x-3">
        <img src="https://via.placeholder.com/50" alt="Perfil" className="rounded-full" />
        <input
          type="text"
          placeholder="¿Qué estás pensando, [Nombre]?"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          aria-label="Crear publicación"
        />
      </div>
      <div className="flex justify-between">
        <button className="flex items-center justify-center px-3 py-2 text-red-600 bg-red-100 rounded-full focus:outline-none">
          <FaVideo className="text-red-500" />
          <span className="ml-2">Video en vivo</span>
        </button>
        <button className="flex items-center justify-center px-3 py-2 text-green-600 bg-green-100 rounded-full focus:outline-none">
          <FaImage className="text-green-500" />
          <span className="ml-2">Foto/video</span>
        </button>
        <button className="flex items-center justify-center px-3 py-2 text-yellow-600 bg-yellow-100 rounded-full focus:outline-none">
          <FaRegSmileBeam className="text-yellow-500" />
          <span className="ml-2">Sentimiento/actividad</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
