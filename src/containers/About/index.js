import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Header from '../../components/Header/Header'
import Foot from '../../components/Footer/Foot';
import AboutUs from '../../components/About/AboutUs';
import TeamCard from '../../components/Card/TeamCard';

export default function AboutUss() {
    let data = {
        h1: "About Us",
        h2: "",
        h3: "",
      };
  return (
    <div>
      <Nav />
      <Header data={data}/>
      <AboutUs />
      <TeamCard />
      <Foot />
    </div>
  )
}
