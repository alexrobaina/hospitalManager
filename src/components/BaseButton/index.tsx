import { FC, MouseEventHandler, ReactElement } from 'react';

import { BaseLoading } from '../BaseLoading';

interface Props {
  text?: string;
  wFull?: boolean;
  className?: string;
  icon?: ReactElement;
  isLoading?: boolean;
  isDisabled?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e?: any) => void | MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: 'primary' | 'secondary' | 'tertiary' | 'delete';
}

export const BaseButton: FC<Props> = ({
  text,
  icon,
  wFull,
  isLoading,
  className,
  isDisabled,
  backgroundColor,
  type = 'button',
  onClick = () => {},
  style = 'primary',
}) => {
  // if only icon is passed, then the button will be a circle
  const shouldDisplayOnlyIcon = (
    text: string | null | undefined,
    icon: ReactElement | null | undefined
  ): boolean => {
    return (!text || text.trim() === '') && !!icon;
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={{ backgroundColor }}
      className={`flex cursor-pointer items-center justify-center gap-3  ${
        wFull ? 'w-full' : 'w-auto'
      } 
    ${className && className} py-2 px-4 rounded 
    ${
      shouldDisplayOnlyIcon(text, icon) &&
      'w-[36px] h-[36px] md:w-[36px] md:h-[36px] py-0 px-0'
    }
    ${
      isDisabled &&
      'bg-gray-400 cursor-not-allowed hover:bg-gray-300 hover:shadow-none'
    }
    ${style === 'primary' && 'bg-cyan-500 text-gray-50 hover:bg-cyan-600'}
    ${style === 'secondary' && 'bg-gray-200 text-gray-950 hover:bg-gray-300'}
    ${
      style === 'tertiary' &&
      'bg-gray-500 text-gray-50 border border-gray-500 hover:bg-gray-600'
    }
    ${style === 'delete' && 'bg-red-500 text-gray-50 hover:bg-red-600'}
  `}
    >
      {isLoading && <BaseLoading />}
      {icon && <div>{icon}</div>}
      {text && text}
    </button>
  );
};
