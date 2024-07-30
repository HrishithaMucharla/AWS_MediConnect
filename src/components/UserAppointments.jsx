// import React, { useEffect, useState } from 'react';
// import * as AWS from 'aws-sdk';
// import config from '../config';

// // Configure AWS SDK for DynamoDB
// AWS.config.update({
//     region: 'us-east-1',
//     accessKeyId: config.awsAccessKeyId,
//     secretAccessKey: config.awsSecretAccessKey
// });

// const dbClient = new AWS.DynamoDB.DocumentClient();

// const UserAppointments = ({ user }) => {
//     const [appointments, setAppointments] = useState([]);

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const email = user.signInDetails.loginId;
//             const params = {
//                 TableName: 'mail-ses-table',
//                 FilterExpression: 'email = :email',
//                 ExpressionAttributeValues: {
//                     ':email': email
//                 }
//             };

//             try {
//                 const data = await dbClient.scan(params).promise();
//                 setAppointments(data.Items);
//             } catch (error) {
//                 console.error("Error querying DynamoDB", error);
//                 setAppointments([]);
//             }
//         };

//         fetchAppointments();
//     }, [user]);

//     return (
//         <div>
//             <h2>Your Appointments</h2>
//             <ul>
//                 {appointments.map((appointment, index) => (
//                     <li key={index}>
//                         <strong>Name:</strong> {appointment.name}<br />
//                         <strong>Phone:</strong> {appointment.phone}<br />
//                         <strong>Age:</strong> {appointment.age}<br />
//                         <strong>Email:</strong> {appointment.email}<br />
//                         <strong>Hospital:</strong> {appointment.hospitals}<br />
//                         <strong>Service:</strong> {appointment.service}<br />
//                         <strong>Date:</strong> {appointment.date}<br />
//                         <strong>Time:</strong> {appointment.time}<br />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserAppointments;



import React, { useEffect, useState } from 'react';
import * as AWS from 'aws-sdk';
import config from '../config';
import LoginNavbar from './loginNavbar';
import { signOut } from 'aws-amplify/auth';

// Configure AWS SDK for DynamoDB
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: config.awsAccessKeyId,
    secretAccessKey: config.awsSecretAccessKey
});

const dbClient = new AWS.DynamoDB.DocumentClient();

const UserAppointments = ({ user,signOut }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const email = user.signInDetails.loginId;
            const params = {
                TableName: 'mail-ses-table',
                FilterExpression: 'email = :email',
                ExpressionAttributeValues: {
                    ':email': email
                }
            };

            try {
                const data = await dbClient.scan(params).promise();
                setAppointments(data.Items);
            } catch (error) {
                console.error("Error querying DynamoDB", error);
                setAppointments([]);
            }
        };

        fetchAppointments();
    }, [user]);

    return (
        <div>
            <LoginNavbar signOut={signOut}/>
            <div className="appointments-container">
                <h2>Your Appointments</h2>
                <div className="appointments-grid">
                    {appointments.map((appointment, index) => (
                        <div key={index} className="appointment-card">
                            <strong>Name:</strong> {appointment.name}<br />
                            <strong>Phone:</strong> {appointment.phone}<br />
                            <strong>Age:</strong> {appointment.age}<br />
                            <strong>Email:</strong> {appointment.email}<br />
                            <strong>Hospital:</strong> {appointment.hospitals}<br />
                            <strong>Service:</strong> {appointment.service}<br />
                            <strong>Date:</strong> {appointment.date}<br />
                            <strong>Time:</strong> {appointment.time}<br />
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2024 MediConnect. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default UserAppointments;
