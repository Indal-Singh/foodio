import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[200%]",
  lg: "text-xl font-normal leading-[200%]",
  s: "text-base font-normal",
  "2xl": "text-3xl font-medium leading-[110%]",
  xl: "text-[25px] font-normal leading-[200%]",
  md: "text-lg font-medium leading-[110%]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-300_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
