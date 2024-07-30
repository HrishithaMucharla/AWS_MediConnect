import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MediConnect</Link>
            </div>

            <div className="navbar-links">
                <Link to="/bookAppointment">Book Appointment</Link>
                <Link to="/userAppointment">Appointments</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;