import React from "react";
import "./about.css";
import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.png";
import img3 from "../../assets/images/about3.png";
import hear from "../../assets/images/hear.png";
import play from "../../assets/images/play.svg";
import Colors from "../../config/colors";
import ReactPlayer from 'react-player';



function About() {
  return (
    <div className="hearAboutMain">
      <div className="aboutMain">
        <div className="aboutText abtTex">
          <p className="aboutHeading" style={{color:Colors.Primary}}>ABOUT US</p>
          <h2 className="aboutHead" style={{color:Colors.Black}}>We Provide Advanced</h2>
          <h2 className="aboutHead" style={{color:Colors.Black}}>Medical Health &</h2>
          <h2 className="aboutHead" style={{color:Colors.Black}}>Wellness Products</h2>

          <p style={{color:Colors.GreyText}} className="aboutTex texx">
            We know that your needs don’t stop with conventional medicine. We
            offer you a variety of alternative products. All our products are
            organic and tested within government.
          </p>

          <button style={{backgroundColor:Colors.ButtonColor}} className="hHomeBtn">More Details</button>
        </div>

        <div className="outImgCont">
          <div className="innerImg">
            <img className="img1" src={img1} />
          </div>
          <div className="innerImgs">
            <img className="img2" src={img2} />
            <img className="img3" src={img3} />
          </div>
        </div>
      </div>


      <div className="hearMain">

        {/* <img width={"100%"} height={"100%"} src={hear}/>
        <div className="hearBox">
          <h1>IF YOU HAVEN’T HEARD OF CBD</h1>
          <h3>WATCH <img src={play}/> NOW</h3>
        </div> */}

        <ReactPlayer url={'https://www.youtube.com/watch?v=-4L12YrZJJM'} controls={true} className="video"/>
      </div>

    </div>
  );
}

export default About;
