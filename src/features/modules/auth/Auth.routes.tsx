import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';



const AuthRouter: FC = () => {
  const routes: RouteObject[] = [
    // {
    //     path: '/',
    //     element: <Register />
      
    //   },
    // {
    //   path: '/',
    //   element: <Login />
    
    // },
    // {
    //     path: 'reset_password',
    //     element: (
    //       <Suspense>
    //         <ResetPassword />
    //       </Suspense>
    //     )
    //   },
    //   {
    //     path: 'confirm_email',
    //     element: (
    //       <Suspense>
    //         <ConfirmEmail />
    //       </Suspense>
    //     )
    //   },
    //   {
    //     path: 'verify_otp',
    //     element: (
    //       <Suspense>
    //         <VerifyOTP />
    //       </Suspense>
    //     )
    //   },

  ];

  return useRoutes(routes);
};

export default AuthRouter;
