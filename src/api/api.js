const apiUrl = "http://localhost:1337";

const api = {
  games: apiUrl + "/games",
};

// Getting games from api
const getGames = () => {
  return fetch(api.games).then((response) => {
    return response.json();
  });
};

export { apiUrl, api, getGames };
