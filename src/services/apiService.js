import axios from 'axios';
import { format } from 'util';

const ENDPOINTS = {
  TODOS: '/todos',
  SINGLE_TODO: '/todos/%s',
};

axios.defaults.baseURL = 'http://localhost:80/api';
axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('access_token')}`;

export const loginUser = (email, password) =>
  axios.post('/auth/login', { email, password })
    .then(({ data }) => {
      axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      return data;
    });

export const getAllTodos = () => axios.get(ENDPOINTS.TODOS);

export const sendTodo = (title, completed) => axios.post(
  ENDPOINTS.TODOS,
  { title, completed },
);

export const updateTodo = (id, todo) => axios.patch(
  format(ENDPOINTS.SINGLE_TODO, id),
  {
    ...todo,
    completed: true,
  },
);

export const deleteTodo = id => axios.delete(
  format(ENDPOINTS.SINGLE_TODO, id),
);
