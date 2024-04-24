import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppPage from '../AppPage';
import Home from './home/Home';



// const Layout = ({ backgroundColor = '#fff', children }: { backgroundColor: string; children: ReactNode }): JSX.Element => (
//   <div style={{ backgroundColor }} className="flex flex-grow">
//     {children}
//   </div>
// );

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppPage />
    },
    {
      path: '/',
      element: <Home />
    },
  



  ];

  return useRoutes(routes);
};

export default AppRouter;
