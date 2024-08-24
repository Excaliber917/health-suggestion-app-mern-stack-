

// eslint-disable-next-line react/prop-types
function ReceiverMessage({ message }) {


  const formattedText = message?.split('\n').map((part, index) => (
    <span key={index}>
      {part.includes('**') ? <b>{part.replace('**', '')}</b> : part}
      <br />
    </span>
  ));

  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-300 text-black p-3 rounded-lg w-fit">
        {formattedText}
      </div>
    </div>
  );
}

export default ReceiverMessage;
