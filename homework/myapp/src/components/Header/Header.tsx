import { Link } from "react-router-dom";
import Logout from "../LogOut/Logout";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
    {/* <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/Lee_Algorithm">Lee Algorithm</Link>
    </li>
    <li>
      <Link to="/weather">Weather</Link>
    </li> */}
    <Logout/>
   <Navbar/>
  </div>
 
     
    );
};
export default Header;