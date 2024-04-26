import { FC, ReactElement } from "react"
import { Link } from "react-router-dom"
import { IHomeProps } from "src/features/components/header/interfaces/header.interface"

const SuggetionsHome:FC<IHomeProps> = (): ReactElement => {
  return (
    
    <div className="border-grey mx-auto my-8 flex flex-col overflow-hidden rounded-lg border">
    <div className="flex items-center px-6 py-6 sm:items-start">
        <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col gap-2 md:flex-row">
                <span
                    className="flex self-center text-base font-bold cursor-pointer text-sky-500 md:text-lg lg:text-2xl hover:text-sky-400 hover:underline">
                    <Link to="">
                    Personas que quizá conozcas
                    </Link>
                </span>
            </div>
        </div>
    </div>
    <div
        className="flex w-full flex-nowrap items-center justify-center overflow-x-hidden px-6 md:overflow-x-auto lg:overflow-x-hidden">
        <div
            className="grid justify-center gap-x-8 pt-3 sm:h-full sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[1,2,3,4,5].map((item: number) => (
                // <!-- placeholder -->
                <div key={item} className="rounded">
                    <div className="mb-8 flex cursor-pointer flex-col gap-2">
                        <img src="https://placehold.co/330x220?text=Profile+Image" className="w-full rounded-lg"
                            alt="Gig cover image" />
                        <div className="flex items-center gap-2 relative">
                            <img src="https://placehold.co/330x220?text=Profile+Image" alt="Profile image"
                                className="h-7 w-8 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default SuggetionsHome