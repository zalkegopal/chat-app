import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );
        setMessages(res.data);
      } catch (error) {
        console.log('Error fetching messages: ', error.message)
        toast.error("Could not get messages");
      } finally {
        setLoading(false);
      }
    };

    if(selectedConversation?._id) getMessages();

  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
