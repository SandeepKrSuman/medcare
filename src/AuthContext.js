import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  const [userType, setUserType] = useState(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.userType || null;
    } else {
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ userType, setUserType }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
