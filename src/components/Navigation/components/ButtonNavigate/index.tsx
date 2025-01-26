import { FC, ReactNode, MouseEvent } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
  menuIsCollapsed: boolean;
  isSelected: boolean;
  handleNavigation: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonNavigate: FC<Props> = ({
  icon,
  text,
  isSelected,
  menuIsCollapsed,
  handleNavigation,
}) => {
  return (
    <button
      onClick={handleNavigation}
      className={`${
        isSelected ? 'bg-cyan-300' : ''
      } flex cursor-pointer justify-start gap-2 p-2 pl-[10px] w-full h-[48px] w-48px bg-cyan-400 rounded-md items-center hover:bg-cyan-300`}
    >
      <div style={{ stroke: '30px' }} className="flex justify-center w-[30px]">
        {icon}
      </div>
      {!menuIsCollapsed && <p className="text-md capitalize">{text}</p>}
    </button>
  );
};
