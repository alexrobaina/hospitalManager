import { FC, ReactElement, MouseEvent, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonNavigate } from '../ButtonNavigate';
import {
  ClipboardHeartIcon,
  DashboardIcon,
  LogoutIcon,
} from '../../../../assets/icons';
import { AppContext } from '../../../../services/AppContext';

interface Props {
  children: ReactElement;
  menuIsCollapsed: boolean;
  setMenuIsCollapsed: (isCollapsed: boolean) => void;
}

const TOP_NAVIGATION = [
  {
    to: '/dashboard',
    icon: <DashboardIcon />,
    text: 'dashboard',
  },
  {
    to: '/patient-list',
    icon: <ClipboardHeartIcon />,
    text: 'Patient List',
  },
];

export const SideBar: FC<Props> = ({
  children,
  menuIsCollapsed,
  setMenuIsCollapsed,
}) => {
  const navigation = useNavigate();
  const appContext = useContext(AppContext);

  const handleMenuIsCollapsed = () => {
    if (window.innerWidth < 638) {
      return setMenuIsCollapsed(true);
    }
    setMenuIsCollapsed(!menuIsCollapsed);
  };

  const isSelected = (path: string) => {
    const pathname = window.location.pathname;

    return pathname.includes(path);
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuIsCollapsed(window.innerWidth < 638);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setMenuIsCollapsed]);

  return (
    <div className="flex relative z-2">
      <div className="overflow-hidden z-20 flex justify-between items-center fixed w-full h-[67px] mr-2 sm:w-auto sm:h-auto bottom-0 top-0 sm:mt-2 sm:mb-2 sm:ml-2 sm:flex sm:flex-col bg-teal-500 rounded-md">
        <div className="flex sm:w-full sm:p-4 items-center gap-2 px-4">
          <ClipboardHeartIcon className="w-9 h-9 text-gray-800" />
          {!menuIsCollapsed && (
            <p className="text-md text-gray-800 font-bold w-full text-overflow-ellipsis">
              Hospital Manager
            </p>
          )}
        </div>
        <div
          onClick={handleMenuIsCollapsed}
          className={`${
            menuIsCollapsed ? 'sm:w-[67px] w-full' : 'sm:w-[218px] w-[67px]'
          } bg-teal-100 sm:pt-4 h-full cursor-pointer rounded-md flex sm:flex-col justify-between gap-10 sm:gap-0 items-center p-2`}
        >
          <div className="sm:w-full flex sm:flex-col gap-3">
            {TOP_NAVIGATION.map((item) => (
              <ButtonNavigate
                key={item.to}
                icon={item.icon}
                text={item.text}
                isSelected={isSelected(item.to)}
                menuIsCollapsed={menuIsCollapsed}
                handleNavigation={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  navigation(item.to);
                }}
              />
            ))}
          </div>
          <div className="flex w-full flex-row sm:flex-col gap-2 justify-end">
            <div className="py-2 capitalize items-center truncate">
              {appContext.user?.username}
            </div>
            <div className="sm:w-full flex sm:flex-col gap-2">
              <ButtonNavigate
                icon={<LogoutIcon />}
                text={'logout'}
                menuIsCollapsed={menuIsCollapsed}
                isSelected={isSelected('logout')}
                handleNavigation={() => {
                  navigation('/');
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 ${
          menuIsCollapsed ? 'ml-[2px] sm:ml-[67px]' : 'ml-[218px]'
        } p-2 overflow-y-auto`}
      >
        {children}
      </div>
    </div>
  );
};
