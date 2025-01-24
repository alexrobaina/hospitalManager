import imageNotFound from '../../assets/images/imageNotFound.png';
import { Card } from '../../components/Card';
import { Link } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { BaseInput } from '../../components/BaseInput';
import { CardSkeleton } from './components/CardSkeleton';

export const DashboardPage = () => {
  const { data: patients = [], isLoading, error } = useUsers();

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = imageNotFound;
  };

  if (isLoading) return <CardSkeleton />;

  if (error) return <div>Error loading patients</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <div className="flex py-4">
        <BaseInput
          label="Search"
          placeholder="Search"
          // icon={<SearchIcon />}
          onChange={() => {}}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {patients.map(
          (patient: {
            id: string;
            avatar: string;
            name: string;
            description: string;
            website: string;
          }) => (
            <Link to={`/patient/${patient.id}`} key={patient.id}>
              <Card
                name={patient.name}
                link={patient.website}
                avatar={patient.avatar}
                description={patient.description}
                handleImageError={handleImageError}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};
