import { observer } from 'mobx-react';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { SideBar } from './components/SideBar';
import Layout from '../Layout';

export const Navigation: FC = observer(() => {
  const { pathname } = useLocation();
  const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SideBar
      menuIsCollapsed={menuIsCollapsed}
      setMenuIsCollapsed={setMenuIsCollapsed}
    >
      <Layout>
        <Outlet />
      </Layout>
    </SideBar>
  );
});

export default Navigation;
