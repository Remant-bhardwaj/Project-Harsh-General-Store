import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Top Header/Home';
import About from './Components/Top Header/About';
import Contact from './Components/Top Header/Contact';
import Delivery from './Components/Header/Header-Components/Delivery';
import Wishlist from './Components/Header/Header-Components/Wishlist';
import Cart from './Components/Header/Header-Components/Cart';
import AddMoney from './Components/Header/Header-Components/AddMoney';
import GiftCards from './Components/Footers/GiftCards';
import HelpCentre from './Components/Footers/HelpCenter';
import MoreAboutUs from './Components/Footers/MoreAboutUs';
import FollowUs from './Components/Footers/FollowUs';
import RequestProduct from "./Components/RequestProduct/RequestaProduct";
import HomePageProducts from './HomePageProducts';
import ProductCard from './ProductsCards';


const router = createBrowserRouter([
  {
    path:'/',
    // element: <Home/>,
    element: <Layout/>,
    // element: <HomePageProducts/>,
    // element: <ProductCard/>,
    // element: <FollowUs/>,

    children:[
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"delivery",
        
        element:<Delivery/>,
      
      },
      {
        path:"wishlist",
        element:<Wishlist/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"Add-Money",
        element:<AddMoney/>
      },
      {
        path:"Update-Profile",
        element:<AddMoney/>
      },
      {
        path:"gifts-cards",
        element: <GiftCards/>
      },
      {
        path:"help-centre",
        element:<HelpCentre/>
      },
      {
        path:"more-about-us",
        element:<MoreAboutUs/>
      },
      {
        path:"follow-us-on",
        element:<FollowUs/>
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
