import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

// Untuk menyimpan token di cookie dan user info di local storage
export function AuthContextProvider ({children}) {
    const [userInfo, setUserInfo] = useState(() => {
      const storedToken = Cookies.get('user_auth_token');
      if(storedToken) {
        const decodedToken = jwtDecode(storedToken);
        const tokenExpiration = new Date((decodedToken.exp ?? 0) *1000);
        if(tokenExpiration > new Date()) {
          return {
            isLoggedIn: true,
            userInfo: decodedToken
          };
        } else {
          Cookies.remove('user_auth_token');
        }
      }
      return {
        isLoggedIn: false,
        userInfo: null
      };
    });

    useEffect(() => {
      if(userInfo?.length) localStorage.setItem('user-info', JSON.stringify(userInfo));
    }, [userInfo]);
    
    const loginUser = async (data) => {
      try {
        const response = await useAxios('/auth/login', 'POST', data, false);
  
        if(response && response.data.token) {
          const decodedToken = jwtDecode(response.data.token);
          const tokenExpiration = new Date((decodedToken.exp ?? 0) * 1000);
          if(tokenExpiration > new Date()) {
            Cookies.set('user_auth_token', response.data.token, {expires: tokenExpiration});
            setUserInfo({isLoggedIn: true, userInfo: decodedToken});
          }
        }
  
        return response;
      } catch(err) {
        return null;
      }
    };
  
    const registerUser = async (data) => {
      try {
        const response = await useAxios('/auth/register', 'POST', data, false);
        return response;
      } catch(err) {
        return null;
      }
    };

    const logoutUser = () => {
      Cookies.remove('user_auth_token');
      setUserInfo({isLoggedIn: false, userInfo: null});
    };

      return (
        <AuthContext.Provider value={{userInfo, loginUser, registerUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
      )
}