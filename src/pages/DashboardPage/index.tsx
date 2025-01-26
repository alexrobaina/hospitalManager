import { motion } from 'framer-motion';
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
import { Pagination } from '../../components/Pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetUsers(searchQuery, currentPage, 12);

  const { mutate: deleteUser } = useDeleteUser();

  const goToPatientPage = (id: string) => {
    navigate(`/patient/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
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
      data?.users.find((user: User) => user.id === id) || {
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

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">Patients</h1>
          <p className="text-sm text-gray-500 mb-4">
            Search for a patient by name
          </p>
        </div>
        <BaseButton
          text="Add Patient"
          icon={<PlusIcon className="w-5 h-5" />}
          onClick={() => handleOpenCreateModal(isCreateModalOpen)}
        />
      </div>
      <div className="flex py-4">
        <BaseInput
          label="Search Patient"
          onChange={handleSearchChange}
          placeholder="Enter patient name"
          helperText="Type a patient's name to find their details."
          icon={<SearchIcon className="w-5 h-5" />}
        />
      </div>

      {isLoading && <CardSkeleton />}

      {error && (
        <div className="flex flex-col w-full mt-[40%] sm:mt-[30%] md:mt-[20%] lg:mt-[15%] gap-4 justify-center items-center">
          <div className="text-black text-base font-medium">
            We cant find any patients with this name
          </div>
          <BaseButton
            text="Create Patient"
            onClick={() => setIsCreateModalOpen(true)}
          />
        </div>
      )}
      {data?.users && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"
          >
            {data?.users.map((user: User) => (
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
          </motion.div>
          <Pagination
            take={12}
            total={data?.total}
            page={currentPage}
            setPage={setCurrentPage}
          />
        </>
      )}
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
