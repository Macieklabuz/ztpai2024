import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from '../css/RegisterForm.module.css';

function RegisterForm() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate();

    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');
    const [errorMessageRepeat, setErrorMessageRepeat] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepeat, setErrorRepeat] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    function isValidEmail() {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(email);
    }

    function arePasswordsTheSame() {
        return password === repeatPassword;
    }

    function isPasswordStrongEnough() {
        return password.length > 5;
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        let hasError = false;

        if (!isValidEmail()) {
            setErrorMessageEmail('Incorrect email');
            setErrorEmail(true);
            hasError = true;
        } else {
            setErrorMessageEmail('');
            setErrorEmail(false);
        }

        if (!isPasswordStrongEnough()) {
            setErrorMessagePassword('Password must be longer than 5 characters');
            setErrorPassword(true);
            hasError = true;
        } else {
            setErrorMessagePassword('');
            setErrorPassword(false);
        }

        if (!arePasswordsTheSame()) {
            setErrorMessageRepeat('The passwords are not the same');
            setErrorRepeat(true);
            hasError = true;
        } else {
            setErrorMessageRepeat('');
            setErrorRepeat(false);
        }

        if (hasError) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/auth/signup", {
                email,
                password,
                name,
                surname
            });

            localStorage.setItem('register', "Registered successfully");
            navigate("/login");
        } catch (error) {
            setErrorMessage("Registration failed, try later");
        }
    }

    return (
        <form className={styles.registerForm} onSubmit={submitHandler}>
            {errorMessage && <b className={styles.errorMessage}>{errorMessage}</b>}

            {errorMessageEmail && <b className={styles.errorMessage}>{errorMessageEmail}</b>}
            <input
                className={`${styles.textInputRegister} ${errorEmail ? styles.error : ''}`}
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
            />

            {errorMessagePassword && <b className={styles.errorMessage}>{errorMessagePassword}</b>}
            <input
                className={`${styles.textInputRegister} ${errorPassword ? styles.error : ''}`}
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />

            {errorMessageRepeat && <b className={styles.errorMessage}>{errorMessageRepeat}</b>}
            <input
                className={`${styles.textInputRegister} ${errorRepeat ? styles.error : ''}`}
                type='password'
                name='repeatPassword'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder='Repeat Password'
            />

            <input
                className={styles.textInputRegister}
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
            />

            <input
                className={styles.textInputRegister}
                type='text'
                name='surname'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder='Surname'
            />

            <button className={styles.registerButton} type='submit'>Register</button>
        </form>
    );
}

export default RegisterForm;
