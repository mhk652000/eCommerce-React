import { Button } from "antd";
import React from "react";

const Basic = ({
  disabled,
  icon,
  loading,
  shape,
  type,
  size,
  color,
  text,
  onClick,
  containerStyle,
  buttonStyle,
  sx,
  ...props
}) => (
  <div style={containerStyle}>
    <Button
      disabled={disabled}
      icon={icon}
      loading={loading}
      shape={shape}
      size={size} // 'small'| 'medium'| 'large'
      type={type}
      color={color}
      onClick={onClick}
      style={buttonStyle}
      {...props}
    >
      {text}
    </Button>
  </div>
);

export default Basic;
