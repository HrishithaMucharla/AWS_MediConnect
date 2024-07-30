import { useRef } from "react";
import { Select } from "./Select";
import * as AWS from 'aws-sdk';
import config from '../config';
import LoginNavbar from './loginNavbar';
import { useNavigate } from 'react-router-dom';


const { v4: uuidv4 } = require('uuid');

// Configure AWS SDK for DynamoDB
AWS.config.update({
    region: 'us-east-1',
    // endpoint: 'dynamodb.us-east-1.amazonaws.com',
    accessKeyId: config.awsAccessKeyId, // update your accessKeyId here!!!!This will be available after creating the IAM role
    secretAccessKey: config.awsSecretAccessKey// update your secretAccessKey here(DONOT FORGET TO NOTE THESE TWO)
})
console.log(config.awsAccessKeyId)
const dbClient = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES({
    region: 'us-east-1',
    smtp: {
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 587,
        auth: {
            user: config.sesAccessKeyId, //This comes when u create a smtp
            pass: config.sesSecretAccessKey
        }
    }
})

const BookAppointment = ({ user, signOut }) => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const phoneRef = useRef();
    const ageRef = useRef();
    const hospitalsRef = useRef();
    const serviceRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    console.log(config.sesAccessKeyId)

    const _email = user['signInDetails']['loginId']

    const hospitals = [
        { value: 'Yashoda', label: 'Yashoda' },
        { value: 'Care', label: 'Care' },
        { value: 'Apollo', label: 'Apollo' },
        { value: 'Kims', label: 'Kims' },
        { value: 'Virinchi', label: 'Virinchi' }
    ];

    const services = [
        { value: 'General Checkup', label: 'General Checkup' },
        { value: 'Dental', label: 'Dental' },
        { value: 'Pediatrics', label: 'Pediatrics' },
        { value: 'Orthopedics', label: 'Orthopedics' },
        { value: 'Cardiology', label: 'Cardiology' }
    ];

    const submitForm = async (e) => {
        e.preventDefault();
        const _name = nameRef.current.value;
        const _phone = phoneRef.current.value;
        const _age = ageRef.current.value;
        const _hospitals = hospitalsRef.current.value;
        const _service = serviceRef.current.value;
        const _date = dateRef.current.value;
        const _time = timeRef.current.value;
        const appointmentId = uuidv4();
        // DynamoDB params
        const dbParams = {
            TableName: 'mail-ses-table', //This is the name of the table that you created in dynamo DB
            Item: {
                ID: appointmentId,
                name: _name,
                phone: _phone,
                age: _age,
                email: _email,
                hospitals: _hospitals,
                service: _service,
                date: _date,
                time: _time
            }
        };

        try {
            // Put item into DynamoDB
            await dbClient.put(dbParams).promise();

            // SES email params with details
            const emailParams = {
                Source: 'mucharlahrishitha24@gmail.com',
                Destination: {
                    ToAddresses: [_email]
                },
                Message: {
                    Subject: {
                        Data: 'Appointment Booking'
                    },
                    Body: {
                        Html: {
                            Data: `
                                <h1>Thank you for booking an appointment</h1>
                                <p>Here are the details you provided:</p>
                                <ul>
                                    <li><strong>Name:</strong> ${_name}</li>
                                    <li><strong>Phone:</strong> ${_phone}</li>
                                    <li><strong>Age:</strong> ${_age}</li>
                                    <li><strong>Email:</strong> ${_email}</li>
                                    <li><strong>Hospitals:</strong> ${_hospitals}</li>
                                    <li><strong>Service:</strong> ${_service}</li>
                                    <li><strong>Date:</strong> ${_date}</li>
                                    <li><strong>Time:</strong> ${_time}</li>
                                </ul>
                                <p>We shall contact you soon.</p>
                            `
                        }
                    }
                }
            };

            // Send email via SES
            await ses.sendEmail(emailParams).promise();
            console.log("Email sent successfully");
            navigate('/success');

        } catch (err) {
            console.log("this is new error", err)
            console.error("Error", err);
        }
    };

    return (
        <div>
            <LoginNavbar signOut={signOut} />
            <div className='main'>
                <section className="container">
                    <section className="form-container">
                        <h2>Book your Appointment</h2>
                        <form onSubmit={submitForm}>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                ref={nameRef}
                            />
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                ref={phoneRef}
                            />
                            <input
                                type="number"
                                placeholder="Enter your age"
                                ref={ageRef}
                            />
                            {/* <input
                            type="email"
                            placeholder="Enter your email"
                            ref={emailRef}
                        /> */}
                            <Select
                                options={hospitals}
                                selectRef={hospitalsRef}
                                placeholder="Select your hospital"
                            />
                            <Select
                                options={services}
                                selectRef={serviceRef}
                                placeholder="Select the service"
                            />
                            <input type="date" ref={dateRef} />
                            <input type="text" ref={timeRef} placeholder="Enter your Preferred Time(Eg.: 5:30 AM)" />
                            <button type="submit" className="submit">Submit</button>
                        </form>
                    </section>
                </section>
            </div>
            <footer className="footer">
                <p>&copy; 2024 MediConnect. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BookAppointment;