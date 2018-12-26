import axios from 'axios'

export const setAxiosDefaults = (token, name) => {
    axios.defaults = {
        baseURL: 'https://api.github.com',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'User-Agent' : name,
            // 'Content-Type': 'application/json',
            'Authorization': token !== null && token !== undefined && `Bearer ${token}`
        }
    }
}