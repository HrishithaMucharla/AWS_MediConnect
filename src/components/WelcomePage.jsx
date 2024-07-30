import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const WelcomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="homepage" style={{backgroundColor:'white'}}>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>"Connecting you to quality care. Find the best hospitals and services now!"</h1>
                        <Link to="/login">
                            <button className="hero-button">Sign Up/ Login</button>
                        </Link>
                    </div>
                </section>
                <section className="services-section">
                    <div className="service-card">
                        <img src={process.env.PUBLIC_URL + '/cardio.png'} alt="Cardiology Services" style={{height:'90px', width : '90px'}}/>
                        <h3 style={{color:'black'}}>Cardiology Services</h3>
                    </div>
                    <div className="service-card">
                        <img src={process.env.PUBLIC_URL + '/dental.png'} alt="Dental Services" style={{height:'90px', width : '90px'}}/>
                        <h3>Dental Services</h3>
                    </div>
                    <div className="service-card">
                        <img src={process.env.PUBLIC_URL + '/ortho.png'} alt="Orthopedic Services" style={{height:'90px', width : '90px'}}/>
                        <h3>Orthopedic Services</h3>
                    </div>
                </section>
                <section className="services-section" style={{marginTop:'10px'}}>
                    <div className="service-card">
                        <img src={process.env.PUBLIC_URL + '/derma.png'} alt="Dermatology Services" style={{height:'90px', width : '90px'}}/>
                        <h3>Dermatology Services</h3>
                    </div>
                    <div className="service-card">
                        <img src={process.env.PUBLIC_URL + '/gynec.png'} alt="Gynecology Services" style={{height:'90px', width : '90px'}}/>
                        <h3>Gynecology Services</h3>
                    </div>
                    <div className="service-card">
                        <img src={process.env.PUBLIC_URL + '/lungs.png'} alt="Pulmonology Services" style={{height:'90px', width : '90px'}}/>
                        <h3>Pulmonology Services</h3>
                    </div>
                </section>
                <footer className="footer">
                    <p>&copy; 2024 MediConnect. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default WelcomePage;