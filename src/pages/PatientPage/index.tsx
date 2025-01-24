import { useParams } from 'react-router-dom';
import { useUserById } from '../../hooks/useUserById';
import { PatientSkeleton } from './components/PatientSkeleton';

export const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading, error } = useUserById(id || '');

  if (!id) return <div>No patient ID provided</div>;
  if (isLoading) return <PatientSkeleton />;
  if (error) return <div>Error loading user data</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header/Banner */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600" />

        {/* Profile Content */}
        <div className="relative px-6 py-8">
          {/* Profile Image */}
          <div className="absolute -top-16 left-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="ml-40">
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-500 mt-1">Patient ID: {id}</p>
          </div>

          {/* Details Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {user.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-3">
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
