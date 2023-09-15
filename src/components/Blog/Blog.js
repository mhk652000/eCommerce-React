import React, {useEffect} from 'react';
import './blog.css';
import blg1 from "../../assets/images/blog1.png";
import blg2 from "../../assets/images/blog2.png";
import blg3 from "../../assets/images/blog3.png";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from '../Card/BlogCard';
import Colors from "../../config/colors";
import { AppAction } from '../../store/actions';
import { blogData } from '../../config/data';
export default function Blog() {



  // let blogData=[
  //   {
  //     image: blg1,
  //     heading: "CBD Oil Tinctures",
  //     uploaded: "7 hours ago",
  //     text: "Tinctures are an easier way of consuming your plant-based medicines. Herbs for ailments, in tincture form are mixed with Herbs for ailments, in tincture form are mixed with"
  //   },

  //   {
  //     image: blg2,
  //     heading: "4 BENEFITS OF CBD CREAM",
  //     uploaded: "3 weeks ago",
  //     text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  //   },

  //   {
  //     image: blg3,
  //     heading: "How To Choose the Right CBD Oil Tincture?",
  //     uploaded: "6 weeks ago",
  //     text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  //   },
  // ]
  
  return (
    <div className='blogMain'>
        <h4 className="featuredHeading">FROM THE BLOG</h4>
        <h1 className="featuredMainHeading">Our Latest Blog</h1>

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
        {
          blogData.map((blogItem)=>{
            return <BlogCard key={blogItem.id} data={blogItem}/>
          })
        }
        </Row>

        
        <button style={{backgroundColor:Colors.ButtonColor}} className="hHomeBtn">View More</button>
    </div>
  )
}
