const ACCESS_TOKEN = 'access_token';

export const isAuthenticated = () => sessionStorage.getItem(ACCESS_TOKEN);

export const approveUser = (token) => {
  sessionStorage.setItem(ACCESS_TOKEN, token);
};

export const logoutUser = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
};
