import { useState } from 'react';

export function useIsAuthenticated() {
  const [isAuthenticated, setAuthenticated] = useState(Boolean(localStorage.getItem('token')));

  return { isAuthenticated, setAuthenticated };
}
