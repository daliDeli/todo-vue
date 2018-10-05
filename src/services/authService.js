const ACCESS_TOKEN = 'access_token';

export const isAuthenticated = () => sessionStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (token) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export const removeAccessToken = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
};
