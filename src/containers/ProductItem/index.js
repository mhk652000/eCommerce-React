import React from 'react'
import Header from '../../components/Header/Header';
import Foot from '../../components/Footer/Foot';
import Nav from '../../components/Navbar/Nav';
import ProductCard from '../../components/Card/ProductCard';
import Reviews from '../../components/Tabs/Reviews';
import CardThree from '../../components/Card/CardThree';
import './pi.css';
import { useLocation } from 'react-router-dom';

export default function ProductItem() {

    let dataItem = useLocation();
    console.log("testDItem", dataItem.state);
    let data = {
        h1: dataItem.state.name,

      };
  return (
    <div>
      <Nav />
      <Header data={data}/>
      <ProductCard data={dataItem.state}/>
      <Reviews />
      <div style={{
        marginLeft:"9.5%",
        marginBottom:"-3%"
      }}>
        <p className='hh'>OUR PRODCUTS</p>
        <h3 className='hT'>Related products</h3>
      </div>
      <CardThree />
      <Foot />
    </div>
  )
}
