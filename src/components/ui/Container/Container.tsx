import React from "react";
import { Montserrat } from "@next/font/google";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-Montserrat px-2 overflow-hidden mx-auto max-w-8xl sm:px-6">
      {children}
    </div>
  );
};

export default Container;
