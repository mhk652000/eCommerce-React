import { Badge } from "antd";
import * as React from "react";

const Basic = ({
  count,
  shape,
  color,
  max,
  showZero = false,
  text,
  Icon,
  containerStyle,
  title,
  clickable,
  size,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      <Badge
        count={count} //number
        color={color}
        overflowCount={max} //number
        shape={shape}
        showZero={showZero}
        text={text}
        title={title}
        size={size}
      >
        <Icon />
      </Badge>
    </div>
  );
};

export default Basic;
