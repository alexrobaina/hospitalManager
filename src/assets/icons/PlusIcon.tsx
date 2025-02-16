import { FC } from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

export const PlusIcon: FC<IconProps> = ({
  className = 'w-6 h-6',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);
