/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement, useState } from "react";
import BuyerTable from "./components/buyer/BuyerTable";
import { IOrderDocument, orderTypes } from "src/features/store";
// import { OrderBuyer } from "./components/buyer/OrderBuyer";

const BUYER_GIG_STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  IN_PROGRESS: "in progress",
  DELIVERED: "delivered",
};

const Dashboard: FC = (): ReactElement => {
  const [type, setType] = useState<string>(BUYER_GIG_STATUS.ACTIVE);

  const orders: IOrderDocument[] = [];


  return (
    // orderBuyer
    <div className="container mx-auto mt-8 px-6 md:px-12 lg:px-6">
      <div className="flex flex-col flex-wrap">
        <div className="mb-8 px-4 text-xl font-semibold text-black md:px-0 md:text-2xl lg:text-4xl">
          Perfil de plan negocio o profesional
        </div>
        <div className="p-0">
          <ul className="flex w-full cursor-pointer list-none flex-col flex-wrap rounded-[2px] sm:flex-none sm:flex-row">
            <li className="inline-block py-3 uppercase">
              <a
                href="#activeorders"
                className="px-4 py-3 text-xs text-[#555555] no-underline sm:text-sm md:text-base"
              >
                Activo{" "}
                <span className="ml-1 rounded-[5px] bg-sky-500 px-[5px] py-[1px] text-xs font-medium text-white">
                  2
                </span>
              </a>
            </li>
            <li className="inline-block py-3 uppercase">
              <a
                href="#activeorders"
                className="px-4 py-3 text-xs text-[#555555] no-underline sm:text-sm md:text-base"
              >
                Suspendido{" "}
                <span className="ml-1 rounded-[5px] bg-sky-500 px-[5px] py-[1px] text-xs font-medium text-white">
                  1
                </span>
              </a>
            </li>
            <li className="inline-block py-3 uppercase">
              <a
                href="#activeorders"
                className="px-4 py-3 text-xs text-[#555555] no-underline sm:text-sm md:text-base"
              >
                Cancelado{" "}
                <span className="ml-1 rounded-[5px] bg-sky-500 px-[5px] py-[1px] text-xs font-medium text-white">
                  2
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* order */}

        
        {type === BUYER_GIG_STATUS.ACTIVE && (
          <BuyerTable type="active" orders={orders} orderTypes={orderTypes(BUYER_GIG_STATUS.IN_PROGRESS, orders)} />
        )}
        {type === BUYER_GIG_STATUS.COMPLETED && (
          <BuyerTable type="completed" orders={orders} orderTypes={orderTypes(BUYER_GIG_STATUS.COMPLETED, orders)} />
        )}
        {type === BUYER_GIG_STATUS.CANCELLED && (
          <BuyerTable type="cancelled" orders={orders} orderTypes={orderTypes(BUYER_GIG_STATUS.CANCELLED, orders)} />
        )}

      </div>
    </div>
  );
};

export default Dashboard;
