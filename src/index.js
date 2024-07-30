// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import HomePage from './components/Homepage';
import BookAppointment from './components/BookAppointment';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import UserAppointments from './components/UserAppointments';
import SuccessPage from './components/SuccessPage';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import './index.css';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("e7c23664603f92d51fe85a6168057dc9", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});



// Configure Amplify
Amplify.configure(awsExports);

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homePage",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/bookAppointment",
    element: (
      <ProtectedRoute>
        <BookAppointment />
      </ProtectedRoute>
    ),
  },
  {
    path: "/userAppointment",
    element: (
      <ProtectedRoute>
        <UserAppointments />
      </ProtectedRoute>
    ),
  },
  {
    path: "/success",
    element: (
      <ProtectedRoute>
        <SuccessPage />
      </ProtectedRoute>
    ),
  }
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
