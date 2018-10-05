import axios from 'axios';

const URL = 'http://localhost:80/api';

const instance = axios.create({
  baseURL: `${URL}/todos`,
  headers: {
    authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
  },
});

export const loginUser = (email, password) =>
  axios.post(`${URL}/auth/login`, { email, password })
    .then(({ data }) => {
      instance.defaults.headers.common.authorization = `Bearer ${data.access_token}`;
      return data;
    });

export const sendTodo = (title, completed) => instance({
  method: 'post',
  data: { title, completed },
});

export const getAllTodos = () => instance({
  method: 'get',
});

export const updateTodo = (id, todo) => instance({
  method: 'patch',
  url: `/${id}`,
  data: {
    ...todo,
    completed: 1,
  },
});

export const deleteTodo = id => instance({
  method: 'delete',
  url: `/${id}`,
});
