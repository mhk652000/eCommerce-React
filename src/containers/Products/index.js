import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Header from '../../components/Header/Header';
import Cards from '../../components/Card/Card';
import Foot from '../../components/Footer/Foot';

function Products() {
    let data={
        h1:"CBD",
        h2:"Our Products",
        h3:"Eco-extensions provides only high quality, 100% natural pure CBD products, our CBD products are made from extractions derived from legal industrial hemp grown in USA. When you are ordering CBD products from us remember that you are getting a superior product. We have reformulated creams, balms, moisturizers and hair care products with CBD and essential oils to provide a wide collection of benefits."
    }

  return (
    <div>
      <Nav />
      <Header data={data} />
      <Cards />
      <Foot />
    </div>
  )
}

export default Products;
