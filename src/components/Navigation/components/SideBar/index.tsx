import {
  FC,
  ReactElement,
  MouseEvent,
  useState,
  useEffect,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonNavigate } from '../ButtonNavigate';
import {
  ChevronLeft,
  ChevronRight,
  ClipboardHeart,
  Dashboard,
  Logout,
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
    icon: <img src={Dashboard} alt="logo" />,
    text: 'dashboard',
  },
];

export const SideBar: FC<Props> = ({
  children,
  menuIsCollapsed,
  setMenuIsCollapsed,
}) => {
  const [isOpenLngToggle, setIsOpenLngToggle] = useState(false);
  const navigation = useNavigate();
  const appContext = useContext(AppContext);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpenLngToggle) {
        setIsOpenLngToggle(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenLngToggle]);

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

  return (
    <div className="flex relative z-2">
      <div className="overflow-x-auto sm:overflow-hidden z-20 fixed h-[67px] w-screen sm:w-auto sm:h-auto bottom-0 top-0 mt-2 mb-2 ml-2 sm:flex sm:flex-col bg-blue-300 rounded-md">
        <div className="flex items-center gap-2 p-4">
          <img className="w-9 h-9" src={ClipboardHeart} alt="logo" />
          {!menuIsCollapsed && (
            <p className="text-md font-bold w-full text-overflow-ellipsis">
              Hospital Manager
            </p>
          )}
        </div>
        <div
          className={`${
            menuIsCollapsed ? 'left-[28px]' : 'left-[100px]'
          } opacity-[50%] top-[48%] absolute z-50`}
        >
          <div
            onClick={handleMenuIsCollapsed}
            className="hidden ring-2 sm:flex cursor-pointer justify-center items-center ring-blue-800 h-4 w-4 rounded-full bg-blue-200 opacity-[900%]"
          >
            {menuIsCollapsed ? (
              <img className="w-12 h-12" src={ChevronRight} alt="logo" />
            ) : (
              <img className="w-12 h-12" src={ChevronLeft} alt="logo" />
            )}
          </div>
        </div>
        <div
          onClick={handleMenuIsCollapsed}
          className={`${
            menuIsCollapsed ? 'w-[67px]' : 'w-[218px]'
          } bg-blue-300 pt-4=2 h-full cursor-pointer
           rounded-md flex sm:flex-col justify-between gap-10 sm:gap-0 items-center p-2`}
        >
          <div className="sm:w-full flex sm:flex-col gap-2">
            {TOP_NAVIGATION.map((item, index) => (
              <ButtonNavigate
                key={index}
                icon={item.icon}
                text={item.text}
                isSelected={isSelected(item.text)}
                menuIsCollapsed={menuIsCollapsed}
                handleNavigation={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  navigation(item.to);
                }}
              />
            ))}
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="py-2 capitalize truncate">
              {appContext.user?.username}
            </div>
            <ButtonNavigate
              icon={<img src={Logout} alt="logo" />}
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
