import { Avatar } from "antd";
import * as React from "react";

const Basic = ({ alt, src, size, Icon, shape, containerStyle, ...props }) => {
  return (
    <div style={containerStyle}>
      <Avatar
        alt={alt}
        src={src}
        icon={Icon && <Icon />}
        shape={shape}
        size={size}
      />
    </div>
  );
};
export default Basic;
