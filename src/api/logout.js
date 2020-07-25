const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.replace("/login");
};

export default logout;
