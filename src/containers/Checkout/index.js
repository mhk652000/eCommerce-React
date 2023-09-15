import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Foot from '../../components/Footer/Foot'
import Delivery from '../../components/Delivery/Delivery'
import Payment from '../../components/Payment/Payment'
import DoneCard from '../../components/Card/DoneCard'
import Header from '../../components/Header/Header'

export default function Checkout() {
    let data = {
        h1: "Checkout",
        h2: "",
        h3: "",
      };

      let heading="Order Summary";
  return (
    <div>
      <Nav />
      <Header  data={data}/>
        <DoneCard heading={heading}/>
        <br/>
      <Delivery />
      <br/>
      <Payment />
      <br/>
      <Foot />
    </div>
  )
}
