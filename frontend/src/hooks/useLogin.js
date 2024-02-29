import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErros(username, password);

    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", { username, password });
      console.log("res", res);
      // localStorage
      localStorage.setItem("chat-user", JSON.stringify(res.data));
      // context
      setAuthUser(res.data);
    } catch (error) {
      toast.error("Login failed.", error.message);
    } finally {
      setLoading(false);
      if (authUser) {
        toast.success("Welcome back ", res.data.fullname);
      }
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErros(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;
  }

  return true;
}
