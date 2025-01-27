import { motion } from 'framer-motion';
import { User } from '../../../../hooks/useGetUsers';
import { Card } from '../../../../components/common/Card';

export const PatientList = ({
  users,
  onEdit,
  onDelete,
  onImageError,
  onPatientClick,
}: {
  users: User[];
  onEdit: (e: React.MouseEvent, id: string) => void;
  onDelete: (e: React.MouseEvent, id: string) => void;
  onImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onPatientClick: (id: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-1 flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
  >
    {users.map((user: User) => (
      <div
        key={user.id}
        className="cursor-pointer"
        onClick={() => onPatientClick(`/patient/${user.id}`)}
      >
        <Card
          id={user.id}
          name={user.name}
          link={user.website}
          onEdit={onEdit}
          avatar={user.avatar}
          onDelete={onDelete}
          description={user.description}
          handleImageError={onImageError}
        />
      </div>
    ))}
  </motion.div>
);
