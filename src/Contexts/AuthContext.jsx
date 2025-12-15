import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userDetail")) || null
  );

  const login = async (data) => {
    const res = await AuthService.login(data);
    if (res != null) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("userDetail", JSON.stringify(res.userDetail));
      setUser(res.userDetail);
      navigate("/dashboard");
    } else {
      throw new Error(res.message);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
