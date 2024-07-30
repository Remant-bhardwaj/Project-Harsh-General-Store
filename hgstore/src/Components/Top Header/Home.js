function Home (){
    return(
        <div style={{backgroundColor:"#F1F1F1",marginBottom:"0px"}}> 
        {/* backgroundColor:"#87CEEB" */}
              <div style={{display:"flex",height:"15rem", marginTop:"0.1rem",marginLeft:"0.3rem",marginRight:"0.3rem",border:"0.2rem solid black",borderRadius:"2rem"}}>
                   <div>
                        <img height={"350em"} width={"450em"} src="https://images.pexels.com/photos/21751390/pexels-photo-21751390/free-photo-of-logo-harsh-general-store.png?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
                   </div>

                   <div style={{marginLeft:"10rem"}}>
                         <p style={{fontSize:"3rem",fontWeight:"700",color:"red"}}>Welcome to Our Home Page</p>
                         <p style={{fontSize:"2rem",fontWeight:"700",color:"red"}}>Your One-Stop Shop for All Your Needs!</p>
                  </div>   
              </div>     
        

        {/* About Details */}
        {/* <div style={{marginLeft:"25rem"}}>
           <ul>
                <li style={{fontSize:"xx-large",fontWeight:"650",color:"blue"}}>Harsh General Store was eastablished in 2000</li>
                <li style={{fontSize:"xx-large",fontWeight:"650",color:"blue"}}>We focuse on fulfillment of our Customer</li>
                <li style={{fontSize:"xx-large",fontWeight:"650",color:"blue"}}>Customer is King for us</li>
            </ul>
        </div> */}

        <div style={{marginLeft:"1rem",backgroundColor:"#F1F1F1",marginBottom:"0rem"}}>
            <p style={{fontSize:"xx-large",fontWeight:"650",color:"red"}}>Our Products</p>
            <p style={{fontSize:"2rem",fontWeight:"700"}} >Explore our diverse collection of products, carefully curated to cater to your lifestyle:</p>
            <ul>
                <li style={{fontSize:"x-large",fontWeight:"700",color:"black"}}>Groceries: Fresh produce, pantry staples, and gourmet delights to stock your kitchen.
                  </li>
                <li style={{fontSize:"x-large",fontWeight:"700",color:"black"}}>Home Goods: Decorate and organize your space with our stylish selection of home essentials.
                  </li>
                <li style={{fontSize:"x-large",fontWeight:"700",color:"black"}}>Electronics: Stay connected and entertained with our latest gadgets and electronics.
                  </li>
                <li style={{fontSize:"x-large",fontWeight:"700",color:"black"}}>Fashion: Elevate your wardrobe with our trendy clothing, shoes, and accessories.
                  </li>
                <li style={{fontSize:"x-large",fontWeight:"700",color:"black"}}>Health & Beauty: Look and feel your best with our skincare, cosmetics, and wellness products.
                  </li>
                <li style={{fontSize:"x-large",fontWeight:"700",color:"black"}}>Toys & Games: Keep the whole family entertained with our fun and educational toys and games.
                  </li>
            </ul>
            </div>
           

           {/* Why Choose Us */}
            <div style={{marginLeft:"1rem", marginBottom:"1rem" ,marginRight:"1rem",backgroundColor:"#F1F1F1",marginBottom:"0rem",display:"flex",border:"0.1rem solid black",borderRadius:"0.9rem"}}>

              <div> <img height={"320px"} width={"450px"} src="https://img.freepik.com/premium-vector/why-choose-us-labels-speech-bubbles-with-megaphone-icon-banner-social-media-website-faq_121070-582.jpg?w=826"></img> </div>
{/*             
            <p style={{fontSize:"xx-large",fontWeight:"650",color:"red"}} >Why Choose Us?</p> */}

            <p style={{fontSize:"2.2rem",fontWeight:"700", marginLeft:"1rem",}} >Choose us for your daily needs with confidence. We offer a diverse selection of high-quality products, competitive prices, and exceptional customer service. Whether in-store or online, we prioritize your satisfaction and convenience. Experience the difference at Harsh General Store, where your everyday shopping becomes a seamless pleasure.</p>


            {/* <ul>
                <li style={{fontSize:"2rem",fontWeight:"700", marginLeft:"2rem"}}>Quality Assurance: We source products from trusted brands and suppliers to ensure top-notch quality.
                  </li>
                <li style={{fontSize:"2rem",fontWeight:"700", marginLeft:"2rem"}}>Affordable Prices: Enjoy competitive prices on all our products, without compromising on quality.
                  </li>
                <li style={{fontSize:"2rem",fontWeight:"700", marginLeft:"2rem"}}>Convenient Shopping: Shop from the comfort of your home with our easy-to-use online store.
                </li>
                <li style={{fontSize:"2rem",fontWeight:"700", marginLeft:"2rem"}} >Fast Delivery: Get your orders delivered straight to your doorstep with our reliable shipping options.
                  </li>
                <li style={{fontSize:"2rem",fontWeight:"700", marginLeft:"2rem"}}>Exceptional Customer Service: Our friendly and knowledgeable team is here to assist you with any queries or concerns.
                  </li>
            </ul> */}
            </div>

          <div style={{marginLeft:"1rem",backgroundColor:"#F1F1F1",marginBottom:"0rem",marginTop:"0.3rem"}}>
          {/* Special offers */}
          <div style={{marginRight:"1rem",paddingLeft:"1rem",border:"0.1rem solid black",borderRadius:"0.9rem",display:"flex"}}>

          {/* backgroundColor:"lightslategray" */}


            {/* <p style={{fontSize:"xx-large",fontWeight:"650",color:"red"}}>Special Offers</p> */}
            <p style={{fontSize:"2.5rem",fontWeight:"700", marginLeft:"2rem",marginTop:"4rem"}}>Don't miss out on our special promotions and discounts! Sign up for our newsletter to stay updated on the latest deals and offers.</p>

            <div> <img height={"300px"} width={"300px"} src="https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-special-offer-png-image_6601226.png"></img> </div>
          </div>

          {/* Visit Us Today */}
          <div style={{marginRight:"1rem",paddingLeft:"1rem",marginTop:"0.3rem",border:"0.1rem solid black",borderRadius:"0.9rem",display:"flex",marginBottom:"0.1rem"}}>
            
          <div> <img height={"350px"} width={"450px"} src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-visit-our-store-free-vector-png-image_9973391.png"></img> </div>


              {/* <p style={{fontSize:"xx-large",fontWeight:"650",color:"red"}}>Visit Us Today!</p> */}
              <p style={{fontSize:"2.5rem",fontWeight:"700",paddingLeft:"1rem", marginLeft:"2rem",marginTop:"4rem"}}>Experience the convenience and satisfaction of shopping at [Harsh General Store]. Start browsing our collection now and discover your new favorite products!</p>

              

            </div>
        </div>
        </div>
    )
};

export default Home;