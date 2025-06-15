import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(initialUser ? JSON.parse(initialUser) : null);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  const login = (userData) => setAuthUser(userData);
  const logout = () => setAuthUser(null);

  return (
    <AuthContext.Provider value={{ user: authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
