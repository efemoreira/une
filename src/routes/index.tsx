import React from 'react';

import {useAuth} from '../contexts/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';
import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const {loged, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }

  return loged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
