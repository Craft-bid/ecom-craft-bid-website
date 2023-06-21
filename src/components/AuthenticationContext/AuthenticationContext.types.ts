import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AuthenticationContextProviderProps {
  children: ReactNode;
}

export interface AuthenticationContextProps {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  name: string | null;
  setName: Dispatch<SetStateAction<string | null>>;
  id: number | null;
  setId: Dispatch<SetStateAction<number | null>>;
  role: string | null;
  setRole: Dispatch<SetStateAction<string | null>>;
}
