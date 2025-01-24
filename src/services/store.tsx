import { makeAutoObservable, configure, reaction } from 'mobx';
import { createContext } from 'react';

// Configure MobX
configure({
  enforceActions: 'never',
  useProxies: 'always',
});

export interface AppStore {
  user: {
    username: string;
    isAuthenticated: boolean;
  };
  setUsername: (username: string) => void;
}

class Store implements AppStore {
  user = {
    username: '',
    isAuthenticated: false,
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    // Set up reaction to observe isAuthenticated changes
    reaction(
      () => this.user.isAuthenticated,
      (isAuthenticated) => {
        console.log('Authentication status changed:', isAuthenticated);
        // You can add additional logic here
      }
    );
  }

  setUsername(username: string) {
    this.user.username = username;
    this.user.isAuthenticated = true;
  }
}

export const store = new Store();
export const AppContext = createContext<AppStore>(store);
