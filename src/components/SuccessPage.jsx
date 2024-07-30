import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './loginNavbar';

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate('/userAppointment');
    };

    return (
        <div>
            <LoginNavbar/>
            <div className="success-container" style={{ backgroundColor: 'white', color: 'black' }}>
                <div className="max-w-xl w-full mx-auto bg-white rounded-xl overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <div className="max-w-md mx-auto pt-12 pb-14 px-5 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full">
                            <svg
                                viewBox="0 0 48 48"
                                height="100"
                                width="100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    y2="37.081"
                                    y1="10.918"
                                    x2="10.918"
                                    x1="37.081"
                                    id="SVGID_1__8tZkVc2cOjdg_gr1"
                                >
                                    <stop stopColor="#60fea4" offset="0"></stop>
                                    <stop stopColor="#6afeaa" offset=".033"></stop>
                                    <stop stopColor="#97fec4" offset=".197"></stop>
                                    <stop stopColor="#bdffd9" offset=".362"></stop>
                                    <stop stopColor="#daffea" offset=".525"></stop>
                                    <stop stopColor="#eefff5" offset=".687"></stop>
                                    <stop stopColor="#fbfffd" offset=".846"></stop>
                                    <stop stopColor="#fff" offset="1"></stop>
                                </linearGradient>
                                <circle fill="url(#SVGID_1__8tZkVc2cOjdg_gr1)" r="18.5" cy="24" cx="24"></circle>
                                <path
                                    d="M35.401,38.773C32.248,41.21,28.293,42.66,24,42.66C13.695,42.66,5.34,34.305,5.34,24	c0-2.648,0.551-5.167,1.546-7.448"
                                    strokeWidth="3"
                                    strokeMiterlimit="10"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    stroke="#10e36c"
                                    fill="none"
                                ></path>
                                <path
                                    d="M12.077,9.646C15.31,6.957,19.466,5.34,24,5.34c10.305,0,18.66,8.354,18.66,18.66	c0,2.309-0.419,4.52-1.186,6.561"
                                    strokeWidth="3"
                                    strokeMiterlimit="10"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    stroke="#10e36c"
                                    fill="none"
                                ></path>
                                <polyline
                                    points="16.5,23.5 21.5,28.5 32,18"
                                    strokeWidth="3"
                                    strokeMiterlimit="10"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    stroke="#10e36c"
                                    fill="none"
                                ></polyline>
                            </svg>
                        </div>
                        <h4 className="text-xl text-black-100 font-semibold mb-5">Your appointment is booked!</h4>
                        <p className="text-blue-300 font-medium">You will receive a confirmation email shortly.</p>
                    </div>
                    <div className="pt-5 pb-6 px-6 text-center bg-black-800 -mb-2">
                        <button
                            className='hero-button'
                            onClick={handleConfirm}
                        >
                            Check Your Appointments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
