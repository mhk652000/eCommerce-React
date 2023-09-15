import React from "react";
import { MdDone } from "react-icons/md";

export default function DoneCard(props) {
  return (
    <div className="Done">
      <div className="mainDone">
        <div className="innerDone">
          <div className="doneTick">
            <MdDone className="tickIcon" />
          </div>
          <h5 className="doneText">{props.heading}</h5>
          <button className="doneButton">Edit</button>
        </div>
      </div>
    </div>
  );
}
