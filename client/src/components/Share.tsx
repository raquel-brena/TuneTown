import { MenuitemShare } from "./MenuitemShare"
import { Photo } from "./Photo"

export const Share = () => {

    return (
        <div className="h-[15%] md:w-[85%] w-full rounded-lg border-box relative bg-fume border border-stroke overflow-hidden">
            <div className=" h-full md:px-6 w-full my-3 items-center justify-center">
                <div className="w-full h-[30%] flex gap-4 ">
                    <Photo />
                    <input className="bg-copacity_25 w-full rounded-md " />
                </div>
                <div className="w-full gap-4 mt-5 flex items-end justify-end ">
                    <MenuitemShare />
                    <MenuitemShare />
                    <MenuitemShare />
                    <MenuitemShare />
                </div>
            </div>

        </div>
    )
}