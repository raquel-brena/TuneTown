
interface ButtonProps {
    text: string;
    full?: boolean;
}

export const Button = ({ text, full }: ButtonProps) => {
  return (
    <button
    type = "button"
      className={`flex items-center font-semibold justify-center text-center 
        ${
          full
            ? "bg-transparent text-theme border border-theme hover:text-theme/10"
            : "bg-theme hover:bg-fume/10 border-stroke "
        } 
        hover:opacity-90 transition-opacity 
        w-full py-2 rounded-sm text-base`}
    >
      {text}
    </button>
  );
};
