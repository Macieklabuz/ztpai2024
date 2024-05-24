import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from '../css/LoginForm.module.css'; // Zakładam, że używasz modułów CSS

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [credentialsError, setCredentialsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/login",
                {
                    email,
                    password
                });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate("/");
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setErrorMessage('Incorrect username or password');
                setCredentialsError(true);
            } else {
                setErrorMessage('Login error, try later');
            }
        }
    }

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <input
                className={`${styles.textInputLogin} ${credentialsError ? styles.error : ''}`}
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your Email'
            />
            <input
                className={`${styles.textInputLogin} ${credentialsError ? styles.error : ''}`}
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button className={styles.logInButton} type='submit'>Log in</button>
        </form>
    );
};

export default LoginForm;
