import { DatePicker } from "antd";
import React from "react";

const { RangePicker } = DatePicker;

const RangeDatePicker = ({
  value,
  picker,
  onChange,
  defaultValue,
  format,
  placeholder,
  showToday = false,
  showTime = false,
  showNow = false,
  allowClear = true,
  size,
  containerStyle,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <RangePicker
        onChange={onChange}
        picker={picker}
        defaultValue={defaultValue}
        format={format}
        value={value}
        placeholder={placeholder}
        showToday={showToday}
        showTime={showTime}
        showNow={showNow}
        allowClear={allowClear}
        size={size}
        {...props}
      />
    </div>
  );
};

export default RangeDatePicker;
