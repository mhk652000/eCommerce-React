import { Checkbox } from "antd";
import React from "react";

const CheckBoxField = ({
  options, //for checkbox group
  onChange,
  value,
  checked,
  defaultValue, //for checkbox group
  disabled,
  label,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      {options?.length > 0 ? (
        <Checkbox.Group
          onChange={onChange}
          defaultValue={defaultValue}
          //   value={value}
          options={options}
          disabled={disabled}
          style={style}
          {...props}
        />
      ) : (
        <Checkbox
          onChange={onChange}
          //   value={value}
          // checked={checked}
          disabled={disabled}
          style={style}
          {...props}
        >
          {label}
        </Checkbox>
      )}
    </div>
  );
};

export default CheckBoxField;
