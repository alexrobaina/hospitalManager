import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageNotFound from '../../assets/images/imageNotFound.png';
import { Pagination } from '../../components/Pagination';
import { CardSkeleton } from './components/CardSkeleton';
import { EditPatientModal } from '../PatientPage/components/EditPatientModal';
import { CreatePatientModal } from '../PatientPage/components/CreatePatientModal';
import { User, useGetUsers } from '../../hooks/useGetUsers';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { PatientList } from './components/PatientList';
import { ErrorState } from './components/ErrorState';
import { Header } from '../../components/common/Header';
import { SearchBar } from './components/SearchBar';

const defaultUserData = (): User => ({
  id: '',
  name: '',
  avatar: '',
  website: '',
  description: '',
});

export const PatientListPage = () => {
  const [initialData, setInitialData] = useState<User>(defaultUserData());
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUsers(searchQuery, currentPage, 12);
  const { mutate: deleteUser } = useDeleteUser();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const user =
      data?.users.find((user: User) => user.id === id) || defaultUserData();
    setInitialData(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this patient?')) {
      deleteUser(id);
    }
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = imageNotFound;
  };

  return (
    <div>
      <Header
        title="Patient List"
        description="Welcome to the patient list"
        onButtonClick={() => setIsCreateModalOpen(true)}
      />
      <SearchBar onChange={handleSearchChange} />
      {isLoading ? (
        <CardSkeleton />
      ) : error ? (
        <ErrorState onCreatePatient={() => setIsCreateModalOpen(true)} />
      ) : (
        <>
          <PatientList
            users={data?.users}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onImageError={handleImageError}
            onPatientClick={navigate}
          />
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
