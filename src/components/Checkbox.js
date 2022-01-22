import React from "react";

export const Checkbox = ({ label, id, ...checkboxProps }) => {
  return (
    <>
      <input type="checkbox" id={id} {...checkboxProps} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
