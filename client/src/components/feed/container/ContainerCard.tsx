import React from "react"

export const ContainerCard = ({children}: {children: React.ReactNode}) => { 

    return (
        <div className="flex flex-col gap-3 w-full h-[85%] items-center 
       snap-start mt-6 snap-y">
        {children}
        </div>
    )
}