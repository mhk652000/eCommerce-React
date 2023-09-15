import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Circular = ({
  size = 16,
  color,
  spinning = true,
  loaderStyle,
  containerStyle,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Spin
        indicator={<LoadingOutlined style={{ color: color, fontSize: size }} />}
        spinning={spinning}
        style={loaderStyle}
        size={size}
        {...props}
      />
    </div>
  );
};

export default Circular;
