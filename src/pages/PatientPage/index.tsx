import { useParams } from 'react-router-dom';
import { useUserById } from '../../hooks/useUserById';
import { PatientSkeleton } from './components/PatientSkeleton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EditPatientModal } from './components/EditPatientModal';
import { motion } from 'framer-motion';
import { BaseButton } from '../../components/common/BaseButton';
import { NetworkIcon } from '../../assets/icons';
import imageNotFound from '../../assets/images/imageNotFound.png';

export const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useUserById(id || '');
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = imageNotFound;
    e.currentTarget.alt = 'Image not found';
  };

  if (isLoading) return <PatientSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-2 py-2"
    >
      <BaseButton text="Back" onClick={handleBack} />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
        <div className="h-48 bg-gradient-to-r from-teal-500 to-blue-600" />
        <div className="relative px-6 py-8">
          <div className="absolute -top-16 left-6">
            <img
              alt={user?.name}
              src={user?.avatar}
              onError={handleImageError}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          <div className="ml-40 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user?.name}</h1>
              <p className="text-gray-500 mt-1">Patient ID: {id}</p>
            </div>
            <BaseButton
              text="Edit Profile"
              onClick={() => setIsEditModalOpen(true)}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {user?.description}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              {user?.website && (
                <div className="space-y-3">
                  <a
                    target="_blank"
                    href={user?.website}
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition gap-2"
                  >
                    <NetworkIcon />
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <EditPatientModal
        isOpen={isEditModalOpen}
        initialData={user || {}}
        onClose={() => setIsEditModalOpen(false)}
      />
    </motion.div>
  );
};
