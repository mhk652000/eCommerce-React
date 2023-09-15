import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="headerMain">
      <div className="hHeadings">
        <h1 className="headerHeading1">{props.data.h1}</h1>
        <h1 className="headerHeading2">{props.data.h2}</h1>
      </div>

      <div className="headerText">
        <p>{props.data.h3}</p>
      </div>
    </div>
  );
}

export default Header;
