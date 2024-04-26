import React from 'react';

interface ContactProps {
  name: string;
  imageUrl: string;
}

const Contact: React.FC<ContactProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center mb-2">
      <img src={imageUrl} alt={`Perfil de ${name}`} className="h-10 w-10 rounded-full object-cover mr-2" />
      <span>{name}</span>
    </div>
  );
};

interface ContactListProps {
  contacts: Array<ContactProps>;
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h5 className="font-bold mb-4">Contactos</h5>
      {contacts.map((contact, index) => (
        <Contact key={index} name={contact.name} imageUrl={contact.imageUrl} />
      ))}
    </div>
  );
};

export default ContactList;
