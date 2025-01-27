import { FC, MouseEventHandler, ReactElement } from 'react';

interface Props {
  text?: string;
  wFull?: boolean;
  className?: string;
  icon?: ReactElement;
  isDisabled?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?:
    | MouseEventHandler<HTMLButtonElement>
    | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: 'primary' | 'secondary';
}

export const BaseButton: FC<Props> = ({
  text,
  icon,
  wFull,
  className,
  isDisabled,
  backgroundColor,
  type = 'button',
  onClick = () => {},
  style = 'primary',
}) => {
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
      className={`flex text-base cursor-pointer items-center justify-center gap-3  ${
        wFull ? 'w-full' : 'w-auto'
      } 
    ${className && className} py-3 px-5 rounded 
    ${
      shouldDisplayOnlyIcon(text, icon) &&
      'w-[36px] h-[36px] md:w-[36px] md:h-[36px] py-0 px-0'
    }
    ${
      isDisabled &&
      'bg-gray-400 cursor-not-allowed hover:bg-gray-300 hover:shadow-none'
    }
    ${style === 'primary' && 'bg-teal-700 text-gray-50 hover:bg-teal-600'}
    ${style === 'secondary' && 'bg-gray-200 text-gray-950 hover:bg-gray-300'}
  `}
    >
      {icon && <div>{icon}</div>}
      {text && text}
    </button>
  );
};
