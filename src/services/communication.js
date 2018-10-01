import axios from 'axios';

const URL = 'http://localhost:80/';

export const loginUser = (email, password) => axios.post(`${URL}api/auth/login`, { email, password });

// export const createTodo = (title, completed) => axios.post(`${URL}api/todos`, { title, completed });

export const createTodo = (title, completed) => axios({
  method: 'post',
  url: `${URL}api/todos`,
  data: { title, completed },
  headers: {
    authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
  },
});
// i should send also a user that created this todo
