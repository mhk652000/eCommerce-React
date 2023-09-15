import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { SignIn, Dashboard, Users, Products } from "../../containers";
import DashboardLayout from "../../components/Layout/dashboardLayout.jsx";
import AppRoutes from "./AppRoutes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Home from "../../containers/Home/index";
import Sample from "../../containers/Sample";
import HotProducts from "../../containers/HotProducts";
import ProductItem from "../../containers/ProductItem";
import ShoppingCart from "../../containers/ShoppingCart";
import Checkout from "../../containers/Checkout";
import Confirmation from "../../containers/Confirm";
import Blog from "../../containers/Blog";
import AboutUss from "../../containers/About";
import ContactUs from "../../containers/Contact";


const AuthRoutes = () => {

  const user = useSelector((state) => state.AppReducer?.user)
  return (
    <div className="App">
      {!user?.user_id ? (
        <Routes>
          <>
            <Route path="/login" element={<Sample />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/hot-products" element={<HotProducts />} />
            <Route path="/product" element={<ProductItem />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUss />} />
            <Route path="/contact-us" element={<ContactUs />} />







            {/* <Route path="/forget-password" element={ForgetPassword} />
            <Route path="/verify-code" element={VerifyCode} />
            <Route path="/reset-password" element={ResetPassword} /> */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        </Routes>
      ) : (
        <DashboardLayout expandible={false}>
          <AppRoutes />
        </DashboardLayout>
      )}
    </div>
  )
}

export default AuthRoutes
