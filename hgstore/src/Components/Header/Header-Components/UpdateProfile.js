import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function UpdateProfile(){
    return(
        <>
        <div className="icon-Div hover">
            <FontAwesomeIcon className="img-head hover" icon={faUser} />
            <p className="para-ji">Update Profile</p> 
        </div>
        </>
    )
};

export default UpdateProfile;