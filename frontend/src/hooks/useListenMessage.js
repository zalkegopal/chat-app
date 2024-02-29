import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notification from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { messages, setMessages } = useConversation();
  const { socket } = useSocketContext();

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(notification);
        sound.play();
        setMessages([...messages, newMessage]);
      });
    }

    return () => socket.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
