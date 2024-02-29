import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/auth/logout");
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error("Error: ", error.message);
    } finally {
      toast.success('Logged out successfully!')
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
