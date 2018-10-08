import axios from 'axios';

const TODOS = '/todos';

axios.defaults.baseURL = 'http://localhost:80/api';
axios.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('access_token')}`;

// const instance = axios.create({
//   baseURL: 'http://localhost:80/api',
//   headers: {
//     authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
//   },
// });

export const loginUser = (email, password) =>
  axios.post('/auth/login', { email, password })
    .then(({ data }) => {
      axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      // instance.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      return data;
    });

export const getAllTodos = () => axios.get(TODOS);

export const sendTodo = (title, completed) => axios.post(
  TODOS,
  { title, completed },
);

export const updateTodo = (id, todo) => axios.patch(
  `${TODOS}/${id}`,
  {
    ...todo,
    completed: true,
  },
);

export const deleteTodo = id => axios.delete(`${TODOS}/${id}`);
