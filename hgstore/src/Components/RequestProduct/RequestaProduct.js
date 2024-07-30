import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, } from '@fortawesome/free-solid-svg-icons';

function RequestProduct(){

    return(
        <div>
            <div className="ReqPro-div">                
                <marquee className="Mark" behavior="alternate" scrollamount="10"> <h1> **Request a Product**</h1></marquee>
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
    )
};


export default RequestProduct;