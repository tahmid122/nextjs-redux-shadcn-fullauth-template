import React from "react";

const ContainerWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-360 mx-auto  px-4 lg:px-15 2xl:px-30 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
