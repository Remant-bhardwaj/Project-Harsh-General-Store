import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


function Delivery(){

    const divStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?size=626&ext=jpg"',
        backgroundSize: 'contain', // or 'contain' depending on your needs
        backgroundPosition: 'center',
            height: '1000px', 
      };

      const [show, setShow] = useState(true);
    return(

        

        <div style={{backgroundColor:"#95F3F5"}}>
        
           {/* <div className="icon-Div hover">
                <FontAwesomeIcon className="img-head" icon={faLocationDot}/>
                <p className="para-ji">Deliver to:</p>
            </div> */}

            <div style={{display:"flex",justifyContent:"center", marginTop:"0.1rem"}}>
            <button style={{borderRadius:"20px",backgroundColor:"red",width:"10rem", marginRight:"1rem"}}> <p style={{fontWeight:"bolder",fontSize:"1rem",color:"white"}}>Add Address</p></button>
             <br></br>
            <button style={{borderRadius:"20px",backgroundColor:"red",width:"10rem"}}> <p style={{fontWeight:"bolder",fontSize:"15px",color:"white"}}>Update Address</p></button>
            
    
            </div>

            <div style={divStyle} > <span style={{marginLeft:"1rem", fontSize:"1.5rem",fontStyle:"unset",fontWeight:"bold"}}>Add your Address now for : </span> <br></br>
            <span style={{marginLeft:"2rem", fontSize:"1.3rem",fontStyle:"unset",fontWeight:"bold"}}>"Fast, Secure Delivery to Your Doorstep"</span> <br></br>
            <span style={{marginLeft:"2rem", fontSize:"1.3rem",fontStyle:"unset",fontWeight:"bold"}}> "Order Now for Same-Day Delivery!"</span> <br></br> 
            <span style={{marginLeft:"2rem", fontSize:"1.3rem",fontStyle:"unset",fontWeight:"bold"}}>"Experience Hassle-Free Shipping Today"</span> <br></br>
            </div>

            

            
            
           {/* <div >
                <div >
                    <FontAwesomeIcon  icon={faLocationDot}/>
                    <p >Deliver to:</p>
                </div>
            </div>     */}
        </div>
    )
};


export default Delivery;

// className="icons select2"
// className="icon-Div hover"
// className="img-head"
// className="para-ji"