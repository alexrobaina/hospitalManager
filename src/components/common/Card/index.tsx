import { FC } from 'react';
import { EditIcon, DeleteIcon } from '../../../assets/icons';

interface CardProps {
  name: string;
  link: string;
  avatar: string;
  onEdit: (e: React.MouseEvent, id: string) => void;
  description: string;
  id: string;
  onDelete: (e: React.MouseEvent, id: string) => void;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Card: FC<CardProps> = ({
  id,
  link,
  name,
  avatar,
  onEdit,
  onDelete,
  description,
  handleImageError,
}) => {
  const handleEdit = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onEdit(e, id);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onDelete(e, id);
  };

  return (
    <div className="bg-white shadow-md min-w-[340px]rounded-lg p-4 min-h-[340px]">
      <img
        src={avatar}
        alt={name}
        onError={handleImageError}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="flex flex-col gap-2 mt-2 h-24">
        <p className="text-gray-600 line-clamp-4">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 w-[100px] hover:underline mt-2 block"
          >
            Visit Website
          </a>
        )}
        <div className="flex items-center gap-3">
          <div
            onClick={(e) => handleEdit(e, id)}
            className="z-10 flex items-center gap-2"
          >
            <EditIcon />
          </div>
          <div
            onClick={(e) => handleDelete(e, id)}
            className="z-10 flex items-center gap-2"
          >
            <DeleteIcon color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};
