import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="mainContactWrapper">
      <form className="wrapperInput">
        <div className="inputWrapper">
          <input className="type1" placeholder="Name"></input>
          <input className="type12" placeholder="Email"></input>
        </div>
        <div className="inputWrapper">
          <input className="type1" placeholder="Phone"></input>
          <input className="type12" placeholder="Zip Codes"></input>
        </div>
        <div className="inputWrapper2">
          <input className="type21" placeholder="Location"></input>
          <input className="type22" placeholder="Comments"></input>
        <button className="hHomeBtn" style={{
          height:"40px",
          width:"80%",
          marginTop:"5%"
        }}>Send</button>
        </div>

      </form>

      <div className="contactAddress">
        <h4
          style={{
            letterSpacing: "3.2px",
            color: "#000000",
          }}
        >
          ADDRESS
        </h4>
        <br />
        <p >
          Phone : 61 3 8376 6284
          <br />
          <br />
          Address : 121 King Street, Melbourne Victoria 3000 Australia
          <br />
          <br />
          Email : Alitstudios@gmail.com
          <br />
          <br />
          Open Hours : Monday - Friday : 8.30 am - 7.30 pm EST
          <br />
          <br />
          Saturday : 10.00 am - 4.00 pm EST
        </p>
      </div>
    </div>
  );
}
