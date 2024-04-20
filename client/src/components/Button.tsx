
interface ButtonProps {
    text: string;
    full?: boolean;
    onClick: () => void;
}

export const Button = ({ text, full, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center font-semibold justify-center text-center 
        ${
          full
            ? "bg-transparent text-theme border border-theme hover:bg-theme/10 hover:text-theme/10"
            : "bg-theme hover:bg-fume/10 border-stroke"
        } 
        w-full py-2 rounded-sm text-base`}
    >
      {text}
    </button>
  );
};
