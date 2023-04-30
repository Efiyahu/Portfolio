import Layout from 'components/Layout';
import Container from 'components/Layout/Container';
import { useRoutes, RouteObject } from 'react-router-dom';
import { HomeScreen } from 'screens';
import ResumeScreen from 'screens/ResumeScreen';
import WorksScreen from 'screens/WorksScreen';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: (
            <Container>
              <HomeScreen />
            </Container>
          ),
        },
        {
          path: '/works',
          element: (
            <Container>
              <WorksScreen />
            </Container>
          ),
        },
        {
          path: '/skills',
          element: (
            <Container>
              <ResumeScreen />
            </Container>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <div>Page not found</div>,
    },
  ];

  return useRoutes(routes);
};

export default Routes;
