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
    width: calc(100% - 20px); /* zmniejszamy szerokość inputa o 20px, aby zrobić miejsce dla marginesu */
    padding: 15px;
    font-size: 1.2rem;
`;

const Button = styled.button`
    width: 105%;
    padding: 15px;
    font-size: 1.2rem;
    background-color: #2FD1C5;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-left: auto; /* przesunięcie przycisku w prawo */
`;

const LinkButton = styled.button`
    width: 105%;
    padding: 15px;
    font-size: 1.2rem;
    background-color: transparent;
    color: #2FD1C5;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-left: auto; /* przesunięcie przycisku w prawo */
`;

const Spacing = styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Tutaj można dodać logikę wysyłania żądania logowania do serwera
            // np. za pomocą fetch lub axios
            console.log('Email:', email);
            console.log('Password:', password);
        } catch (error) {
            console.error('Login error:', error);
            // Obsługa błędów logowania
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <div className="text1" style={{ marginLeft: '20px' }}>Log in</div>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <InputField>
                <label htmlFor="email" className="field_name" style={{ marginLeft: '20px' }}>Your Email</label>
                <Input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputField>
            <InputField>
                <label htmlFor="password" className="field_name" style={{ marginLeft: '20px' }}>Password</label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputField>
            <Button type="submit">
                Log in
            </Button>
            <Spacing />
            <div style={{ marginLeft: '20px' }}>Create account</div>
            <Spacing />
            <Button type="button">
                Sign up
            </Button>
        </StyledForm>
    );
};

export default LoginForm;
