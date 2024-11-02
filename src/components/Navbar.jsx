import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">COFFE_BOOK</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? "btn bg-green-200 active" : "btn btn-ghost"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li><NavLink to="/coffees"  className={({ isActive }) => isActive ? "btn bg-green-200 active" : "btn btn-ghost"}>Coffees</NavLink></li>
                        <li><NavLink to="/dashboard"  className={({ isActive }) => isActive ? "btn bg-green-200 active" : "btn btn-ghost"}>Dashboard</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
