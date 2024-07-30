import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandHoldingDollar,faHandHoldingHand,faCircleInfo,faEnvelopeCircleCheck,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
function Footer (){
    return(
        <div>
            <div className='main-footer'>
                <div className='icons-foot-main select'>

                    <NavLink style={({isActive}) =>{return{ 
                     color: isActive ? `#87CEEB` : `white`,
                     textDecoration:"none",
                    //  transform: isActive ? 'scale(1.1)' : 'none',
                     backgroundColor: isActive ? "" : ``,}} }
                     className="icons-foot hover" to="gifts-cards" >
                       <FontAwesomeIcon className='icon-size' icon={faHandHoldingDollar}/>
                       <p className='para-footer'>Purchase Gift Cards</p>
                    </NavLink>

                    <NavLink to="help-centre" style={({isActive}) =>{return{ 
                     color: isActive ? `#87CEEB` : `white`,
                     textDecoration:"none",
                     backgroundColor: isActive ? "" : ``,}} }
                     className="icons-foot hover">
                        <FontAwesomeIcon className='icon-size' icon={faHandHoldingHand} />
                        <p className='para-footer'>Help Centre</p>                        
                    </NavLink>


                    <NavLink to={"more-about-us"} style={({isActive}) =>{return{ 
                     color: isActive ? `#87CEEB` : `white`,
                     textDecoration:"none",
                     backgroundColor: isActive ? "" : ``,}} }
                     className="icons-foot hover" >
                        <FontAwesomeIcon className='icon-size' icon={faCircleInfo} />
                        <p className='para-footer'>More About US</p>    
                    </NavLink>


                    <NavLink to={"follow-us-on"} style={({isActive}) =>{return{ 
                     color: isActive ? `#87CEEB` : `white`,
                     textDecoration:"none",
                     backgroundColor: isActive ? "" : ``,}} }
                     className="icons-foot hover">
                        <FontAwesomeIcon className='icon-size' icon={faUserPlus} />
                        <p className='para-footer'>Follow us on :</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Footer;