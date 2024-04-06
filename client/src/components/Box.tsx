interface BoxProps {
  width: string;
  height: string;
  stroke: boolean;
  children?: React.ReactNode;
}

function Box({ width, height, stroke, children }: BoxProps) {
  return (
    <div
      className={`flex ${width} ${height}
    ${stroke && "border-oil-black-300"}
    bg-oil-black-200 border-oil-black-300
    border-2 text-white  justify-center p-4 rounded-lg shadow-lg`}
    >
      {children}
    </div>
  );
}

export default Box;
