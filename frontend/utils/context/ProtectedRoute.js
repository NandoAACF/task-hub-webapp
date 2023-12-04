import { useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    // If the user is not logged in, redirect to the login page
    if (!userInfo.isLoggedIn) {
      router.push('/login'); // Change '/login' to your actual login page
    }
  }, [userInfo, router]);

  // If the user is logged in, render the protected page
  return userInfo.isLoggedIn ? <>{children}</> : null;
};

export default ProtectedRoute;