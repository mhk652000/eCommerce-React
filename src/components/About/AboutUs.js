import React from "react";
import "./about.css";
import person from "../../assets/images/handPerson.png";
import Colors from "../../config/colors";


export default function AboutUs() {
  return (
    <div style={{
        width:"81%",
        marginLeft:"11%"
    }}>
      <div className="mainWrapperAbout">
        <div>
          <img src={person} style={{
            height:"425px"
          }} />
        </div>
        <div style={{
            marginLeft:"5%"
        }}>
            <p style={{
                textAlign:"left",
                marginBottom:"10px",
                color:Colors.GreyText,
            }} className="hhhhh">We Welcome You</p>
            <h2 className="headerHeading2" style={{
                height:"60px",
                width:"100%",
                marginBottom:"-5px",
                textAlign:"left",
                color:Colors.Primary
            }}>Reaching Towards</h2>
            <h2 className="headerHeading2" style={{
                textAlign:"left",
                letterSpacing:"1px",
                color:Colors.Black,
                height:"60px",
                width:"100%",
                marginBottom:"40px",
                

            }}>Wellness...</h2>

            <p className="hhh">
            My Grandmother was a herbologist and healer from Old Russia. She brought with her the idea that our body has the amazing ability to heal itself, but body and mind needed to be in tune with nature. Her natural organic formulas were created to do just that.<br/><br/> We re-created her recipes using natural organic herbs and oils for our salves, ointments and creams. We never use toxic ingredients or harmful chemicals.<br/><br/> I don’t believe in ‘snake-oil’ or bogus products that don’t work for you. So before you purchase our product we want you to try our sample tin first. If it works for you, by all means we want to to become part of our family.
            </p>

            <h3 style={{
                textAlign:"left"
            }}>email: ecoextension@yahoo.com for your free sample of our Salve.</h3>
        </div>
      </div>
    </div>
  );
}
