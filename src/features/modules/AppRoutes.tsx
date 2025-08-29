import { FC, ReactNode, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AppPage from '../AppPage';
import Home from './home/Home';
import ResetPassword from './auth/components/ResetPassword';
import ConfirmEmail from './auth/components/ConfirmEmail';
import ProtectedRoute from '../ProtectedRoute';
import Dashboard from './user/Dashboard';
import AddSeller from './user/components/sellers/components/add/AddSeller';
import SettingUser from './user/settings/SettingUser';
import Accesibilidad from './pages/accesibilidad/Accesibilidad';
import Support from './pages/soport/Support';



const Layout = ({ backgroundColor = '#fff', children }: { backgroundColor: string; children: ReactNode }): JSX.Element => (
  <div style={{ backgroundColor }} className="flex flex-grow">
    {children}
  </div>
);

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
      element: (
        <Suspense>
          <ProtectedRoute>
          <Layout backgroundColor="#e91f64">
              <Home />
            </Layout>

          </ProtectedRoute>
        </Suspense>
      ),
   
    },

    {
      path: '/users/:username/:buyerId/orders',
      element: (
        <Suspense>
          <ProtectedRoute>
          <Layout backgroundColor="#fff">
              <Dashboard />
            </Layout>

          </ProtectedRoute>
        </Suspense>
      ),
   
    },
    {
      path: '/seller_onboarding',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <AddSeller />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    
// Accesibilidad
// Support
    {
      path: '/configuration',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <SettingUser />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },

    {
      path: '/accesibilidad',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Accesibilidad />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    
    {
      path: '/soporte-tecnico',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Support />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },



  ];

  return useRoutes(routes);
};

export default AppRouter;
