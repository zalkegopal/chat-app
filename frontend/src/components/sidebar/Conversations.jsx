import { Toaster } from "react-hot-toast";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis.js";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.length &&
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
      {loading && <span className="loading loading-spinner"></span>}
      <Toaster />
    </div>
  );
};

export default Conversations;
