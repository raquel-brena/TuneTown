export const Container = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="h-full space-y-10 mt-12 w-full md:w-[60%] flex relative justify-content items-center flex-col">
            {children}
        </div>
    )
}