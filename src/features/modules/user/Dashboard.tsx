import { FC, ReactElement } from "react";
import ProfileCover from "./components/info/ProfileCover";

// Asumiendo que estos datos vendrían de alguna parte de tu aplicación
const profileInfo = {
  coverImageUrl: "https://wpkixx.com/html/socimo/images/resources/profile-banner.jpg",
  // ... otros datos ...
};

const Dashboard: FC = (): ReactElement => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ProfileCover
        coverImageUrl={profileInfo.coverImageUrl}
        onEdit={() => console.log('Editar portada')}
      />
    </div>
  );
};

export default Dashboard;
