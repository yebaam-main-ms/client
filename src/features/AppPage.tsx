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
  applicationLogout,
} from "./store";
import { addAuthUser } from "./modules/auth/store";
import HomeHeader from "./components/header/components/HomeHeader";
import Home from "./modules/home/Home";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useGetCurrentBuyerByUsernameQuery } from "./modules/user/services/user.service";
import { addBuyer } from "./modules/user/reducers/user.reducer";
import CircularPageLoader from "./components/page-loader/CircularPageLoader";

const AppPage: FC = (): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const appLogout = useAppSelector((state: IReduxState) => state.logout);
  const { data: currentUserData, isError } = useCheckCurrentUserQuery();
  const { data: userData, isLoading: isUserLoading } = useGetCurrentBuyerByUsernameQuery(undefined, { skip: authUser.id === null });
  // const { data: sellerData, isLoading: isSellerLoading } = useGetSellerByUsernameQuery(`${authUser.username}`, {
  //   skip: authUser.id === null
  // });


  const showCategoryContainer = true;
  const showFriendContainer = true;
  const showPostContainer = true;
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();


  const checkUser = useCallback(async () => {
    try {
      if (currentUserData && currentUserData.user && !appLogout) {
        setTokenIsValid(true);
        dispatch(addAuthUser({ authInfo: currentUserData.user }));
        dispatch(addBuyer(userData?.user));
        // dispatch(addBuyer(userData?.buyer));
        // dispatch(addSeller(sellerData?.seller));
        saveToSessionStorage(
          JSON.stringify(true),
          JSON.stringify(authUser.username)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentUserData, dispatch, appLogout, authUser.username,userData]);

  const logoutUser = useCallback(async () => {
    if ((!currentUserData && appLogout) || isError) {
      setTokenIsValid(false);
      applicationLogout(dispatch, navigate);
    }
  }, [currentUserData, dispatch, navigate, appLogout, isError]);

  useEffect(() => {
    checkUser();
    logoutUser();
  }, [checkUser,logoutUser]);

  if (authUser) {
    return !tokenIsValid && !authUser.id ? (
      <Index />
    ) : (
      <>
      <>
          <HomeHeader />
          <Home />
        </>
    </>
    );
  } else {
    return <Index />;
  }
};

export default AppPage;
