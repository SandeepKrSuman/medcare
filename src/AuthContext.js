import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  const [userType, setUserType] = useState(() => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        return decodedToken.userType || null;
      } catch (err) {
        return null;
      }
    } else {
      return null;
    }
  });

  const [showLoader, setLoader] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("error");

  return (
    <AuthContext.Provider
      value={{
        userType,
        setUserType,
        showLoader,
        setLoader,
        showAlert,
        setAlert,
        alertMsg,
        setAlertMsg,
        alertType,
        setAlertType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
