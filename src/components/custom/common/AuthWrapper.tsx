import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import React from "react";
const AuthWrapper = ({
  children,
  name,
  description,
}: {
  children: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div
      className="max-w-162.5 mx-auto w-full my-10 lg:my-20 rounded-lg p-5 lg:p-12"
      style={{ boxShadow: "0px 0px 12px 0px #0000001A" }}
    >
      {/* top */}
      <div className="flex items-center flex-col justify-center">
        <Image
          src={logo}
          alt="logo"
          width={146}
          height={146}
          className="h-36.5 w-36.5 object-contain"
        />
        <h1 className="text-2xl lg:text-3xl font-semibold text-black">
          {name}
        </h1>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
      {/* form elements */}
      <div className="mt-5 lg:mt-12 w-full">{children}</div>
    </div>
  );
};

export default AuthWrapper;
