// Register.js
import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { register } from '../store/actions/authActions';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData));
    };
    const validationErrors = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.loading);
    const displayErrors = () => {
        return Object.keys(validationErrors).map((key) => (
            <div key={key} className="error-message">
                {validationErrors[key][0]}
            </div>
        ));
    };

    return (
        <div className="register">
            {loading && <div className="loader">Loading...</div>}
        <div className="register-container">
            {validationErrors && displayErrors()}
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label className="register-label">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="register-input" required />
                <label className="register-label">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="register-input" required />
                <label className="register-label">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="register-input" required />
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
        </div>
    );

};

export default Register;
