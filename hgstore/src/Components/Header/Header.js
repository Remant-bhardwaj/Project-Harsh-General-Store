import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faTruck,faLocationDot,faClipboardList,faCartShopping,faWallet,faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <div className="divver">
            <div className="divver1 selectall">
            <select className="selct-of-header">
                <option className="opt-select" value="All">All</option>
                <option className="opt-select" value="All">Today`s Deal</option>
                <option className="opt-select" value="All">Discounted items</option>
                <option className="opt-select" value="All">Kitchen items</option>
                <option className="opt-select" value="All">Men`s Care</option>
                <option className="opt-select" value="All">Womens`s Care</option>
                <option className="opt-select" value="All">Ice Cream & drinks</option>
                <option className="opt-select" value="KidsSpecials">Kids Specials</option>
            </select>
            </div>

            <div className="divver2 select3">
             <input className="input-of-header" placeholder="Search Product"/>
            </div> 

        
            <div className="icons select2">
                <NavLink style={({isActive}) =>{return{ 
                     color: isActive ? `#87CEEB` : `white`,
                     transform: isActive ? 'scale(1.1)' : 'none',
                     backgroundColor: isActive ? "blue" : ``,}} }
                     className="icon-Div hover" to="/delivery" >
                    
                    <FontAwesomeIcon className="img-head" icon={faLocationDot}/>
                    <p  className="para-ji">Deliver to:</p>
                    
                </NavLink>

                
                <NavLink style={({isActive}) =>{return{ 
                   color: isActive ? `#87CEEB` : `white`,
                   transform: isActive ? 'scale(1.1)' : 'none',
                   backgroundColor: isActive ? "blue" : ``}} }
                   className="icon-Div hover" to="/Wishlist">
                    <FontAwesomeIcon className="img-head" icon={faClipboardList} />
                    <p className="para-ji">Wishlist</p>
                </NavLink>


                <NavLink style={({isActive}) =>{return{color: isActive ? `#87CEEB` : `white`,transform: isActive ? 'scale(1.1)' : 'none',backgroundColor: isActive ? "blue" : ``}} } className="icon-Div hover" to="cart">
                    <FontAwesomeIcon className="img-head" icon={faCartShopping} />
                    <p className="para-ji">Cart</p>
                    </NavLink>


                <NavLink style={({isActive}) =>{return{color: isActive ? `#87CEEB` : `white`,transform: isActive ? 'scale(1.1)' : 'none',backgroundColor: isActive ? "blue" : ``}} } className="icon-Div hover" to="Add-Money">
                    <FontAwesomeIcon className="img-head" icon={faWallet} />
                    <p  className="para-ji">Add Money</p>
                </NavLink>


                <NavLink style={({isActive}) =>{return{color: isActive ? `#87CEEB` : `white`,transform: isActive ? 'scale(1.1)' : 'none',backgroundColor: isActive ? "blue" : `none`}} } className="icon-Div hover" to="Update-Profile">
                    <FontAwesomeIcon className="img-head hover" icon={faUser} />
                    <p className="para-ji">Update Profile</p> 
                </NavLink>

            </div>   
        </div>
    </div>
  );
}

export default Header;
