import { FC } from 'react';

interface CardProps {
  avatar: string;
  name: string;
  description: string;
  link: string;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Card: FC<CardProps> = ({
  avatar,
  name,
  description,
  link,
  handleImageError,
}) => {
  return (
    <div className="bg-white shadow-md w-[340px]rounded-lg p-4 min-h-[340px]">
      <img
        src={avatar}
        alt={name}
        className="w-full h-32 object-cover rounded-md mb-4"
        onError={handleImageError}
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-gray-600 line-clamp-4">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2 block"
      >
        Visit Website
      </a>
    </div>
  );
};
