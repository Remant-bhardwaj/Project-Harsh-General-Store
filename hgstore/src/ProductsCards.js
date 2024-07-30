import React from "react";



const ProductCard = ({product, additionalClass }) => {
    
    // console.log(product);
  

    return(
        
        <div style={{display:"flex-column",margin:"1rem",justifyContent:"center",border:"0.1rem solid white",borderRadius:"1rem", minWidth:"20rem"}} >
           
            <img height={"250rem"} style={{marginLeft:"1.5rem"}} src= {product.image} ></img>
            
            {/* <div className="bcg-image">  </div> */}

            <p style={{marginLeft:"1rem",color:"white"}}>{product.name}</p> 
            <p style={{fontSize:"1.1rem",marginLeft:"1rem",color:"white"}}>{product.description}</p>
            <p style={{fontSize:"1rem",marginLeft:"1rem",color:"white"}}>{"Price :"} {product.price}</p>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <button style={{backgroundColor:"#5783db",color:"white",width:"5rem", borderRadius:"12rem",fontSize:"1rem",marginBottom:"0.5rem"}}>Add to Cart</button>
                     {/* <br></br> */}
                    <button style={{backgroundColor:"#5783db",color:"white",width:"5rem", borderRadius:"12rem",fontSize:"1rem",marginLeft:"3.9rem",marginBottom:"0.5rem"}}>Add to Wishlist</button>
                </div>
               
        </div> 
        
    );
};

export default ProductCard;