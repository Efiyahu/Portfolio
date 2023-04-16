import Layout from 'components/Layout';
import { useRoutes, Navigate, RouteObject } from 'react-router-dom';
import { HomeScreen } from 'screens';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomeScreen />,
        },
        {
          path: '/works',
          element: <div>Works</div>,
        },
        {
          path: '/resume',
          element: <div>Resume</div>,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
