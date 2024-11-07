import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ContactCardProps {
    avatar?: StaticImageData; // URL de l'image d'avatar
    initials?: string; // Garder cette option si jamais l'image n'est pas disponible
    name: string;
    position: string;
    email: string;
    phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ avatar, initials, name, position, email, phone }) => {
    return (
        <div className="flex items-center flex-col md:flex-row mx-auto space-x-4 bg-gray-900 p-4 rounded-md shadow-md max-w-md">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full overflow-hidden m-4 md:m-0">
                {avatar ? (
                    <Image src={avatar} alt={`${name} avatar`} width={64} height={64} className="rounded-full" />
                ) : (
                    <span className="text-[#00fefb] font-bold text-lg">{initials}</span>
                )}
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
