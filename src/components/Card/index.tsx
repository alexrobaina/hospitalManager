import { FC } from 'react';
import { EditIcon, DeleteIcon } from '../../assets/icons';

interface CardProps {
  name: string;
  link: string;
  avatar: string;
  onEdit: (e: React.MouseEvent) => void;
  description: string;
  onDelete: (e: React.MouseEvent) => void;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Card: FC<CardProps> = ({
  link,
  name,
  avatar,
  onEdit,
  onDelete,
  description,
  handleImageError,
}) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit(e);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(e);
  };

  return (
    <div className="bg-white shadow-md w-[340px]rounded-lg p-4 min-h-[340px]">
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 block"
        >
          Visit Website
        </a>
        <div className="flex items-center gap-3">
          <div onClick={handleEdit} className="z-10 flex items-center gap-2">
            <img alt="edit" src={EditIcon} className="w-6 h-6 cursor-pointer" />
          </div>
          <div onClick={handleDelete} className="z-10 flex items-center gap-2">
            <img
              alt="delete"
              className="w-6 h-6 cursor-pointer"
              src={DeleteIcon}
              style={{
                filter:
                  'invert(20%) sepia(100%) saturate(6000%) hue-rotate(0deg)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
