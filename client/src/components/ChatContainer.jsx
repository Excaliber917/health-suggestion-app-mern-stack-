import { useEffect, useRef } from 'react';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import { useGetConversation } from '../hooks/useGetConversation';
import { useMsgContext } from '../context/MessageContext';



function ChatContainer() {
  const { loading, getConversation } = useGetConversation();
  const { messages } = useMsgContext();
  const lastResponse = useRef(null);



  useEffect(() => {
    getConversation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    lastResponse.current?.scrollIntoView({ behavior: 'smooth' });
    lastResponse.current = null
  }, [messages]);

  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-100"  >
      {!loading ? messages.map((msg, index) =>
        msg.sender === 'user' ? (
          <div key={index} ref={lastResponse}>
            <SenderMessage message={msg.text} />
          </div>
        ) : (
          <ReceiverMessage key={index} message={msg.text} />
        )
      ) : 'loading'}
    </div>
  );
}

export default ChatContainer;
