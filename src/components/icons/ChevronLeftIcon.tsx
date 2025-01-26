import { FC } from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const ChevronLeftIcon: FC<IconProps> = ({
  className = 'w-6 h-6',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    color={color}
  >
    {' '}
    <path d="M15 6l-6 6l6 6" />{' '}
  </svg>
);
