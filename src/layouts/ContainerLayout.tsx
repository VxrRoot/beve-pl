import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ContainerLayout = ({ children }: IProps) => {
  return <div className="max-w-[1212px] px-4 mx-auto">{children}</div>;
};

export default ContainerLayout;
