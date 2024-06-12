import React from "react";

const FormLayout = ({ title, children }) => {
  return (
    <div className="relative flex h-dvh flex-col justify-center overflow-hidden border-0 border-b-2 border-gray-500 px-1 py-2 transition-all">
      <div className="m-auto w-full rounded-md p-6 shadow-md lg:max-w-xl">
        <h1 className="nunito text-center text-3xl font-semibold">{title}</h1>
        <div className="mt-4 px-2">{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
