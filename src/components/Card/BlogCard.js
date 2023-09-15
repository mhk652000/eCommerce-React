import React from "react";
import "./card.css";
import blg1 from "../../assets/images/blog1.png";
import blg2 from "../../assets/images/blog2.png";
import blg3 from "../../assets/images/blog3.png";
import { Card } from "antd";
import { Row, Col } from "antd";
import clock from "../../assets/images/clock.svg";

function BlogCard(props) {
  return (
    // <Row
    //   gutter={5}
    //   style={{
    //     margin: "0px",
    //     marginTop: "75px",
    //     width: "100%",
    //     paddingRight: "150px",
    //     paddingLeft: "150px",
    //   }}
    //   className="blogCardMainRow"


    // >    </Row>

      <Col
        style={{
          borderRadius: "10px",
          paddingRight: "0px",
          paddingLeft: "0px",
          marginRight: "42px",
          marginBottom: "60px",
          boxShadow: "0px 6px 20px #00000014",
          width: "100%",
        }}
        md={7}
        className="gutter-row blgCrd"
      >
        <Card  style={{ border: "0" }} cover={<img alt="example"  src={props.data.image} />}>
          <div className="cardText">
            <div className="mainBlogText">
              <h2 className="blogHeading">{props.data.heading}</h2>
              <h4 className="blogTime">
                <img src={clock} /> {props.data.uploaded}
              </h4>
              <span className="blogText">
                {props.data.text}
              </span>
            </div>
          </div>
        </Card>
      </Col>

      /* <Col
        style={{
          borderRadius: "10px",
          paddingRight: "0px",
          paddingLeft: "0px",
          marginRight: "65px",
          marginBottom: "60px",
          boxShadow: "0px 6px 20px #00000014",
        }}
        md={7}
        className="gutter-row"
      >
        <Card style={{ border: "0" }} cover={<img alt="example" src={blg2} />}>
          <div className="cardText">
          <div className="mainBlogText">
              <h2 className="blogHeading">4 BENEFITS OF CBD CREAM</h2>
              <h4 className="blogTime">
                <img src={clock} /> 3 weeks ago
              </h4>
              <span className="blogText">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </span>
            </div>
          </div>
        </Card>
      </Col>

      <Col
        style={{
          borderRadius: "10px",
          paddingRight: "0px",
          paddingLeft: "0px",
          marginBottom: "60px",
          boxShadow: "0px 6px 20px #00000014",
        }}
        md={7}
        className="gutter-row"
      >
        <Card
          style={{ border: "0", borderRadius: "0" }}
          cover={
            <img
              alt="example"
              src={blg3}
              style={{
                borderTopLeftRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
          }
        >
          <div className="cardText">
          <div className="mainBlogText">
              <h2 className="blogHeading">How To Choose the Right CBD Oil Tincture?</h2>
              <h4 className="blogTime">
                <img src={clock} /> 6 weeks ago
              </h4>
              <span className="blogText">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </span>
            </div>
          </div>
        </Card>
      </Col> */
  );
}

export default BlogCard;
