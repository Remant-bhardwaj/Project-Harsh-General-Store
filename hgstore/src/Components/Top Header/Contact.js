import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


function Contact (){
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem"}} >

            <img style={{width:"600px"}} src='https://img.freepik.com/free-vector/customer-service-call-center-character-flat-cartoon-business-people-illustration-vector-design_40876-2817.jpg'></img>

               <div style={{display:"flex",flexDirection:"column",border:"0.1rem solid black",width:"30rem",borderRadius:"2rem",paddingLeft:"1rem",backgroundColor:"#FAECE2"}}>
                   <h1 style={{marginTop:"1rem",marginLeft:"8rem",marginBottom:"0rem"}}>Get in Touch:</h1>
                   <p style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"0.1rem",marginLeft:"2rem"}}>Fill in the form to start a conversation</p>
                       <div className="icon-Div4 hover">
                         <FontAwesomeIcon className="img-head2" icon={faLocationDot} />
                         <p style={{paddingLeft:"1rem",fontSize:"large"}}>Street Number 9, New Delhi , 110059</p>
                       </div>

                   <div className="icon-Div4 hover">
                    <FontAwesomeIcon className="img-head2" icon={faPhoneVolume} />
                    <p style={{paddingLeft:"1rem",fontSize:"large"}}>+91 1122347811</p>
                   </div>

                   <div style={{marginBottom:"2rem"}} className="icon-Div4 hover">
                    <FontAwesomeIcon className="img-head2" icon={faEnvelope} />
                    <p style={{paddingLeft:"1rem",fontSize:"large"}}>info@harshstore.com</p>
                   </div>
               </div>

            <div style={{display:"flex",flexDirection:"row",marginLeft:"2rem",marginTop:"1rem"}}>
                <form>
                    <input style={{width:"18rem",paddingLeft:"1rem",height:"3rem",border:"0.1rem solid black",borderRadius:"1rem",fontSize:"large",marginBottom:"1rem"}} placeholder='Full Name'/>
                    <br></br>
                    <input style={{width:"18rem",paddingLeft:"1rem",height:"3rem",border:"0.1rem solid black",borderRadius:"1rem",fontSize:"large",marginBottom:"1rem"}} placeholder='Email'/>
                    <br></br>
                    <input style={{width:"18rem",paddingLeft:"1rem",height:"3rem",border:"0.1rem solid black",borderRadius:"1rem",fontSize:"large",marginBottom:"1rem"}} placeholder='Contact Number'/>
                    <br></br>
                    <button style={{width:"8.5rem",height:"2.5rem",border:"0.1rem solid black",borderRadius:"0.8rem",backgroundColor:"#87CEEB",color:"black",fontSize:"large"}}>Submit</button>
                </form>
                
            </div>   
        </div>
    )
}

export default Contact;