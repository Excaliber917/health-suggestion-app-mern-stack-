import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function ReceiverMessage({ message }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + message[currentIndex]);
      currentIndex++;
      // eslint-disable-next-line react/prop-types
      if (currentIndex >= message.length) {
        clearInterval(interval);
      }
    }, 30); // Adjust the delay as needed (50ms for each character)

    return () => clearInterval(interval); // Cleanup interval on unmount or when message changes
  }, [message]);

  const formattedText = displayedText.split('\n').map((part, index) => (
    <span key={index}>
      {part.includes('##') ? <b>{part.replace('##', '')}</b> : part}
      <br />
    </span>
  ));

  // console.log(typeof formattedText)

  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-300 text-black p-3 rounded-lg w-fit">
        {formattedText}
      </div>
    </div>
  );
}

export default ReceiverMessage;
