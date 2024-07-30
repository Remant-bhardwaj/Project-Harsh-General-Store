import React,{useState} from "react";
import TopHeader from "./Components/Top Header/TopHeader";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footers/Footer";
import FooterLast from "./Components/FooterLast/FooterLast";
import { Outlet } from "react-router-dom";
// import RequestProduct from "./Components/RequestProduct/RequestaProduct";
import Delivery from './Components/Header/Header-Components/Delivery';
import HomePageProducts from "./HomePageProducts";


function Layout(){

    return(
        <>
        <TopHeader/>
        <Header/>
        {/* <RequestProduct/> */}
        <HomePageProducts/>
        
        <Outlet/>
        <Footer/>
        <FooterLast/>

        </>
    )
}


export default Layout;