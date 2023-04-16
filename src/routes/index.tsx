import Layout from 'components/Layout';
import Container from 'components/Layout/Container';
import { useRoutes, Navigate, RouteObject } from 'react-router-dom';
import { HomeScreen } from 'screens';

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
              <div>Works</div>
            </Container>
          ),
        },
        {
          path: '/resume',
          element: (
            <Container>
              <div>Resume</div>
            </Container>
          ),
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
