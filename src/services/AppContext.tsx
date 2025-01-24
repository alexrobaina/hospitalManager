import { createContext } from 'react';

export interface User {
  username: string | null;
}

export interface AppContextProps {
  user: User | null;
}

const warning: AppContextProps = {
  get user(): User {
    console.warn('Accessed context.user without context provider.');
    return {
      username: '',
    };
  },
};

export const AppContext = createContext<AppContextProps>(warning);
