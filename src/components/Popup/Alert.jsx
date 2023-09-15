import { Alert } from "antd";
import * as React from "react";

const BasicAlert = ({
  message,
  type,
  closable,
  description,
  icon,
  showIcon = true,
  containerStyle,
  ...props
}) => (
  <div style={containerStyle}>
    <Alert
      message={message}
      type={type}
      closable={closable}
      description={description}
      icon={icon}
      showIcon={showIcon}
      {...props}
    />
  </div>
);

export default BasicAlert;
