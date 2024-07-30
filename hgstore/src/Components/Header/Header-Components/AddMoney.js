import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

function AddMoney(){
    return(
        <>
          <div className="icon-Div hover">
                <FontAwesomeIcon className="img-head" icon={faWallet} />
                <p className="para-ji">Add Money</p>
          </div>
        </>
    )
};

export default AddMoney;