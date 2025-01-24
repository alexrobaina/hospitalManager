import {
  FC,
  ReactElement,
  MouseEvent,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../../services/store';
import { ButtonNavigate } from '../ButtonNavigate';

interface Props {
  children: ReactElement;
  menuIsCollapsed: boolean;
  setMenuIsCollapsed: (isCollapsed: boolean) => void;
}

const TOP_NAVIGATION = [
  { to: '/dashboard', icon: <div>Dashboard</div>, text: 'dashboard' },
  { to: '/community', icon: <div>Community</div>, text: 'community' },
  {
    to: '/appointments',
    icon: <div>Appointments</div>,
    text: 'appointments',
  },
  { to: '/inventory', icon: <div>Inventory</div>, text: 'inventory' },
  { to: '/expense', icon: <div>Expense</div>, text: 'expense' },
  { to: '/searchPets', icon: <div>Search Pets</div>, text: 'searchPets' },
];

const BUTTON_NAVIGATION = [
  { to: '/settings', text: 'settings', icon: <div>Settings</div> },
];

export const SideBar: FC<Props> = ({
  children,
  menuIsCollapsed,
  setMenuIsCollapsed,
}) => {
  const [isOpenLngToggle, setIsOpenLngToggle] = useState(false);
  const navigation = useNavigate();
  const context = useContext(AppContext);

  console.log(context);
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
      <div className="overflow-x-auto sm:overflow-hidden z-20 fixed h-[67px] w-screen sm:w-auto sm:h-auto bottom-0 top-0 mt-2 mb-2 ml-2 sm:flex sm:flex-col bg-primary-300 rounded-md">
        <div
          className={`${
            menuIsCollapsed ? 'left-[28px]' : 'left-[100px]'
          } opacity-[50%] top-[48%] absolute z-50`}
        >
          <div
            onClick={handleMenuIsCollapsed}
            className="hidden ring-2 sm:flex cursor-pointer justify-center items-center ring-primary-800 h-4 w-4 rounded-full bg-primary-200 opacity-[900%]"
          >
            {menuIsCollapsed ? <div>ChevronRight</div> : <div>ChevronLeft</div>}
          </div>
        </div>
        <div
          onClick={handleMenuIsCollapsed}
          className={`${
            menuIsCollapsed ? 'w-[67px]' : 'w-[218px]'
          } bg-primary-300 h-full cursor-pointer
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
          {BUTTON_NAVIGATION.map((item, index) => (
            <ButtonNavigate
              key={index}
              icon={item.icon}
              text={item.text}
              menuIsCollapsed={menuIsCollapsed}
              isSelected={isSelected(item.text)}
              handleNavigation={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigation(item.to);
              }}
            />
          ))}
          <div className="flex justify-center">
            <div>Logout</div>
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
