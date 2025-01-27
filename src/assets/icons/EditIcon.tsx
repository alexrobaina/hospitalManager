import { FC } from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const EditIcon: FC<IconProps> = ({
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
    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>{' '}
    <path d="M13.5 6.5l4 4"></path>{' '}
  </svg>
);
