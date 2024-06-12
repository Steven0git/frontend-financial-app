import React from "react";

const Button = ({ type, name, icon, className = "capitalize" }) => {
  const classList = `btn btn-primary roboto-mono font-medium ${className}`;
  return (
    <button className={classList} type={type}>
      <span className="material-symbols-outlined h-5 w-5">{icon}</span>
      {name}
    </button>
  );
};

export default Button;
