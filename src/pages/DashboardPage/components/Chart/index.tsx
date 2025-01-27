import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  title: string;
  data: Array<{ month: string; value: number }>;
  dataKey: string;
  barColor: string;
}

export const Chart: React.FC<ChartProps> = ({
  title,
  data,
  dataKey,
  barColor,
}) => (
  <div className="flex flex-col gap-4 border-2 border-gray-100 rounded-md p-4 shadow-md">
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="w-full mt-4" style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill={barColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
