import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Header from '../../components/Header/Header'
import Foot from '../../components/Footer/Foot';
import Contact from '../../components/Contact/Contact';

export default function ContactUs() {
    let data = {
        h1: "Contact Us",
        h2: "",
        h3: "",
      };
  return (
    <div>
      <Nav />
      <Header data={data}/>
      <Contact />
      <Foot />
    </div>
  )
}
