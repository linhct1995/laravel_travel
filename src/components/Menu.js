import { Route } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";

const Menu = () => {
    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
export default Menu;