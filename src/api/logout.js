const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.replace("/start");
};

export default logout;
