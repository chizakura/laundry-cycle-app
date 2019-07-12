// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
const BASE_URL = 'http://localhost:4567';
const JWT_TOKEN = localStorage.getItem('token');

const api = axios.create({
    baseURL: BASE_URL,
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

export const getProfile = async () => {
    try {
        const res = await api.get('/app/profile');
        const {data: {user}} = res;

        console.log(res.data);
        return user
    } catch (err) {
        throw err
    }
}

export const signUp = async (data) => {
    try {
        const res = await api.post('/auth/signup', data);
        const {data: {user, token}} = res;
        console.log(res.data);

        localStorage.setItem('token', token)
        return user
    } catch (err) {
        throw err
    }
}

export const getItems = async (id) => {
    try {
        const res = await api.get(`/users/${id}/items`);
        const {data: {items}} = res;

        return items
    } catch (err) {
        throw err
    }
}

export const getClothingItem = async (itemId) => {
    try {
        const res = await api.get(`/items/${itemId}`);
        const {data: {item}} = res;

        return item
    } catch (err) {
        throw err
    }
}

export const getWashOptions = async () => {
    try {
        const res = await api.get('/washoptions');
        const {data: {washoptions}} = res;
        
        return washoptions
    } catch (err) {
        throw err
    }
}

export const getDryOptions = async () => {
    try {
        const res = await api.get('/dryoptions');
        const {data: {dryoptions}} = res;
        
        return dryoptions
    } catch (err) {
        throw err
    }
}