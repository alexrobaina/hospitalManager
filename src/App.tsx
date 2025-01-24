import { observer } from 'mobx-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navigation from './components/Navigation';

import { DashboardPage } from './pages/DashboardPage';
import { PatientPage } from './pages/PatientPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/patient/:id',
        element: <PatientPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },

      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '*',
        element: <DashboardPage />,
      },
    ],
  },
]);

const App: React.FC = observer(() => {
  return (
    <>
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
    </>
  );
});

export default App;
