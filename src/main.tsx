import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { observable } from 'mobx';
import { AppContext, AppContextProps } from './services/AppContext';
import App from './App.tsx';

const queryClient = new QueryClient();

async function main() {
  const appContext: AppContextProps = {
    user: observable({
      username: null,
    }),
  };

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={appContext}>
        <App appContext={appContext} />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

void main();
