import axios from 'axios';

const ENDPOINTS = { all: '/todos' };

axios.defaults.baseURL = 'http://localhost:80/api';
axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('access_token')}`;

export const loginUser = (email, password) =>
  axios.post('/auth/login', { email, password })
    .then(({ data }) => {
      axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      return data;
    });

export const getAllTodos = () => axios.get(ENDPOINTS.all);

export const sendTodo = (title, completed) => axios.post(
  ENDPOINTS.all,
  { title, completed },
);

export const updateTodo = (id, todo) => axios.patch(
  `${ENDPOINTS.all}/${id}`,
  {
    ...todo,
    completed: true,
  },
);

export const deleteTodo = id => axios.delete(`${ENDPOINTS.all}/${id}`);
