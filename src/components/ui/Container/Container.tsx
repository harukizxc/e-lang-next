import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="px-6 mx-auto max-w-8xl">{children}</div>;
};

export default Container;
