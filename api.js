import dotenv from 'dotenv';
dotenv.config();

import fetch from 'node-fetch';

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret



const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa( client_id + ':' + client_secret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();

    return data.access_token;
}

const getUserProfile = async (token, username) => {

    const response = await fetch(`https://api.spotify.com/v1/users/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json', 
            'Accept': 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    });
    
    const data = await response.json();
    return data;
}


export { getToken, getUserProfile }