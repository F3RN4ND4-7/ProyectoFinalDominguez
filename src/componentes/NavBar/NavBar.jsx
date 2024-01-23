import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1>HarryPotterShop</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/2">Garmets</NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/3">Del Carrito</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar