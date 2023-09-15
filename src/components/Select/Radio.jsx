import { Radio } from "antd";
import React from "react";

const RadioField = ({
  options, //for Radio group
  onChange,
  value,
  checked,
  defaultValue, //for Radio group
  disabled,
  label,
  optionType = "default", //for Radio group
  containerStyle,
  style,
  size, //for Radio group
  ...props
}) => {
  return (
    <div style={containerStyle}>
      {options?.length > 0 ? (
        <Radio.Group
          onChange={onChange}
          optionType={optionType}
          defaultValue={defaultValue}
          //   value={value}
          options={options}
          disabled={disabled}
          style={style}
          size={size}
          {...props}
        />
      ) : (
        <Radio
          onChange={onChange}
          //   value={value}
          // checked={checked}
          disabled={disabled}
          style={style}
          {...props}
        >
          {label}
        </Radio>
      )}
    </div>
  );
};

export default RadioField;
