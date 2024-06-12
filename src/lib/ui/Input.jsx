import React from "react";

const Input = ({ id, type, name, placeholder, icon, maxlength = 30 }) => {
  return (
    <label
      htmlFor={id}
      className="roboto-mono input input-bordered flex items-center gap-2"
    >
      {icon && (
        <span className="material-symbols-outlined -mt-1 mr-2 h-4 w-4 pl-0 opacity-90 transition-all">
          {icon}
        </span>
      )}
      <input
        name={id}
        id={id}
        type={type}
        maxlength={maxlength}
        className="grow overflow-x-scroll opacity-60 transition-all hover:opacity-80 active:opacity-90"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Input;
