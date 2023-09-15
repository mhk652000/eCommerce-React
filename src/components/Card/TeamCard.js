import React from "react";
import "./card.css";
import p1 from "../../assets/images/person1.png";
import p2 from "../../assets/images/person2.png";
import p3 from "../../assets/images/person3.png";

export default function TeamCard() {
  return (
    <div className="mainTeamCard">
      <div className="hTeamText">
        <h4 className="t1">Eco Extension</h4>
        <h1 className="t2">Meet The Team</h1>
      </div>

      <div className="teamCardMain">
        <div
          style={{
            textAlign: "left",
            marginRight: "5%",
          }}
        >
          <img
            src={p1}
            style={{
              width: "300px",
            }}
          />

          <h3
            className="hHeading2"
            style={{ fontWeight: "800", fontSize: "larger", marginTop: "5%" }}
          >
            Mark Smith
          </h3>
          <h3
            className="hHeading2"
            style={{ fontSize: "small", color: "#5ba10c" }}
          >
            Chief Technology Officer
          </h3>
        </div>
        <div
          style={{
            textAlign: "left",
            marginRight: "5%",
          }}
        >
          <img
            src={p2}
            style={{
              width: "300px",
            }}
          />
          <h3
            className="hHeading2"
            style={{ fontWeight: "800", fontSize: "larger", marginTop: "5%" }}
          >
            Maria Sharapova
          </h3>
          <h3
            className="hHeading2"
            style={{ fontSize: "small", color: "#5ba10c" }}
          >
            Chief Operating Officer
          </h3>
        </div>
        <div
          style={{
            textAlign: "left",
          }}
        >
          <img
            src={p3}
            style={{
              width: "300px",
            }}
          />
          <h3
            className="hHeading2"
            style={{ fontWeight: "800", fontSize: "larger", marginTop: "5%" }}
          >
            Jhone Doe
          </h3>
          <h3
            className="hHeading2"
            style={{ fontSize: "small", color: "#5ba10c" }}
          >
            Sales manager
          </h3>
        </div>
      </div>
    </div>
  );
}
