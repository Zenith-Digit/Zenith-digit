import React from 'react';

interface ContactCardProps {
    initials: string;
    name: string;
    position: string;
    email: string;
    phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ initials, name, position, email, phone }) => {
    return (
        <div className="flex items-center sm:flex-col md:flex-row mx-auto space-x-4 bg-gray-900 p-4 rounded-md shadow-md max-w-md">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                {/* Avatar ou  tu peux mettre les images comme tu as dit qu'ils seront importés */}
                <span className="text-[#00fefb] font-bold text-lg">{initials}</span>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col">
                <span className="text-[#00fefb] font-bold text-lg">{name}</span>
                <span className="text-gray-300 text-sm">{position}</span>
                <span className="text-gray-300 text-sm">{email}</span>
                <span className="text-gray-300 text-sm">{phone}</span>
            </div>
        </div>
    );
};

export default ContactCard;
