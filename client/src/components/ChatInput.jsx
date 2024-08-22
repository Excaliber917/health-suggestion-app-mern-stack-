import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useSendMessage } from '../hooks/useSendMessage';

function ChatInput() {
    const [inputValue, setInputValue] = useState('');


    const { sendMessage } = useSendMessage()
    const handleSend = () => {
        if (inputValue.trim()) {
            //   onSendMessage(inputValue);
            // console.log(inputValue)
            sendMessage(inputValue)
            setInputValue(''); // Clear input after sending
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission if inside a form
            handleSend();
        }
    }

    return (
        <div className='flex flex-col p-3 justify-center bg-gray-100 items-center '>
            <div className="flex w-full px-20  bg-gray-100">
                <input
                    type="text"
                    className="flex-1 p-2 border shadow-md border-gray-300 rounded-l-lg bg-gray-100 focus:outline-none"
                    placeholder="Type your message..."
                    value={inputValue}
                    onKeyDown={handleKey}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-pink-600 flex items-center justify-center  w-12 text-white rounded-r-lg hover:bg-pink-800 focus:outline-none"
                >
                    <FaPaperPlane />
                </button>
            </div>
            <p className='text-slate-600'>sometimes even Doctors can be wrong !!</p>
        </div>
    );
}

export default ChatInput;
