import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../styles/CometChatLogin/CometChatLogin.css';
import {IModel} from "./model";

export const Controller = (): IModel => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const isDarkMode = document.querySelector('[data-theme="dark"]') ? true : false;

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost/dashboard/api/auth/login', {
                email,
                password
            });

            console.log('Server response:', response.data);
            setMessage('Success! You are login.');

            const accessToken = response.data.data.accessToken;
            localStorage.setItem('accessToken', accessToken);

            const user = await axios.get("https://localhost/dashboard/api/auth/me",
                {
                    headers: {
                        accessToken: accessToken,
                    }
                })

            const userData = user.data.data.user;
            localStorage.setItem('authState', JSON.stringify(userData)); // Save user info

            // navigate('/chat');

        } catch (error) {
            console.error('Error:', error);
            if (axios.isAxiosError(error)) {
                console.error('Axios error response:', error.response);
            }
            navigate('/landing');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return {
        isDarkMode,
        password,
        email,
        message,
        handleSubmit,
        setEmail,
        setPassword
    }

}