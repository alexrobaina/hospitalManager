import imageNotFound from '../../assets/images/imageNotFound.png';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { BaseInput } from '../../components/BaseInput';
import { CardSkeleton } from './components/CardSkeleton';
import { useState } from 'react';
import { User, useGetUsers } from '../../hooks/useGetUsers';
import { SearchIcon } from '../../assets/icons';
import { EditPatientModal } from '../PatientPage/components/EditPatientModal';

export const DashboardPage = () => {
  const [initialData, setInitialData] = useState<User>({
    id: '',
    name: '',
    avatar: '',
    website: '',
    description: '',
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { data: users = [], isLoading, error } = useGetUsers(
    searchQuery,
    1,
    12
  );

  const goToPatientPage = (id: string) => {
    navigate(`/patient/${id}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = imageNotFound;
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    setInitialData(
      users.find((user) => user.id === id) || {
        id: '',
        name: '',
        avatar: '',
        website: '',
        description: '',
      }
    );
    setIsEditModalOpen(true);
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();
    console.log('delete', id);
  };

  if (error) return <div>Error loading patients</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <p className="text-sm text-gray-500 mb-4">Search for a patient by name</p>
      <div className="flex py-4">
        <BaseInput
          label="Search Patient"
          placeholder="Enter patient name"
          onChange={handleInputChange}
          helperText="Type a patient's name to find their details."
          icon={<img src={SearchIcon} alt="search" className="w-5 h-5" />}
        />
      </div>
      {isLoading && <CardSkeleton />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user: User) => (
          <div
            className="cursor-pointer"
            onClick={() => goToPatientPage(user.id)}
            key={user.id}
          >
            <Card
              name={user.name}
              link={user.website}
              avatar={user.avatar}
              description={user.description}
              handleImageError={handleImageError}
              onEdit={(e) => handleEdit(e, user.id)}
              onDelete={(e) => handleDelete(e, user.id)}
            />
          </div>
        ))}
      </div>
      <EditPatientModal
        isOpen={isEditModalOpen}
        initialData={initialData}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
};
