import React from "react";

const Checkbox = ({ id, name }) => {
  return (
    <div className="form-control">
      <label htmlFor={id} className="label cursor-pointer">
        <span className="roboto-mono label-text font-medium">{name}</span>
        <input
          name={id}
          id={id}
          type="checkbox"
          defaultChecked
          className="checkbox-primary checkbox transition-all hover:opacity-80"
        />
      </label>
    </div>
  );
};

export default Checkbox;
