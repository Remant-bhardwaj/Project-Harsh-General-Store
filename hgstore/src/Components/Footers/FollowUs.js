import { Link } from 'react-router-dom';

function FollowUs (){
    return(     
        <>
        <div>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMIgX31ZTBk6uNu7wypcRNVxu4bU8YRWAvA&s"></img> */}
            
            <h2 style={{fontSize:"4rem", marginLeft:"2rem"}}>Follow us on our Social Media handles to stay connected with us:</h2>

            <div style={{height:"18rem",marginTop:"2rem", paddingTop:"3rem",paddingLeft:"10rem"}}>
                <span style={{fontSize:"3rem"}}>Follow us on Facebook:</span>
                <Link to={"https://www.facebook.com/remant.bhardwaj.03"}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2zz_gXx_oGy7J2XhL1SmohJZhlOHZ5aKVQ&s" height={"100rem"} width={"175rem"}></img>
                </Link>
                <br></br>
                <br></br>

                <span style={{fontSize:"3rem"}}>Follow Us on Instagram</span>
                <Link to={"https://www.instagram.com/stories/remantbhardwaj/"}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuptrkNGm51ptydqHtJUVDxxSdSJwrAAKG2Q&s" height={"100rem"} width={"175rem"}></img>
                </Link>

            </div>

            
        </div>
        </>
    )
}

export default FollowUs;