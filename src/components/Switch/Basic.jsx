import { Switch } from "antd";
import React from "react";

const Basic = ({
  defaultChecked,
  checked,
  disabled,
  size,
  onChange,
  containerStyle,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Switch
        defaultChecked={defaultChecked}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        size={size}
        {...props}
      />
    </div>
  );
};

export default Basic;
