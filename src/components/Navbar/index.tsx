import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ClipboardHeart } from '../../assets/icons';

export const Navbar: FC = () => {
  return (
    <>
      <nav className="bg-primary-200 fixed md:px-0 p-3 top-0 left-0 w-full z-10">
        <div className="md:pl-20 md:pr-20">
          <div className="flex items-center gap-2">
            <img className="w-12 h-12" src={ClipboardHeart} alt="logo" />
            <div>
              <p className="text-2xl font-bold">Hospital Manager</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-5 md:ml-16 md:mr-16 pt-20">
        <Outlet />
      </div>
    </>
  );
};
