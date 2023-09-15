import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";

const Floating = ({
  text,
  icon,
  onClick,
  containerStyle,
  buttonStyle,
  shape,
  type = "primary",
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <FloatButton
        onClick={onClick}
        icon={icon || <PlusOutlined />}
        description={text}
        type={type}
        shape={shape}
        style={buttonStyle}
        {...props}
      />
    </div>
  );
};

export default Floating;
