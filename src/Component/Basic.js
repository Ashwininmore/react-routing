import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import ReactDOM from "react-dom/client";
import {Routes,Route,Link} from "react-router-dom";
import Addon from './Addon';
import Login from './Login';
import LoginDemo from './LoginDemo';
import Register from './Register';
import User from './User';
import UserList from './UserList';

export default function Basic()
{
	return(
		<>
		<nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand">
          All Component
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Home"} className='nav-link'>
             Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Aboutus"} className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Contactus"} className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Addon"} className="nav-link">
              Add on
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Register"} className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/User"} className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/LoginDemo"} className="nav-link">
              Login 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/UserList"} className="nav-link">
              User List
            </Link>
          </li>
          
        </div>
      </nav>
		
		<Routes> 
			<Route path="Home" element={<Home />} />
 			<Route path="Aboutus" element={<Aboutus />} /> 
			<Route path="Contactus" element={<Contactus />} />
			<Route path="Addon" element={<Addon />} />
		  <Route path="Login" element={<Login></Login>} />
      <Route path="Register" element={<Register></Register>} />
      <Route path="User/:id" element={<User></User>} />
      <Route path="LoginDemo" element={<LoginDemo></LoginDemo>} />
      <Route path="UserList" element={<UserList></UserList>} />
      
    </Routes>
		</>
	);

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Basic />);