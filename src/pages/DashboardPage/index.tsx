import { useGetUsers } from '../../hooks/useGetUsers';
import { Header } from '../../components/common/Header';
import { appointmentsData, realisticData } from './ constants';
import { Card } from './components/Card';
import { Chart } from './components/Chart';

export const DashboardPage = () => {
  const { data } = useGetUsers();

  return (
    <div>
      <Header title="Dashboard" description="Welcome to the dashboard" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 flex-wrap">
            <Card title="Patients" value={data?.total} />
            <Card title="Doctors" value={12} />
            <Card title="Total Appointments" value={98} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <Chart
              dataKey="patients"
              barColor="#8884d8"
              data={realisticData}
              title="Patients by month"
            />
            <Chart
              barColor="#82ca9d"
              dataKey="appointments"
              data={appointmentsData}
              title="Appointments by month"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
