export const API_ENDPOINTS = {
  getUsers: () => "/users",
  createUser: () => "/users",
  deleteUser: (id: string) => `/users?id=eq.${id}`,
  updateUser: (id: string) => `/users?id=eq.${id}`,
};
