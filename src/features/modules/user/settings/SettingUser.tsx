import { FC, ReactElement } from "react"
import Breadcrumb from "src/features/components/breadcrumb/Breadcrumb"
import Button from "src/features/components/button/Button"

const SettingUser:FC = ():ReactElement => {
  return (
    <div className="relative w-full pb-6">
    <Breadcrumb breadCrumbItems={['Usuario', '' ]} />

    <div className="container mx-auto px-2 md:px-0">
        <div className="my-2 flex h-8 justify-end md:h-10">
            <div>
                <Button
                    className="md:text-md rounded bg-sky-500 px-6 py-1 text-center text-sm font-bold text-white hover:bg-sky-400 focus:outline-none md:py-2"
                    label="Update" />
                &nbsp;&nbsp;
                <Button
                    className="md:text-md rounded bg-red-500 px-6 py-1 text-center text-sm font-bold text-white hover:bg-red-500 focus:outline-none md:py-2"
                    label="Cancel" />
            </div>
        </div>
        {/* <!-- Profile header --> */}
        <div className="my-4 cursor-pointer">
            {/* <!-- Tabs component --> */}
        </div>

        <div className="flex flex-wrap bg-white"></div>
    </div>
</div>
  )
}

export default SettingUser