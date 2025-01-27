import { observer } from 'mobx-react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../services/AppContext';
import { useContext } from 'react';
import { Navigation } from './common/Navigation';

const PrivateRoute = observer(() => {
  const appContext = useContext(AppContext);

  if (!appContext.user?.username) {
    return <Navigate to="/" />;
  }

  return <Navigation />;
});

export default PrivateRoute;
