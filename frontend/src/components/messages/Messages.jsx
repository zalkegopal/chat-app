import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessage.js";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages]);
  
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message messageData={message} />
            </div>
          );
        })}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
