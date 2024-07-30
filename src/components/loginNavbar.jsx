import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavbar = ({signOut}) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/homePage">MediConnect</Link>
            </div>

            <div className="navbar-links">
                
                <Link to="/bookAppointment">Book Appointment</Link>
                <Link to="/userAppointment">Appointments</Link>
                <Link onClick={signOut}>Sign Out</Link>

            </div>
        </nav>
    );
};

export default LoginNavbar;