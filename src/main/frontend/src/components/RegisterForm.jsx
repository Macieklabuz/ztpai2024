import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputField = styled.div`
    margin-bottom: 15px;
    width: 100%;
`;

const Input = styled.input`
    width: calc(100% - 20px);
    padding: 15px;
    font-size: 1.2rem;
`;

const Button = styled.button`
    width: 104%;
    padding: 15px;
    font-size: 1.2rem;
    background-color: #2FD1C5;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-left: auto;
`;

const Spacing = styled.div`
    margin-top: 10px;
`;

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Obsługa wysyłania formularza rejestracji
            console.log('Email:', email);
            console.log('First Name:', firstName);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
        } catch (error) {
            console.error('Registration error:', error);
            // Obsługa błędów rejestracji
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputField>
                <label htmlFor="email" className="field_name">Your Email</label>
                <Input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputField>
            <InputField>
                <label htmlFor="firstName" className="field_name">Your First Name</label>
                <Input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </InputField>
            <InputField>
                <label htmlFor="password" className="field_name">Password</label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputField>
            <InputField>
                <label htmlFor="confirmPassword" className="field_name">Confirm Password</label>
                <Input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </InputField>
            <Button type="submit">Register</Button>
        </StyledForm>
    );
};

export default RegisterForm;
