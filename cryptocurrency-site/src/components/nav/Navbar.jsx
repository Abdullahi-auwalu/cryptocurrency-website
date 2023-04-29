import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"


export const Navbar = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logo">
                <h1>Cry<span className="primary">Pto</span></h1>
            </div>
           <div >
           <ul className="nav-menu">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Featured</a>
                </li>
                <li>
                    <a href="">Earn</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
           </div>
            <div className="nav-btn">
                <button className="btn">Connect Wallet</button>
            </div>
            <div className="hamburger">
                <FaBars size={20} style={{color: '#333'}}/>         
            </div>
        </div>
        </div>
  )
}
