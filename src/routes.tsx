import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from './components/common';
import { MainLayout, MainLayoutType } from './layouts/MainLayout';
import { NotFoundView } from './errors/NotFoundView';

type RouteType = {
  path: string;
  layout?: MainLayoutType;
  element: any;
};

type RoutesType = RouteType[];

const renderRoutes = (routes: RoutesType = []) => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {routes.map((route: RouteType) => {
        const Layout = route.layout || Fragment;
        const Component = route.element;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: RoutesType = [
  {
    path: '/',
    layout: MainLayout,
    element: lazy(() => import('./pages/BeerCatalog')),
  },
  {
    path: '/beerCatalog/',
    layout: MainLayout,
    element: lazy(() => import('./pages/BeerCatalog')),
  },
  {
    path: '/beerCatalog/:food',
    layout: MainLayout,
    element: lazy(() => import('./pages/BeerCatalog')),
  },
  {
    path: '/beerInfo/:beerName',
    layout: MainLayout,
    element: lazy(() => import('./pages/BeerInfo')),
  },
  {
    path: '*',
    layout: MainLayout,
    element: NotFoundView,
  },
];

export const allRoutes = renderRoutes(routes);
