
interface PhotoProps {
    width: string;
    height: string;
    bg: string;
}
export const Photo = ({width, height, bg}: PhotoProps) => {

    return (
        <div className={`${width} ${height} flex-none rounded-full bg-[${bg}]`} />
    )
}