import React from "react";

export const MenuLeftItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex  h-14 w-full items-center justify-center group ">
      {children}
      <div
        className="transition-all group-hover:absolute group-hover:size-12 group-hover:bg-copacity_25 
      group-hover:rounded-full"
      ></div>
    </button>
  );
};
