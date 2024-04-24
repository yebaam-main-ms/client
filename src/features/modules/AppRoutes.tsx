import { FC, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppPage from '../AppPage';
import Home from './home/Home';
import ResetPassword from './auth/components/ResetPassword';
import ConfirmEmail from './auth/components/ConfirmEmail';



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
      path: 'reset_password',
      element: (
        <Suspense>
          <ResetPassword />
        </Suspense>
      )
    },
    {
      path: 'confirm_email',
      element: (
        <Suspense>
          <ConfirmEmail />
        </Suspense>
      )
    },
    {
      path: '/',
      element: <Home />
    },
  



  ];

  return useRoutes(routes);
};

export default AppRouter;
