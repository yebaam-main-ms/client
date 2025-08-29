/* eslint-disable @typescript-eslint/no-unused-vars */
import { Transition } from '@headlessui/react';
import { FC, ReactElement, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaBars, FaRegEnvelope, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addAuthUser } from 'src/features/modules/auth/store';
import { IResponse } from 'src/features/shared/interfaces/shared.interface';
import { useAppSelector, IReduxState, useAppDispatch, useResendEmailMutation, showSuccessToast, showErrorToast, updateHeader, IOrderNotifcation, categories, replaceSpacesWithDash } from 'src/features/store';

import { v4 as uuidv4 } from 'uuid';
import Banner from '../../banner/Banner';
import Button from '../../button/Button';
import SettingsDropdown from '../../dropdown/SettingsDropdown';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import { IHomeHeaderProps } from '../interfaces/header.interface';
import HeaderSearchInput from '../../button/HeaderSearchInput';



const HomeHeader: FC<IHomeHeaderProps> = ({ showCategoryContainer }): ReactElement => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const seller = useAppSelector((state: IReduxState) => state.seller);
  const logout = useAppSelector((state: IReduxState) => state.logout);
  const buyer = useAppSelector((state: IReduxState) => state.buyer);
  // const notification = useAppSelector((state: IReduxState) => state.notification);
  const settingsDropdownRef = useRef<HTMLDivElement | null>(null);
  const messageDropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationDropdownRef = useRef<HTMLDivElement | null>(null);
  const orderDropdownRef = useRef<HTMLDivElement | null>(null);
  const navElement = useRef<HTMLDivElement | null>(null);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [authUsername, setAuthUsername] = useState<string>('');
  const dispatch = useAppDispatch();
  // const { data, isSuccess } = useGetNotificationsByIdQuery(`${authUser.username}`, { refetchOnMountOrArgChange: true });
  const [resendEmail] = useResendEmailMutation();

  const [isSettingsDropdown, setIsSettingsDropdown] = useDetectOutsideClick(settingsDropdownRef, false);
  // const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useDetectOutsideClick(messageDropdownRef, false);
  // const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useDetectOutsideClick(notificationDropdownRef, false);
  // const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useDetectOutsideClick(orderDropdownRef, false);
  const isMessageDropdownOpen = false;
  const isNotificationDropdownOpen = false;
  const isOrderDropdownOpen = false;
  const onResendEmail = async (): Promise<void> => {
    try {
      const result: IResponse = await resendEmail({ userId: authUser.id as number, email: `${authUser.email}` }).unwrap();
      dispatch(addAuthUser({ authInfo: result.user }));
      showSuccessToast('Email sent successfully.');
    } catch (error) {
      showErrorToast('Error sending email.');
    }
  };

  const toggleDropdown = (): void => {
    setIsSettingsDropdown(!isSettingsDropdown);
    // setIsMessageDropdownOpen(false);
    // setIsNotificationDropdownOpen(false);
    // setIsOrderDropdownOpen(false);
  };

  const toggleMessageDropdown = (): void => {
    // setIsMessageDropdownOpen(!isMessageDropdownOpen);
    // setIsNotificationDropdownOpen(false);
    // setIsOrderDropdownOpen(false);
    setIsSettingsDropdown(false);
    dispatch(updateHeader('home'));
    // dispatch(updateCategoryContainer(true));
  };

  const toggleOrdersDropdown = (): void => {
    // setIsOrderDropdownOpen(!isOrderDropdownOpen);
    // setIsMessageDropdownOpen(false);
    // setIsNotificationDropdownOpen(false);
    setIsSettingsDropdown(false);
    dispatch(updateHeader('home'));
    // dispatch(updateCategoryContainer(true));
  };

  const toggleNotificationDropdown = (): void => {
    // setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    // setIsOrderDropdownOpen(false);
    // setIsMessageDropdownOpen(false);
    setIsSettingsDropdown(false);
    dispatch(updateHeader('home'));
    // dispatch(updateCategoryContainer(true));
  };

  const slideLeft = (): void => {
    if (navElement.current) {
      const maxScrollLeft = navElement.current.scrollWidth + navElement.current.clientWidth; // maximum scroll position
      navElement.current.scrollLeft = navElement.current.scrollLeft < maxScrollLeft ? navElement.current.scrollLeft - 1000 : maxScrollLeft;
    }
  };

  const slideRight = (): void => {
    if (navElement.current) {
      const maxScrollLeft = navElement.current.scrollWidth - navElement.current.clientWidth; // maximum scroll position
      navElement.current.scrollLeft = navElement.current.scrollLeft < maxScrollLeft ? navElement.current.scrollLeft + 1000 : maxScrollLeft;
    }
  };

  // useEffect(() => {
  //   socketService.setupSocketConnection();
  //   socket.emit('getLoggedInUsers', '');
  //   if (isSuccess) {
  //     const list: IOrderNotifcation[] = filter(
  //       data.notifications,
  //       (item: IOrderNotifcation) => !item.isRead && item.userTo === authUser?.username
  //     );
  //     dispatch(updateNotification({ hasUnreadNotification: list.length > 0 }));
  //   }
  // }, [isSuccess, authUser.username, data?.notifications, dispatch]);

  // useEffect(() => {
  //   socket.on('message received', (data: IMessageDocument) => {
  //     // only for receiver
  //     if (data.receiverUsername === `${authUser.username}` && !data.isRead) {
  //       dispatch(updateNotification({ hasUnreadMessage: true }));
  //     }
  //   });

  //   socket.on('order notification', (_, data: IOrderNotifcation) => {
  //     // only for receiver
  //     if (data.userTo === `${authUser.username}` && !data.isRead) {
  //       dispatch(updateNotification({ hasUnreadNotification: true }));
  //     }
  //   });

  //   socket.on('online', (data: string[]) => {
  //     const username = find(data, (name: string) => name === authUser.username);
  //     setAuthUsername(`${username}`);
  //   });
  // }, [authUser.username, dispatch]);

  return (
    <>
      {/* {openSidebar && <HomeHeaderSideBar setOpenSidebar={setOpenSidebar} />} */}
      <header>
        <nav className="navbar peer-checked:navbar-active relative z-[120] w-full border-b bg-white shadow-2xl shadow-gray-600/5 backdrop-blur dark:shadow-none">
          {!logout && authUser && !authUser.emailVerified && (
            <Banner
              bgColor="bg-warning"
              showLink={true}
              linkText="Resend email"
              text="Please verify your email before you proceed."
              onClick={onResendEmail}
            />
          )}
          <div className="m-auto px-6 xl:container md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0 md:py-3 lg:py-5">
              <div className="flex w-full gap-x-4 lg:w-6/12">
                <div className="hidden w-full md:flex">
                  <label htmlFor="hbr" className="peer-checked:hamburger relative z-20 -ml-4 block cursor-pointer p-6 lg:hidden">
                    <Button
                      className="m-auto flex h-0.5 w-5 items-center rounded transition duration-300"
                      onClick={() => setOpenSidebar(!openSidebar)}
                      label={
                        <>{openSidebar ? <FaTimes className="h-6 w-6 text-sky-500" /> : <FaBars className="h-6 w-6 text-sky-500" />}</>
                      }
                    />
                  </label>
                  <div className="w-full gap-x-4 md:flex">
                    <Link
                      to="/"
                      onClick={() => {
                        dispatch(updateHeader('home'));
                        // dispatch(updateCategoryContainer(true));
                      }}
                      className="relative z-10 flex cursor-pointer justify-center self-center text-2xl font-semibold text-black lg:text-3xl"
                    >
                      Yebaam
                    </Link>
                    <HeaderSearchInput />
                  </div>
                </div>
                {/* <MobileHeaderSearchInput setOpenSidebar={setOpenSidebar} /> */}
              </div>
              <div className="navmenu mb-16 hidden w-full cursor-pointer flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-300/20 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-6/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="text-[#74767e] lg:pr-4">
                  <ul className="flex text-base font-medium">
                    <li className="relative z-50 flex cursor-pointer items-center">
                    <Button
                      className="relative px-4"
                      label={
                        <>
                          <FaRegEnvelope />
                          <span className="absolute -top-1 right-0 mr-2 inline-flex h-[6px] w-[6px] items-center justify-center rounded-full bg-[#ff62ab]"></span>
                        </>
                      }
                    />
                      <Transition
                        ref={notificationDropdownRef}
                        show={isNotificationDropdownOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="absolute right-0 mt-5 w-96">
                          {/* <NotificationDropdown setIsNotificationDropdownOpen={setIsNotificationDropdownOpen} /> */}
                        </div>
                      </Transition>
                    </li>
                    <li className="relative z-50 flex cursor-pointer items-center">
                      <Button
                        className="relative px-4"
                        onClick={toggleMessageDropdown}
                        label={
                          <>
                              <>
                          <FaRegEnvelope />
                          <span className="absolute -top-1 right-0 mr-2 inline-flex h-[6px] w-[6px] items-center justify-center rounded-full bg-[#ff62ab]"></span>
                        </>
                          </>
                        }
                      />
                      <Transition
                        ref={messageDropdownRef}
                        show={isMessageDropdownOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="absolute right-0 mt-5 w-96">
                          {/* <MessageDropdown setIsMessageDropdownOpen={setIsMessageDropdownOpen} /> */}
                        </div>
                      </Transition>
                    </li>
                    <li className="relative flex items-center">
                        <Link
                          to="/seller_onboarding"
                          className="relative ml-auto flex h-9 items-center justify-center rounded-full bg-sky-500 text-white font-bold sm:px-6 hover:bg-sky-400"
                        >
                          <span>Perfil profesional</span>
                        </Link>
                      </li>
                   
            
                    <li className="relative z-50 flex cursor-pointer items-center">
                      <Button
                        className="relative flex gap-2 px-3 text-base font-medium"
                        onClick={toggleDropdown}
                        label={
                          <>
                            <img src={`${authUser.profilePicture}`} alt="profile" className="h-7 w-7 rounded-full object-cover" />
                            {authUsername === authUser.username && (
                              <span className="absolute bottom-0 left-8 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-400"></span>
                            )}
                            <span className="flex self-center">{authUser.username}</span>
                          </>
                        }
                      />
                      <Transition
                        ref={settingsDropdownRef}
                        show={isSettingsDropdown}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="absolute -right-48 z-50 mt-5 w-96">
                          <SettingsDropdown
                            // seller={seller}
                            // buyer={buyer}
                            authUser={authUser}
                            type="buyer"
                            setIsDropdownOpen={setIsSettingsDropdown}
                          />
                        </div>
                      </Transition>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
{/* 
          {showCategoryContainer && (
            <div className="border-grey z-40 hidden w-full border border-x-0 border-b-0 sm:flex">
              <div className="justify-left md:justify-left container mx-auto flex px-6 lg:justify-center">
                <span onClick={slideLeft} className="flex w-auto cursor-pointer self-center pr-1 xl:hidden">
                  <FaAngleLeft size={20} />
                </span>
                <div
                  ref={navElement}
                  className="relative inline-block h-full w-full items-center gap-6 overflow-x-auto scroll-smooth whitespace-nowrap py-2 text-sm font-medium lg:flex lg:justify-between"
                >
                  {categories().map((category: string) => (
                    <span key={uuidv4()} className="mx-4 cursor-pointer first:ml-0 hover:text-sky-400 lg:mx-0">
                      <Link to={`/categories/${replaceSpacesWithDash(category)}`}>{category}</Link>
                    </span>
                  ))}
                </div>
                <span onClick={slideRight} className="flex w-auto cursor-pointer self-center pl-1 xl:hidden">
                  <FaAngleRight size={20} />
                </span>
              </div>
            </div>
          )} */}
        </nav>
      </header>
    </>
  );
};

export default HomeHeader;
