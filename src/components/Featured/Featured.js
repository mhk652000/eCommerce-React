import React, {useEffect} from "react";
import Cards from "../Card/Card";
import { Row, Col } from "antd";

import "./featured.css";
import Colors from "../../config/colors";
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../../store/actions";

export default function Featured() {

  const productData = useSelector((state) => state.AppReducer);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(AppAction.GetPosts());
  }, [])


  console.log("prodtt Data",productData.posts);


  


  return (
    <div className="featuredMain">
      <h4 style={{color:Colors.GreyText}} className="featuredHeading">THE MOST TRENDY</h4>
      <h1 style={{color:Colors.Black}} className="featuredMainHeading">Featured Products</h1>
      <Row
      gutter={20}
      style={{
        margin: "0px",
        marginTop: "75px",
        paddingRight: "150px",
        paddingLeft: "150px",
      }}
      className="cardMainRow"
    >
      {productData.posts.map((item)=>{
       return <Cards key={item.id} data={item} />
      })
      }
      </Row>
      
    </div>
  );
}
