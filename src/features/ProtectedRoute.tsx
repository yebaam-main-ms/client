import { FC, ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
// import HomeHeader from './components/header/components/HomeHeader';
import { addAuthUser } from './modules/auth/store';
import { useAppSelector, IReduxState, useAppDispatch, useCheckCurrentUserQuery, saveToSessionStorage, applicationLogout } from './store';
import HomeHeader from './components/header/components/HomeHeader';

export interface IProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ children }): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  // const header = useAppSelector((state: IReduxState) => state.header);
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const { data, isError } = useCheckCurrentUserQuery();

  const checkUser = useCallback(async () => {
    if (data && data.user) {
      setTokenIsValid(true);
      dispatch(addAuthUser({ authInfo: data.user }));
      saveToSessionStorage(JSON.stringify(true), JSON.stringify(authUser.username));
    }

    if (isError) {
      setTokenIsValid(false);
      applicationLogout(dispatch, navigate);
    }
  }, [data, dispatch, navigate, isError, authUser.username]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  if ((data && data.user) || authUser) {
    if (tokenIsValid) {
      return (
        <>
         <HomeHeader  />
          {children}
        </>
      );
    } else {
      return <></>;
    }
  } else {
    return <>{<Navigate to="/" />}</>;
  }
};

export default ProtectedRoute;
