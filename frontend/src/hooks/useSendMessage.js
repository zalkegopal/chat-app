import { useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
import axios from 'axios';

const useSendMessage = () => {
    const [loading, setLoading] = useState();
    const { messages, setMessages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await axios.post(`/api/messages/send/${selectedConversation._id}`, { message });
            console.log('setMessages-', res)
            setMessages([...messages, res.data]);
        } catch (error) {
            toast.error('Error sending message', error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, sendMessage};
};

export default useSendMessage;