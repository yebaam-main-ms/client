import FriendRequestCard from "src/features/modules/friend/FriendRequestCard";
import PageAndProfilesCard from "src/features/modules/pages/professional/PageAndProfilesCard";
import AdCard from "../advertising/Publicidad";
import ContactList from "../suggestions/Suggestions";


const SidebarRight = () => {
  const contacts = [
    { name: 'Blanca Marlenis Moreno Potes', imageUrl: 'https://via.placeholder.com/40' },
    { name: 'Jim Oliver Cano', imageUrl: 'https://via.placeholder.com/40' },
    { name: 'Darlintón Lozano', imageUrl: 'https://via.placeholder.com/40' },
    { name: 'Kenny Potes', imageUrl: 'https://via.placeholder.com/40' },
    { name: 'Lady Johana', imageUrl: 'https://via.placeholder.com/40' }
  ];

  return (
    <div className="bg-gray-100 p-4 space-y-4">
      <AdCard
        imageUrl="https://via.placeholder.com/300x200"
        title="Producto Increíble"
        description="Descubre las maravillas de este producto."
      />
      <PageAndProfilesCard profileName="Thanatos" />
      <FriendRequestCard userName="Sushma Daggumalla" mutualFriendsCount={1} userImageUrl="https://via.placeholder.com/150" />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default SidebarRight;
