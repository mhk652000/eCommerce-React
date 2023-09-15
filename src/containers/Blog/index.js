import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Header from '../../components/Header/Header'
import Foot from '../../components/Footer/Foot';
import BlogCards from '../../components/Card/BlogCards';

export default function Blog() {
    let data = {
        h1: "Our Blog",
        h2: "",
        h3: "",
      };

  return (
    <div>
    <Nav />
    <Header data={data}/>
    <BlogCards />
    <Foot />
    </div>
  )
}
