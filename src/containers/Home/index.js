import React from "react";
import Footer from "../../components/Footer/Foot";
import "./home.css";
import Nav from "../../components/Navbar/Nav";
import HomeInteractive from "../../components/Interactive/HomeInteractive";
import About from "../../components/About/About";
import Featured from "../../components/Featured/Featured";
import BlogCard from "../../components/Card/BlogCard";
import Blog from "../../components/Blog/Blog";


const Home = () => {

  return (
    <div className="homeMain">
      <Nav />
      <HomeInteractive />
      <Featured />
      <About />
      <Blog />
      <Footer />
      
    </div>
  );
};

export default Home;
