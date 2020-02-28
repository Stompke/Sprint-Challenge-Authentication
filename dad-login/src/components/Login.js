import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [ credentials, setCredentials ] = useState({})

    const onChangeHandler = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = () => {
        axios
        .post('http://localhost:3300/api/auth/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <h3>Login</h3>

        <input name="username" value={credentials.username} onChange={onChangeHandler} />
        <input name="password" type='password' value={credentials.password} onChange={onChangeHandler} />
        <button onClick={loginUser}>Login</button>
        </>
    )
}

export default Login;