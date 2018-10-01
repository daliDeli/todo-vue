import axios from 'axios';

const URL = 'http://localhost:80/';

export const loginUser = (email, password) => axios.post(`${URL}api/auth/login`, { email, password });

export const createTodo = (title, completed) => axios.post(`${URL}api/todos`, { title, completed });

