import React from "react";
import "./card.css";
import blg1 from "../../assets/images/blog1.png";
import blg2 from "../../assets/images/blog2.png";
import blg3 from "../../assets/images/blog3.png";
import { Card } from "antd";
import { Row, Col } from "antd";
import clock from "../../assets/images/clock.svg";

function BlogCards() {
  return (
    <>
    <Row
      gutter={5}
      style={{
        margin: "0px",
        marginTop: "75px",
        width: "100%",
        paddingRight: "150px",
        paddingLeft: "150px",
        marginBottom:"-90px"
      }}
      className="blogCardMainRow"
    >
      <Col
        style={{
          borderRadius: "10px",
          paddingRight: "0px",
          paddingLeft: "0px",
          marginRight: "66px",
          marginBottom: "60px",
          boxShadow: "0px 6px 20px #00000014",
          width: "100%",
        }}
        md={7}
        className="gutter-row"
      >
        <Card style={{ border: "0" }} cover={<img alt="example" src={blg1} />}>
          <div className="cardText">
            <div className="mainBlogText">
              <h2 className="blogHeading">CBD Oil Tinctures</h2>
              <h4 className="blogTime">
                <img src={clock} /> 7 hours ago
              </h4>
              <span className="blogText">
                Tinctures are an easier way of consuming your plant-based
                medicines. Herbs for ailments, in tincture form are mixed with
                Herbs for ailments, in tincture form are mixed with{" "}
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
      </Col>
    </Row>

    <Row
      gutter={5}
      style={{
        margin: "0px",
        marginTop: "75px",
        width: "100%",
        paddingRight: "150px",
        paddingLeft: "150px",
      }}
      className="blogCardMainRow"
    >
      <Col
        style={{
          borderRadius: "10px",
          paddingRight: "0px",
          paddingLeft: "0px",
          marginRight: "66px",
          marginBottom: "60px",
          boxShadow: "0px 6px 20px #00000014",
          width: "100%",
        }}
        md={7}
        className="gutter-row"
      >
        <Card style={{ border: "0" }} cover={<img alt="example" src={blg1} />}>
          <div className="cardText">
            <div className="mainBlogText">
              <h2 className="blogHeading">CBD Oil Tinctures</h2>
              <h4 className="blogTime">
                <img src={clock} /> 7 hours ago
              </h4>
              <span className="blogText">
                Tinctures are an easier way of consuming your plant-based
                medicines. Herbs for ailments, in tincture form are mixed with
                Herbs for ailments, in tincture form are mixed with{" "}
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
      </Col>
    </Row>
    </>
    
  );
}

export default BlogCards;