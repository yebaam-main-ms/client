// import { Link } from "react-router-dom";

const HomeSuggetionCommunity = () => {
  // Lista de ciudades
  const cities = [
    { name: "Medellín", imgSrc: "https://th.bing.com/th/id/OIP.gA2sxgCN7E_F9gwDFWEUugHaHa?rs=1&pid=ImgDetMain", description: "Sabor de la caña" },
    { name: "Bogotá", imgSrc: "https://th.bing.com/th/id/R.d6d5a6346aa3054b4d6722c0a54efa3d?rik=rJC%2fvWqI3cOjnA&pid=ImgRaw&r=0", description: "Capital del país" },
    { name: "Cali", imgSrc: "https://th.bing.com/th/id/R.9498b80a34e37b8d4556c88dfb15b608?rik=ZmcnvFk2sNb%2bzQ&pid=ImgRaw&r=0", description: "Capital de la salsa" },
    { name: "Cartagena", imgSrc: "https://placehold.co/330x220?text=Cartagena", description: "Ciudad histórica" }
  ];

  return (
    <div className="mx-auto my-8 flex flex-col w-full cursor-pointer">
      <div className="flex w-full flex-col justify-between self-center">
        <h2 className="flex self-center text-base font-bold md:text-2xl lg:text-3xl">
          Comunidades
        </h2>
      </div>
      <div className="mt-6">
        <div className="grid gap-8 pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="w-full rounded-lg border border-grey bg-white shadow"
            >
              <div className="flex flex-col items-center pb-10 pt-5">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={city.imgSrc}
                  alt={`Profile image of ${city.name}`}
                />
                <h5 className="mb-1 xl:text-xl font-medium text-gray-900 ">
                  {city.name}
                </h5>
                <span className="text-sm w-[90%] mb-1 text-gray-500 text-center dark:text-gray-500">
                  {city.description}
                </span>
                <div className="flex justify-center w-full gap-x-1 self-center h-6">
                  <div className="mt-1 w-20 gap-x-2">
                    {/* Botones o links podrían ir aquí */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSuggetionCommunity;
