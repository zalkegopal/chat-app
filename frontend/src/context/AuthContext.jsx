import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const chatUser = JSON.parse(localStorage.getItem("chat-user"));
  const [authUser, setAuthUser] = useState(chatUser || null);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
