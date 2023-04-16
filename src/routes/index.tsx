import { useRoutes, Navigate, RouteObject } from 'react-router-dom';
import { HomeScreen } from 'screens';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <HomeScreen />,
    },
  ];

  return useRoutes(routes);
};

export default Routes;
