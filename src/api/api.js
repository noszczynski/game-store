import axios from "axios";

const apiUrl = "http://localhost:1337";

const api = {
  games: apiUrl + "/games",
  users: apiUrl + "/users",
  auth: apiUrl + "/auth/local",
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

const authUser = async (email, password) => {
  const result = await axios.post(api.auth, {
    identifier: email,
    password: password,
  });
  return result.data;
};

export { apiUrl, api, getGames, getGame, getUsers, authUser };
