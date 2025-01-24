import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/index.tsx';
import { HomePage } from './pages/HomePage/index.tsx';
import { AppContext, store } from './services/store.tsx';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';

const queryClient = new QueryClient();

async function main() {
  const appContext = observable(store);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
      ],
    },
  ]);
  console.log(1252352365, store.user.isAuthenticated);

  if (!appContext.user.isAuthenticated) {
    return ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    ).render(
      <StrictMode>
        <Provider store={store}>
          <AppContext.Provider value={store}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </AppContext.Provider>
        </Provider>
      </StrictMode>
    );
  }

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={appContext}>
        <App />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

void main();
