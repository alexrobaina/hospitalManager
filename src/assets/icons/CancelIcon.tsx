import { FC } from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const CancelIcon: FC<IconProps> = ({
  className = 'w-6 h-6',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    width="24"
    height="24"
    stroke-width="2"
    className={className}
    color={color}
  >
    {' '}
    <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path>{' '}
  </svg>
);
