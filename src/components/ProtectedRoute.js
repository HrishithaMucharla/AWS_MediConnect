import React from 'react';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';

const ProtectedRoute = ({ children }) => {
  const { user, signOut } = useAuthenticator();
  return React.cloneElement(children, { user, signOut });
};

export default withAuthenticator(ProtectedRoute);
