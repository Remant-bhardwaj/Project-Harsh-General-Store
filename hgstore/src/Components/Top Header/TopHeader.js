import { NavLink } from "react-router-dom";
import Home from "./Home";

function TopHeader(){
    return(
        <>
        <div style={{display:"flex",backgroundColor:"#222222",color:"white",justifyContent:"space-between",alignItems:"center"}}>

           <NavLink to="/home">
                <div className="div-bcgImage Remant3"> 
                 </div>
           </NavLink>

          <div style={{display:"flex",marginLeft:"2rem",width:"50rem",justifyContent:"space-evenly"}}>

             {/* <p className="para-Top-Header Remant" ></p> */}
             <NavLink style={({isActive}) =>{return{color: isActive ? `#87CEEB` : `white`}} }  className={"para-Top-Header Remant"} to="/home" activeClassName="isActive">
                Home
                </NavLink>

             {/* <p className="para-Top-Header Remant"></p> */}
             <NavLink style={({isActive}) =>{return{color: isActive ? `#87CEEB` : `white`}} } className={"para-Top-Header Remant"} to="/about" activeClassName="isActive"  >
                About
                </NavLink>

             {/* <p className="para-Top-Header Remant" ></p> */}
             <NavLink style={({isActive}) =>{return{color: isActive ? `#87CEEB`  : `white`}} } className={"para-Top-Header Remant"}  to="/contact" activeClassName="isActive" >
                Contact
                </NavLink>
              
            </div>

            <div>
                <form>
                     <button className="butt-Top-Header Remant2">Log-IN</button>
                     <button className="butt-Top-Header Remant2">Sign-Up</button>
                </form>
            </div>
    
        </div>
        
        </>
    )
}

export default TopHeader;

{/* <img height={"75rem"} width={"auto"} style={{marginLeft:"0rem"}} src="https://images.pexels.com/photos/21751390/pexels-photo-21751390/free-photo-of-logo-harsh-general-store.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="LOGO MAN"/> */}