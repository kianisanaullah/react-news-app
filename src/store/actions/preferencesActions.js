// preferencesActions.js

import axios from 'axios';

// Action types
const FETCH_USER_PREFERENCES_SUCCESS = 'FETCH_USER_PREFERENCES_SUCCESS';
const FETCH_USER_PREFERENCES_FAILURE = 'FETCH_USER_PREFERENCES_FAILURE';
const SAVE_USER_PREFERENCES_SUCCESS = 'SAVE_USER_PREFERENCES_SUCCESS';
const SAVE_USER_PREFERENCES_FAILURE = 'SAVE_USER_PREFERENCES_FAILURE';

// Action creators
export const fetchUserPreferences = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/preferences', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const userPreferences = response.data.preferences || { sources: [], categories: [], authors: [] };
        dispatch({ type: FETCH_USER_PREFERENCES_SUCCESS, payload: userPreferences });
    } catch (error) {
        dispatch({ type: FETCH_USER_PREFERENCES_FAILURE, payload: error.message });
        console.error('Failed to fetch user preferences:', error);
    }
};

export const saveUserPreferences = (preferences) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/api/save-preferences', preferences, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('resp',response);
        dispatch({ type: SAVE_USER_PREFERENCES_SUCCESS, payload: response.data.message });
    } catch (error) {
        dispatch({ type: SAVE_USER_PREFERENCES_FAILURE, payload: error.message });
        console.error('Failed to save user preferences:', error);
    }
};
