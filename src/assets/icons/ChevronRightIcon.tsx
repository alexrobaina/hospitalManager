import { FC } from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const ChevronRightIcon: FC<IconProps> = ({
  className = 'w-6 h-6',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={24}
    height={24}
    strokeWidth={2}
    className={className}
    color={color}
  >
    {' '}
    <path d="M9 6l6 6l-6 6"></path>{' '}
  </svg>
);
