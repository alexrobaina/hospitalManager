export const PatientSkeleton = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <div className="grid gap-4">
        <div className="animate-pulse">
          <div className="h-[350px] w-full bg-gray-300 rounded mb-4" />
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-2/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        </div>
      </div>
    </div>
  );
};
