import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #2FD1C5;
    color: white;
    padding: 30px 40px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1da7a0;
    }
`;

export default Button;
