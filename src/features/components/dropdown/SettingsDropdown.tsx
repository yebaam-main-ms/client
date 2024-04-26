/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { IHomeHeaderProps } from "../header/interfaces/header.interface";
// import { lowerCase } from "lodash";
import {
  useAppDispatch,
  applicationLogout,
  updateHeader,
  lowerCase,
  // updateHeader,
} from "src/features/store";
import { FaSignInAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircle } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const SettingsDropdown: FC<IHomeHeaderProps> = ({
  seller,
  authUser,
  buyer,
  type,
  setIsDropdownOpen,
}): ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    if (setIsDropdownOpen) {
      setIsDropdownOpen(false);
    }
    applicationLogout(dispatch, navigate);
  };
  // configuration
  return (
    <div className="border-grey w-44 divide-y divide-gray-100 rounded border bg-white shadow-md">
      <ul
        className="text-gray-700s py-2 text-sm"
        aria-labelledby="avatarButton"
      >
         {/* <div className="flex items-center py-1">
          <Link to={`/configuration`}>
            <span className="flex items-center px-4 py-2 text-sm hover:text-sky-400">
            <CiSettings />
            <span className="ml-2">Configuracion</span>
            </span>
           
          </Link>
        </div> */}


        <div className="flex items-center py-1">
          <Link to={`/soporte-tecnico`}>
            <span className="flex items-center px-4 py-2 text-sm hover:text-sky-400">
            <IoMdHelpCircle />
            <span className="ml-2">Soporte tecnico</span>
            </span>
           
          </Link>
        </div>
        <div className="flex items-center py-1">
          <Link to={`/accesibilidad`}>
            <span className="flex items-center px-4 py-2 text-sm hover:text-sky-400">
            <FaMoon />
            <span className="ml-2">Accebilidad</span>
            </span>
           
          </Link>
        </div>
   
     

        {buyer && buyer.isSeller && (
          <li className="mx-3 mb-1">
            <Link
              to={`${type === 'buyer' ? `/${lowerCase(`${authUser?.username}`)}/${seller?._id}/seller_dashboard` : '/'}`}
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('sellerDashboard'));
                // dispatch(updateCategoryContainer(true));
              }}
              className="block w-full cursor-pointer rounded bg-sky-500 px-4s py-2 text-center font-bold text-white hover:bg-sky-400 focus:outline-none"
            >
              {type === 'buyer' ? 'Switch to Selling' : 'Switch to Buying'}
            </Link>
          </li>
        )}
        {buyer && buyer.isSeller && type === 'buyer' && (
          <li>
            <Link
              to={`/manage_gigs/new/${seller?._id}`}
              className="block px-4 py-2 hover:text-sky-400"
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('home'));
                // dispatch(updateCategoryContainer(true));
              }}
            >
              Add a new gig
            </Link>
          </li>
        )}
        {type === 'buyer' && (
          <li>
            <Link
              to={`/users/${buyer?.username}/${buyer?._id}/orders`}
              className="block px-4 py-2 hover:text-sky-400"
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('home'));
                // dispatch(updateCategoryContainer(true));
              }}
            >
              Dashboard
            </Link>
          </li>
        )}
        {/* {buyer && buyer.isSeller && type === 'buyer' && (
          <li>
            <Link
              to={`/seller_profile/${lowerCase(`${seller?.username}`)}/${seller?._id}/edit`}
              className="block px-4 py-2 hover:text-sky-400"
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('home'));
                // dispatch(updateCategoryContainer(true));
              }}
            >
              Profile
            </Link>
          </li>
        )} */}
        <li>
          <Link
            to={`/configuration`}
            className="block px-4 py-2 hover:text-sky-400"
            onClick={() => {
              if (setIsDropdownOpen) {
                setIsDropdownOpen(false);
              }
              dispatch(updateHeader("home"));
              //   dispatch(updateCategoryContainer(false));
            }}
          >
           <span className="flex items-center px-4 py-2 text-sm hover:text-sky-400"></span>
            {/* <CiSettings  className=""/> */}
            {/* <span className="">Configuracion</span> */}
            Configuracion
          </Link>
        </li>
      </ul>

      <div className="flex items-center py-1">
        <div
          onClick={() => onLogout()}
          className="flex items-center px-4 py-2 text-sm hover:text-sky-400"
        >
          <FaSignInAlt />
          <span className="ml-2">Cerrar sesión</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsDropdown;
