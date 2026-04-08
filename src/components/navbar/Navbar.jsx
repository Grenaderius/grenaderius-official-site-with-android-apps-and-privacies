import { Link } from "react-router-dom";
import NavDropdown from "../navDropdown/NavDropdown";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="nav-left">
                <Link to="/" className="logo">
                    <p>GRENADERIUS</p>
                </Link>
            </div>

            <div className="nav-right">
                <NavDropdown
                    title="Products"
                    items={[
                        { text: "Unique Names Creator", link: "/app/UniqueNamesCreator" }
                    ]}
                />

                <NavDropdown
                    title="Privacy Policies"
                    items={[
                        { text: "Unique Names Creator", link: "/privacy/UniqueNamesCreator" }
                    ]}
                />
            </div>
        </nav>
    );
}

export default Navbar;