import React, { useEffect } from 'react';
import { Authenticator, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/homePage'); 
    }
  }, [user, navigate]);
  return (
    <Authenticator />
  );
}

export default withAuthenticator(Login);
