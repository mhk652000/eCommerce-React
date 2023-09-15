import React from 'react'
import ConfirmCard from '../../components/OrderConfirm/ConfirmCard'
import Nav from '../../components/Navbar/Nav'
import Header from '../../components/Header/Header'
import Foot from '../../components/Footer/Foot';

export default function Confirmation() {
    let data = {
        h1: "Order Confirmation",
        h2: "",
        h3: "",
      };

  return (
    <div>
    <Nav />
    <Header data={data}/>
      <ConfirmCard />
      <Foot />
    </div>
  )
}
