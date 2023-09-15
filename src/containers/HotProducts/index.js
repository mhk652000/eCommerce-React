import React, {useEffect} from "react";
import Nav from "../../components/Navbar/Nav";
import Foot from "../../components/Footer/Foot";
import Header from "../../components/Header/Header";
import creamPic from "../../assets/images/smallCream.png";
import HotCards from "../../components/Card/HotCards";
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../../store/actions";


export default function HotProducts() {

  let data = {
    h1: "CBD",
    h2: "Hot Products",
    h3: "Eco-extensions provides only high quality, 100% natural pure CBD products, our CBD products are made from extractions derived from legal industrial hemp grown in USA. When you are ordering CBD products from us remember that you are getting a superior product. We have reformulated creams, balms, moisturizers and hair care products with CBD and essential oils to provide a wide collection of benefits.",
  };

  

  // let hotData=[
  //   {
  //     id: 1,
  //     image:creamPic,
  //     text:"CDB Salve For Pain",
  //     newPrice:"$320",
  //     oldPrice:"$500",
  //   },

  //   {
  //     id:2,
  //     image:creamPic,
  //     text:"CDB Salve For Pain",
  //     newPrice:"$320",
  //     oldPrice:"$480",
  //   },

  //   {
  //     id:3,
  //     image:creamPic,
  //     text:"CDB Salve For Pain",
  //     newPrice:"$220",
  //     oldPrice:"$480",
  //   },

  //   {
  //     id:4,
  //     image:creamPic,
  //     text:"CDB Salve For Pain",
  //     newPrice:"$320",
  //     oldPrice:"$1180",
  //   },

  //   {
  //     id:5,
  //     image:creamPic,
  //     text:"CDB Salve For Pain",
  //     newPrice:"$3220",
  //     oldPrice:"$4480",
  //   },

  //   {
  //     id:6,
  //     image:creamPic,
  //     text:"CDB Salve For Pain",
  //     newPrice:"$3220",
  //     oldPrice:"$41180",
  //   },
  // ]


  return (
    <div>
      <Nav />
      <Header data={data} />
      <HotCards />
      <Foot />
    </div>
  );
}
