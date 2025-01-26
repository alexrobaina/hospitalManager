import imageNotFound from '../../assets/images/imageNotFound.png';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { BaseInput } from '../../components/BaseInput';
import { PlusIcon } from '../../components/icons';
import { CardSkeleton } from './components/CardSkeleton';
import { useState } from 'react';
import { User, useGetUsers } from '../../hooks/useGetUsers';
import { SearchIcon } from '../../components/icons';
import { EditPatientModal } from '../PatientPage/components/EditPatientModal';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { BaseButton } from '../../components/BaseButton';
import { CreatePatientModal } from '../PatientPage/components/CreatePatientModal';

export const DashboardPage = () => {
  const [initialData, setInitialData] = useState<User>({
    id: '',
    name: '',
    avatar: '',
    website: '',
    description: '',
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { data: users = [], isLoading, error } = useGetUsers(
    searchQuery,
    1,
    12
  );

  console.log(users);

  const { mutate: deleteUser } = useDeleteUser();

  const goToPatientPage = (id: string) => {
    navigate(`/patient/${id}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenCreateModal = (isCreateModalOpen: boolean) => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = imageNotFound;
  };

  const handleEdit = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setInitialData(
      users.find((user: User) => user.id === id) || {
        id: '',
        name: '',
        avatar: '',
        website: '',
        description: '',
      }
    );
    setIsEditModalOpen(true);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this patient?')) {
      deleteUser(id);
    }
  };

  if (error) return <div>Error loading patients</div>;

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Patients</h1>
          <p className="text-sm text-gray-500 mb-4">
            Search for a patient by name
          </p>
        </div>
        <BaseButton
          text="Add Patient"
          style="primary"
          icon={<PlusIcon className="w-5 h-5" color="#ffffff" />}
          onClick={() => handleOpenCreateModal(isCreateModalOpen)}
        />
      </div>

      <div className="flex py-4">
        <BaseInput
          label="Search Patient"
          placeholder="Enter patient name"
          onChange={handleInputChange}
          helperText="Type a patient's name to find their details."
          icon={<SearchIcon />}
        />
      </div>
      {isLoading && <CardSkeleton />}
      <div className="grid grid-cols-1 flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="cursor-pointer"
            onClick={() => goToPatientPage(user.id)}
          >
            <Card
              id={user.id}
              name={user.name}
              link={user.website}
              onEdit={handleEdit}
              avatar={user.avatar}
              onDelete={handleDelete}
              description={user.description}
              handleImageError={handleImageError}
            />
          </div>
        ))}
      </div>
      <EditPatientModal
        isOpen={isEditModalOpen}
        initialData={initialData}
        onClose={() => setIsEditModalOpen(false)}
      />
      <CreatePatientModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};
