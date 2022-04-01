import React from 'react';
const CustomInput = (props) => {
  const { label, icon, placeholder, type } = props;
  return (
    <>
      <label className="control-label">{label}</label>
      <div className="input-group flex-nowrap mb-3">
        <span className="input-group-text" id="addon-wrapping">
          <i className={icon} aria-hidden="true"></i>
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="form-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </>
  );
};
export default CustomInput;
