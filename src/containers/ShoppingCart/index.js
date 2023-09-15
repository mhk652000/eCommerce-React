import React from "react";
import Nav from "../../components/Navbar/Nav";
import Foot from "../../components/Footer/Foot";
import ItemCard from "../../components/Card/ItemCard";
import PriceCard from "../../components/Card/PriceCard";
import './cart.css'
import Header from "../../components/Header/Header";

export default function ShoppingCart() {

    let data = {
        h1: "Shopping Cart",
        h2: "",
        h3: "",
      };
  return (
    <div>
      <Nav />
      <Header data={data}/>
      <div className="cartMainWrapper">
        <div>
        <ItemCard />
        <ItemCard />
        </div>
        <div className="pcart">
        <PriceCard />
        </div>
      </div>
      
      
      
      
      <Foot />
    </div>
  );
}
