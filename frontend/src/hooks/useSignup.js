import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (userInputs) => {
    const success = handleInputErros(userInputs);

    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signup", userInputs);
      console.log("res", res);
      // localStorage
      localStorage.setItem("chat-user", JSON.stringify(res.data));
      // context
      setAuthUser(res.data);
    } catch (error) {
      toast.error("Signup failed.", error.message);
      setLoading(false);
    } finally {
      console.log("useSignup finnalyy");
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErros({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please enter all fields");
    return false;
  }

  if (password !== confirmPassword) {
    console.log("Password and ConfirmPassword doesn't match.");
    toast.error("Password and ConfirmPassword doesn't match.");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;
  }

  return true;
}
