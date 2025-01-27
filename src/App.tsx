import { observer } from 'mobx-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import PrivateRoute from './components/PrivateRoute';

import { PatientListPage } from './pages/PatientListPage';
import { DashboardPage } from './pages/DashboardPage';
import { PatientPage } from './pages/PatientPage';
import { AppContext, AppContextProps } from './services/AppContext';
import { HomePage } from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/patient/:id',
        element: <PrivateRoute />,
        children: [{ path: '', element: <PatientPage /> }],
      },
      {
        path: '/dashboard',
        element: <PrivateRoute />,
        children: [{ path: '', element: <DashboardPage /> }],
      },
      {
        path: '/patient-list',
        element: <PrivateRoute />,
        children: [{ path: '', element: <PatientListPage /> }],
      },
      {
        path: '/',
        children: [{ path: '', element: <HomePage /> }],
      },
      {
        path: '*',
        children: [{ path: '', element: <HomePage /> }],
      },
    ],
  },
]);

interface Props {
  appContext: AppContextProps;
}

const App: React.FC<Props> = observer((props) => {
  return (
    <AppContext.Provider value={props.appContext}>
      <ToastContainer
        draggable
        rtl={false}
        pauseOnHover
        hideProgressBar
        autoClose={5000}
        pauseOnFocusLoss
        closeButton={false}
        newestOnTop={false}
        position="bottom-right"
      />
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
});

export default App;
