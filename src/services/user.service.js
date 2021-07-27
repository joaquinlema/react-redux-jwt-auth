import http from '../http-common';

const getPublicContent = () => {
  return http.get("all");
};

const getUserBoard = () => {
  return http.get("user");
};

const getModeratorBoard = () => {
  return http.get("mod");
};

const getAdminBoard = () => {
  return http.get("admin");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};