import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const DadJokes = () => {
    const [ credentials, setCredentials ] = useState({})
    const [jokes, setJokes ] = useState([]);

    const onChangeHandler = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const loadJokes = () => {
        axiosWithAuth()
        .get('http://localhost:3300/api/jokes')
        .then(res => {
            console.log(res)
            setJokes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <>
        <h3>Dad Jokes</h3>
    {jokes.map(jokes => <h3 key={jokes.id}>{jokes.joke}</h3>)}
        <button onClick={loadJokes}>Get Jokes</button>
        </>
    )
}

export default DadJokes;