import { AuthProvider, UserIdentity } from 'react-admin';
import { loginUser } from '../services/authService';
import { LoginFormDTO } from '../components/LoginForm/LoginForm.types';
import jwt_decode from 'jwt-decode';

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    localStorage.removeItem('token');
    const loginDTO: LoginFormDTO = {
      email: username,
      password: password,
    };
    return loginUser(loginDTO).then((response) => {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      const { email, role } = jwt_decode(token);
      if (role !== 'ADMIN') {
        throw new Error('Unauthorized user!');
      }
    });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { email, role } = jwt_decode(localStorage.getItem('token'));
      const ret: UserIdentity = {
        fullName: email,
        id: email,
        avatar: '',
        role: role,
      };
      return Promise.resolve(ret);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('token');
      return Promise.reject({ message: false });
    }
    const { email, role } = jwt_decode(token);
    return role === 'ADMIN' ? Promise.resolve() : Promise.reject({ message: false });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject({ message: false });
      //return Promise.reject({ message: 'Unauthorized user!' });
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getPermissions: () => {
    return Promise.resolve();
  },
};
