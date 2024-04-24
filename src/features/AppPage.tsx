/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import Index from "./components/index/Index";
import {
  useAppSelector,
  IReduxState,
  useCheckCurrentUserQuery,
  getDataFromLocalStorage,
  saveToSessionStorage,
  useAppDispatch,
} from "./store";
import { addAuthUser } from "./modules/auth/store";
import HomeHeader from "./components/header/components/HomeHeader";
import Home from "./modules/home/Home";

const AppPage: FC = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const appLogout = useAppSelector((state: IReduxState) => state.logout);
  // const showCategoryContainer = useAppSelector((state: IReduxState) => state.showCategoryContainer);
  const showCategoryContainer = true;
  const showFriendContainer = true;
  const showPostContainer = true;
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  // const navigate: NavigateFunction = useNavigate();
  const { data: currentUserData, isError } = useCheckCurrentUserQuery(
    undefined,
    { skip: authUser.id === null }
  );

  const checkUser = useCallback(async () => {
    try {
      if (currentUserData && currentUserData.user && !appLogout) {
        setTokenIsValid(true);
        dispatch(addAuthUser({ authInfo: currentUserData.user }));
        saveToSessionStorage(
          JSON.stringify(true),
          JSON.stringify(authUser.username)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentUserData, dispatch, appLogout, authUser.username]);

  useEffect(() => {
    checkUser();
    // logoutUser();
  }, [checkUser]);

  if (authUser) {
    return !tokenIsValid && !authUser.id ? (
      <Index />
    ) : (
      <>
        <HomeHeader/>
        <Home />
      </>
    );
  } else {
    return <Index />;
  }
};

export default AppPage;
