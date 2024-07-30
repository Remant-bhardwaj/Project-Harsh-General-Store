import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "./carousel-custom.css"; 
// import Carousel from 'react-bootstrap/Carousel';
import ProductCard from "./ProductsCards.js";


// Request a Product
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, } from '@fortawesome/free-solid-svg-icons';

const HomePageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        console.log("LOGGGED 1st");
        fetch("/product.json")
        .then(response => {
            if(!response.ok){
                throw new Error("Netwrok was not OK");
            }
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log('Fetched products:', data); 
            setProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
        }, []);
            
    

    const otherProducts = products.filter(product => product.id < 8 );
    const coldDrinkProducts = products.filter(product => product.id >= 8 && product.id <19);
    const SoapProducts = products.filter(product => product.id > 19 && product.id <=30);
    const HandWashProducts = products.filter(product => product.id >= 31 && product.id <=37);
    const ShampooProducts = products.filter(product => product.id >= 38 && product.id <=44 );
    const IceCreamProducts  = products.filter(product => product.id >= 45 && product.id <=53 );
    const MenShavingProducts  = products.filter(product => product.id >= 54 && product.id <= 63  );
    const WomenProducts  = products.filter(product => product.id >= 64   );



    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

      var settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

      const settings3 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true
      };


    return (
        <>
        {/* Request A Product */}
        <div>
            <div className="ReqPro-div">                
                <marquee className="Mark" behavior="alternate" scrollamount="10"> <h1 style={{paddingTop:"1.4rem"}}> **Request a Product**</h1></marquee>
               <div className="div-pp">
                  <ul>
                    <li className='liii'>If the Product that you are looking is not avaibale,</li>
                    <li> you can Request it</li>
                    <li> we will deliver it to you with-in 48 hours</li>
                  </ul>
               </div>

               <div className='div-req hover '>
                  <FontAwesomeIcon className="img-head1 select3" icon={faHand}/>
                  <h3 className="h222 select2">Click to Request</h3>
               </div>
            </div>          
        </div>
        {/* Request A Product */}



        
        <div style={{backgroundColor:"#14161b",width:"100%"}} >
         
        
         <Slider {...settings}>
                {otherProducts.map( (product) =>     
                <div style={{display:"flex"}} >         
                    <ProductCard
                    key={product.id} 
                    product = {product}
                    /> 
                    // </div>
                )}                
            </Slider>
           
           
            <h1 style={{color:"white",marginLeft:"2rem"}}> <i>*Cold Drinks</i></h1> 
             <Slider {...settings2}>
                    {coldDrinkProducts.map(product => (
                        <div style={{ display: "flex" }}>
                          <ProductCard
                           key={product.id}
                           product={product}
                           />
                        </div>
                      ))}

              </Slider>

                {/* Soap Products */}
                <h1 style={{color:"white",marginLeft:"2rem"}}> <i>*Soaps</i></h1>  

                <Slider {...settings3}>
                    {SoapProducts.map(product => (
                        <div style={{ display: "flex" }}>
                               <ProductCard   
                                key={product.id}
                                product={product}
                                />
                        </div>
                      ))}
              </Slider>

            {/* Hand Wash Products */}
            <h1 style={{color:"white",marginLeft:"2rem"}}> <i>*Hand Washe & Lotions</i></h1> 

            <Slider {...settings}> 
                    {HandWashProducts.map(product => (
                        <div style={{ display: "flex"}}>
                             <ProductCard
                             key={product.id}
                             product={product}
                            />
                         </div>
                      ))}
            </Slider>

            {/* Shampoo Products */}
            <h1 style={{color:"white",marginLeft:"2rem"}}> <i>*Shampoos</i></h1> 

            <Slider {...settings2}>
                 {ShampooProducts.map(product => (
                       <div style={{ display: "flex"}}>
                          <ProductCard
                           key={product.id}
                           product={product}
                           />
                       </div>
                   ))}
             </Slider>  

            {/* Ice Cream Products    */}
            <h1 style={{color:"white",marginLeft:"2rem"}}> <i>*Ice-Cream</i></h1>

            <Slider {...settings2}>
                {IceCreamProducts.map(product => (
                    <div style={{ display: "flex" }} >
                        <ProductCard
                         key={product.id}
                         product={product}
                         />
                    </div>
                    ))}
            </Slider>

            {/* Mens Shaving Products     */}
            <h1 style={{color:"white",marginLeft:"2rem"}}> <i>*Men`s Care</i></h1> 

            <Slider {...settings3}>
                {MenShavingProducts.map(product => (
                    <div style={{ display: "flex" }}>
                        <ProductCard
                         key={product.id}
                         product={product}
                         />
                    </div>
                      ))}
           </Slider>

           <h1 style={{color:"white",marginLeft:"2rem"}}> <i>* Harsh-General-Store</i></h1>   

        </div>
        </>
        
    );
};

export default HomePageProducts;