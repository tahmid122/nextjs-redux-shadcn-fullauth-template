import React from "react";

const ContainerWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container mx-auto px-5 lg:px-0 py-5 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
