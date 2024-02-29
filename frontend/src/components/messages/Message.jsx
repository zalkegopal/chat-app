import React from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime.js";

const Message = ({ messageData }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const fromMe = messageData.senderId === authUser._id;
  const formattedTime = extractTime(messageData.createdAt);
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = messageData.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="user avatar" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}`}>
        {messageData.message}
      </div>
      <div className="chat-footer opacity-50 text-gray-500 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
