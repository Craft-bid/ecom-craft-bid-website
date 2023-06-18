/* eslint-disable @typescript-eslint/no-magic-numbers */
import { createContext, useEffect, useState } from 'react';
import { AuthenticationContextProps, AuthenticationContextProviderProps } from './AuthenticationContext.types';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from '../../common/types/JWTResponse.types';

export const AuthenticationContext = createContext<AuthenticationContextProps | null>(null);

export function AuthenticationContextProvider({ children }: AuthenticationContextProviderProps) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(1);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode<DecodedToken>(token) : null;

    console.log(decodedToken);
    if (token && decodedToken) {
      // Check if token is expired
      const currentTimestamp = Date.now() / 1000; // Current timestamp in seconds
      if (decodedToken.email && decodedToken.exp && decodedToken.exp > currentTimestamp) {
        // User is authenticated
        setAuthenticated(true);
        setName(decodedToken.email);
        //TODO: set actual ID from a different endpoint/or from decoded token
        setId(1);
      }
    } else {
      // User is not authenticated
      setAuthenticated(false);
    }
  }, []);

  const value: AuthenticationContextProps = {
    isAuthenticated,
    setAuthenticated,
    name,
    setName,
    id,
    setId,
  };

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
}
