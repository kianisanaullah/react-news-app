import axios from 'axios';
import { fetchUserPreferences } from './preferencesActions';
export const register = (userData) => async (dispatch) => {
    try {
       const response = await axios.post('http://localhost:8000/api/register', userData);
       localStorage.setItem('token', response.data.token);
        const user = response.data.user;
        dispatch({ type: 'REGISTER_SUCCESS', payload: { token: response.data.token, user } });

    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.errors });
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8000/api/login', userData);
        localStorage.setItem('token', response.data.token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });


        dispatch(fetchUserPreferences(response.data.token));
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
        console.error('Login failed:', error);
    }
};
export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
};
