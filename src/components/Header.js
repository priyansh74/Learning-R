import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

   const [btnName, setbtnName] = useState("Login");
   const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
           <div className="logo-container">
            <img  className="logo" src={LOGO_URL} alt="Company logo image" />
           </div>
           <div className="nav-items">
              <ul>
                 <li>
                  Online Status: {onlineStatus ? "✅" : "🔴"}
                 </li>
                 <li> 
                  <Link to={"/"}>Home</Link>
                 </li>
                 <li>
                 <Link to={"/about"}> About Us</Link>
                 </li>
                 <li>
                 <Link to={"/contact"}> Contact Us</Link>
                  </li>
                  <li>
                 <Link to={"/grocery"}> Grocery</Link>
                  </li>
                 <li>Cart</li>
                 <button onClick={() => {
                  btnName === "Login" ?  setbtnName("Logout") :  setbtnName("Login");
                  }
                  } 
                  className="login ">
                     {btnName}
                  </button>
              </ul>
           </div>

        </div>
    );
};
export default Header;