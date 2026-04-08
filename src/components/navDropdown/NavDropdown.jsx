import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";

function NavDropdown({ title, items }) {
    const [open, setOpen] = useState(false);
    const [alignRight, setAlignRight] = useState(false);

    const dropdownRef = useRef(null);
    const contentRef = useRef(null);

    const toggleDropdown = () => {
        setOpen(prev => !prev);
    };

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (open && dropdownRef.current && contentRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const menuWidth = contentRef.current.offsetWidth;

            if (dropdownRect.left + menuWidth > window.innerWidth) {
                setAlignRight(true);
            } else {
                setAlignRight(false);
            }
        }
    }, [open]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropbtn" onClick={toggleDropdown}>
                {title} ▼
            </button>

            {open && (
                <div
                    ref={contentRef}
                    className={`dropdown-content ${alignRight ? "align-right" : ""}`}
                >
                    {items.map((item, index) => (
                        <Link key={index} to={item.link}>
                            {item.text}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NavDropdown;