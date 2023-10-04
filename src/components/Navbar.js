import { Link } from "react-router-dom"
const Navbar = () => {
  return (
       <div className="navbar">
           <div>
           <h2>Dictionary App</h2> 
           </div>
           <div className="nav-link">
               <Link to="/" className="link" >Home</Link>
               <Link to="/history" className="link" >History</Link>
           </div>
       </div>
  )
}
export default Navbar;