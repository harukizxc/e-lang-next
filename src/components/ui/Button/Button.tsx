import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor?: "bg-cayan-light" | "bg-cayan-dark";
  textColor?: "text-cayan-dark" | "text-primary-white" | "text-ptimary-black";
  hoverTextColor?:
    | "text-cayan-light"
    | "text-cayan-dark"
    | "text-primary-white";
  hoverBgColor?: "bg-cayan-light" | "bg-cayan-dark" | "bg-primary-white";
  borderColor?:
    | "border-cayan-light"
    | "border-cayan-dark"
    | "border-primary-white";
  hoverBorderColor?:
    | "border-cayan-light"
    | "border-cayan-dark"
    | "border-primary-white";
}

const Button: React.FC<Props> = ({
  children,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  borderColor,
  hoverBorderColor,
}) => {
  return (
    <button
      className={`${
        borderColor !== undefined ? `${borderColor}` : ""
      } font-semibold px-6 py-2  rounded-3xl duration-300 ${textColor} ${bgColor} hover:${hoverBgColor} hover:${hoverTextColor} hover:${hoverBorderColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
