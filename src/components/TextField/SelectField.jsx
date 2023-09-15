import { Select } from "antd";
import React from "react";

const SelectField = ({
  containerStyle,
  value,
  options,
  inputStyle,
  onSelect,
  onSearch,
  onChange,
  placeholder,
  allowClear = true,
  notFoundContent = true,
  size,
  borderVal,
  mode,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Select
        allowClear={allowClear}
        value={value}
        notFoundContent={notFoundContent}
        options={options}
        style={inputStyle}
        onSelect={onSelect}
        bordered={borderVal}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        mode={mode}
        {...props}
      />
    </div>
  );
};

export default SelectField;
