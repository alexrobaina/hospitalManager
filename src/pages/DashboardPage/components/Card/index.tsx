import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
}

export const Card: React.FC<CardProps> = ({ title, value }) => (
  <div className="flex flex-col gap-4 border-2 border-gray-100 rounded-md p-4 shadow-md">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="text-sm text-gray-500">{value}</p>
  </div>
);
