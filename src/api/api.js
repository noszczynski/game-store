import axios from "axios";

const apiUrl = "http://localhost:1337";

const PAGES = {
  GAMES: apiUrl + "/games-page",
  SEARCH: apiUrl + "/search-page",
  PROFILE: apiUrl + "/profile-page",
};

const api = {
  games: apiUrl + "/games",
  users: apiUrl + "/users",
  auth: apiUrl + "/auth/local",
  premiere: apiUrl + "/welcome-news-page",
};

const getToken = () => {
  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");

  if (sessionToken) return sessionToken;
  else if (localToken) return localToken;
  else return null;
};

const getAuthHeaders = (data) => {
  return {
    ...data,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
};

const getSiteData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

const getGames = async () => {
  const result = await axios.get(api.games);
  return result.data;
};

const getUsers = async () => {
  const result = await axios.get(api.users, getAuthHeaders());
  return result.data;
};

const getGame = async (id) => {
  const result = await axios.get(`${api.games}/${id}`, getAuthHeaders());
  return result.data;
};

const getPremiereNews = async () => {
  const result = await axios.get(api.premiere);
  return result.data;
};

const authUser = async (email, password) => {
  const result = await axios.post(api.auth, {
    identifier: email,
    password: password,
  });
  return result.data;
};

export {
  apiUrl,
  api,
  PAGES,
  getGames,
  getGame,
  getUsers,
  authUser,
  getSiteData,
  getPremiereNews,
};
