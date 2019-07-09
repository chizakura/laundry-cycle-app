// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const JWT_TOKEN = localStorage.getItem('token');

const api = axios.create({
    baseURL: 'http://localhost:4567',
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`
    }
})

export const login = async (data) => {
    try {
        const res = await api.post('/auth/login', data);
        const {data: {token, user}} = res;

        localStorage.setItem('token', token);
        return user
    } catch (err) {
        throw err
    }
}