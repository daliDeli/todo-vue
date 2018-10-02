import axios from 'axios';

const URL = 'http://localhost:80/';

export const loginUser = (email, password) => axios.post(`${URL}api/auth/login`, { email, password });

export const sendTodo = (title, completed) => axios({
  method: 'post',
  url: `${URL}api/todos`,
  data: { title, completed },
  headers: {
    authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
  },
});

export const getAllTodos = () => axios({
  method: 'get',
  url: `${URL}/api/todos`,
  headers: {
    authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
  },
});

export const updateTodo = (id, todo) => axios({
  method: 'patch',
  url: `${URL}api/todos/${id}`,
  data: {
    ...todo,
    completed: 1,
  },
  headers: {
    authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
  },
});

export const deleteTodo = id => axios({
  method: 'delete',
  url: `${URL}/api/todos/${id}`,
  headers: {
    authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
  },
});
